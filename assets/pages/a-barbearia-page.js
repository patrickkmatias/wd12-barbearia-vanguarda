import { LitElement, html, css } from 'lit';

export class ABarbeariaPage extends LitElement {
    static styles = [
        css`
            a-barbearia-section {
                --display-botao: none;
            }
        `
    ];

    render() {
        return html`
        <a-barbearia-section></a-barbearia-section>
        `;
    }
}
customElements.define('a-barbearia-page', ABarbeariaPage);
