const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content"); //Stockage de la class content

btn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-clicked"); // - 1 évent click pour afficher sidebar avec toggle qui retire la class si on reclick sur btn (mettre !important en CSS)
}); // Priorités en CSS : !important > id > classe > baliseHTML

content.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-clicked"); // Quand je click sur le contenu je veux que tu retires la class injectée sidebar-clicked, donc ça ramene la left à l'état initiale et cache à nouveau la sidebar
});
