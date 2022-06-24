import { html } from 'lit-html';
import { AkomaNtosoPortion } from '../dist/collection/components/akoma-ntoso-portion/akoma-ntoso-portion';
import { argTypesForComponent } from './utils';

export default {
  title: 'Library/la-akoma-ntoso-portion',
  argTypes: argTypesForComponent(AkomaNtosoPortion)
};

const Template = (props) => html`
  <la-akoma-ntoso-portion
    .frbrUri="${props.frbrUri}"
    .partner="${props.partner}"
    .provider="${props.provider}"
  ></la-akoma-ntoso-portion>
`;

export const Default = Template.bind({});
Default.args = {
  provider: 'http://localhost:8000/v1'
};
