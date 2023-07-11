const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const follow = document.querySelector(".follow");


  function openModal() {
    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
  }

  function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
    follow.setAttribute("style", "scale:0");
  }

  function openfollow() {
    follow.setAttribute("style", "scale:1");
    overlay.classList.add("overlayactive");
  }

