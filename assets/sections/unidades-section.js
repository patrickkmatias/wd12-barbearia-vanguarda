import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class UnidadesSections extends LitElement {
  static styles = [
    section,
    css`
      :host {
        height: fit-content;
        gap: 32px;
        padding: 2rem 0 0 0;
      }

      app-paragrafo {
        width: 270px;
      }

      app-bolinhas {
        display: flex;
        width: 104px;
        height: 208px;
        transform: rotate(90deg);
        align-items: flex-start;
        --cor-bolinhas: var(--tom-3);

        /* Posicionamento */
        position: absolute;
        left: -64px;
        top: -56px;
        z-index: -10;
      }

      swiper-container {
        width: 100vw;
        height: 320px;
      }

      swiper-slide {
        display: flex;
        justify-content: center;
        padding-top: 2rem;
        transition: transform 1s;
      }

      .swiper-slide-active {
        transform: scale(1.2);
      }

      @media (min-width: 768px) {
        app-paragrafo {
          width: fit-content;
          max-width: 500px;
          text-align: center;
        }

        app-mapa {
          width: 400px;
          height: 300px;
        }
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo>
        Nossa sede, localizada na zona leste de São Paulo, e as demais unidades,
        estão abertas todos os dias. <br />
        <br />
        Confira os horários específicos de cada unidade.
      </app-paragrafo>

      <swiper-container loop="true" space-between="-60">
        <swiper-slide>
          <app-mapa></app-mapa>
        </swiper-slide>
        <swiper-slide>
          <app-mapa>
            <img
              slot="imagem"
              src="mapa-2.jpg"
              alt="Imagem da unidade Barbearia Vanguarda 2"
            />
          </app-mapa>
        </swiper-slide>
        <swiper-slide>
          <app-mapa>
            <img
              slot="imagem"
              src="mapa-3.jpg"
              alt="Imagem da unidade Barbearia Vanguarda 3"
            />
          </app-mapa>
        </swiper-slide>
        <swiper-slide>
          <app-mapa>
            <img
              slot="imagem"
              src="mapa-4.jpg"
              alt="Imagem da unidade Barbearia Vanguarda 4"
            />
          </app-mapa>
        </swiper-slide>
      </swiper-container>

      <app-bolinhas formato="metade"></app-bolinhas>
    `;
  }
}
customElements.define("unidades-section", UnidadesSections);
