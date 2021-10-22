import { Component, Element, Prop } from '@stencil/core';
import { getAkomaNtosoElement } from "../../utils/linking";
import { GutterLayout } from "./layout";
import debounce from 'lodash/debounce';

@Component({
  tag: 'la-gutter',
  styleUrl: 'gutter.scss'
})
export class Gutter {
  // The akn content element being decorated
  protected akomaNtosoElement?: HTMLElement | null;

  protected layout?: GutterLayout;
  protected observer?: ResizeObserver;

  /**
   * CSS selector for the la-akoma-ntoso element that will be decorated. Defaults
   * to the containing la-akoma-ntoso element, if any, otherwise the first
   * `la-akoma-ntoso` element on the page.
   */
    // TODO: should  we be watching this? What if it changes?
  @Prop() akomaNtoso?: string;

  @Element() el!: HTMLElement;

  componentWillLoad() {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);
    this.setupLayout();
  }

  componentDidLoad() {
    // TODO: watch children
    // TODO: watch akn
    this.setupLayout();
    this.runLayout();
  }

  setupLayout() {
    if (this.akomaNtosoElement) {
      this.layout = new GutterLayout(this.akomaNtosoElement);

      if (window.ResizeObserver) {
        if (this.observer) this.observer.disconnect();
        const delay = 250;

        // add observer to re-layout when the containing document changes size, which implies marker positions will change
        this.observer = new ResizeObserver(debounce(this.runLayout.bind(this), delay));
        this.observer.observe(this.akomaNtosoElement);
      }
    }
  }

  runLayout() {
    if (this.layout) {
      // const activeMarker = this.markers.find(m => m.item === this.activeItem);
      this.layout.layout([...this.el.querySelectorAll('la-gutter-item')]);
    }
  }
}
