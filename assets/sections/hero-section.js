import { LitElement, html, css } from "lit";

export class HeroSection extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        height: 100%;

        display: flex; /* Auto layout */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4.375rem;
      }

      section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      span {
        color: var(--tom-3);
        font-weight: 900;
      }

      app-titulo {
        display: flex;
        align-items: center;
        align-self: stretch;

        position: relative;
      }

      app-logo {
        width: 160px;
        height: 160px;

        position: absolute;
        right: -72px;
        top: -39px;
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-titulo>
          <h1>Barbearia <span>Vanguarda</span></h1>
          <app-logo></app-logo>
        </app-titulo>
        <app-quadro></app-quadro>
      </section>
      <app-paragrafo>
        Obtenha um estilo impecável, do cabelo à barba.
      </app-paragrafo>
    `;
  }
}
customElements.define("hero-section", HeroSection);
