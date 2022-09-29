import { html } from 'lit-html';
import { createRef, ref } from 'lit-html/directives/ref';

import { Gutter } from '../../../dist/collection/components/gutter/gutter';
import { argTypesForComponent } from '../../utils/utils';

import Readme from './readme.mdx';

export default {
  title: 'Library/la-gutter',
  argTypes: argTypesForComponent(Gutter),
  parameters: {
    docs: {
      page: Readme,
    },
  },
};

const renderTemplate = ({ externalRef }) => html`
  <div class="la-akoma-ntoso-with-gutter">
    <la-akoma-ntoso id="doc">
      <section class="akn-section" id="sec_3" data-eid="sec_3">
        <h3>3. Dog registration and licensing</h3>
        <section class="akn-subsection" id="sec_3__subsec_1" data-eid="sec_3__subsec_1">
          <span class="akn-num">(1)</span
          ><span class="akn-content">
            <span class="akn-p"
              >The
              <span
                class="akn-term"
                data-refersto="#term-owner"
                id="sec_3__subsec_1__term_1"
                data-eid="sec_3__subsec_1__term_1"
                >owner</span
              >
              of a property where one or more dogs are kept must register the
              <span
                class="akn-term"
                data-refersto="#term-dog"
                id="sec_3__subsec_1__term_2"
                data-eid="sec_3__subsec_1__term_2"
                >dog</span
              >
              or dogs with the
              <span
                class="akn-term"
                data-refersto="#term-Council"
                id="sec_3__subsec_1__term_3"
                data-eid="sec_3__subsec_1__term_3"
                >Council</span
              >.</span
            >
          </span>
        </section>
        <section class="akn-subsection" id="sec_3__subsec_2" data-eid="sec_3__subsec_2">
          <span class="akn-num">(2)</span
          ><span class="akn-content">
            <span class="akn-p"
              >Dog registration must take place within four months of the
              <span
                class="akn-term"
                data-refersto="#term-dog"
                id="sec_3__subsec_2__term_1"
                data-eid="sec_3__subsec_2__term_1"
                >dog</span
              >’s birth or within 30 days of acquiring a
              <span
                class="akn-term"
                data-refersto="#term-dog"
                id="sec_3__subsec_2__term_2"
                data-eid="sec_3__subsec_2__term_2"
                >dog</span
              >
              on property within
              <span
                class="akn-term"
                data-refersto="#term-Council"
                id="sec_3__subsec_2__term_3"
                data-eid="sec_3__subsec_2__term_3"
                >Council</span
              >’s jurisdictional boundaries.</span
            >
          </span>
        </section>
        <section class="akn-subsection" id="sec_3__subsec_3" data-eid="sec_3__subsec_3">
          <span class="akn-num">(3)</span
          ><span class="akn-content">
            <span class="akn-p"
              >The
              <span
                class="akn-term"
                data-refersto="#term-Council"
                id="sec_3__subsec_3__term_1"
                data-eid="sec_3__subsec_3__term_1"
                >Council</span
              >
              may levy a
              <span
                class="akn-term"
                data-refersto="#term-dog"
                id="sec_3__subsec_3__term_2"
                data-eid="sec_3__subsec_3__term_2"
                >dog</span
              >
              license fee in respect of a property where one or more dogs are kept.</span
            >
          </span>
        </section>
        <section class="akn-subsection" id="sec_3__subsec_4" data-eid="sec_3__subsec_4">
          <span class="akn-num">(4)</span
          ><span class="akn-content">
            <span class="akn-p"
              >The amount of the
              <span
                class="akn-term"
                data-refersto="#term-dog"
                id="sec_3__subsec_4__term_1"
                data-eid="sec_3__subsec_4__term_1"
                >dog</span
              >
              license fee may be determined in terms of a resolution of
              <span
                class="akn-term"
                data-refersto="#term-Council"
                id="sec_3__subsec_4__term_2"
                data-eid="sec_3__subsec_4__term_2"
                >Council</span
              >. A reduced
              <span
                class="akn-term"
                data-refersto="#term-dog"
                id="sec_3__subsec_4__term_3"
                data-eid="sec_3__subsec_4__term_3"
                >dog</span
              >
              license fee may apply for sterilized dogs.</span
            >
          </span>
        </section>
      </section>
    </la-akoma-ntoso>

    <la-gutter akoma-ntoso="#doc" ${externalRef ? ref(externalRef) : null}>
      <la-gutter-item anchor="#sec_3__subsec_1">A comment on 3(1)</la-gutter-item>
      <la-gutter-item anchor="#sec_3__subsec_2">First comment on 3(2)</la-gutter-item>
      <la-gutter-item anchor="#sec_3__subsec_2">Second comment on 3(2)</la-gutter-item>
      <la-gutter-item anchor="#sec_3__subsec_2">Third comment on 3(2)</la-gutter-item>
      <la-gutter-item anchor="#sec_3__subsec_3">A comment on 3(3)</la-gutter-item>
    </la-gutter>
  </div>
`;

const Template = (props) => renderTemplate(props);

export const BasicUsage = Template.bind({});
BasicUsage.args = {};

export const ActivateItemWithButtons = () => {
  const componentRef = createRef();
  const activatePrevItem = () => {
    componentRef.value.activatePrevItem();
  };
  const activateNextItem = () => {
    componentRef.value.activateNextItem();
  };
  return html`
    <button @click="${activatePrevItem}">Activate previous item</button>
    <button @click="${activateNextItem}">Activate next item</button>
    <div>${renderTemplate({ externalRef: componentRef })}</div>
  `;
};
