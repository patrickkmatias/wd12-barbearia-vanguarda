import { LitElement, html, css } from "lit";
import { animate } from "../styles/animate-style";
import { section } from "../styles/section-style";

export class HeroSection extends LitElement {
  static styles = [
    animate,
    section,
    css`
      section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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
        z-index: 10;
      }

      h1 {
        overflow: hidden;
        padding-bottom: 0.5rem;
      }

      app-logo {
        width: 160px;
        height: 160px;
        opacity: 0.75;

        position: absolute;
        right: -72px;
        top: -39px;
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

      .animate__animated {
        display: inline-block;
        --animate-delay: 0.3s;
      }

      @keyframes slideInUp {
        0% {
          transform: translate3d(0px, 200%, 0px);
          visibility: visible;
        }

        100% {
          transform: translate3d(0px, 0px, 0px);
        }
      }

      app-quadro {
        background-color: transparent;
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
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-titulo>
          <h1>
            <span class="animate__animated animate__slideInUp animate__fast">Barbearia</span>
            <br />
            <span
              class="vanguarda animate__animated animate__slideInUp animate__fast animate__delay-1s"
              >Vanguarda</span
            >
          </h1>
          <app-logo></app-logo>
        </app-titulo>
        <app-quadro>
          <swiper-container
            effect="coverflow"
            grab-cursor="true"
            centered-slides="true"
            slides-per-view="auto"
            coverflow-effect-rotate="50"
            coverflow-effect-stretch="0"
            coverflow-effect-depth="100"
            coverflow-effect-modifier="1"
            coverflow-effect-slide-shadows="true"
            autoplay="true"
            autoplay-disable-on-interaction="false"
          >
            <swiper-slide>
              <img loading="lazy" src="slider-1.jpg" alt="Imagem slider 1" />
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
      <app-paragrafo class="animate__animated animate__fadeIn animate__delay-5s">
        Obtenha um estilo impecável, do cabelo à barba.
      </app-paragrafo>
    `;
  }
}
customElements.define("hero-section", HeroSection);
