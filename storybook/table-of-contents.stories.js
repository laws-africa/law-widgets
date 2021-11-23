import { html } from "lit-html";
import { TableOfContents} from '../dist/collection/components/table-of-contents/table-of-contents';
import { argTypesForComponent } from "./utils";
import { ref, createRef } from 'lit-html/directives/ref';
import items from './toc.json';

export default {
  title: 'Library/la-table-of-contents',
  argTypes: argTypesForComponent(TableOfContents)
};

const Template = (props) => html`<la-table-of-contents .items='${items}'>`;

export const Default = Template.bind({});
Default.args = {};

export const TitleFilter = () => {
  const componentRef = createRef();
  const handleChange = (e) => {
    componentRef.value.titleFilter = e.target.value;
  };

  return html`
    <div>
      <div>
        <input placeholder="search by title" @input="${handleChange}" />
      </div>
      <br />
      <la-table-of-contents .items='${items}' ${ref(componentRef)}>
    </div>
  `;
};

export const ExpandCollapseAll = () => {
  const componentRef = createRef();
  const expandAll = () => { componentRef.value.expandAll(); };
  const collapseAll = () => { componentRef.value.collapseAll(); };
  return html`
    <div>
      <div>
        <button @click='${expandAll}'>Expand All</button>
        <button @click='${collapseAll}'>Collapse All</button>
      </div>
      <br />
      <la-table-of-contents .items='${items}' ${ref(componentRef)}>
    </div>
  `;
};

export const CustomExpandCollapseIcons = () => html`
  <la-table-of-contents .items='${items}'>
    <span slot="expand-icon">➡️</span>
    <span slot="collapse-icon">⬇️</span>
  </la-table-of-contents>
`;

export const PrependAndAppend = () => html`
  <la-table-of-contents .items='${items}'>
    <span slot="prepend">🚨️</span>
    <span slot="append">🤷🏾</span>
  </la-table-of-contents>
`;


export const TocItemRenderedEvtUsage = () => {
  const handleItemRender = (e) => {
    if(e.detail.append_icon) {
      e.target.appendHtml = e.detail.append_icon;
    }
  }
  return html`
    <la-table-of-contents .items='${items}' @itemRendered=${handleItemRender}/>
  `
}
