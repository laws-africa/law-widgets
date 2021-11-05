import { html } from "lit-html";
import { TableOfContentsController } from '../dist/collection/components/table-of-contents-controller/table-of-contents-controller';
import { argTypesForComponent } from "./utils";
import items from './toc.json';
import "./storybook.css";

export default {
  title: 'Library/la-table-of-contents-controller',
  argTypes: argTypesForComponent(TableOfContentsController)
};

const Template = (props) =>
  html`<la-table-of-contents-controller
    .items='${items}'
    .expandAllBtnClasses=${props.expandAllBtnClasses}
    .collapseAllBtnClasses=${props.collapseAllBtnClasses}
    .searchFilterInputClasses=${props.searchFilterInputClasses}
    .titleFilterPlaceholder=${props.titleFilterPlaceholder}
  >`;

export const Default = Template.bind({});
Default.args = {};

export const TitleFilterPlaceholder = Template.bind({});
TitleFilterPlaceholder.args = {
  titleFilterPlaceholder: "Type in me!"
};

export const ExpandCollapseAllClasses = Template.bind({});
ExpandCollapseAllClasses.args = {
  expandAllBtnClasses: 'custom-expand-all-btn',
  collapseAllBtnClasses: 'custom-collapse-all-btn',
};

export const SearchFilterClasses = Template.bind({});
SearchFilterClasses.args = {
  searchFilterInputClasses: 'custom-search-filter'
};
