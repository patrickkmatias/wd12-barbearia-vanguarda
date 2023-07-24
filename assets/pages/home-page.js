import { LitElement, html, css } from "lit";

export class HomePage extends LitElement {
  render() {
    return html`
      <hero-section></hero-section>
      <a-barbearia-section></a-barbearia-section>
      <servicos-section></servicos-section>
      <contato-section></contato-section>
      <unidades-section></unidades-section>
    `;
  }
}
customElements.define("home-page", HomePage);
