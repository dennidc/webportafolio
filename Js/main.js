  const iconoMenu = document.getElementById("iconomenu");
  const menu = document.querySelector(".menu");

  iconoMenu.addEventListener("click", () => {
    menu.classList.toggle("activo");
  });