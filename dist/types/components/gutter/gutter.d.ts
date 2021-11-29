import { GutterLayout } from "./layout";
export declare class Gutter {
  protected akomaNtosoElement?: HTMLElement | null;
  protected layout?: GutterLayout;
  protected resizeObserver?: ResizeObserver;
  protected mutationObserver?: MutationObserver;
  protected debounceDelay: number;
  protected queueLayout: any;
  /**
   * CSS selector for the la-akoma-ntoso element that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
  akomaNtoso?: string;
  el: HTMLElement;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  itemChanged(event: CustomEvent): void;
  clicked(event: MouseEvent): void;
  /**
   * Ensure all items except this one are set as inactive.
   */
  setOtherItemsInactive(activeItem: HTMLLaGutterItemElement): void;
  setupLayout(): void;
  /**
   * Layout the gutter items.
   */
  layoutItems(): Promise<void>;
  items(): NodeListOf<HTMLLaGutterItemElement>;
}
