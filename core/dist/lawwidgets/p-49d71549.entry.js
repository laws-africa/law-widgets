/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
import{r as t,c as a}from"./p-201891dc.js";const s="la-gutter-item{display:block}";const e=s;const c=class{constructor(s){t(this,s);this.laItemChanged=a(this,"laItemChanged",7);this.anchor=undefined;this.active=false}activeChanged(){this.laItemChanged.emit()}anchorChanged(){this.laItemChanged.emit()}onClick(){this.active=true}static get watchers(){return{active:["activeChanged"],anchor:["anchorChanged"]}}};c.style=e;export{c as la_gutter_item};
//# sourceMappingURL=p-49d71549.entry.js.map