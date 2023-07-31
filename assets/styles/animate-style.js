import { unsafeCSS, css } from "lit";
import animations from "./animate.min.css?inline";
export const animate = [
  css`
    :host {
      --animate-duration: 1s;
      --animate-delay: 1s;
      --animate-repeat: 1s;
    }

    .animate__animated {
      opacity: 0;
    }

    .animate__animated[class*="animate__"] {
      opacity: 1;
    }
  `,
  unsafeCSS(animations),
];