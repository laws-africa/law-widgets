import { Component, Element, h } from '@stencil/core';

declare global {
  interface Window {
    tippy(selector: string | HTMLElement | NodeList, config: object);
  }
}

@Component({
  tag: 'akoma-ntoso',
  styleUrl: 'akn.scss',
  shadow: true,
})
export class AkomaNtoso {
  @Element() el;
  componentDidLoad() {
    this.tagTermDefContainers();
    this.linkTermDefs();
    this.showDefPopups();
  }

  private tagTermDefContainers() {
    const defs = this.el.querySelectorAll('.akoma-ntoso .akn-def[data-refersto]');
    defs.forEach(def => {
      const term = def.getAttribute('data-refersto').replace('#', '');
      const closest = def.closest('.akn-p, .akn-subsection, .akn-section, .akn-blockList');
      closest.dataset.defines = def.dataset.refsto;
      closest.setAttribute('id', `defn-${term}`);
    });
  }

  linkTermDefs() {
    const terms = this.el.querySelectorAll('.akoma-ntoso .akn-term[data-refersto]');
    terms.forEach(term => {
      term.classList.add('term-link');
      term.addEventListener('click', e => {
        e.preventDefault();
        window.location.hash = `#defn-${term.getAttribute('data-refersto')}`.replace('#', '');
      });
    });
  }

  showDefPopups() {
    const getContent = (termElement: HTMLElement) => {
      const termId = termElement.dataset.refersto;
      console.log(termId);
      const selector = `.akoma-ntoso [data-defines="${termId}"]`;
      console.log(this.el.querySelector(selector));
      return this.el.querySelector(selector).outerHTML;
    };

    const terms = this.el.querySelectorAll('.akn-term');
    terms.forEach(termElement => {
      console.log(getContent(termElement));
      window.tippy(termElement, {
        allowHTML: true,
        content: '<div>Hello old friend</div>',
      });
    });
    // $('.akn-term').popover({
    //   placement: 'top',
    //   trigger: 'hover',
    //   html: true,
    //   template: '<div class="popover term-definition" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body akoma-ntoso"></div></div>',
    //   delay: { show: 500 },
    //   title: function () {
    //     var term_id = $(this).data('refersto');
    //     var term = $('.akn-def[data-refersto="' + term_id + '"]').text();
    //     if (window.ga) ga('send', 'event', 'term-popup', term_id.replace('#', ''));
    //     return term;
    //   },
    //   content: function () {
    //     var term_id = $(this).data('refersto');
    //     return $('.akoma-ntoso [data-defines="' + term_id + '"]')[0].outerHTML;
    //   },
    // });
  }

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    );
  }
}
