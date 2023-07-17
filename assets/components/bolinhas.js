import { LitElement, css } from "lit";

export class Bolinhas extends LitElement {
  static styles = [
    css`
      :host {
        width: 100px;
        height: 100px;

        background-color: black;
        -webkit-mask: url("bolinhas.svg") no-repeat center;
        mask: url("bolinhas.svg") no-repeat center;

        -webkit-mask-size: 100%;
        mask-size: 100%;

        display: block;
      }
    `,
  ];
}
customElements.define("app-bolinhas", Bolinhas);
