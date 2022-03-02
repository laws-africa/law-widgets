import { EventEmitter } from '../../stencil-public-runtime';
import { GutterLayout } from './layout';
export declare class Gutter {
  protected akomaNtosoElement?: HTMLElement | null;
  protected layout?: GutterLayout;
  protected resizeObserver?: ResizeObserver;
  protected mutationObserver?: MutationObserver;
  protected debounceDelay: number;
  protected queueLayout: any;
  /**
   * CSS selector or HTMLElement for the la-akoma-ntoso element that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
  akomaNtoso?: string | HTMLElement;
  el: HTMLElement;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  itemChanged(event: CustomEvent): void;
  clicked(event: MouseEvent): void;
  /**
   * Event emitted when `this.layout` has finished.
   */
  layoutComplete: EventEmitter<void>;
  /**
   * Ensure all items except this one are set as inactive.
   */
  setOtherItemsInactive(activeItem: HTMLLaGutterItemElement): void;
  setupLayout(): void;
  /**
   * Layout the gutter items.
   */
  layoutItems(): Promise<void>;
  /**
   * Activates the item logically after the currently active item. The activated item's `active` property will be set to
   * true. Returns the activated item. Or returns null if there are no items. If there is no item currently
   * active, the top-most item is activated. If the currently active item is the bottom-most item in the gutter,
   * then the top-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.
   */
  activateNextItem(): Promise<HTMLLaGutterItemElement | null>;
  /**
   * Activates the item logically before the currently active item. The activated item's `active` property will be set to
   * true. Returns the activated item. Or returns null if there are no items. If there is no item currently
   * active, the bottom-most item is activated. If the currently active item is the top-most item in the gutter,
   * then the bottom-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.
   */
  activatePrevItem(): Promise<HTMLLaGutterItemElement | null>;
  items(): NodeListOf<HTMLLaGutterItemElement>;
  getVisibleItems(): HTMLLaGutterItemElement[];
}
