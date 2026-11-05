/**
 * Matheus Motopeças e Mecânica - Script Principal
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Atualizar ano do copyright no footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Controle do Menu Mobile
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fechar menu mobile ao clicar em um link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 3. Efeito de transparência/sombra no Header ao rolar a página
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.9)';
            header.style.boxShadow = 'none';
        }
    });
});

/**
 * Funçao para expandir/recolher os cards de Planos de Revisão
 * @param {string} planId - ID do elemento container do conteúdo
 * @param {HTMLElement} btn - Botão acionador
 */
function togglePlan(planId, btn) {
    const content = document.getElementById(planId);
    const arrow = btn.querySelector('.icon-arrow');
    const label = btn.querySelector('span');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        if (arrow) arrow.classList.add('active');
        if (label) label.textContent = 'Ocultar detalhes do plano';
    } else {
        content.classList.add('hidden');
        if (arrow) arrow.classList.remove('active');
        if (label) label.textContent = 'Ver lista de itens inclusos';
    }
}