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
    .titleFilterInputClasses=${props.titleFilterInputClasses}
    .titleFilterPlaceholder=${props.titleFilterPlaceholder}
    .titleFilterClearable=${props.titleFilterClearable}
    .titleFilterClearBtnClasses=${props.titleFilterClearBtnClasses}
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
  titleFilterInputClasses: 'custom-search-filter'
};

export const ClearSearchFilterButton = Template.bind({});
ClearSearchFilterButton.args = {
  titleFilterClearable: true,
}

export const CustomClearFilterButtonIcon = () => {
  return html`<la-table-of-contents-controller .titleFilterClearable=${true} .items='${items}'>
                  <span slot='clear-title-filter-icon'>
                    ❌
                  </span>
              </la-table-of-contents-controller>`
}

export const ClearSearchFilterButtonWithClass = Template.bind({});
ClearSearchFilterButtonWithClass.args = {
  titleFilterClearable: true,
  titleFilterClearBtnClasses: "clear-btn"
}
