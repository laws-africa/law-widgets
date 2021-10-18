export function getAkomaNtosoElement (component, selector): HTMLElement | null {
  if (selector) {
    return component.ownerDocument.querySelector(selector);
  }

  // try the nearest ancestor
  let el: HTMLElement = component.closest('la-akoma-ntoso');

  if (!el) {
    // try the first on the page
    el = component.ownerDocument.querySelector('la-akoma-ntoso');
  }

  return el;
}
