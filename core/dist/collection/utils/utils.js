/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
export function argTypesForComponent(component) {
  const argTypes = Object.assign({}, component.properties);
  for (const val of Object.values(argTypes)) {
    try {
      // @ts-ignore
      val.defaultValue = eval(val.defaultValue);
    }
    catch (_a) {
      // @ts-ignore
    }
    // @ts-ignore
    val.description = val.docs.text;
    // @ts-ignore
    val.type = {
      // @ts-ignore
      name: val.type,
      // @ts-ignore
      required: val.required,
    };
  }
  return argTypes;
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
