import { LitElement, html, css } from "lit";

export class HomePage extends LitElement {
  render() {
    return html`
      <hero-section></hero-section>
      <a-barbearia-section></a-barbearia-section>
      <servicos-section></servicos-section>
      <contato-section id="contato"></contato-section>
      <unidades-section id="unidades"></unidades-section>
    `;
  }
}
customElements.define("home-page", HomePage);
