import { Component, h } from '@stencil/core';

@Component({
  tag: 'la-akoma-ntoso',
  styleUrl: 'la-akoma-ntoso.scss'
})
export class AkomaNtoso {
  render() {
    return (
      <div class="akoma-ntoso">
        <slot></slot>
      </div>
    );
  }
}
