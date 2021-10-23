import {Component, Prop, Watch, Event, Listen, EventEmitter} from '@stencil/core';

@Component({
  tag: 'la-gutter-item',
  styleUrl: 'gutter-item.scss'
})
export class GutterItem {

  /**
   * CSS selector for the anchor element in the enclosing gutter's `<la-akoma-ntoso>` element.
   */
  @Prop() anchor?: string;

  /**
   * Indicates that this is the active item in the gutter. Only one item can be active at a time.
   */
  @Prop({reflect: true, mutable: true}) active: boolean = false;

  /**
   * Event emitted when the state (`active`) of the item changes. Used by `la-gutter` to re-layout its items.
   */
  @Event() itemChanged!: EventEmitter<void>;

  @Watch('active')
  activeChanged() {
    this.itemChanged.emit();
  }

  @Listen('click')
  onClick() {
    this.active = true;
  }
}
