/*
*   nav-menu.js
*/

const templateNavMenu = document.createElement('template');
templateNavMenu.innerHTML = `
<nav>
  <ul>
    <slot></slot>
  </ul>
</nav>
`;

class NavMenu extends HTMLElement {
  constructor () {
    super();
    const template = templateNavMenu;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback () {
    const slot = this.shadowRoot.querySelector('slot');
    const children = slot.assignedElements();
    for (const elem of children) {
      console.log(`elem: ${elem.tagName}`);
    }
  }
}

customElements.define('nav-menu', NavMenu);

// ----------------------------------------------------------------

const templateMenuItem = document.createElement('template');
templateMenuItem.innerHTML = `
<li>
  <slot></slot>
</li>
`;

class MenuItem extends HTMLElement {
  constructor () {
    super();
    const template = templateMenuItem;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('menu-item', MenuItem);
