import { html } from "lit-html"
import '../../../dist/collection/components/table-of-contents-controller/table-of-contents-controller';
import "./storybook.css";

export default {
  title: 'Library/LaTableOfContentsController'
};

const items = [
  {
    title: 'Ch. 1 – ',
    children: [
      {
        title: 'Part B',
      },
    ],
  },
  {
    title: 'Ch. 2 – ',
  }
];

export const Default = () => html`<la-table-of-contents-controller .items='${items}'>`;

export const TitleFilterPlaceholder = () => {
  return html`
      <la-table-of-contents-controller
        title-filter-placeholder='Custom title filter'
        .items='${items}'
      >
    </div>
  `
}

export const ExpandCollapseAllClasses = () => html`
      <la-table-of-contents-controller
        expand-all-btn-classes='custom-expand-all-btn'
        collapse-all-btn-classes='custom-collapse-all-btn'
        .items='${items}'
      >
    </div>
`

export const TitleFilterClasses = () => html`
      <la-table-of-contents-controller
        search-filter-input-classes='custom-title-filter'
        .items='${items}'
      >
    </div>
`



