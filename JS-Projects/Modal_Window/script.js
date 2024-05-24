// "use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModal = function () {
  console.log("Button Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal); //here we are not calling the function

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
