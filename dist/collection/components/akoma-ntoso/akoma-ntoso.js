import { Component, h } from '@stencil/core';
export class AkomaNtoso {
  render() {
    return (h("div", { class: "akoma-ntoso" },
      h("slot", null)));
  }
  static get is() { return "la-akoma-ntoso"; }
  static get originalStyleUrls() { return {
    "$": ["akoma-ntoso.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["akoma-ntoso.css"]
  }; }
}
