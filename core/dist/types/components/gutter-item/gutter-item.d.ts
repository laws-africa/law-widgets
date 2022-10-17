import type { EventEmitter } from '../../stencil-public-runtime';
export declare class GutterItem {
  /**
   * CSS selector for the anchor element or HTMLElement in the enclosing gutter's `<la-akoma-ntoso>` element.
   */
  anchor?: string | HTMLElement;
  /**
   * Indicates that this is the active item in the gutter. Only one item can be active at a time.
   */
  active: boolean;
  /**
   * Event emitted when the state (`active`) of the item changes. Used by `la-gutter` to re-layout its items.
   */
  laItemChanged: EventEmitter<void>;
  activeChanged(): void;
  anchorChanged(): void;
  onClick(): void;
}
