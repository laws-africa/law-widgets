export function argTypesForComponent(component) {
  const argTypes = {...component.properties};

  for (const val of Object.values(argTypes)) {
    val.defaultValue = eval(val.defaultValue);
    val.description = val.docs.text;
    val.type = {
      name: val.type,
      required: val.required
    };
  }

  return argTypes;
}
