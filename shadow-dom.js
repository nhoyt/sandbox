/*
*   shadow-dom.js
*/

const template = document.createElement('template');
template.innerHTML = `
  <div>
    <h1>H1 in Shadow DOM</h1>
    <h2>H2 in Shadow DOM</h2>
    <slot name="slot-one"></slot>
    <slot name="slot-two"><h2>H2 in Shadow DOM: Slot Two with Fallback Content</h2></slot>
    <slot></slot>
    <h3>H3 in Shadow DOM</h3>
  </div>
`;

class ShadowDOMTest extends HTMLElement {
  constructor () {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('shadow-dom-test', ShadowDOMTest);
