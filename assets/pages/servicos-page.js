import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class ServicosPage extends LitElement {
  static styles = [
    section,
    css`
      :host {
        height: 100%;
        align-items: flex-start;
        gap: 2rem;
      }

      app-bolinhas {
        --cor-bolinhas: var(--tom-3);

        width: 270px;
        height: 23px;
      }

      /* Seleciona o primeiro app-bolinhas */
      app-bolinhas:first-child {
        transform: rotate(180deg);
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        gap: 10px;
      }

      .subtitulo {
        font-size: 1.25rem;
        width: 270px;
      }

      section {
        height: 329px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex-shrink: 0;
        align-self: stretch;
      }
    `,
  ];

  render() {
    return html`
      <app-titulo>Serviços</app-titulo>
      <app-paragrafo class="subtitulo"
        >Estilo, cuidado e excelência em cada serviço.</app-paragrafo
      >
      <div>
        <app-bolinhas formato="fila-vazada"></app-bolinhas>
        <app-bolinhas formato="fila-preenchida"></app-bolinhas>
      </div>
      <section>
        <app-card>
          <img slot="imagem" src="servicos-2.jpg" />
        </app-card>
        <app-card>
          <app-paragrafo slot="titulo">Barba</app-paragrafo>
          <img slot="imagem" src="servicos-2.jpg" />
        </app-card>
        <app-card>
          <app-paragrafo slot="titulo">Progressiva</app-paragrafo>
          <img slot="imagem" src="servicos-2.jpg" />
        </app-card>
      </section>
    `;
  }
}
customElements.define("servicos-page", ServicosPage);
