/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
import{r as t,h as s,H as i,g as e}from"./p-4b62d630.js";import{P as o,g as n}from"./p-b1c1b811.js";const r=class{constructor(s){t(this,s),this.items=[],this.titleFilter="",this.fetch=!1,this.provider=o,this.filteredItems=null,this.innerItems=[]}parseItemsProp(t){"string"==typeof t?this.innerItems=JSON.parse(t):Array.isArray(t)&&(this.innerItems=[...t])}refetch(){this.fetchContent()}async fetchContent(){if(this.ensurePartner(),this.fetch&&this.frbrExpressionUri&&this.provider){const t=this.provider+"/p/"+this.partner+"/e/we/toc.json"+this.frbrExpressionUri,s=await fetch(t);s.ok&&(this.innerItems=(await s.json()).toc)}}ensurePartner(){this.partner||(this.partner=n())}componentWillLoad(){this.parseItemsProp(this.items),this.titleFilterChanged(this.titleFilter),this.fetchContent()}async expandAll(){Array.from(this.el.querySelectorAll("la-toc-item")).forEach((t=>{t.expanded=!0}))}async collapseAll(){Array.from(this.el.querySelectorAll("la-toc-item")).forEach((t=>{t.expanded=!1}))}titleFilterChanged(t){if(t){const e=t.toLocaleLowerCase().trim(),o=new Set;function s(t){for(const i of t.children||[])o.add(i),s(i)}function i(t){var n;let r=((null===(n=t.title)||void 0===n?void 0:n.toLocaleLowerCase())||"").includes(e);if(r)s(t);else if(t.children)for(const s of t.children)r=i(s)||r;return r&&o.add(t),r}for(const t of this.innerItems)i(t);this.filteredItems=o}else this.filteredItems=null;this.expandAll()}render(){const t=t=>{const i=t=>{var s;const i=this.el.querySelector(t);return(null==i?void 0:i.querySelector(t))?(null===(s=i.querySelector(t))||void 0===s?void 0:s.innerHTML)||"":(null==i?void 0:i.innerHTML)||""},e=i("[slot='expand-icon']"),o=i("[slot='collapse-icon']");return s("la-toc-item",{item:t,filteredItems:this.filteredItems,expandIconHtml:e,collapseIconHtml:o})};return s(i,null,s("div",{style:{display:"none"}},s("slot",{name:"expand-icon"}),s("slot",{name:"collapse-icon"})),s("div",{class:"toc-items"},this.innerItems.map((s=>t(s)))))}get el(){return e(this)}static get watchers(){return{items:["parseItemsProp"],provider:["refetch"],frbrExpressionUri:["refetch"],fetch:["refetch"],titleFilter:["titleFilterChanged"]}}};export{r as la_table_of_contents}