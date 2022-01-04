export function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
/**
 * Rename element to a different HTML element, copying attributes and children.
 * @param el
 * @param name
 */
export function renameElement(el, name) {
  const newEl = document.createElement(name);
  for (let i = 0; i < el.attributes.length; i++) {
    // @ts-ignore
    newEl.setAttribute(el.attributes.item(i).nodeName, el.attributes.item(i).nodeValue);
  }
  while (el.childNodes.length) {
    newEl.appendChild(el.childNodes[0]);
  }
  if (el.parentNode) {
    el.parentNode.replaceChild(newEl, el);
  }
  return newEl;
}
