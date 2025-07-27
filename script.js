//fenetre popup
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-image");
  const popupTitle = document.getElementById("popup-title");
  const popupDesc = document.getElementById("popup-description");
  const closeBtn = document.querySelector(".popup-close");

  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector("img")?.src || "";
      const titleText = item.querySelector("h3")?.textContent || "";
      const descText = item.querySelector(".menu-description")?.textContent || "";

      popupImg.src = imgSrc;
      popupTitle.textContent = titleText;
      popupDesc.textContent = descText;

      popup.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // Fermer la popup en cliquant en dehors de la popup-content
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });
});