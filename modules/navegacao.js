import { navbar, dialog, router } from "../main";
import { Router } from "@vaadin/router";


/* Métodos para navegação */
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
    });

    this.fechar();
  },
  fechar: function () {
    dialog.close();
  },
};
