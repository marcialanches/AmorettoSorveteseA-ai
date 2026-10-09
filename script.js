// ========================================
// AMORETTO SORVETES E AÇAÍ
// Script principal do site
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // MENU MOBILE
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {
            const menuAberto = navMenu.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", menuAberto);
            menuToggle.setAttribute(
                "aria-label",
                menuAberto ? "Fechar menu" : "Abrir menu"
            );
        });

        // Fecha o menu ao clicar em um link
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menu");
            });
        });

        // Fecha o menu ao pressionar ESC
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menu");
            }
        });
    }

    // ANIMAÇÕES AO ROLAR A PÁGINA
    const elementosReveal = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver(
            function (entradas, observer) {
                entradas.forEach(function (entrada) {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("visible");
                        observer.unobserve(entrada.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        elementosReveal.forEach(function (elemento) {
            observador.observe(elemento);
        });
    } else {
        // Alternativa para navegadores antigos
        elementosReveal.forEach(function (elemento) {
            elemento.classList.add("visible");
        });
    }

    // ANO AUTOMÁTICO NO RODAPÉ
    const anoAtual = document.querySelector("#current-year");

    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }

    // FECHAR MENU AO CLICAR FORA DELE
    document.addEventListener("click", function (event) {
        if (
            menuToggle &&
            navMenu &&
            !menuToggle.contains(event.target) &&
            !navMenu.contains(event.target)
        ) {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
        }
    });

});
