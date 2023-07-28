export function observarAnimacoes() {
  const page = document.querySelector("#app :first-child").shadowRoot;

  page.querySelectorAll("*").forEach((section) => {
    const observer = lozad(
      section.shadowRoot.querySelectorAll(".animate__animated")
    );
    observer.observe();
  });
}
