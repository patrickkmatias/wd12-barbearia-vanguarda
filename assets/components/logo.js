import { LitElement, css } from "lit";

export class Logo extends LitElement {
  static styles = [
    css`
      :host {
        width: 48px;
        height: 48px;
        
        background-color: black;
        -webkit-mask: url('logo.svg') no-repeat center;
        mask: url('logo.svg') no-repeat center;

        -webkit-mask-size: 100%;
        mask-size: 100%;
    
        display: block;
      }
    `,
  ];
}
customElements.define("app-logo", Logo);
