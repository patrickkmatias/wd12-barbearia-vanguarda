import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class ServicosSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        padding: 2rem 0;
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
        gap: 10px;
      }

      span {
        color: var(--tom-3, #664e38);
        font-weight: 600; /* SemiBold */
      }

      .titulo {
        width: 270px;
      }

      section {
        display: flex;
        align-items: center;
        gap: 36px;
        align-self: stretch;
      }

      aside {
        display: flex;
        padding: 96px 0px 8px 0px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
      }

      article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
      }

      article app-paragrafo:first-child {
        font-weight: 700;
        color: var(--tom-3, #664e38);
      }

      .descricao {
        width: 108px;
        font-size: 0.875rem;
      }

      img {
        height: 120%;
      }

      app-quadro {
        width: 165px;
        height: 320px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo class="titulo">
        Estilo, cuidado e excelência em cada <span>corte</span>.
      </app-paragrafo>

      <section>
        <app-quadro>
          <img loading="lazy" src="servicos-1.jpg" alt="Imagem serviços 1" />
        </app-quadro>

        <aside>
          <article>
            <app-paragrafo>Corte</app-paragrafo>
            <app-paragrafo class="descricao"
              >Social, degradê, surfista, militar, razor part,
              undercut</app-paragrafo
            >
          </article>

          <app-botao><a href="servicos">Ver mais</a></app-botao>
        </aside>
      </section>

      <div>
        <app-bolinhas formato="fila-vazada"></app-bolinhas>
        <app-bolinhas formato="fila-preenchida"></app-bolinhas>
      </div>
    `;
  }
}
customElements.define("servicos-section", ServicosSection);
