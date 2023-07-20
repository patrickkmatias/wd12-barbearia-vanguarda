import { LitElement, css, html } from "lit";

export class Bolinhas extends LitElement {

  static get properties() {
    return {
      formato: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        width: 100px;
        height: 100px;

        display: block;
      }

      .inteira {
        -webkit-mask: url("bolinhas.svg") no-repeat center;
        mask: url("bolinhas.svg") no-repeat center;
      }

      .fila-preenchida {
        -webkit-mask: url("fila-bolinhas-preenchida.svg") no-repeat center;
        mask: url("fila-bolinhas-preenchida.svg") no-repeat center;
      }

      .fila-vazada {
        -webkit-mask: url("fila-bolinhas-vazada.svg") no-repeat center;
        mask: url("fila-bolinhas-vazada.svg") no-repeat center;
      }

      .metade {
        -webkit-mask: url("bolinhas-metade.svg") no-repeat center;
        mask: url("bolinhas-metade.svg") no-repeat center;
      }

      .bolinhas {
        width: 100%;
        height: 100%;

        -webkit-mask-size: 100%;
        mask-size: 100%;
        background-color: var(--cor-bolinhas, black);
      }
    `,
  ];

  /**
   * Define o formato das bolinhas
   * @returns Classe CSS do formato
   */
   definirFormato() {
    if (this.formato === "fila-preenchida") {
      return "fila-preenchida";
    }
    if (this.formato === "fila-vazada") {
      return "fila-vazada";
    }
    if (this.formato === "metade") {
      return "metade";
    }
    return "inteira";
  }

  render() {
    return html` <div class=${`bolinhas ${this.definirFormato()}`} ></div> `;
  }
}
customElements.define("app-bolinhas", Bolinhas);
