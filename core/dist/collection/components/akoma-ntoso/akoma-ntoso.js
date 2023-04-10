/*!
 * (C) Law Widgets https://laws.africa - MIT License
 */
import { Component, Element, Prop, Watch } from '@stencil/core';
import { PROVIDER, getPartner } from '../../utils/services';
export class AkomaNtoso {
  constructor() {
    /** Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set. */
    this.fetch = false;
    /** Provider URL for fetching content (advanced usage only). */
    this.provider = PROVIDER;
  }
  refetch() {
    this.fetchContent();
  }
  parseFrbrExpressionUri(newValue) {
    /*eslint-disable */
    const ex = '^(/(?<prefix>akn))/(?<country>[a-z]{2})(-(?<locality>[^/]+))?/(?<doctype>[^/]+)(/(?<subtype>[^0-9][^/]*))?(/(?<actor>[^0-9][^/]*))?/(?<date>[0-9]{4}(-[0-9]{2}(-[0-9]{2})?)?)/(?<number>[^/]+)(/(((?<language>[a-z]{3})(?<expression_date>[@:][^/]*)?(/!?(?<expression_component>[^/]+?)?(/(?<expression_subcomponent>[^.]+))?)?(.(?<format>[a-z0-9]+))?)|!?(?<work_component>[^/]+)))?$';
    const regExp = new RegExp(ex, 'g');
    const output = regExp.exec(newValue);
    if (output === null || output === void 0 ? void 0 : output.groups) {
      Object.keys(output.groups).forEach((key) => {
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
              if (!this.frbrExpressionDate) {
                this.frbrExpressionDate = output.groups[key].replace('@', '').replace(':', '');
              }
              break;
            case 'language':
              if (!this.frbrLanguage)
                this.frbrLanguage = output.groups[key];
              break;
          }
        }
      });
    }
    this.fetchContent();
  }
  async fetchContent() {
    this.ensurePartner();
    if (this.fetch && this.frbrExpressionUri && this.provider) {
      const url = this.provider + '/p/' + this.partner + '/e/portion' + this.frbrExpressionUri;
      try {
        const resp = await fetch(url);
        if (resp.ok) {
          this.el.innerHTML = await resp.text();
        }
      }
      catch (error) {
        // ignore
      }
    }
  }
  ensurePartner() {
    if (!this.partner) {
      this.partner = getPartner();
    }
  }
  componentWillLoad() {
    if (this.frbrExpressionUri)
      this.parseFrbrExpressionUri(this.frbrExpressionUri);
  }
  static get is() { return "la-akoma-ntoso"; }
  static get originalStyleUrls() { return {
    "$": ["akoma-ntoso.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["akoma-ntoso.css"]
  }; }
  static get properties() { return {
    "frbrExpressionUri": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Full Akoma Ntoso FRBR Expression URI used to populate the other `frbr` fields if they are unset.\nSetting this is the preferred mechanism for ensuring tradition-specific styling."
      },
      "attribute": "frbr-expression-uri",
      "reflect": true
    },
    "frbrCountry": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Country (a two-letter or code according to ISO 3166-1 [ISO3166] or a short and unique alphanumeric codes\naccording to ISO 3166-2 [ISO3166-2])."
      },
      "attribute": "frbr-country",
      "reflect": true
    },
    "frbrType": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Type of document\n\n- For legislation \u2013 Acts, Regulations, Statutory Instruments, and the like \u2013 use `act`.\n\n- For case law, use `judgment`.\n\n- For other documents \u2013 Policies, Memoranda of Understanding, Yearbooks, Press Releases, and the like \u2013 use `doc`."
      },
      "attribute": "frbr-type",
      "reflect": true
    },
    "frbrSubtype": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Subtype used if the document is anything other an `act` / `statement` / `judgment` / `doc`"
      },
      "attribute": "frbr-subtype",
      "reflect": true
    },
    "frbrAuthor": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The emanating actor, unless implicitly deducible by the document type (e.g., acts and bills do not usually\nrequire actor, while ministerial decrees and European legislation do)"
      },
      "attribute": "frbr-author",
      "reflect": true
    },
    "frbrDate": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Original creation date (expressed in `YYYY-MM-DD` format or just `YYYY` if the year is sufficient for\nidentification purposes"
      },
      "attribute": "frbr-date",
      "reflect": true
    },
    "frbrNumber": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Number or title or other disambiguating feature of the Work (when appropriate, otherwise optionally the string nn)"
      },
      "attribute": "frbr-number",
      "reflect": true
    },
    "frbrExpressionDate": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Any content-specification date"
      },
      "attribute": "frbr-expression-date",
      "reflect": true
    },
    "frbrLanguage": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The human language code in which the Expression is drafted"
      },
      "attribute": "frbr-language",
      "reflect": true
    },
    "fetch": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set."
      },
      "attribute": "fetch",
      "reflect": true,
      "defaultValue": "false"
    },
    "partner": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Partner code to use when fetching content from Laws.Africa. Defaults to the `location.hostname`."
      },
      "attribute": "partner",
      "reflect": true
    },
    "provider": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Provider URL for fetching content (advanced usage only)."
      },
      "attribute": "provider",
      "reflect": false,
      "defaultValue": "PROVIDER"
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "provider",
      "methodName": "refetch"
    }, {
      "propName": "fetch",
      "methodName": "refetch"
    }, {
      "propName": "frbrExpressionUri",
      "methodName": "parseFrbrExpressionUri"
    }]; }
}
