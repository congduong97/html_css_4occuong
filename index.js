// Create pop-up form

const toggleBtn = document.getElementById("toggle-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const modal = document.getElementsByClassName("modal")[0];

toggleBtn.onclick = function() {
  console.log("click");
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Create toggle tag under input
closeTag = (e) => {
  e.parentElement.style.display = "none";
};
