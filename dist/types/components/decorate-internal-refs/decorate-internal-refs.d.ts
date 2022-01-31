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
  componentWillLoad(): void;
  componentDidLoad(): void;
  changeFlag(flag: boolean): void;
  changePopups(popups: boolean): void;
  createPopups(): void;
  onTrigger(tippy: Tippy): void;
}
