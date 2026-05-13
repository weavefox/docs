export function onRouteDidUpdate() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const update = () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 0);
  };

  update();
  window.addEventListener('scroll', update, {passive: true});
}