function getAkomaNtosoElement(component, selector) {
  if (selector) {
    return component.ownerDocument.querySelector(selector);
  }
  // try the nearest ancestor
  let el = component.closest('la-akoma-ntoso');
  if (!el) {
    // try the first on the page
    el = component.ownerDocument.querySelector('la-akoma-ntoso');
  }
  return el;
}

export { getAkomaNtosoElement as g };
