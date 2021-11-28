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
    .className=${props.class}
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
    .className=${props.class}
  >
    <span class="akn-akomaNtoso"><span class="akn-statement" data-name="statement"><span class="akn-mainBody"><span class="akn-alinea" id="al_nn_1" data-eid="al_nn_1"><span class="akn-heading">alinea heading</span><span class="akn-content"><span class="akn-p" id="al_nn_1__p_1" data-eid="al_nn_1__p_1">First line of alinea text</span><span class="akn-p" id="al_nn_1__p_2" data-eid="al_nn_1__p_2">Second line of alinea text</span></span></span><section class="akn-article quick-editable" id="art_nn_1" data-eid="art_nn_1"><div class="gutter-actions ig"><a href="#" class="quick-edit"><i class="fas fa-pencil-alt"></i></a></div><h2>Article <br>article heading</h2>
    <span class="akn-content"><span class="akn-p" id="art_nn_1__p_1" data-eid="art_nn_1__p_1">First line of article text</span><span class="akn-p" id="art_nn_1__p_2" data-eid="art_nn_1__p_2">Second line of article text</span></span></section><span class="akn-book" id="book_nn_1" data-eid="book_nn_1"><span class="akn-heading">book heading</span><span class="akn-content"><span class="akn-p" id="book_nn_1__p_1" data-eid="book_nn_1__p_1">First line of book text</span><span class="akn-p" id="book_nn_1__p_2" data-eid="book_nn_1__p_2">Second line of book text</span></span></span><section class="akn-chapter quick-editable" id="chp_nn_1" data-eid="chp_nn_1"><div class="gutter-actions ig"><a href="#" class="quick-edit"><i class="fas fa-pencil-alt"></i></a></div><h2>Chapter <br>chapter heading</h2>
    <span class="akn-intro"><span class="akn-p" id="chp_nn_1__intro__p_1" data-eid="chp_nn_1__intro__p_1">First line of chapter text</span><span class="akn-p" id="chp_nn_1__intro__p_2" data-eid="chp_nn_1__intro__p_2">Second line of chapter text</span></span><span class="akn-subchapter" id="chp_nn_1__subchp_nn_1" data-eid="chp_nn_1__subchp_nn_1"><span class="akn-heading">subchapter heading</span><span class="akn-content"><span class="akn-p" id="chp_nn_1__subchp_nn_1__p_1" data-eid="chp_nn_1__subchp_nn_1__p_1">First line of subchapter text</span><span class="akn-p" id="chp_nn_1__subchp_nn_1__p_2" data-eid="chp_nn_1__subchp_nn_1__p_2">Second line of subchapter text</span></span></span></section><span class="akn-clause" id="cl_nn_1" data-eid="cl_nn_1"><span class="akn-heading">clause heading</span><span class="akn-intro"><span class="akn-p" id="cl_nn_1__intro__p_1" data-eid="cl_nn_1__intro__p_1">First line of clause text</span><span class="akn-p" id="cl_nn_1__intro__p_2" data-eid="cl_nn_1__intro__p_2">Second line of clause text</span></span><span class="akn-subclause" id="cl_nn_1__subcl_nn_1" data-eid="cl_nn_1__subcl_nn_1"><span class="akn-heading">subclause heading</span><span class="akn-content"><span class="akn-p" id="cl_nn_1__subcl_nn_1__p_1" data-eid="cl_nn_1__subcl_nn_1__p_1">First line of subclause text</span><span class="akn-p" id="cl_nn_1__subcl_nn_1__p_2" data-eid="cl_nn_1__subcl_nn_1__p_2">Second line of subclause text</span></span></span></span><section class="akn-division quick-editable" id="dvs_nn_1" data-eid="dvs_nn_1"><div class="gutter-actions ig"><a href="#" class="quick-edit"><i class="fas fa-pencil-alt"></i></a></div><h2>division heading</h2>
    <span class="akn-intro"><span class="akn-p" id="dvs_nn_1__intro__p_1" data-eid="dvs_nn_1__intro__p_1">First line of division text</span><span class="akn-p" id="dvs_nn_1__intro__p_2" data-eid="dvs_nn_1__intro__p_2">Second line of division text</span></span><section class="akn-subdivision quick-editable" id="dvs_nn_1__subdvs_nn_1" data-eid="dvs_nn_1__subdvs_nn_1"><div class="gutter-actions ig"><a href="#" class="quick-edit"><i class="fas fa-pencil-alt"></i></a></div><h2>subdivision heading</h2>
    <span class="akn-content"><span class="akn-p" id="dvs_nn_1__subdvs_nn_1__p_1" data-eid="dvs_nn_1__subdvs_nn_1__p_1">First line of subdivision text</span><span class="akn-p" id="dvs_nn_1__subdvs_nn_1__p_2" data-eid="dvs_nn_1__subdvs_nn_1__p_2">Second line of subdivision text</span></span></section></section><span class="akn-indent" id="indent_nn_1" data-eid="indent_nn_1"><span class="akn-heading">indent heading</span><span class="akn-content"><span class="akn-p" id="indent_nn_1__p_1" data-eid="indent_nn_1__p_1">First line of indent text</span><span class="akn-p" id="indent_nn_1__p_2" data-eid="indent_nn_1__p_2">Second line of indent text</span></span></span><span class="akn-level" id="level_nn_1" data-eid="level_nn_1"><span class="akn-heading">level heading</span><span class="akn-content"><span class="akn-p" id="level_nn_1__p_1" data-eid="level_nn_1__p_1">First line of level text</span><span class="akn-p" id="level_nn_1__p_2" data-eid="level_nn_1__p_2">Second line of level text</span></span></span><span class="akn-list" id="list_nn_1" data-eid="list_nn_1"><span class="akn-heading">list heading</span><span class="akn-intro"><span class="akn-p" id="list_nn_1__intro__p_1" data-eid="list_nn_1__intro__p_1">First line of list text</span><span class="akn-p" id="list_nn_1__intro__p_2" data-eid="list_nn_1__intro__p_2">Second line of list text</span></span><span class="akn-sublist" id="list_nn_1__sublist_nn_1" data-eid="list_nn_1__sublist_nn_1"><span class="akn-heading">sublist heading</span><span class="akn-content"><span class="akn-p" id="list_nn_1__sublist_nn_1__p_1" data-eid="list_nn_1__sublist_nn_1__p_1">First line of sublist text</span><span class="akn-p" id="list_nn_1__sublist_nn_1__p_2" data-eid="list_nn_1__sublist_nn_1__p_2">Second line of sublist text</span></span></span></span><section class="akn-paragraph akn--no-indent quick-editable" id="para_nn_1" data-eid="para_nn_1"><div class="gutter-actions ig"><a href="#" class="quick-edit"><i class="fas fa-pencil-alt"></i></a></div><span class="akn-heading">paragraph heading</span><span class="akn-intro"><span class="akn-p" id="para_nn_1__intro__p_1" data-eid="para_nn_1__intro__p_1">First line of paragraph text</span><span class="akn-p" id="para_nn_1__intro__p_2" data-eid="para_nn_1__intro__p_2">Second line of paragraph text</span></span><section class="akn-subparagraph akn--no-indent" id="para_nn_1__subpara_nn_1" data-eid="para_nn_1__subpara_nn_1"><span class="akn-heading">subparagraph heading</span><span class="akn-content"><span class="akn-p" id="para_nn_1__subpara_nn_1__p_1" data-eid="para_nn_1__subpara_nn_1__p_1">First line of subparagraph text</span><span class="akn-p" id="para_nn_1__subpara_nn_1__p_2" data-eid="para_nn_1__subpara_nn_1__p_2">Second line of subparagraph text</span></span></section></section><section class="akn-part quick-editable" id="part_nn_1" data-eid="part_nn_1"><div class="gutter-actions ig"><a href="#" class="quick-edit"><i class="fas fa-pencil-alt"></i></a></div><h2>Part  – part heading</h2>
    <span class="akn-intro"><span class="akn-p" id="part_nn_1__intro__p_1" data-eid="part_nn_1__intro__p_1">First line of part text</span><span class="akn-p" id="part_nn_1__intro__p_2" data-eid="part_nn_1__intro__p_2">Second line of part text</span></span><section class="akn-subpart quick-editable" id="part_nn_1__subpart_nn_1" data-eid="part_nn_1__subpart_nn_1"><div class="gutter-actions ig"><a href="#" class="quick-edit"><i class="fas fa-pencil-alt"></i></a></div><h2>subpart heading</h2>
    <span class="akn-content"><span class="akn-p" id="part_nn_1__subpart_nn_1__p_1" data-eid="part_nn_1__subpart_nn_1__p_1">First line of subpart text</span><span class="akn-p" id="part_nn_1__subpart_nn_1__p_2" data-eid="part_nn_1__subpart_nn_1__p_2">Second line of subpart text</span></span></section></section><span class="akn-point" id="point_nn_1" data-eid="point_nn_1"><span class="akn-heading">point heading</span><span class="akn-content"><span class="akn-p" id="point_nn_1__p_1" data-eid="point_nn_1__p_1">First line of point text</span><span class="akn-p" id="point_nn_1__p_2" data-eid="point_nn_1__p_2">Second line of point text</span></span></span><span class="akn-proviso" id="proviso_nn_1" data-eid="proviso_nn_1"><span class="akn-heading">proviso heading</span><span class="akn-content"><span class="akn-p" id="proviso_nn_1__p_1" data-eid="proviso_nn_1__p_1">First line of proviso text</span><span class="akn-p" id="proviso_nn_1__p_2" data-eid="proviso_nn_1__p_2">Second line of proviso text</span></span></span><span class="akn-rule" id="rule_nn_1" data-eid="rule_nn_1"><span class="akn-heading">rule heading</span><span class="akn-intro"><span class="akn-p" id="rule_nn_1__intro__p_1" data-eid="rule_nn_1__intro__p_1">First line of rule text</span><span class="akn-p" id="rule_nn_1__intro__p_2" data-eid="rule_nn_1__intro__p_2">Second line of rule text</span></span><span class="akn-subrule" id="rule_nn_1__subrule_nn_1" data-eid="rule_nn_1__subrule_nn_1"><span class="akn-heading">subrule heading</span><span class="akn-content"><span class="akn-p" id="rule_nn_1__subrule_nn_1__p_1" data-eid="rule_nn_1__subrule_nn_1__p_1">First line of subrule text</span><span class="akn-p" id="rule_nn_1__subrule_nn_1__p_2" data-eid="rule_nn_1__subrule_nn_1__p_2">Second line of subrule text</span></span></span></span><section class="akn-section quick-editable" id="sec_nn_1" data-eid="sec_nn_1"><div class="gutter-actions ig"><a href="#" class="quick-edit"><i class="fas fa-pencil-alt"></i></a></div><h3> section heading</h3>
    <span class="akn-intro"><span class="akn-p" id="sec_nn_1__intro__p_1" data-eid="sec_nn_1__intro__p_1">First line of section text</span><span class="akn-p" id="sec_nn_1__intro__p_2" data-eid="sec_nn_1__intro__p_2">Second line of section text</span></span><section class="akn-subsection akn--no-indent" id="sec_nn_1__subsec_nn_1" data-eid="sec_nn_1__subsec_nn_1"><span class="akn-heading">subsection heading</span><span class="akn-content"><span class="akn-p" id="sec_nn_1__subsec_nn_1__p_1" data-eid="sec_nn_1__subsec_nn_1__p_1">First line of subsection text</span><span class="akn-p" id="sec_nn_1__subsec_nn_1__p_2" data-eid="sec_nn_1__subsec_nn_1__p_2">Second line of subsection text</span></span></section></section><span class="akn-title" id="title_nn_1" data-eid="title_nn_1"><span class="akn-heading">title heading</span><span class="akn-intro"><span class="akn-p" id="title_nn_1__intro__p_1" data-eid="title_nn_1__intro__p_1">First line of title text</span><span class="akn-p" id="title_nn_1__intro__p_2" data-eid="title_nn_1__intro__p_2">Second line of title text</span></span><span class="akn-subtitle" id="title_nn_1__subtitle_nn_1" data-eid="title_nn_1__subtitle_nn_1"><span class="akn-heading">subtitle heading</span><span class="akn-content"><span class="akn-p" id="title_nn_1__subtitle_nn_1__p_1" data-eid="title_nn_1__subtitle_nn_1__p_1">First line of subtitle text</span><span class="akn-p" id="title_nn_1__subtitle_nn_1__p_2" data-eid="title_nn_1__subtitle_nn_1__p_2">Second line of subtitle text</span></span></span></span><span class="akn-tome" id="tome_nn_1" data-eid="tome_nn_1"><span class="akn-heading">tome heading</span><span class="akn-content"><span class="akn-p" id="tome_nn_1__p_1" data-eid="tome_nn_1__p_1">First line of tome text</span><span class="akn-p" id="tome_nn_1__p_2" data-eid="tome_nn_1__p_2">Second line of tome text</span></span></span><span class="akn-transitional" id="transitional_nn_1" data-eid="transitional_nn_1"><span class="akn-heading">transitional heading</span><span class="akn-content"><span class="akn-p" id="transitional_nn_1__p_1" data-eid="transitional_nn_1__p_1">First line of transitional text</span><span class="akn-p" id="transitional_nn_1__p_2" data-eid="transitional_nn_1__p_2">Second line of transitional text</span></span></span></span></span></span>
  </la-akoma-ntoso>
`;
Structure.args = {
  class: 'show-structure',
};
