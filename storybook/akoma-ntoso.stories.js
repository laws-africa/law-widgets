import { html } from 'lit-html';
import { AkomaNtoso } from '../dist/collection/components/akoma-ntoso/akoma-ntoso';
import { argTypesForComponent } from './utils';

export default {
  title: 'Library/la-akoma-ntoso',
  argTypes: argTypesForComponent(AkomaNtoso)
};

const Template = props => html`
  <la-akoma-ntoso
    .frbrExpressionUri="${props.frbrExpressionUri}"
    .frbrCountry="${props.frbrCountry}"
    .frbrType="${props.frbrType}"
    .frbrSubtype="${props.frbrSubtype}"
    .frbrAuthor="${props.frbrAuthor}"
    .frbrDate="${props.frbrDate}"
    .frbrNumber="${props.frbrNumber}"
    .frbrExpressionDate="${props.frbrExpressionDate}"
    .frbrLanguage="${props.frbrLanguage}"
  >
    <div class="akn-remark">Lorem AKN Remark Content</div>
    <section class="akn-section" id="sec_5" data-eid="sec_5">
      <h3>5. Amendment, suspension and cancellation of permits</h3>
      <span class="akn-hcontainer" id="sec_5__hcontainer_1" data-eid="sec_5__hcontainer_1" data-name="hcontainer">
        <span class="akn-content">
          <span class="akn-blockList" id="sec_5__hcontainer_1__list_1" data-eid="sec_5__hcontainer_1__list_1">
            <span class="akn-listIntroduction"
              >The <span class="akn-term" data-refersto="#term-Council" id="sec_5__hcontainer_1__list_1__term_1" data-eid="sec_5__hcontainer_1__list_1__term_1">Council</span> may,
              after consideration of a report and recommendation of an
              <span class="akn-term" data-refersto="#term-authorised_official" id="sec_5__hcontainer_1__list_1__term_2" data-eid="sec_5__hcontainer_1__list_1__term_2"
                >authorised official</span
              >
              or veterinary surgeon, by written notice to the holder of a
              <span class="akn-term" data-refersto="#term-permit" id="sec_5__hcontainer_1__list_1__term_3" data-eid="sec_5__hcontainer_1__list_1__term_3">permit</span> contemplated
              in <a class="akn-ref" data-href="#sec_4" href="#sec_4">section 4</a> –</span
            >
            <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_a" data-eid="sec_5__hcontainer_1__list_1__item_a">
              <span class="akn-num">(a)</span>
              <span class="akn-blockList" id="sec_5__hcontainer_1__list_1__item_a__list_1" data-eid="sec_5__hcontainer_1__list_1__item_a__list_1">
                <span class="akn-listIntroduction"
                  >amend, suspend or cancel that
                  <span
                    class="akn-term"
                    data-refersto="#term-permit"
                    id="sec_5__hcontainer_1__list_1__item_a__list_1__term_1"
                    data-eid="sec_5__hcontainer_1__list_1__item_a__list_1__term_1"
                    >permit</span
                  >
                  it is satisfied that failure to do so would result in-</span
                >
                <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_a__list_1__item_i" data-eid="sec_5__hcontainer_1__list_1__item_a__list_1__item_i">
                  <span class="akn-num">(i)</span>
                  <span class="akn-p">the creation or continuation of a public health hazard; or</span>
                </span>
                <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_a__list_1__item_ii" data-eid="sec_5__hcontainer_1__list_1__item_a__list_1__item_ii">
                  <span class="akn-num">(ii)</span>
                  <span class="akn-p">a continued <abbr class="akn-abbr" title="foo">contravention</abbr> of any provision of <a class="akn-ref" data-href="#sec_6" href="#sec_6">section 6</a>;</span>
                  <span class="akn-p">an <span class="akn-remark">[authorial note]</span>.</span>
                </span>
              </span>
            </span>
            <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_b" data-eid="sec_5__hcontainer_1__list_1__item_b">
              <span class="akn-num">(b)</span>
              <span class="akn-blockList" id="sec_5__hcontainer_1__list_1__item_b__list_1" data-eid="sec_5__hcontainer_1__list_1__item_b__list_1">
                <span class="akn-listIntroduction"
                  >with immediate effect amend, suspend or cancel that
                  <span
                    class="akn-term"
                    data-refersto="#term-permit"
                    id="sec_5__hcontainer_1__list_1__item_b__list_1__term_1"
                    data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__term_1"
                    >permit</span
                  >
                  if –</span
                >
                <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_b__list_1__item_i" data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__item_i">
                  <span class="akn-num">(i)</span>
                  <span class="akn-p"
                    >such official is of the view that it is urgently necessary to do so to eliminate or reduce a significant risk to the public posed by a public health hazard or
                    potential public health hazard; or</span
                  >
                </span>
                <span class="akn-item" id="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii" data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii">
                  <span class="akn-num">(ii)</span>
                  <span class="akn-p"
                    >there is a criminal case pending against the
                    <span
                      class="akn-term"
                      data-refersto="#term-permit"
                      id="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_1"
                      data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_1"
                      >permit</span
                    >
                    holder or a civil case which the
                    <span
                      class="akn-term"
                      data-refersto="#term-permit"
                      id="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_2"
                      data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_2"
                      >permit</span
                    >
                    holder is a party to, involving an
                    <span
                      class="akn-term"
                      data-refersto="#term-animal"
                      id="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_3"
                      data-eid="sec_5__hcontainer_1__list_1__item_b__list_1__item_ii__term_3"
                      >animal</span
                    >
                    in his or her care.</span
                  >
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

export const FrbrCountryNA = Template.bind({});
FrbrCountryNA.args = {
  frbrCountry: 'na'
};

export const Structure = (props) => html`
  <la-akoma-ntoso
    .frbrExpressionUri=${props.frbrExpressionUri}
    .frbrCountry=${props.frbrCountry}
    .frbrType=${props.frbrType}
    .frbrSubtype=${props.frbrSubtype}
    .frbrAuthor=${props.frbrAuthor}
    .frbrDate=${props.frbrDate}
    .frbrNumber=${props.frbrNumber}
    .frbrExpressionDate=${props.frbrExpressionDate}
    .frbrLanguage=${props.frbrLanguage}
    .className=${props.class + ' hydrated'}
  >
