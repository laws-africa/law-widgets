/*!
 * (C) Law Widgets https://laws.africa - GNU Lesser General Public License 3
 */
import { p as proxyCustomElement, H } from './p-1883ce7c.js';
import { t as tippy } from './p-a45db3c9.js';
import { A as AkomaNtosoTarget } from './p-2d0d161b.js';
import { P as PROVIDER, g as getPartner } from './p-ea1a9a1f.js';

const decorateExternalRefsCss = ".la-decorate-external-refs__popup{position:relative}.la-decorate-external-refs__popup .tippy-box[data-animation=fade][data-state=hidden]{opacity:0}.la-decorate-external-refs__popup [data-tippy-root]{max-width:calc(100vw - 10px)}.la-decorate-external-refs__popup .tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform}.la-decorate-external-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;-webkit-transform-origin:center top;transform-origin:center top}.la-decorate-external-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;-webkit-transform-origin:center bottom;transform-origin:center bottom}.la-decorate-external-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow{right:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;-webkit-transform-origin:center left;transform-origin:center left}.la-decorate-external-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow{left:0}.la-decorate-external-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;-webkit-transform-origin:center right;transform-origin:center right}.la-decorate-external-refs__popup .tippy-box[data-inertia][data-state=visible]{-webkit-transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11);transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11)}.la-decorate-external-refs__popup .tippy-arrow{width:16px;height:16px;color:#333}.la-decorate-external-refs__popup .tippy-arrow:before{content:\"\";position:absolute;border-color:transparent;border-style:solid}.la-decorate-external-refs__popup .tippy-content{position:relative;padding:5px 9px;z-index:1}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 8, 16, 0.15);color:#333;-webkit-box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08);box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08)}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after,.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:\"\";position:absolute;z-index:-1}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:rgba(0, 8, 16, 0.2);border-width:7px 7px 0;top:17px;left:1px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:rgba(0, 8, 16, 0.2);border-width:0 7px 7px;bottom:17px;left:1px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:rgba(0, 8, 16, 0.2);border-width:7px 0 7px 7px;left:17px;top:1px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:rgba(0, 8, 16, 0.2)}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.la-decorate-external-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}.la-decorate-external-refs__popup .tippy-content{padding:0}.la-decorate-external-refs__popup .tippy-content__title{padding:0.5rem 0.75rem;margin-bottom:0;font-size:1rem;font-weight:bold;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px);background-color:#f7f7f7}.la-decorate-external-refs__popup .tippy-content__body{padding:0.5rem 0.75rem;background-color:white}.la-decorate-external-refs__popup .tippy-content la-akoma-ntoso{max-height:40vh;overflow-y:auto}";
const LaDecorateExternalRefsStyle0 = decorateExternalRefsCss;

const DecorateExternalRefs = /*@__PURE__*/ proxyCustomElement(class DecorateExternalRefs extends H {
    constructor() {
        super();
        this.__registerHost();
        this.tippies = [];
        this.akomaNtoso = undefined;
        this.popups = false;
        this.partner = undefined;
        this.provider = PROVIDER;
    }
    componentWillLoad() {
        const target = new AkomaNtosoTarget(this.el, this.akomaNtoso, () => {
            this.componentDidLoad();
        });
        this.akomaNtosoElement = target.getElement();
        this.tippyContainer = document.createElement('div');
        this.tippyContainer.className = 'la-decorate-external-refs__popup';
        document.body.appendChild(this.tippyContainer);
    }
    componentDidLoad() {
        this.changePopups(this.popups);
    }
    changePopups(popups) {
        // remove existing popups
        for (const tippy of this.tippies) {
            tippy.destroy();
        }
        this.tippies = [];
        if (this.akomaNtosoElement && popups) {
            this.createPopups();
        }
    }
    createPopups() {
        if (this.akomaNtosoElement) {
            // @ts-ignore
            this.tippies = tippy(this.akomaNtosoElement.querySelectorAll('a.akn-ref[data-href^="/akn/"]'), {
                appendTo: () => this.tippyContainer,
                allowHTML: true,
                hideOnClick: true,
                interactive: true,
                maxWidth: 450,
                onTrigger: this.onTrigger.bind(this),
                theme: 'light-border',
            });
        }
    }
    async onTrigger(tippy) {
        const frbrUri = tippy.reference.getAttribute('data-href') || '';
        // TODO: if there's nothing, don't show the popup
        // TODO: delay showing until we have content
        const content = await this.fetchContent(frbrUri);
        if (content) {
            tippy.setContent(`
        <div>
          <div class="tippy-content__body">${content}</div>
        </div>`);
        }
    }
    ensurePartner() {
        if (!this.partner) {
            this.partner = getPartner();
        }
    }
    async fetchContent(frbrUri) {
        this.ensurePartner();
        if (frbrUri && this.provider) {
            const url = this.provider + '/p/' + this.partner + '/e/popup' + frbrUri;
            try {
                const resp = await fetch(url);
                if (resp.ok) {
                    return await resp.text();
                }
            }
            catch (error) {
                // ignore
            }
        }
        return null;
    }
    get el() { return this; }
    static get watchers() { return {
        "popups": ["changePopups"]
    }; }
    static get style() { return LaDecorateExternalRefsStyle0; }
}, [0, "la-decorate-external-refs", {
        "akomaNtoso": [1, "akoma-ntoso"],
        "popups": [4],
        "partner": [1],
        "provider": [1]
    }, undefined, {
        "popups": ["changePopups"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["la-decorate-external-refs"];
    components.forEach(tagName => { switch (tagName) {
        case "la-decorate-external-refs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DecorateExternalRefs);
            }
            break;
    } });
}
defineCustomElement$1();

const LaDecorateExternalRefs = DecorateExternalRefs;
const defineCustomElement = defineCustomElement$1;

export { LaDecorateExternalRefs, defineCustomElement };

//# sourceMappingURL=la-decorate-external-refs.js.map