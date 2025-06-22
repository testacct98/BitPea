
function toggleCA() {
  const section = document.getElementById("ca-section");
  section.style.display = section.style.display === "block" ? "none" : "block";
}

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
}

document.getElementById('menu-toggle')?.addEventListener('click', toggleMenu);
