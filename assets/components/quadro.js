import { LitElement, html, css } from "lit";

export class Quadro extends LitElement {
    
  static styles = [
    css`
      :host {
        display: flex;
        width: 93vw;
        max-width: 768px;
        height: auto;
        justify-content: center;
        align-items: center;

        border-radius: 8px;
        background: #d9d9d9;
        box-shadow: 0px 24px 34px 0px rgba(0, 0, 0, 0.25);

        aspect-ratio: 167 / 130;
        overflow: hidden;
      }

      @media (min-width: 1024px) {

        :host {
          aspect-ratio: 167 / 112;
        }
        
      }
    `,
  ];

  render() {
    return html`<slot>Coloque uma imagem</slot>`;
  }
}
customElements.define("app-quadro", Quadro);
