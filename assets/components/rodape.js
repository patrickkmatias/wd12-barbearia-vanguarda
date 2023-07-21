import { LitElement, html, css } from "lit";

export class Rodape extends LitElement {
  static styles = [
    css`
      :host {
        display: block;

        font-family: var(--fonte-titulo);
        font-size: 0.75rem;
        color: white;
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 2rem;
        font-size: 0.5rem;
        background-color: color-mix(in srgb, black 40%, var(--tom-3));
      }

      footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: color-mix(in srgb, black 20%, var(--tom-3));
        padding: 2rem;
      }

      nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;
      }

      app-logo {
        width: 4rem;
        height: 4rem;
        background-color: white;
        opacity: 0.9;
      }

      a {
        color: white;
        text-decoration: none;
        opacity: 0.9;
      }
    `,
  ];

  render() {
    return html`
      <footer>
        <app-logo></app-logo>
        <nav>
          <a href="">Unidades</a>
          <a href="">Contato</a>
          <a href="servicos">Serviços</a>
          <a href="a-barbearia">A Barbearia</a>
          <a href="/">Home</a>
        </nav>
      </footer>

      <span>
        © Barbearia Vanguarda - Todos os direitos reservados desde 2023.
      </span>
    `;
  }
}
customElements.define("app-rodape", Rodape);
