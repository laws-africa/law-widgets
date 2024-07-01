/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
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
//# sourceMappingURL=utils.js.map
