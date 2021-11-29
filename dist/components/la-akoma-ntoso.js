import { proxyCustomElement } from '@stencil/core/internal/client';

const akomaNtosoCss = "@import url(\"https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700,700i\");\nla-akoma-ntoso {\n  /*\n   * Variables\n   */\n  @import url(\"https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700,700i\");\n  display: block;\n  /* typography */\n  font-family: Palatino, \"Book Antiqua\", \"PT Serif\", Georgia, serif;\n  font-size: 15px;\n  line-height: 1.35;\n  /* headings */\n  /* block containers */\n  /* Schedules and attachments */\n  /* Indent list-like containers that have margin numbers.\n     For the exception where these are not numbered, .akn--no-indent is applied to override the indent. */\n  /* lists (mostly used in definitions) */\n  /* blocklists */\n  /* bulleted lists */\n  /* inline elements */\n  /* footnotes */\n  /* quotes */\n}\n@-webkit-keyframes fadeout {\n  from {\n    background-color: yellow;\n  }\n  to {\n    background-color: unset;\n  }\n}\n@keyframes fadeout {\n  from {\n    background-color: yellow;\n  }\n  to {\n    background-color: unset;\n  }\n}\nla-akoma-ntoso.flash-target :target {\n  -webkit-animation: fadeout 2s;\n  animation: fadeout 2s;\n}\nla-akoma-ntoso[frbr-country^=ke] {\n  /*\n   * Kenya (KE) AKN styles\n   */\n}\nla-akoma-ntoso[frbr-country^=ke] .akn-remark,\nla-akoma-ntoso[frbr-country^=ke] .akn-crossHeading {\n  font-style: normal;\n}\nla-akoma-ntoso[frbr-country^=ke] .coverpage .amendment,\nla-akoma-ntoso[frbr-country^=ke] .coverpage .verification-notice,\nla-akoma-ntoso[frbr-country^=ke] .coverpage .as-at-date-notice {\n  font-style: normal;\n}\nla-akoma-ntoso[frbr-country^=ke] .akn-listIntroduction > .akn-remark:only-child,\nla-akoma-ntoso[frbr-country^=ke] .akn-p > .akn-remark:only-child {\n  display: block;\n  margin-top: 0.8em;\n  text-align: center;\n}\nla-akoma-ntoso[frbr-country^=na] .coverpage .amendment-list,\nla-akoma-ntoso[frbr-country^=na] .coverpage .commencement-date,\nla-akoma-ntoso[frbr-country^=na] .coverpage .verification-notice,\nla-akoma-ntoso[frbr-country^=na] .coverpage .as-at-date-notice,\nla-akoma-ntoso[frbr-country^=na] .coverpage .assent-date {\n  font-style: normal;\n  font-weight: bold;\n  color: #00b156;\n}\nla-akoma-ntoso[frbr-country^=na] .coverpage .as-at-date-notice,\nla-akoma-ntoso[frbr-country^=na] .coverpage .amendment,\nla-akoma-ntoso[frbr-country^=na] .coverpage .commencement-note,\nla-akoma-ntoso[frbr-country^=na] .coverpage .verification-notice {\n  font-style: normal;\n}\nla-akoma-ntoso[frbr-country^=na] .akn-remark {\n  font-style: normal;\n  font-weight: bold;\n  color: #00b156;\n}\nla-akoma-ntoso[frbr-country^=na] .akn-p > .akn-remark:only-child,\nla-akoma-ntoso[frbr-country^=na] .akn-listIntroduction > .akn-remark:only-child {\n  display: block;\n  margin-top: 0.8em;\n  text-align: center;\n}\nla-akoma-ntoso[frbr-country^=pl] {\n  /* paragraph elements */\n  /* numbered block elements */\n}\nla-akoma-ntoso[frbr-country^=pl] .coverpage .doctype {\n  text-transform: uppercase;\n}\nla-akoma-ntoso[frbr-country^=pl] .akn-intro,\nla-akoma-ntoso[frbr-country^=pl] .akn-list,\nla-akoma-ntoso[frbr-country^=pl] .akn-paragraph,\nla-akoma-ntoso[frbr-country^=pl] .akn-point {\n  margin-bottom: 0.8em;\n}\nla-akoma-ntoso[frbr-country^=pl] .akn-alinea,\nla-akoma-ntoso[frbr-country^=pl] .akn-indent,\nla-akoma-ntoso[frbr-country^=pl] .akn-paragraph,\nla-akoma-ntoso[frbr-country^=pl] .akn-point {\n  margin-left: 3em;\n}\nla-akoma-ntoso[frbr-country^=pl] .akn-alinea > .akn-num,\nla-akoma-ntoso[frbr-country^=pl] .akn-alinea > .akn-indent-num,\nla-akoma-ntoso[frbr-country^=pl] .akn-indent > .akn-num,\nla-akoma-ntoso[frbr-country^=pl] .akn-indent > .akn-indent-num,\nla-akoma-ntoso[frbr-country^=pl] .akn-paragraph > .akn-num,\nla-akoma-ntoso[frbr-country^=pl] .akn-paragraph > .akn-indent-num,\nla-akoma-ntoso[frbr-country^=pl] .akn-point > .akn-num,\nla-akoma-ntoso[frbr-country^=pl] .akn-point > .akn-indent-num {\n  display: block;\n  float: left;\n  margin-left: -3em;\n}\nla-akoma-ntoso h1,\nla-akoma-ntoso h2,\nla-akoma-ntoso h3,\nla-akoma-ntoso h4,\nla-akoma-ntoso h5,\nla-akoma-ntoso .akn-heading {\n  margin-top: 0px;\n  margin-bottom: 0.8em;\n  font-family: Palatino, \"Book Antiqua\", \"PT Serif\", Georgia, serif;\n  font-weight: bold;\n}\nla-akoma-ntoso h1 {\n  font-size: 26px;\n  line-height: 1.2;\n}\nla-akoma-ntoso h2,\nla-akoma-ntoso .akn-heading {\n  text-align: center;\n  font-size: 19px;\n  line-height: 1.2;\n}\nla-akoma-ntoso h3 {\n  font-size: 18px;\n  line-height: 1.35;\n}\nla-akoma-ntoso h4 {\n  font-size: 15px;\n  line-height: 1.35;\n}\nla-akoma-ntoso .akn-subheading,\nla-akoma-ntoso .akn-crossHeading {\n  text-align: center;\n  font-style: italic;\n}\nla-akoma-ntoso .akn-act,\nla-akoma-ntoso .akn-akomaNtoso,\nla-akoma-ntoso .akn-article,\nla-akoma-ntoso .akn-blockList,\nla-akoma-ntoso .akn-chapter,\nla-akoma-ntoso .akn-conclusions,\nla-akoma-ntoso .akn-coverPage,\nla-akoma-ntoso .akn-crossHeading,\nla-akoma-ntoso .akn-division,\nla-akoma-ntoso .akn-hcontainer,\nla-akoma-ntoso .akn-heading,\nla-akoma-ntoso .akn-list,\nla-akoma-ntoso .akn-paragraph,\nla-akoma-ntoso .akn-part,\nla-akoma-ntoso .akn-point,\nla-akoma-ntoso .akn-preamble,\nla-akoma-ntoso .akn-preface,\nla-akoma-ntoso .akn-section,\nla-akoma-ntoso .akn-subdivision,\nla-akoma-ntoso .akn-subheading,\nla-akoma-ntoso .akn-subsection {\n  display: block;\n}\nla-akoma-ntoso .akn-preface,\nla-akoma-ntoso .akn-preamble {\n  margin-bottom: 1.6em;\n}\nla-akoma-ntoso .akn-preface > .akn-p,\nla-akoma-ntoso .akn-preamble > .akn-p {\n  display: block;\n  margin-bottom: 0.8em;\n}\nla-akoma-ntoso .akn-article,\nla-akoma-ntoso .akn-chapter,\nla-akoma-ntoso .akn-division,\nla-akoma-ntoso .akn-part,\nla-akoma-ntoso .akn-section,\nla-akoma-ntoso .akn-subdivision {\n  margin-bottom: 1.6em;\n}\nla-akoma-ntoso .akn-attachment > .akn-subheading {\n  font-style: normal;\n}\nla-akoma-ntoso .akn-subsection,\nla-akoma-ntoso .akn-paragraph,\nla-akoma-ntoso .akn-subparagraph {\n  margin-left: 3em;\n  margin-bottom: 0.8em;\n}\nla-akoma-ntoso .akn-subsection.akn--no-indent,\nla-akoma-ntoso .akn-paragraph.akn--no-indent,\nla-akoma-ntoso .akn-subparagraph.akn--no-indent {\n  margin-left: 0px;\n}\nla-akoma-ntoso .akn-subsection > .akn-num,\nla-akoma-ntoso .akn-paragraph > .akn-num,\nla-akoma-ntoso .akn-subparagraph > .akn-num {\n  display: block;\n  float: left;\n  margin-left: -3em;\n  margin-right: 0.25em;\n}\nla-akoma-ntoso .akn-subsection > .akn-heading,\nla-akoma-ntoso .akn-paragraph > .akn-heading,\nla-akoma-ntoso .akn-subparagraph > .akn-heading {\n  font-size: inherit;\n  text-align: inherit;\n  line-height: inherit;\n}\nla-akoma-ntoso .akn-listIntroduction,\nla-akoma-ntoso .akn-p {\n  display: block;\n  margin-bottom: 0.8em;\n}\nla-akoma-ntoso .akn-list > .akn-intro {\n  display: block;\n  margin-bottom: 0.8em;\n}\nla-akoma-ntoso .akn-list > .akn-point {\n  display: block;\n  margin-left: 3em;\n  margin-bottom: 0.8em;\n}\nla-akoma-ntoso .akn-list > .akn-point > .akn-num {\n  display: block;\n  float: left;\n  margin-left: -3em;\n  margin-right: 0.25em;\n}\nla-akoma-ntoso .akn-blockList > .akn-item {\n  display: block;\n  margin-left: 3em;\n  margin-bottom: 0.8em;\n}\nla-akoma-ntoso .akn-blockList > .akn-item > .akn-num {\n  display: block;\n  float: left;\n  margin-left: -3em;\n  margin-right: 0.25em;\n}\nla-akoma-ntoso .akn-ul {\n  display: block;\n  list-style-type: disc;\n  list-style-position: outside;\n  padding-left: 3em;\n  margin-bottom: 0.8em;\n}\nla-akoma-ntoso .akn-li {\n  display: list-item;\n  margin-bottom: 0.8em;\n}\nla-akoma-ntoso .akn-def {\n  font-weight: bold;\n}\nla-akoma-ntoso .akn-longTitle {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 0.8em;\n}\nla-akoma-ntoso .akn-remark {\n  font-style: italic;\n}\nla-akoma-ntoso img {\n  max-width: 100%;\n}\nla-akoma-ntoso .akn-authorialNote {\n  display: -ms-flexbox;\n  display: flex;\n  font-size: small;\n  margin-top: 0.8em;\n  margin-bottom: 1.6em;\n}\nla-akoma-ntoso .akn-authorialNote > .akn-authorialNote--marker {\n  margin-right: 1.5em;\n}\nla-akoma-ntoso .akn-authorialNote + .akn-authorialNote {\n  margin-top: -1.6em;\n}\nla-akoma-ntoso .akn-embeddedStructure {\n  display: block;\n  margin-left: 2em;\n}\nla-akoma-ntoso .akn-embeddedStructure[data-startQuote]::before {\n  content: attr(data-startQuote);\n  margin-left: -0.5em;\n  float: left;\n}\nla-akoma-ntoso .coverpage {\n  text-align: center;\n  margin-bottom: 1.6em;\n}\nla-akoma-ntoso .coverpage .notice-list {\n  margin: 0px;\n  padding: 0px;\n}\nla-akoma-ntoso .coverpage .notice-list li {\n  list-style: none;\n}\nla-akoma-ntoso .coverpage .place-name,\nla-akoma-ntoso .coverpage .parent-work {\n  font-size: 19px;\n  line-height: 1.2;\n  margin-bottom: 0.8em;\n  font-weight: bold;\n}\nla-akoma-ntoso .coverpage .assent-date,\nla-akoma-ntoso .coverpage .commencement-date {\n  margin-bottom: 0.8em;\n  font-weight: bold;\n}\nla-akoma-ntoso .coverpage .commencement-date-list {\n  margin-bottom: 0.8em;\n}\nla-akoma-ntoso .coverpage .commencement-date-uncommenced {\n  margin-bottom: 0.8em;\n  font-weight: bold;\n}\nla-akoma-ntoso .coverpage .commencements-table {\n  margin: auto;\n  max-width: 80%;\n}\nla-akoma-ntoso .coverpage .amendment-list {\n  margin-top: 1.6em;\n  padding: 0px;\n}\nla-akoma-ntoso .coverpage .amendment {\n  list-style: none;\n  margin-bottom: 0.8em;\n  font-style: italic;\n}\nla-akoma-ntoso .coverpage .commencement-note,\nla-akoma-ntoso .coverpage .verification-notice,\nla-akoma-ntoso .coverpage .as-at-date-notice {\n  margin-top: 0.8em;\n  font-style: italic;\n}\nla-akoma-ntoso table {\n  width: 100%;\n  margin-bottom: 1.6em;\n  border: 1px solid #ddd;\n}\nla-akoma-ntoso table th,\nla-akoma-ntoso table td {\n  border-left: 1px solid #ddd;\n  padding: 5px;\n  text-align: left;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\nla-akoma-ntoso table th {\n  font-weight: bold;\n}\nla-akoma-ntoso table th > :last-child, la-akoma-ntoso table td > :last-child {\n  margin-bottom: 0px;\n}\nla-akoma-ntoso table thead th {\n  vertical-align: bottom;\n}\nla-akoma-ntoso table caption + thead tr:first-child th,\nla-akoma-ntoso table caption + thead tr:first-child td,\nla-akoma-ntoso table colgroup + thead tr:first-child th,\nla-akoma-ntoso table colgroup + thead tr:first-child td,\nla-akoma-ntoso table thead:first-child tr:first-child th,\nla-akoma-ntoso table thead:first-child tr:first-child td {\n  border-top: 0;\n}\nla-akoma-ntoso table tbody + tbody {\n  border-top: 2px solid #ddd;\n}\nla-akoma-ntoso table .table {\n  background-color: white;\n}\nla-akoma-ntoso .akn--text-left {\n  text-align: left;\n}\nla-akoma-ntoso .akn--text-center {\n  text-align: center;\n}\nla-akoma-ntoso .akn--text-right {\n  text-align: right;\n}";

