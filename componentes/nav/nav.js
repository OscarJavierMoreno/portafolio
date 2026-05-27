
function initMobileMenu()
{
    const button = document.querySelector('#nav-toggle');
    const menu = document.querySelector('#mobile-menu');

    if(!button || !menu) return;

    // ABRIR / CERRAR MENU
    button.addEventListener('click', () =>
    {
        menu.classList.toggle('mobile-menu--active');

        const isActive = menu.classList.contains('mobile-menu--active');

        // CAMBIAR ICONO
        button.textContent = isActive ? '✕' : '☰';

        // BLOQUEAR / RESTAURAR SCROLL
        document.body.style.overflow = isActive ? 'hidden' : 'auto';
    });


    // CERRAR MENU AL HACER CLICK EN LINK
    const links = document.querySelectorAll('.mobile-menu__link');

    links.forEach(link =>
    {
        link.addEventListener('click', () =>
        {
            menu.classList.remove('mobile-menu--active');
            button.textContent = '☰';
        });
    });
}