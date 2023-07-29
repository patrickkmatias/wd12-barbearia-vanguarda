import { Router } from "@vaadin/router";

export function initRouter() {
    const router = new Router(document.querySelector('#app'))

    router.setRoutes([
        {
            path: "/",
            component: "home-page",
            action: () => import("./pages/home-page")
        },
        {
            path: "/a-barbearia",
            component: "a-barbearia-page",
            action: () => import("./pages/a-barbearia-page")
        },
        {
            path: "/servicos",
            component: "servicos-page",
            action: () => import("./pages/servicos-page")
        },
    ])

    return router
}