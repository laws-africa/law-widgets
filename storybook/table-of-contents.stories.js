import { html } from "lit-html"
import '../dist/collection/components/table-of-contents/table-of-contents';
import { ref, createRef } from 'lit-html/directives/ref';

export default {
  title: 'Library/LaTableOfContents',
  argTypes: {
    titleFilter: {
      description: "value to filter items by item title",
      control: { type: null },
      defaultValue: { summary: "" }
    },
    items: {
      description: "JSON value or string value parsed to array of items used to build the table of contents. Each item must have a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).",
      control: { type: null },
      defaultValue: { summary: "[]" }
    }
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

export const Default = () => html`<la-table-of-contents .items='${items}'>`;


export const TitleFilter = () => {
  const componentRef = createRef();
  const handleChange = (e) => {
    componentRef.value.titleFilter = e.target.value;
  }
  return html`
    <div>
      <div>
        <input placeholder='search by title' @change="${handleChange}" />
      </div>
      <br />
      <la-table-of-contents .items='${items}' ${ref(componentRef)}>
    </div>
  `
}

export const ExpandCollapseAll = () => {
  const componentRef = createRef();
  const expandAll = () => { componentRef.value.expandAll() };
  const collapseAll = () => { componentRef.value.collapseAll() };
  return html`
    <div>
      <div>
        <button @click='${expandAll}'>Expand All</button>
        <button @click='${collapseAll}'>Collapse All</button>
      </div>
      <br />
      <la-table-of-contents .items='${items}' ${ref(componentRef)}>
    </div>
  `
}

export const CustomExpandCollapseIcons = () => {
  return html`
    <div>
      <la-table-of-contents .items='${items}'>
        <span slot='expand-icon'>➡️</span>
        <span slot='collapse-icon'>⬇️</span>
      </la-table-of-contents>
    </div>`
}

export const PrependAndAppend = () => {
  return html`
    <div>
      <la-table-of-contents .items='${items}'>
        <span slot='prepend'>🚨️</span>
        <span slot='append'>🤷🏾</span>
      </la-table-of-contents>
    </div>`
}



