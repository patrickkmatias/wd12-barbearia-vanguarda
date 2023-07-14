import { LitElement, html, css } from "lit";

export class Titulo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: var(--cor-secundaria, #665e57);
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
        font-family: var(--fonte-titulo);
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 48px */
      }

      ::slotted(*) {
        font-size: inherit;
        margin: 0;
      }

    `,
  ];

  render() {
    return html`<slot>Título</slot>`;
  }
}
customElements.define("app-titulo", Titulo);
