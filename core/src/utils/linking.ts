export function getAkomaNtosoElement(component: Element, selector?: string | HTMLElement): HTMLElement | null {
  if (selector) {
    return selector instanceof HTMLElement ? selector : component.ownerDocument.querySelector(selector);
  }

  // try the nearest ancestor
  let el: HTMLElement | null = component.closest('la-akoma-ntoso');

  if (!el) {
    // try the first on the page
    el = component.ownerDocument.querySelector('la-akoma-ntoso');
  }

  return el;
}

interface TargetDomChangedCallback {
  (): void;
}

/**
 * Helper class that finds an Akoma Ntoso target element on the page, and monitors it for changes.
 */
export class AkomaNtosoTarget {
  selector: string | HTMLElement | undefined;
  component: Element;
  target: HTMLElement | null;
  observer: MutationObserver | null;
  callback: TargetDomChangedCallback | null;

  constructor(
    component: Element,
    selector: string | HTMLElement | undefined,
    callback: TargetDomChangedCallback | null
  ) {
    this.component = component;
    this.selector = selector;
    this.callback = callback;
    this.target = this.findElement();

    // setup a watcher to callback if the target content changes
    if (this.target && window.MutationObserver) {
      this.observer = new MutationObserver(() => {
        this.targetDomChanged();
      });
      this.observer.observe(this.target, { childList: true });
    } else {
      this.observer = null;
    }
  }

  getElement(): HTMLElement | null {
    return this.target;
  }

  findElement(): HTMLElement | null {
    if (this.selector) {
      try {
        return this.selector instanceof HTMLElement
          ? this.selector
          : this.component.ownerDocument.querySelector(this.selector);
      } catch (e) {
        // fail on query selector errors
        console.log(e);
        return null;
      }
    }

    // try the nearest ancestor
    let el: HTMLElement | null = this.component.closest('la-akoma-ntoso');

    if (!el) {
      // try the first on the page
      el = this.component.ownerDocument.querySelector('la-akoma-ntoso');
    }

    return el;
  }

  /** The target's dom changed */
  targetDomChanged() {
    if (this.callback) this.callback();
  }
}
