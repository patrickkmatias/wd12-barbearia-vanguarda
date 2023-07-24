import "./assets";
import { initRouter } from "./assets/router";

let navbar;
let dialog;
let router;

document.addEventListener("DOMContentLoaded", function () {
  router = initRouter();

  navbar = document.querySelector("app-navbar");

  dialog = document
    .querySelector("menu-section")
    .shadowRoot.querySelector("dialog");
});

export const nav = {
  abrir: function () {
    dialog.showModal();
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
