import type { Instance as Tippy } from 'tippy.js';
export declare class DecorateExternalRefs {
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
   * If `true`, the content of external ref targets will be shown as popups.
   */
  popups: boolean;
  /**
   * Partner code provided by Laws.Africa. Defaults to the hostname of your website.
   */
  partner?: string;
  /**
   * Provider URL (advanced usage only).
   */
  provider: string;
  componentWillLoad(): void;
  componentDidLoad(): void;
  changePopups(popups: boolean): void;
  createPopups(): void;
  onTrigger(tippy: Tippy): Promise<void>;
  ensurePartner(): void;
  fetchContent(frbrUri: string): Promise<string | null>;
}
