import { html } from "lit-html"
import '../../../dist/collection/components/table-of-contents-controller/table-of-contents-controller';
import "./storybook.css";

export default {
  title: 'Library/LaTableOfContentsController',
  argTypes: {
    items: {
      description: "JSON value or string value parsed to array of items used to build the table of contents. Each item must have a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).",
      control: { type: null },
      defaultValue: { summary: "[]" }
    },
    titleFilterPlaceholder: {
      description: "Placeholder for search title filter",
      control: { type: null },
      defaultValue: { summary: "Search by title" }
    },
    expandAllBtnClasses: {
      description: "Additional classes added to Expand all button",
      control: { type: null },
      defaultValue: { summary: "" }
    },
    collapseAllBtnClasses: {
      description: "Additional classes added to Collapse all button",
      control: { type: null },
      defaultValue: { summary: "" }
    },
    searchFilterInputClasses: {
      description: "Additional CSS classes added to the search filter input",
      control: { type: null },
      defaultValue: { summary: "" }
    },
  },
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



