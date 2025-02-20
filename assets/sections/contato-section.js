import { LitElement, html, css } from "lit";
import { animate } from "../styles/animate-style";
import { section } from "../styles/section-style";

export class ContatoSection extends LitElement {
  static styles = [
    animate,
    section,
    css`
      :host {
        justify-content: space-between;
        gap: 0;
      }

      video {
        height: 100%;
      }

      app-botao,
      div {
        width: 100%;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .whatsapp {
        --button-background: color-mix(in srgb, white 20%, #128c7e);
        --color: color-mix(in srgb, white 40%, var(--tom-1));
      }

      feather-icon, svg {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 5px 8px 5px 0;
      }

      app-quadro {
        z-index: 10;
      }

      @media (min-width: 768px) {
          div {
            flex-direction: row
          }
      }

      @media (min-width: 1024px) {
          div {
            max-width: 80%;
          }

          app-quadro {
            width: 70%;
            height: 60%;
          }

          video {
            width: 100%;
            height: auto;
          }
      }
    `,
  ];

  mensagemWhatsapp() {
    const mensagem = "Olá! Eu olhei o site da barbearia e gostaria de mais informações. Com quem posso falar?"
    return encodeURIComponent(mensagem)
  }

  render() {
    const numeroWhatsapp = "5511981604266"

    return html`
      <app-titulo class="animate__animated animate__delay-1s" data-toggle-class="animate__fadeInUp">Entre em contato conosco</app-titulo>

      <app-quadro>
        <video data-src="video-contato.webm" poster="thumb-contato.webp" autoplay muted loop></video>
      </app-quadro>

      <div class="animate__animated animate__delay-1s" data-toggle-class="animate__fadeIn">
        <app-botao>
          <a href="mailto:contato@barbeariavanguarda.com.br">
            <feather-icon icon="mail"> </feather-icon> Nos envie um email
          </a>
        </app-botao>
        <app-botao class="whatsapp">
          <a href=${`https://wa.me/${numeroWhatsapp}?text=${this.mensagemWhatsapp()}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 25"
              fill="currentColor"
            >
              <path
                d="M19.3547 5.05156C17.3906 3.08281 14.775 2 11.9953 2C6.25781 2 1.58906 6.66875 1.58906 12.4062C1.58906 14.2391 2.06719 16.0297 2.97656 17.6094L1.5 23L7.01719 21.5516C8.53594 22.3813 10.2469 22.8172 11.9906 22.8172H11.9953C17.7281 22.8172 22.5 18.1484 22.5 12.4109C22.5 9.63125 21.3187 7.02031 19.3547 5.05156ZM11.9953 21.0641C10.4391 21.0641 8.91562 20.6469 7.58906 19.8594L7.275 19.6719L4.00313 20.5297L4.875 17.3375L4.66875 17.0094C3.80156 15.6313 3.34688 14.0422 3.34688 12.4062C3.34688 7.63906 7.22812 3.75781 12 3.75781C14.3109 3.75781 16.4812 4.65781 18.1125 6.29375C19.7437 7.92969 20.7469 10.1 20.7422 12.4109C20.7422 17.1828 16.7625 21.0641 11.9953 21.0641ZM16.7391 14.5859C16.4813 14.4547 15.2016 13.8266 14.9625 13.7422C14.7234 13.6531 14.55 13.6109 14.3766 13.8734C14.2031 14.1359 13.7063 14.7172 13.5516 14.8953C13.4016 15.0688 13.2469 15.0922 12.9891 14.9609C11.4609 14.1969 10.4578 13.5969 9.45 11.8672C9.18281 11.4078 9.71719 11.4406 10.2141 10.4469C10.2984 10.2734 10.2562 10.1234 10.1906 9.99219C10.125 9.86094 9.60469 8.58125 9.38906 8.06094C9.17813 7.55469 8.9625 7.625 8.80313 7.61563C8.65313 7.60625 8.47969 7.60625 8.30625 7.60625C8.13281 7.60625 7.85156 7.67188 7.6125 7.92969C7.37344 8.19219 6.70312 8.82031 6.70312 10.1C6.70312 11.3797 7.63594 12.6172 7.7625 12.7906C7.89375 12.9641 9.59531 15.5891 12.2062 16.7188C13.8562 17.4312 14.5031 17.4922 15.3281 17.3703C15.8297 17.2953 16.8656 16.7422 17.0812 16.1328C17.2969 15.5234 17.2969 15.0031 17.2313 14.8953C17.1703 14.7781 16.9969 14.7125 16.7391 14.5859Z"
                fill="currentColor"
              />
              <path
                d="M19.3547 5.05156C17.3906 3.08281 14.775 2 11.9953 2C6.25781 2 1.58906 6.66875 1.58906 12.4062C1.58906 14.2391 2.06719 16.0297 2.97656 17.6094L1.5 23L7.01719 21.5516C8.53594 22.3813 10.2469 22.8172 11.9906 22.8172H11.9953C17.7281 22.8172 22.5 18.1484 22.5 12.4109C22.5 9.63125 21.3187 7.02031 19.3547 5.05156ZM11.9953 21.0641C10.4391 21.0641 8.91562 20.6469 7.58906 19.8594L7.275 19.6719L4.00313 20.5297L4.875 17.3375L4.66875 17.0094C3.80156 15.6313 3.34688 14.0422 3.34688 12.4062C3.34688 7.63906 7.22812 3.75781 12 3.75781C14.3109 3.75781 16.4812 4.65781 18.1125 6.29375C19.7437 7.92969 20.7469 10.1 20.7422 12.4109C20.7422 17.1828 16.7625 21.0641 11.9953 21.0641ZM16.7391 14.5859C16.4813 14.4547 15.2016 13.8266 14.9625 13.7422C14.7234 13.6531 14.55 13.6109 14.3766 13.8734C14.2031 14.1359 13.7063 14.7172 13.5516 14.8953C13.4016 15.0688 13.2469 15.0922 12.9891 14.9609C11.4609 14.1969 10.4578 13.5969 9.45 11.8672C9.18281 11.4078 9.71719 11.4406 10.2141 10.4469C10.2984 10.2734 10.2562 10.1234 10.1906 9.99219C10.125 9.86094 9.60469 8.58125 9.38906 8.06094C9.17813 7.55469 8.9625 7.625 8.80313 7.61563C8.65313 7.60625 8.47969 7.60625 8.30625 7.60625C8.13281 7.60625 7.85156 7.67188 7.6125 7.92969C7.37344 8.19219 6.70312 8.82031 6.70312 10.1C6.70312 11.3797 7.63594 12.6172 7.7625 12.7906C7.89375 12.9641 9.59531 15.5891 12.2062 16.7188C13.8562 17.4312 14.5031 17.4922 15.3281 17.3703C15.8297 17.2953 16.8656 16.7422 17.0812 16.1328C17.2969 15.5234 17.2969 15.0031 17.2313 14.8953C17.1703 14.7781 16.9969 14.7125 16.7391 14.5859Z"
                fill="currentColor"
                fill-opacity="0.4"
              />
            </svg>
            Fale conosco
          </a>
        </app-botao>
      </div>
    `;
  }
}
customElements.define("contato-section", ContatoSection);
