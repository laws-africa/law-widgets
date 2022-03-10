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
   * Activates the item logically after the currently active item. The activated item's `active` property will be set to
   * true. Returns the activated item. Or returns null if there are no items. If there is no item currently
   * active, the top-most item is activated. If the currently active item is the bottom-most item in the gutter,
   * then the top-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.
   */
  @Method()
  async activateNextItem () {
    let nextActiveItem = null;
    if (this.el.querySelector('la-gutter-item[active]')) {
      const items: HTMLLaGutterItemElement[] = this.layout ? this.layout.sortItems(this.getVisibleItems()) : [];

      if (items.length === 1) {
        items[0].active = true;
        return items[0];
      } else if (items.length > 1) {
        const activeItemIndex = items.findIndex(item => item.active);
        nextActiveItem = activeItemIndex === -1 || activeItemIndex === items.length - 1
          ? items[0]
          : items[activeItemIndex + 1];
        nextActiveItem.active = true;
      }
    } else {
      nextActiveItem = this.getNextBestActiveItem(true);
    }
    return nextActiveItem;
  }

  /**
   * Activates the item logically before the currently active item. The activated item's `active` property will be set to
   * true. Returns the activated item. Or returns null if there are no items. If there is no item currently
   * active, the bottom-most item is activated. If the currently active item is the top-most item in the gutter,
   * then the bottom-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.
   */
  @Method()
  async activatePrevItem () {
    const nextActiveItem = null;
    if (this.el.querySelector('la-gutter-item[active]')) {
      const items: HTMLLaGutterItemElement[] = this.layout ? this.layout.sortItems(this.getVisibleItems()) : [];
      if (items.length === 1) {
        items[0].active = true;
        return items[0];
      } else if (items.length > 1) {
        const activeItemIndex = items.findIndex(item => item.active);
        const nextActiveItem = activeItemIndex === -1 || activeItemIndex === 0
          ? items[items.length - 1]
          : items[activeItemIndex - 1];
        nextActiveItem.active = true;
        return nextActiveItem;
      }
    } else {
      this.getNextBestActiveItem(false);
    }
    return nextActiveItem;
  }

  items (): NodeListOf<HTMLLaGutterItemElement> {
    return this.el.querySelectorAll('la-gutter-item');
  }

  getVisibleItems (): HTMLLaGutterItemElement[] {
    return [...this.items()].filter(i => i.style.display !== 'none');
  }

  getNextBestActiveItem (next: Boolean) {
    let nextActiveItem;
    const isInVp = (el: HTMLLaGutterItemElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

      );
    };
    const items: HTMLLaGutterItemElement[] = this.layout ? this.getVisibleItems() : [];
    const itemsInVp = this.layout ? this.layout.sortItems(items.filter(item => isInVp(item))) : [];
    if (itemsInVp.length) {
      nextActiveItem = itemsInVp[0];
    } else {
      nextActiveItem = next ? items[0] : items[items.length - 1];
    }

    nextActiveItem.active = true;
    return nextActiveItem;
  }
}
