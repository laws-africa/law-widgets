export declare function getAkomaNtosoElement(component: Element, selector?: string | HTMLElement): HTMLElement | null;
interface TargetDomChangedCallback {
  (): void;
}
/**
 * Helper class that finds an Akoma Ntoso target element on the page, and monitors it for changes.
 */
export declare class AkomaNtosoTarget {
  selector: string | HTMLElement | undefined;
  component: Element;
  target: HTMLElement | null;
  observer: MutationObserver | null;
  callback: TargetDomChangedCallback | null;
  constructor(component: Element, selector: string | HTMLElement | undefined, callback: TargetDomChangedCallback | null);
  getElement(): HTMLElement | null;
  findElement(): HTMLElement | null;
  /** The target's dom changed */
  targetDomChanged(): void;
}
export {};
