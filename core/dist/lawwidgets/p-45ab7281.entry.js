/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
import{r as t,c as s,g as i}from"./p-4b62d630.js";import{d as e}from"./p-f41bd354.js";import{g as o}from"./p-a3ad4cee.js";class h{constructor(t){this.root=t,this.buffer=10,this.tops=new WeakMap,this.anchors=new WeakMap}layout(t){this.updateAnchorsAndItems(t),this.updateTops(t);const s=(t=this.sortItems(t)).find((t=>t.active));if(s){const i=t.indexOf(s);if(i>-1){const e=this.anchors.get(s);if(e){const o=this.tops.get(e);if(o)return s.style.top=`${o}px`,this.layoutUpwards(t,i-1,o-this.buffer),void this.layoutDownwards(t,i+1,o+s.clientHeight+this.buffer)}}}this.layoutDownwards(t,0,0)}sortItems(t){return[...t].sort(this.compareItems.bind(this))}compareItems(t,s){const i=this.anchors.get(t),e=this.anchors.get(s);if(i){if(e){const t=this.tops.get(i),s=this.tops.get(e);return t?s?t-s:1:-1}return 1}return-1}layoutUpwards(t,s,i){for(let e=s;e>=0;e--){const s=t[e],o=this.anchors.get(s);if(o){let t=this.tops.get(o);t&&(t+s.clientHeight>=i&&(t=i-s.clientHeight),s.style.top=`${t}px`,i=t-this.buffer)}}}layoutDownwards(t,s,i){for(let e=s;e<t.length;e++){const s=t[e],o=this.anchors.get(s);if(o){let t=this.tops.get(o);t&&(t=Math.max(i,t),s.style.top=`${t}px`,i=t+s.clientHeight+this.buffer)}}}updateAnchorsAndItems(t){this.anchors=new WeakMap;for(const s of t){const t=this.getItemAnchor(s);t&&this.anchors.set(s,t),s.style.display=t?"":"none"}}getItemAnchor(t){return t.anchor?t.anchor instanceof HTMLElement?this.root.contains(t.anchor)?t.anchor:null:this.root.querySelector(t.anchor):null}updateTops(t){this.tops=new WeakMap;for(const s of t){const t=this.anchors.get(s);t&&!this.tops.has(t)&&this.tops.set(t,this.calculateTop(t))}}calculateTop(t){let s=0,i=t;for(;i&&i!==this.root;)s+=i.offsetTop,i=i.offsetParent;return s}}const r=class{constructor(i){t(this,i),this.layoutComplete=s(this,"layoutComplete",7),this.debounceDelay=100}componentWillLoad(){this.akomaNtosoElement=o(this.el,this.akomaNtoso),this.queueLayout=e(this.layoutItems.bind(this),this.debounceDelay),this.mutationObserver=new MutationObserver(this.queueLayout),this.mutationObserver.observe(this.el,{childList:!0})}componentDidLoad(){this.setupLayout(),this.layoutItems()}disconnectedCallback(){this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect()}itemChanged(t){const s=t.target;(null==s?void 0:s.active)&&this.setOtherItemsInactive(s),this.queueLayout()}clicked(t){const s=t.target;s&&!s.closest("la-gutter-item")&&Array.from(this.items()).forEach((t=>{t.active=!1}))}setOtherItemsInactive(t){Array.from(this.items()).forEach((s=>{s!=t&&(s.active=!1)}))}setupLayout(){this.akomaNtosoElement&&(this.layout=new h(this.akomaNtosoElement),window.ResizeObserver&&(this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=new ResizeObserver(this.queueLayout),this.resizeObserver.observe(this.akomaNtosoElement)))}async layoutItems(){this.layout&&(this.layout.layout([...this.items()]),this.layoutComplete.emit())}async activateNextItem(){const t=this.layout?this.layout.sortItems(this.getVisibleItems()):[];if(1===t.length)return t[0].active=!0,t[0];if(t.length>1){const s=t.findIndex((t=>t.active)),i=-1===s||s===t.length-1?t[0]:t[s+1];return i.active=!0,i}return null}async activatePrevItem(){const t=this.layout?this.layout.sortItems(this.getVisibleItems()):[];if(1===t.length)return t[0].active=!0,t[0];if(t.length>1){const s=t.findIndex((t=>t.active)),i=-1===s||0===s?t[t.length-1]:t[s-1];return i.active=!0,i}return null}items(){return this.el.querySelectorAll("la-gutter-item")}getVisibleItems(){return[...this.items()].filter((t=>"none"!==t.style.display))}get el(){return i(this)}};r.style=".la-akoma-ntoso-with-gutter{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.la-akoma-ntoso-with-gutter la-akoma-ntoso{-ms-flex:80%;flex:80%;max-width:80%;position:relative;padding-right:0.5rem}.la-akoma-ntoso-with-gutter la-gutter{-ms-flex:20%;flex:20%;max-width:20%;position:relative;overflow-y:hidden;background-color:rgba(0, 0, 0, 0.05);padding-left:0.5rem;padding-right:0.5rem}la-gutter>la-gutter-item{position:absolute;left:1rem;width:calc(100% - 1.5rem);-webkit-transition:top ease-out 100ms, left ease-out 100ms;transition:top ease-out 100ms, left ease-out 100ms;z-index:2}la-gutter>la-gutter-item[active]{left:0.5rem}";export{r as la_gutter}