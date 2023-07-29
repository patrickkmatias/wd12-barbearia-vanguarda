import { LitElement, html, css } from "lit";

export class Card extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;
      }

      .titulo,
      ::slotted(app-paragrafo:first-child) {
        font-weight: 700;
        font-size: 1.25rem;
        color: var(--tom-3, #664e38);
      }

      .descricao,
      ::slotted(app-paragrafo) {
        width: 150px;
        font-size: 0.875rem;
      }

      app-quadro {
        width: 80px;
        height: 80px;
        box-shadow: rgba(0, 0, 0, 0.25) 1px 6px 14px 0px;
      }

      ::slotted(img) {
        width: 100%;
      }
    `,
  ];

  render() {
    return html`
      <article>
        <slot name="titulo">
          <app-paragrafo class="titulo">Corte</app-paragrafo>
        </slot>
        <slot name="descricao">
          <app-paragrafo class="descricao">
            Social, degradê, surfista, militar, razor part, undercut
          </app-paragrafo>
        </slot>
      </article>
      <app-quadro>
        <slot name="imagem">Coloque uma imagem</slot>
      </app-quadro>
    `;
  }
}
customElements.define("app-card", Card);
