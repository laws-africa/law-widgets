import { Instance as Tippy } from 'tippy.js';
export declare class DecorateTerms {
  protected akomaNtosoElement?: HTMLElement | null;
  protected defnContainers: string;
  protected tippies: Tippy[];
  protected tippyContainer?: HTMLElement;
  el: HTMLElement;
  /**
   * CSS selector for the la-akoma-ntoso element and HTMLElement that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
  akomaNtoso?: string | HTMLElement;
  /**
   * If `true`, the definitions of terms will be shown as popups.
   */
  popupDefinitions: boolean;
  /**
   * If `true`, terms will be changed to `<a>` elements that jump to the term definition.
   */
  linkTerms: boolean;
  componentWillLoad(): void;
  componentDidLoad(): void;
  changePopupDefinitions(popup: boolean): void;
  setupDefinitions(): void;
  createPopups(): void;
  onTrigger(tippy: Tippy): void;
  getDefinition(reference: Element): HTMLElement | null;
  makeTermLinks(): void;
}
