export function argTypesForComponent(component: any) {
  const argTypes = { ...component.properties };

  for (const val of Object.values(argTypes)) {
    try {
      // @ts-ignore
      val.defaultValue = eval(val.defaultValue);
    } catch {
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
