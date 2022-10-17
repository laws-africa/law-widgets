/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
function getAkomaNtosoElement(component, selector) {
  if (selector) {
    return selector instanceof HTMLElement ? selector : component.ownerDocument.querySelector(selector);
  }
  // try the nearest ancestor
  let el = component.closest('la-akoma-ntoso');
  if (!el) {
    // try the first on the page
    el = component.ownerDocument.querySelector('la-akoma-ntoso');
  }
  return el;
}
/**
 * Helper class that finds an Akoma Ntoso target element on the page, and monitors it for changes.
 */
class AkomaNtosoTarget {
  constructor(component, selector, callback) {
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
    }
    else {
      this.observer = null;
    }
  }
  getElement() {
    return this.target;
  }
  findElement() {
    if (this.selector) {
      return this.selector instanceof HTMLElement
        ? this.selector
        : this.component.ownerDocument.querySelector(this.selector);
    }
    // try the nearest ancestor
    let el = this.component.closest('la-akoma-ntoso');
    if (!el) {
      // try the first on the page
      el = this.component.ownerDocument.querySelector('la-akoma-ntoso');
    }
    return el;
  }
  /** The target's dom changed */
  targetDomChanged() {
    if (this.callback)
      this.callback();
  }
}

export { AkomaNtosoTarget as A, getAkomaNtosoElement as g };
