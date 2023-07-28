import "./assets";

import { Router } from "@vaadin/router";
import { initRouter } from "./assets/router";

let navbar;
let dialog;
let router;

document.addEventListener("DOMContentLoaded", function () {
  router = initRouter();

  router.ready.then(() => {
    
    const video = document
      .querySelector("home-page")
      .shadowRoot.querySelector("contato-section")
      .shadowRoot.querySelector("video");

      console.log(video)

    const observer = lozad(video);

    observer.observe();
  });

  navbar = document.querySelector("app-navbar");

  dialog = document
    .querySelector("menu-section")
    .shadowRoot.querySelector("dialog");
});

export const nav = {
  abrir: function () {
    navbar.classList.add("escondido");
    dialog.showModal();
  },
  rolarPara: function (secao) {
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
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("escondido");
  } else {
    navbar.classList.add("escondido");
  }

  prevScrollpos = currentScrollPos;
};
