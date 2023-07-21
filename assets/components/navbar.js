import { LitElement, html, css } from "lit";

export class Navbar extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        height: 96px;
        box-sizing: border-box;

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;

        position: fixed;
        top: 0;
        z-index: 100;
        mix-blend-mode: difference;
        color: white;

        transition: top 1s;
      }

      app-logo {
        background-color: white;
      }

      feather-icon {
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`
      <app-logo></app-logo>
      <feather-icon icon="menu"></feather-icon>
    `;
  }
}
customElements.define("app-navbar", Navbar);
