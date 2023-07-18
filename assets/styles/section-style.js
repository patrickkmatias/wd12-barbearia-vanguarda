import { css } from "lit";

export const section = css`
  :host {
    width: 100%;
    height: 100svh;

    display: flex; /* Auto layout */
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.375rem;

    padding: 2rem;
    overflow: hidden;
    position: relative;
  }
`;
