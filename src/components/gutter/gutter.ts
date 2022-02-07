import { Component, Element, Prop, Listen, Method, Event, EventEmitter } from '@stencil/core';
import { getAkomaNtosoElement } from '../../utils/linking';
import { GutterLayout } from './layout';
import debounce from 'lodash/debounce';

@Component({
  tag: 'la-gutter',
  styleUrl: 'gutter.scss'
})
export class Gutter {
  // The akn content element being decorated
  protected akomaNtosoElement?: HTMLElement | null;

  protected layout?: GutterLayout;
  protected resizeObserver?: ResizeObserver;
  protected mutationObserver?: MutationObserver;

  // Delay in msecs to debounce updates
  protected debounceDelay: number = 100;
  protected queueLayout: any;

  /**
   * CSS selector or HTMLElement for the la-akoma-ntoso element that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
  // TODO: should  we be watching this? What if it changes?
  @Prop() akomaNtoso?: string | HTMLElement;

  @Element() el!: HTMLElement;

  componentWillLoad () {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);

    // setup a debounced function to trigger a layout run.
    this.queueLayout = debounce(this.layoutItems.bind(this), this.debounceDelay);

    // re-run layout when child elements change
    this.mutationObserver = new MutationObserver(this.queueLayout);
    this.mutationObserver.observe(this.el, { childList: true });
  }

  componentDidLoad () {
    this.setupLayout();
    this.layoutItems();
  }

  disconnectedCallback () {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  @Listen('laItemChanged')
  itemChanged (event: CustomEvent) {
    const target: HTMLLaGutterItemElement | null = event.target as HTMLLaGutterItemElement;
    if (target && target.active) {
      // set all other items inactive. if there was a previously active item, this change will
      // trigger a new event, but the debounce will prevent an unnecessary layout.
      this.setOtherItemsInactive(target);
    }
    this.queueLayout();
  }

  @Listen('click')
  clicked (event: MouseEvent) {
    // a click in the gutter, outside of an item, deactivates all items
    const target: HTMLElement | null = event.target as HTMLElement;
    if (target && !target.closest('la-gutter-item')) {
      for (const item of this.items()) {
        item.active = false;
      }
    }
  }

  /**
   * Event emitted when `this.layout` has finished.
   */
  @Event({
    eventName: 'layoutComplete',
    composed: true,
    cancelable: true
  }) layoutComplete!: EventEmitter<void>;

  /**
   * Ensure all items except this one are set as inactive.
   */
  setOtherItemsInactive (activeItem: HTMLLaGutterItemElement) {
    for (const item of this.items()) {
      if (item != activeItem) {
        item.active = false;
      }
    }
  }

  setupLayout () {
    if (this.akomaNtosoElement) {
      this.layout = new GutterLayout(this.akomaNtosoElement);

      if (window.ResizeObserver) {
        if (this.resizeObserver) this.resizeObserver.disconnect();

        // add observer to re-layout when the containing document changes size, which implies marker positions will change
        this.resizeObserver = new ResizeObserver(this.queueLayout);
        this.resizeObserver.observe(this.akomaNtosoElement);
      }
    }
  }

  /**
   * Layout the gutter items.
   */
  @Method()
  async layoutItems () {
    if (this.layout) {
      this.layout.layout([...this.items()]);
      this.layoutComplete.emit();
    }
  }

  /**
   * Method that activates the next item of current active item. The next item's prop `active` will be true. Returns promise with
   * next active item. If there is no item active,the first item is active. If the current active item is
   * the last item in the gutter, then when activateNextItem is called, the last item will be active
   */
  @Method()
  async activateNextItem () {
    if (this.layout) {
      const items = this.layout.getSortedItems([...this.items()]);
      const activeItemIndex = items.findIndex(item => item.active);
      items.forEach(item => { item.active = false; });

      const nextActiveItem = (() => {
        // if no gutter item is active or if last gutter item is active then go to first gutter item
        if (activeItemIndex === -1 || activeItemIndex === items.length - 1) {
          return items[0];
        } else {
          // Otherwise go to next gutter item
          return items[activeItemIndex + 1];
        }
      })();

      nextActiveItem.active = true;
      return nextActiveItem;
    }
  }

  /**
   * Method that activates the previous item of current active item. The next item's prop `active` will be true. Returns promise with
   * next active item. If there is no item active,the first item is active. If the current active item is
   * the first item in the gutter, then when activateNextItem is called, the last item will be active
   */
  @Method()
  async activatePrevItem () {
    if (this.layout) {
      const items = this.layout.getSortedItems([...this.items()]);
      const activeItemIndex = items.findIndex(item => item.active);
      items.forEach(item => { item.active = false; });

      const nextActiveItem = (() => {
        switch (true) {
          // if no gutter item is active then go to first gutter item
          case activeItemIndex === -1:
            return items[0];
          case activeItemIndex === 0:
            // if first gutter item is active next go to last gutter item
            return items[items.length - 1];
          default:
            return items[activeItemIndex - 1];
        }
      })();
      nextActiveItem.active = true;
      return nextActiveItem;
    }
  }

  items (): NodeListOf<HTMLLaGutterItemElement> {
    return this.el.querySelectorAll('la-gutter-item');
  }
}
