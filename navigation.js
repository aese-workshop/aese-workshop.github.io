// Keep the original checkbox-based Sniffle menu; close it after navigation.
const menu = document.getElementById('nav-trigger');
const menuLabel = document.querySelector('label[for="nav-trigger"]');
function syncMenu() {
  menuLabel?.setAttribute('aria-expanded', String(Boolean(menu?.checked)));
}
menu?.addEventListener('change', syncMenu);
menuLabel?.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && menu) {
    event.preventDefault();
    menu.checked = !menu.checked;
    syncMenu();
  }
});
document.querySelectorAll('.site-nav .page-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (menu) menu.checked = false;
    syncMenu();
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu) {
    menu.checked = false;
    syncMenu();
  }
});
syncMenu();
