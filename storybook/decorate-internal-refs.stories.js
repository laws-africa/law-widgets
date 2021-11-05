import { html } from "lit-html";
import { DecorateInternalRefs } from '../dist/collection/components/decorate-internal-refs/decorate-internal-refs';
import { argTypesForComponent } from "./utils";

export default {
  title: 'Library/la-decorate-internal-refs',
  argTypes: argTypesForComponent(DecorateInternalRefs)
};

const Template = (props) => html`
  <la-akoma-ntoso>
    <la-decorate-internal-refs
      ?popups=${props.popups}
      ?flag=${props.flag}
    ></la-decorate-internal-refs>

    <section class="akn-section" id="sec_5" data-eid="sec_5">
      <h3>5. Amendment, suspension and cancellation of permits</h3>
      <span class="akn-hcontainer" id="sec_5__hcontainer_1" data-eid="sec_5__hcontainer_1" data-name="hcontainer">
        <span class="akn-content">
          <span class="akn-blockList" id="sec_5__hcontainer_1__list_1" data-eid="sec_5__hcontainer_1__list_1">
            <span class="akn-listIntroduction">The <span class="akn-term" data-refersto="#term-Council" id="sec_5__hcontainer_1__list_1__term_1" data-eid="sec_5__hcontainer_1__list_1__term_1">Council</span> may, after consideration of a report and recommendation of an <span class="akn-term" data-refersto="#term-authorised_official" id="sec_5__hcontainer_1__list_1__term_2" data-eid="sec_5__hcontainer_1__list_1__term_2">authorised official</span> or veterinary surgeon, by written notice to the holder of a <span class="akn-term" data-refersto="#term-permit" id="sec_5__hcontainer_1__list_1__term_3" data-eid="sec_5__hcontainer_1__list_1__term_3">permit</span> contemplated in <a class="akn-ref" data-href="#sec_4" href="#sec_4">section 4</a> –</span>
            <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_a" data-eid="sec_5__hcontainer_1__list_1__item_a">
              <span class="akn-num">(a)</span>
              <span class="akn-blockList" id="sec_5__hcontainer_1__list_1__item_a__list_1" data-eid="sec_5__hcontainer_1__list_1__item_a__list_1">
                <span class="akn-listIntroduction">amend, suspend or cancel that <span class="akn-term" data-refersto="#term-permit" id="sec_5__hcontainer_1__list_1__item_a__list_1__term_1" data-eid="sec_5__hcontainer_1__list_1__item_a__list_1__term_1">permit</span> it is satisfied that failure to do so would result in-</span>
                <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_a__list_1__item_i" data-eid="sec_5__hcontainer_1__list_1__item_a__list_1__item_i">
                  <span class="akn-num">(i)</span>
                  <span class="akn-p">the creation or continuation of a public health hazard; or</span>
                </span>
                <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_a__list_1__item_ii" data-eid="sec_5__hcontainer_1__list_1__item_a__list_1__item_ii">
                  <span class="akn-num">(ii)</span>
                  <span class="akn-p">a continued contravention of any provision of <a class="akn-ref" data-href="#sec_6" href="#sec_5__hcontainer_1__list_1__item_b">section 6b</a>;</span>
                </span>
              </span>
            </span>
            <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_b" data-eid="sec_5__hcontainer_1__list_1__item_b">
              <span class="akn-num">(b)</span>
              <span class="akn-blockList" id="sec_5__hcontainer_1__list_1__item_b__list_1" data-eid="sec_5__hcontainer_1__list_1__item_b__list_1">
                <span class="akn-listIntroduction">with immediate effect amend, suspend or cancel that <span class="akn-term" data-refersto="#term-permit" id="sec_5__hcontainer_1__list_1__item_b__list_1__term_1" data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__term_1">permit</span> if –</span>
                <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_b__list_1__item_i" data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__item_i">
                  <span class="akn-num">(i)</span>
                  <span class="akn-p">such official is of the view that it is urgently necessary to do so to eliminate or reduce a significant risk to the public posed by a public health hazard or potential public health hazard; or</span>
                </span>
                <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii" data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii">
                  <span class="akn-num">(ii)</span>
                  <span class="akn-p">there is a criminal case pending against the <span class="akn-term" data-refersto="#term-permit" id="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_1" data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_1">permit</span> holder or a civil case which the <span class="akn-term" data-refersto="#term-permit" id="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_2" data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_2">permit</span> holder is a party to, involving an <span class="akn-term" data-refersto="#term-animal" id="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_3" data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_3">animal</span> in his or her care.</span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </section>
  </la-akoma-ntoso>
`;

export const Default = Template.bind({});
Default.args = {};
