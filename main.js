import "./assets";

import { Router } from "@vaadin/router";
import { initRouter } from "./assets/router";
import { lazyLoadVideo } from "./modules/lazyLoadVideo";
import { animarScrollNavbar } from "./modules/animarScrollNavbar";
import { observarAnimacoes } from "./modules/observarAnimacoes";

export let navbar;
let dialog;
let router;

document.addEventListener("DOMContentLoaded", function () {
  /* Inicia o roteador */
  router = initRouter();

  /* Fazer ao carregar a página */
  router.ready.then(() => {
    lazyLoadVideo()
    observarAnimacoes()
  });

  /* Selecionar navbar */
  navbar = document.querySelector("app-navbar");

  /* Selecionar dialog de menu */
  dialog = document
    .querySelector("menu-section")
    .shadowRoot.querySelector("dialog");
});

/* Métodos de navegação */
export const nav = {
  abrir: function () {
    navbar.classList.add("escondido");
    dialog.showModal();
  },
  rolarPara: function (secao) {
    /* Primeiro acessa home page, depois rola para a seção */
    Router.go("/");
    router.ready.then(() => {
      document
        .querySelector("home-page")
        .shadowRoot.querySelector(secao)
        .scrollIntoView();

      this.fechar();
    });
  },
  fechar: function () {
    dialog.close();
  },
};

/* Navbar dinâmica ao scroll */
// janela . ao rolar = animarScrollNavbar
window.onscroll = animarScrollNavbar