<span class="akn-akomaNtoso"><article class="akn-act" data-name="act"><section class="akn-preface" id="preface"><span class="akn-p" id="preface__p_1" data-eId="preface__p_1">Some text in the preface</span></section><section class="akn-preamble" id="preamble"><span class="akn-p" id="preamble__p_1" data-eId="preamble__p_1">Some text in the preamble</span></section><span class="akn-body"><span class="akn-alinea" id="al_1" data-eId="al_1"><span class="akn-num">1</span><span class="akn-heading">alinea heading</span><span class="akn-content"><span class="akn-p" id="al_1__p_1" data-eId="al_1__p_1">First line of alinea text</span><span class="akn-p" id="al_1__p_2" data-eId="al_1__p_2">Second line of alinea text</span></span></span><section class="akn-article" id="art_2" data-eId="art_2"><h3>Article 2 – article heading</h3>
<span class="akn-content"><span class="akn-p" id="art_2__p_1" data-eId="art_2__p_1">First line of article text</span><span class="akn-p" id="art_2__p_2" data-eId="art_2__p_2">Second line of article text</span><span class="akn-p" id="art_2__p_3" data-eId="art_2__p_3">An <span class="akn-remark" data-status="editorial">[editorial remark]</span>.</span><span class="akn-p" id="art_2__p_4" data-eId="art_2__p_4">The <abbr data-title="British Broadcasting Corporation">BBC</abbr> broadcasts news.</span><span class="akn-block" data-name="quote" id="art_2__block_1" data-eId="art_2__block_1"><span class="akn-embeddedStructure" id="art_2__block_1__embeddedStructure_1" data-eId="art_2__block_1__embeddedStructure_1"><span class="akn-p" id="art_2__block_1__embeddedStructure_1__p_1" data-eId="art_2__block_1__embeddedStructure_1__p_1">A nested quote.</span></span></span><span class="akn-blockList" id="art_2__list_1" data-eId="art_2__list_1"><span class="akn-item" id="art_2__list_1__item_1" data-eId="art_2__list_1__item_1"><span class="akn-num">(1)</span><span class="akn-p" id="art_2__list_1__item_1__p_1" data-eId="art_2__list_1__item_1__p_1">item 1</span></span><span class="akn-item" id="art_2__list_1__item_2" data-eId="art_2__list_1__item_2"><span class="akn-num">(2)</span><span class="akn-p" id="art_2__list_1__item_2__p_1" data-eId="art_2__list_1__item_2__p_1">item 2</span></span></span><span class="akn-p" id="art_2__p_5" data-eId="art_2__p_5">This sentence has a footnote<sup><span class="akn-authorialNote" data-marker="1" data-placement="bottom" id="art_2__p_5__authorialNote_1" data-eId="art_2__p_5__authorialNote_1"><span class="akn-p" id="art_2__p_5__authorialNote_1__p_1" data-eId="art_2__p_5__authorialNote_1__p_1">This is the context of the footnote.</span></span></sup> that has content shown below.</span></span></section><span class="akn-book" id="book_3" data-eId="book_3"><span class="akn-num">3</span><span class="akn-heading">book heading</span><span class="akn-content"><span class="akn-p" id="book_3__p_1" data-eId="book_3__p_1">First line of book text</span><span class="akn-p" id="book_3__p_2" data-eId="book_3__p_2">Second line of book text</span></span></span><section class="akn-chapter" id="chp_4" data-eId="chp_4"><h2>Chapter 4<br>chapter heading</h2>
<span class="akn-intro"><span class="akn-p" id="chp_4__intro__p_1" data-eId="chp_4__intro__p_1">First line of chapter text</span><span class="akn-p" id="chp_4__intro__p_2" data-eId="chp_4__intro__p_2">Second line of chapter text</span></span><span class="akn-subchapter" id="chp_4__subchp_1" data-eId="chp_4__subchp_1"><span class="akn-num">1</span><span class="akn-heading">subchapter heading</span><span class="akn-content"><span class="akn-p" id="chp_4__subchp_1__p_1" data-eId="chp_4__subchp_1__p_1">First line of subchapter text</span><span class="akn-p" id="chp_4__subchp_1__p_2" data-eId="chp_4__subchp_1__p_2">Second line of subchapter text</span></span></span></section><span class="akn-clause" id="cl_5" data-eId="cl_5"><span class="akn-num">5</span><span class="akn-heading">clause heading</span><span class="akn-intro"><span class="akn-p" id="cl_5__intro__p_1" data-eId="cl_5__intro__p_1">First line of clause text</span><span class="akn-p" id="cl_5__intro__p_2" data-eId="cl_5__intro__p_2">Second line of clause text</span></span><span class="akn-subclause" id="cl_5__subcl_1" data-eId="cl_5__subcl_1"><span class="akn-num">1</span><span class="akn-heading">subclause heading</span><span class="akn-content"><span class="akn-p" id="cl_5__subcl_1__p_1" data-eId="cl_5__subcl_1__p_1">First line of subclause text</span><span class="akn-p" id="cl_5__subcl_1__p_2" data-eId="cl_5__subcl_1__p_2">Second line of subclause text</span></span></span></span><span class="akn-division" id="dvs_6" data-eId="dvs_6"><span class="akn-num">6</span><span class="akn-heading">division heading</span><span class="akn-intro"><span class="akn-p" id="dvs_6__intro__p_1" data-eId="dvs_6__intro__p_1">First line of division text</span><span class="akn-p" id="dvs_6__intro__p_2" data-eId="dvs_6__intro__p_2">Second line of division text</span></span><span class="akn-subdivision" id="dvs_6__subdvs_1" data-eId="dvs_6__subdvs_1"><span class="akn-num">1</span><span class="akn-heading">subdivision heading</span><span class="akn-content"><span class="akn-p" id="dvs_6__subdvs_1__p_1" data-eId="dvs_6__subdvs_1__p_1">First line of subdivision text</span><span class="akn-p" id="dvs_6__subdvs_1__p_2" data-eId="dvs_6__subdvs_1__p_2">Second line of subdivision text</span></span></span></span><span class="akn-indent" id="indent_7" data-eId="indent_7"><span class="akn-num">7</span><span class="akn-heading">indent heading</span><span class="akn-content"><span class="akn-p" id="indent_7__p_1" data-eId="indent_7__p_1">First line of indent text</span><span class="akn-p" id="indent_7__p_2" data-eId="indent_7__p_2">Second line of indent text</span></span></span><span class="akn-level" id="level_8" data-eId="level_8"><span class="akn-num">8</span><span class="akn-heading">level heading</span><span class="akn-content"><span class="akn-p" id="level_8__p_1" data-eId="level_8__p_1">First line of level text</span><span class="akn-p" id="level_8__p_2" data-eId="level_8__p_2">Second line of level text</span></span></span><span class="akn-list" id="list_9" data-eId="list_9"><span class="akn-num">9</span><span class="akn-heading">list heading</span><span class="akn-intro"><span class="akn-p" id="list_9__intro__p_1" data-eId="list_9__intro__p_1">First line of list text</span><span class="akn-p" id="list_9__intro__p_2" data-eId="list_9__intro__p_2">Second line of list text</span></span><span class="akn-sublist" id="list_9__sublist_1" data-eId="list_9__sublist_1"><span class="akn-num">1</span><span class="akn-heading">sublist heading</span><span class="akn-content"><span class="akn-p" id="list_9__sublist_1__p_1" data-eId="list_9__sublist_1__p_1">First line of sublist text</span><span class="akn-p" id="list_9__sublist_1__p_2" data-eId="list_9__sublist_1__p_2">Second line of sublist text</span></span></span></span><span class="akn-paragraph" id="para_10" data-eId="para_10"><span class="akn-num">10</span><span class="akn-heading">paragraph heading</span><span class="akn-intro"><span class="akn-p" id="para_10__intro__p_1" data-eId="para_10__intro__p_1">First line of paragraph text</span><span class="akn-p" id="para_10__intro__p_2" data-eId="para_10__intro__p_2">Second line of paragraph text</span></span><span class="akn-subparagraph" id="para_10__subpara_1" data-eId="para_10__subpara_1"><span class="akn-num">1</span><span class="akn-heading">subparagraph heading</span><span class="akn-content"><span class="akn-p" id="para_10__subpara_1__p_1" data-eId="para_10__subpara_1__p_1">First line of subparagraph text</span><span class="akn-p" id="para_10__subpara_1__p_2" data-eId="para_10__subpara_1__p_2">Second line of subparagraph text</span></span></span></span><section class="akn-part" id="part_11" data-eId="part_11"><h2>Part 11 – part heading</h2>
<span class="akn-intro"><span class="akn-p" id="part_11__intro__p_1" data-eId="part_11__intro__p_1">First line of part text</span><span class="akn-p" id="part_11__intro__p_2" data-eId="part_11__intro__p_2">Second line of part text</span></span><section class="akn-subpart" id="part_11__subpart_1" data-eId="part_11__subpart_1"><h2>1 – subpart heading</h2>
<span class="akn-content"><span class="akn-p" id="part_11__subpart_1__p_1" data-eId="part_11__subpart_1__p_1">First line of subpart text</span><span class="akn-p" id="part_11__subpart_1__p_2" data-eId="part_11__subpart_1__p_2">Second line of subpart text</span></span></section></section><span class="akn-point" id="point_12" data-eId="point_12"><span class="akn-num">12</span><span class="akn-heading">point heading</span><span class="akn-content"><span class="akn-p" id="point_12__p_1" data-eId="point_12__p_1">First line of point text</span><span class="akn-p" id="point_12__p_2" data-eId="point_12__p_2">Second line of point text</span></span></span><span class="akn-proviso" id="proviso_13" data-eId="proviso_13"><span class="akn-num">13</span><span class="akn-heading">proviso heading</span><span class="akn-content"><span class="akn-p" id="proviso_13__p_1" data-eId="proviso_13__p_1">First line of proviso text</span><span class="akn-p" id="proviso_13__p_2" data-eId="proviso_13__p_2">Second line of proviso text</span></span></span><span class="akn-rule" id="rule_14" data-eId="rule_14"><span class="akn-num">14</span><span class="akn-heading">rule heading</span><span class="akn-intro"><span class="akn-p" id="rule_14__intro__p_1" data-eId="rule_14__intro__p_1">First line of rule text</span><span class="akn-p" id="rule_14__intro__p_2" data-eId="rule_14__intro__p_2">Second line of rule text</span></span><span class="akn-subrule" id="rule_14__subrule_1" data-eId="rule_14__subrule_1"><span class="akn-num">1</span><span class="akn-heading">subrule heading</span><span class="akn-content"><span class="akn-p" id="rule_14__subrule_1__p_1" data-eId="rule_14__subrule_1__p_1">First line of subrule text</span><span class="akn-p" id="rule_14__subrule_1__p_2" data-eId="rule_14__subrule_1__p_2">Second line of subrule text</span></span></span></span><section class="akn-section" id="sec_15" data-eId="sec_15"><h3>15 section heading</h3>
<span class="akn-intro"><span class="akn-p" id="sec_15__intro__p_1" data-eId="sec_15__intro__p_1">First line of section text</span><span class="akn-p" id="sec_15__intro__p_2" data-eId="sec_15__intro__p_2">Second line of section text</span></span><section class="akn-subsection" id="sec_15__subsec_1" data-eId="sec_15__subsec_1"><span class="akn-num">1</span><span class="akn-content"><span class="akn-p" id="sec_15__subsec_1__p_1" data-eId="sec_15__subsec_1__p_1">First line of subsection text</span><span class="akn-p" id="sec_15__subsec_1__p_2" data-eId="sec_15__subsec_1__p_2">Second line of subsection text</span></span></section></section><span class="akn-title" id="title_16" data-eId="title_16"><span class="akn-num">16</span><span class="akn-heading">title heading</span><span class="akn-intro"><span class="akn-p" id="title_16__intro__p_1" data-eId="title_16__intro__p_1">First line of title text</span><span class="akn-p" id="title_16__intro__p_2" data-eId="title_16__intro__p_2">Second line of title text</span></span><span class="akn-subtitle" id="title_16__subtitle_1" data-eId="title_16__subtitle_1"><span class="akn-num">1</span><span class="akn-heading">subtitle heading</span><span class="akn-content"><span class="akn-p" id="title_16__subtitle_1__p_1" data-eId="title_16__subtitle_1__p_1">First line of subtitle text</span><span class="akn-p" id="title_16__subtitle_1__p_2" data-eId="title_16__subtitle_1__p_2">Second line of subtitle text</span></span></span></span><span class="akn-tome" id="tome_17" data-eId="tome_17"><span class="akn-num">17</span><span class="akn-heading">tome heading</span><span class="akn-content"><span class="akn-p" id="tome_17__p_1" data-eId="tome_17__p_1">First line of tome text</span><span class="akn-p" id="tome_17__p_2" data-eId="tome_17__p_2">Second line of tome text</span></span></span><span class="akn-transitional" id="transitional_18" data-eId="transitional_18"><span class="akn-num">18</span><span class="akn-heading">transitional heading</span><span class="akn-content"><span class="akn-p" id="transitional_18__p_1" data-eId="transitional_18__p_1">First line of transitional text</span><span class="akn-p" id="transitional_18__p_2" data-eId="transitional_18__p_2">Second line of transitional text</span></span></span></span></article></span>
  </la-akoma-ntoso>
`;
Structure.args = {
  class: 'show-structure'
};
