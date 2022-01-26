export function getAkomaNtosoElement (component: Element, selector?: string | HTMLElement): HTMLElement | null {
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
