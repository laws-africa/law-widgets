/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
import{r as t,c as a}from"./p-4b62d630.js";const s=class{constructor(s){t(this,s),this.laItemChanged=a(this,"laItemChanged",7),this.active=!1}activeChanged(){this.laItemChanged.emit()}anchorChanged(){this.laItemChanged.emit()}onClick(){this.active=!0}static get watchers(){return{active:["activeChanged"],anchor:["anchorChanged"]}}};s.style="la-gutter-item{display:block}";export{s as la_gutter_item}