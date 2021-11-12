import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'la-akoma-ntoso',
  styleUrl: 'akoma-ntoso.scss',
})
export class AkomaNtoso {
  @Prop({ reflect: true, mutable: true}) frbrExpressionUri?: string;
  @Prop({ reflect: true, mutable: true}) frbrCountry?: string;
  @Prop({ reflect: true, mutable: true}) frbrType?: string;
  @Prop({ reflect: true, mutable: true}) frbrSubtype?: string;
  @Prop({ reflect: true, mutable: true}) frbrAuthor?: string;
  @Prop({ reflect: true, mutable: true}) frbrDate?: string;
  @Prop({ reflect: true, mutable: true}) frbrNumber?: string;
  @Prop({ reflect: true, mutable: true}) frbrExpressionDate?: string;
  @Prop({ reflect: true, mutable: true}) frbrLanguage?: string;

  @Watch('frbrExpressionUri')
  parseFrbrExpressionUri(newValue: string) {
    const ex = "^(/(?<prefix>akn))/(?<country>[a-z]{2})(-(?<locality>[^/]+))?/(?<doctype>[^/]+)(/(?<subtype>[^0-9][^/]*))?(/(?<actor>[^0-9][^/]*))?/(?<date>[0-9]{4}(-[0-9]{2}(-[0-9]{2})?)?)/(?<number>[^/]+)(/(((?<language>[a-z]{3})(?<expression_date>[@:][^/]*)?(/!?(?<expression_component>[^/]+?)?(/(?<expression_subcomponent>[^.]+))?)?(\.(?<format>[a-z0-9]+))?)|!?(?<work_component>[^/]+)))?$";
    const regExp = new RegExp(ex, "g")
    const output = regExp.exec(newValue);
    if(output?.groups) {
      Object.keys(output.groups).forEach(key => {
        if(output.groups?.[key]) {
          switch (key) {
            case 'country':
              if(!this.frbrCountry) this.frbrCountry = output.groups[key];
              break;
            case 'doctype':
              if(!this.frbrType) this.frbrType = output.groups[key];
              break;
            case 'subtype':
              if(!this.frbrSubtype) this.frbrSubtype = output.groups[key];
              break;
            case 'actor':
              if(!this.frbrAuthor) this.frbrAuthor = output.groups[key];
              break;
            case 'date':
              if(!this.frbrDate) this.frbrDate = output.groups[key];
              break;
            case 'number':
              if(!this.frbrNumber) this.frbrNumber = output.groups[key];
              break;
            case 'expression_date':
              if(!this.frbrExpressionDate) this.frbrExpressionDate = output.groups[key];
              break;
            case 'language':
              if(!this.frbrLanguage) this.frbrLanguage = output.groups[key];
              break;
          }
        }
      })
    }
  }

  componentWillLoad() {
    if(this.frbrExpressionUri )this.parseFrbrExpressionUri(this.frbrExpressionUri);
  }

  render() {
    return (
      <div class="akoma-ntoso">
        <slot></slot>
      </div>
    );
  }
}
