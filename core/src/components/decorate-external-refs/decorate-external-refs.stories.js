import { html } from 'lit-html';

import { DecorateExternalRefs } from '../../../dist/collection/components/decorate-external-refs/decorate-external-refs';
import { argTypesForComponent } from '../../utils/utils';

export default {
  title: 'Library/la-decorate-external-refs',
  argTypes: argTypesForComponent(DecorateExternalRefs)
};

const Template = () => html`
  <la-akoma-ntoso>
    <la-decorate-external-refs popups provider="http://localhost:8000/v1" partner="laws.africa"></la-decorate-external-refs>

    <section class="akn-section" id="sec_5" data-eid="sec_5">
      <h3>5. Amendment, suspension and cancellation of permits</h3>
      <span class="akn-content">
        <span class="akn-p">This Act is passed in terms of the <a class="akn-ref" data-href="/akn/za/act/1996/constitution" href="https://resolver.laws.africa/resolve/akn/za/act/1996/constitution">Constitution</a>.</p>
      </span>
    </section>
  </la-akoma-ntoso>
`;

export const Default = Template.bind({});
Default.args = {};
