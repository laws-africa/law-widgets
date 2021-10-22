import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'la-gutter-item',
  styleUrl: 'gutter-item.scss'
})
export class GutterItem {
  @Prop() anchor?: string;
}
