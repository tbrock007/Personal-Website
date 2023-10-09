function openModal() {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const img = document.querySelector(".portrait");
    const captionText = document.getElementById("caption");
  
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
    } else {
      body.classList.add("dark-mode");
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector(".portrait");
    img.addEventListener("click", openModal);
  
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", closeModal);
  
    const modal = document.getElementById("myModal");
    modal.addEventListener("click", function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    const themeToggleButton = document.querySelector("#theme-toggle");
    themeToggleButton.addEventListener("click", toggleTheme);
  });
  