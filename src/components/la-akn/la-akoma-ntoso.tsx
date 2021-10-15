import { Component, Element, h, Prop } from '@stencil/core';
import tippy from 'tippy.js';

@Component({
  tag: 'la-akoma-ntoso',
  styleUrl: 'la-akoma-ntoso.scss',
  shadow: false,
})
export class LaAkomaNtoso {
  /**
   * If true, term definition pop ups that show above the term on hover will be hidden
   */
  @Prop() hideDefinitionPopups: boolean = false;

  @Element() el;
  componentDidLoad() {
    // tag term definition containers
    this.el.querySelectorAll('.akn-def[data-refersto]').forEach(def => {
      const term = def.getAttribute('data-refersto').replace('#', '');
      const closest = def.closest('.akn-p, .akn-subsection, .akn-section, .akn-blockList');
      closest.dataset.defines = def.dataset.refersto;
      closest.setAttribute('id', `defn-${term}`);
    });

    // link term definitions
    this.el.querySelectorAll('.akn-term[data-refersto]').forEach(term => {
      term.classList.add('term-link');
      term.addEventListener('click', e => {
        e.preventDefault();
        // jump to term definition
        window.location.hash = `#defn-${term.dataset.refersto.replace('#', '')}`;
        const termDefElement = this.el.querySelector(`[data-defines='${term.dataset.refersto}']`);
        termDefElement.classList.toggle('visited');
        window.setTimeout(() => {
          termDefElement.classList.toggle('visited');
        }, 400);
      });
    });

    if (!this.hideDefinitionPopups) {
      // show definition popups
      const getContent = (termElement: HTMLElement) => {
        const termId = termElement.dataset.refersto;
        const selector = `[data-defines="${termId}"]`;
        const element = this.el.querySelector(selector);
        return `<div>
          <div class="tippy-content__header">${termElement.innerText}</div>
          <div class="tippy-content__body">${element.outerHTML}</div>
        </div>`;
      };
      const toolTipsContainer = document.createElement('div');
      toolTipsContainer.classList.add('la-akn-tooltip-container');
      document.body.appendChild(toolTipsContainer);
      this.el.querySelectorAll('.akn-term').forEach(termElement => {
        tippy(termElement, {
          allowHTML: true,
          content: getContent(termElement),
          appendTo: toolTipsContainer,
        });
      });
    }
  }

  render() {
    return (
      <div class="akoma-ntoso">
        <slot></slot>
      </div>
    );
  }
}
