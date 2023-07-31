/**
 * Seleciona todas as seções da página atual e
 * observa quando os elementos com a classe 
 * ".animate__animated" aparecem na tela.
 */

// .minha-classe | #meu-id
 export function observarAnimacoes() {
    const page = document.querySelector("#app :first-child").shadowRoot;
  
    page.querySelectorAll("*").forEach((section) => {
      const observer = lozad(
        section.shadowRoot.querySelectorAll(".animate__animated")
      );
      observer.observe();
    });
  }