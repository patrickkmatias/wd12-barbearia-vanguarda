import "./assets";

import { initRouter } from "./assets/router";
import { observarAnimacoes } from "./modules/observarAnimacoes";
import { animarScrollNavbar } from "./modules/animarScrollNavbar";
import { lazyLoadVideo } from "./modules/lazyLoadVideo";
import { nav } from "./modules/navegacao";

let navbar;
let dialog;
let router;

/* Executar ao carregar página */
document.addEventListener("DOMContentLoaded", function () {
  router = initRouter();

  navbar = document.querySelector("app-navbar");

  dialog = document
    .querySelector("menu-section")
    .shadowRoot.querySelector("dialog");

  router.ready.then(() => {
    lazyLoadVideo()
    observarAnimacoes();
  });
});

window.onscroll = animarScrollNavbar;

export { nav, navbar, dialog, router };
