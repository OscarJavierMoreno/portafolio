
// document.addEventListener('DOMContentLoaded', () =>
// {
//   loadComponent('nav', 'nav');
//   loadComponent('hero', 'hero');
//   loadComponent('social-networks', 'social-networks');
//   loadComponent('about', 'about');
//   loadComponent('abilities', 'abilities');
//   loadComponent('projects', 'projects');
//   loadComponent('experience', 'experience');
//   loadComponent('reflection', 'reflection');
//   loadComponent('contact', 'contact');

//   initContactForm();
// });

document.addEventListener('DOMContentLoaded', async () =>
{
  await loadComponent('nav', 'nav');
  await loadComponent('hero', 'hero');
  await loadComponent('social-networks', 'social-networks');
  await loadComponent('about', 'about');
  await loadComponent('abilities', 'abilities');
  await loadComponent('projects', 'projects');
  await loadComponent('experience', 'experience');
  await loadComponent('reflection', 'reflection');
  await loadComponent('contact', 'contact');
  await loadComponent('footer', 'footer');

  initContactForm();
  initMobileMenu();

  // ACTIVAR SCROLL SUAVE
  initSmoothScroll();
});


function initSmoothScroll()
{
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link =>
    {
        link.addEventListener('click', (e) =>
        {
            e.preventDefault();

            const id = link.getAttribute('href');

            // IR AL INICIO
            if(id === '#')
            {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                return;
            }

            const section = document.querySelector(id);

            if(section)
            {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

