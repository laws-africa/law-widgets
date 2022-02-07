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
   * Activates the item logically after the currently active item. The activated item's `active` property will be set to true. Returns the
   * activated item. If there is no currently active active, the top-most item is activated. If the currently active item is
   * the bottom-most item in the gutter, then the top-most item will be activated.
   */
  @Method()
  async activateNextItem () {
    if (this.layout) {
      const items = this.layout.sortItems([...this.items()]);
      const activeItemIndex = items.findIndex(item => item.active);
      /*
      * if no gutter item is active or if last gutter item is active then go to first gutter item.
      * Otherwise go to next gutter item
      * */
      const nextActiveItem = activeItemIndex === -1 || activeItemIndex === items.length - 1
        ? items[0]
        : items[activeItemIndex + 1];

      nextActiveItem.active = true;
      return nextActiveItem;
    }
  }

  /**
   * Activates the item logically before the currently active item. The activated item's `active` property will be set to true. Returns the
   * activated item. If there is no currently active active, the bottom-most item is activated. If the currently active item is
   * the bottom-most item in the gutter, then the top-most item will be activated.
   */
  @Method()
  async activatePrevItem () {
    if (this.layout) {
      const items = this.layout.sortItems([...this.items()]);
      const activeItemIndex = items.findIndex(item => item.active);
      let nextActiveItem;
      // if no gutter item is active then go to first gutter item
      if (activeItemIndex === -1) {
        nextActiveItem = items[0];
      } else if (activeItemIndex === 0) {
        // if first gutter item is active next go to last gutter item
        nextActiveItem = items[items.length - 1];
      } else {
        nextActiveItem = items[activeItemIndex - 1];
      }
      nextActiveItem.active = true;
      return nextActiveItem;
    }
  }

  items (): NodeListOf<HTMLLaGutterItemElement> {
    return this.el.querySelectorAll('la-gutter-item');
  }
}
