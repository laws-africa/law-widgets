import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'la-gutter-item',
  styleUrl: 'gutter-item.scss'
})
export class GutterItem {

  /**
   * CSS selector for the anchor element in the enclosing gutter's `<la-akoma-ntoso>` element.
   */
  @Prop() anchor?: string;
}
