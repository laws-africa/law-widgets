import { Instance as Tippy } from 'tippy.js';
export declare class DecorateInternalRefs {
  protected akomaNtosoElement?: HTMLElement | null;
  protected tippies: Tippy[];
  protected tippyContainer?: HTMLElement;
  el: HTMLElement;
  /**
   * CSS selector for the la-akoma-ntoso element or HTMLELement that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
  akomaNtoso?: string | HTMLElement;
  /**
   * If `true`, the content of internal ref targets will be shown as popups.
   */
  popups: boolean;
  /**
   * If `true`, internal refs will be flagged with in icon to be more visible.
   */
  flag: boolean;
  /** Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set. */
  fetch: boolean;
  /** Partner code to use when fetching content from Laws.Africa. Defaults to the `location.hostname`. */
  partner?: string;
  /** Provider URL for fetching content (advanced usage only). */
  provider: string;
  componentWillLoad(): void;
  componentDidLoad(): void;
  changeFlag(flag: boolean): void;
  changePopups(popups: boolean): void;
  createPopups(): void;
  onTrigger(tippy: Tippy): Promise<void>;
  fetchContent(elementId: string): Promise<string | undefined>;
  ensurePartner(): void;
}