let AkomaNtoso = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  parseFrbrExpressionUri(newValue) {
    /*eslint-disable */
    const ex = '^(/(?<prefix>akn))/(?<country>[a-z]{2})(-(?<locality>[^/]+))?/(?<doctype>[^/]+)(/(?<subtype>[^0-9][^/]*))?(/(?<actor>[^0-9][^/]*))?/(?<date>[0-9]{4}(-[0-9]{2}(-[0-9]{2})?)?)/(?<number>[^/]+)(/(((?<language>[a-z]{3})(?<expression_date>[@:][^/]*)?(/!?(?<expression_component>[^/]+?)?(/(?<expression_subcomponent>[^.]+))?)?(\.(?<format>[a-z0-9]+))?)|!?(?<work_component>[^/]+)))?$';
    const regExp = new RegExp(ex, 'g');
    const output = regExp.exec(newValue);
    if (output === null || output === void 0 ? void 0 : output.groups) {
      Object.keys(output.groups).forEach(key => {
        var _a;
        if ((_a = output.groups) === null || _a === void 0 ? void 0 : _a[key]) {
          switch (key) {
            case 'country':
              if (!this.frbrCountry)
                this.frbrCountry = output.groups[key];
              break;
            case 'doctype':
              if (!this.frbrType)
                this.frbrType = output.groups[key];
              break;
            case 'subtype':
              if (!this.frbrSubtype)
                this.frbrSubtype = output.groups[key];
              break;
            case 'actor':
              if (!this.frbrAuthor)
                this.frbrAuthor = output.groups[key];
              break;
            case 'date':
              if (!this.frbrDate)
                this.frbrDate = output.groups[key];
              break;
            case 'number':
              if (!this.frbrNumber)
                this.frbrNumber = output.groups[key];
              break;
            case 'expression_date':
              if (!this.frbrExpressionDate)
                this.frbrExpressionDate = output.groups[key];
              break;
            case 'language':
              if (!this.frbrLanguage)
                this.frbrLanguage = output.groups[key];
              break;
          }
        }
      });
    }
  }
  componentWillLoad() {
    if (this.frbrExpressionUri)
      this.parseFrbrExpressionUri(this.frbrExpressionUri);
  }
  static get watchers() { return {
    "frbrExpressionUri": ["parseFrbrExpressionUri"]
  }; }
  static get style() { return akomaNtosoCss; }
};
AkomaNtoso = /*@__PURE__*/ proxyCustomElement(AkomaNtoso, [0, "la-akoma-ntoso", {
    "frbrExpressionUri": [1537, "frbr-expression-uri"],
    "frbrCountry": [1537, "frbr-country"],
    "frbrType": [1537, "frbr-type"],
    "frbrSubtype": [1537, "frbr-subtype"],
    "frbrAuthor": [1537, "frbr-author"],
    "frbrDate": [1537, "frbr-date"],
    "frbrNumber": [1537, "frbr-number"],
    "frbrExpressionDate": [1537, "frbr-expression-date"],
    "frbrLanguage": [1537, "frbr-language"]
  }]);
function defineCustomElement$1() {
  const components = ["la-akoma-ntoso"];
  components.forEach(tagName => { switch (tagName) {
    case "la-akoma-ntoso":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AkomaNtoso);
      }
      break;
  } });
}
defineCustomElement$1();

const LaAkomaNtoso = AkomaNtoso;
const defineCustomElement = defineCustomElement$1;

export { LaAkomaNtoso, defineCustomElement };
