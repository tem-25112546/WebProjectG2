const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const content = button.nextElementSibling;

  
    document.querySelectorAll(".accordion-content").forEach(item => {
      if (item !== content) {
        item.style.display = "none";
      }
    });

  
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }

  });
});