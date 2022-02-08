import { Component, Prop, Watch, Event, Listen, EventEmitter } from '@stencil/core';

@Component({
  tag: 'la-gutter-item',
  styleUrl: 'gutter-item.scss'
})
export class GutterItem {
  /**
   * CSS selector for the anchor element or HTMLElement in the enclosing gutter's `<la-akoma-ntoso>` element.
   */
  @Prop() anchor?: string | HTMLElement;

  /**
   * Indicates that this is the active item in the gutter. Only one item can be active at a time.
   */
  @Prop({ reflect: true, mutable: true }) active: boolean = false;

  /**
   * Order number of item against of items in gutter.
   */
  @Prop({ reflect: true }) order: number | undefined;

  /**
   * Event emitted when the state (`active`) of the item changes. Used by `la-gutter` to re-layout its items.
   */
  @Event() laItemChanged!: EventEmitter<void>;

  @Watch('active')
  activeChanged () {
    this.laItemChanged.emit();
  }

  @Watch('anchor')
  anchorChanged () {
    this.laItemChanged.emit();
  }

  @Listen('click')
  onClick () {
    this.active = true;
  }
}
