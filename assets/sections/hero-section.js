import { LitElement, html, css } from "lit";
import { animate } from "../styles/animate-style";
import { section } from "../styles/section-style";

export class HeroSection extends LitElement {
  static styles = [
    animate,
    section,
    css`
      :host {
        --animate-delay: 0.3s;
      }

      section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      span {
        display: inline-block;
      }

      .vanguarda {
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
        opacity: 0.75;

        position: absolute;
        right: -72px;
        top: -39px;
        z-index: 10;
      }

      img {
        height: 100%;
      }

      app-paragrafo {
        font-size: 1.25rem;
      }

      swiper-container {
        width: 100%;
        height: 100%;
      }

      app-quadro {
        background-color: transparent;
      }

      @keyframes slideInUp {
        0% {
          transform: translate3d(0px, 200%, 0px);
          visibility: visible;
        }
        100% {
          transform: translateZ(0px);
        }
      }

      @media (min-width: 768px) {
        app-logo {
          width: 220px;
          height: 220px;
        }
      }

      @media (min-width: 1024px) {
        app-paragrafo {
          display: none;
        }

        app-titulo, app-quadro {
          width: 80%;
          margin: 0 auto;
        }
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-titulo>
          <h1>
            <span
              class="animate__animated animate__fast"
              data-toggle-class="animate__slideInUp"
              >Barbearia</span
            >
            <br />
            <span
              class="vanguarda animate__animated animate__fast animate__delay-1s"
              data-toggle-class="animate__slideInUp"
              >Vanguarda</span
            >
          </h1>
          <app-logo></app-logo>
        </app-titulo>
        <app-quadro>
          <swiper-container
            loop="true"
            autoplay="true"
            speed="5000"
            disabled-on-interaction="false"
            effect="coverflow"
            simulate-touch="false"
            centered-slides="true"
            coverflow-effect-rotate="50"
            coverflow-effect-stretch="0"
            coverflow-effect-depth="100"
            coverflow-effect-modifier="1"
            coverflow-effect-slide-shadows="true"
          >
            <swiper-slide>
              <img src="slider-1.jpg" alt="Imagem slider 1" />
            </swiper-slide>
            <swiper-slide>
              <img loading="lazy" src="slider-2.jpg" alt="Imagem slider 2" />
            </swiper-slide>
            <swiper-slide>
              <img loading="lazy" src="slider-3.jpg" alt="Imagem slider 3" />
            </swiper-slide>
          </swiper-container>
        </app-quadro>
      </section>
      <app-paragrafo class="animate__animated animate__delay-5s" data-toggle-class="animate__fadeIn">
        Obtenha um estilo impecável, do cabelo à barba.
      </app-paragrafo>
    `;
  }
}
customElements.define("hero-section", HeroSection);
