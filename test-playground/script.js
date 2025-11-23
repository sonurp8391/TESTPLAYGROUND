document.addEventListener("DOMContentLoaded", function () {
    // --- Home page "Show Message" button ---
    const showMessageBtn = document.getElementById("showMessageBtn");
    const messageOutput = document.getElementById("messageOutput");
  
    if (showMessageBtn && messageOutput) {
      showMessageBtn.addEventListener("click", function () {
        messageOutput.textContent = "Button clicked successfully!";
      });
    }
  
    // --- Form validation on Form page ---
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const formMessage = document.getElementById("formMessage");
  
    if (form && nameInput && emailInput && formMessage) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // prevent actual form submission
  
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
  
        if (nameValue === "" || emailValue === "") {
          formMessage.textContent = "Please fill all fields.";
          formMessage.classList.remove("success");
          formMessage.classList.add("error");
        } else {
          formMessage.textContent = "Form submitted!";
          formMessage.classList.remove("error");
          formMessage.classList.add("success");
          form.reset();
        }
      });
    }
  
    // --- Right-click context menu on Home page ---
    const contextBox = document.getElementById("contextBox");
    const contextMenu = document.getElementById("contextMenu");
  
    if (contextBox && contextMenu) {
      // Show custom menu on right-click
      contextBox.addEventListener("contextmenu", function (event) {
        event.preventDefault(); // stop default browser menu
  
        const x = event.pageX;
        const y = event.pageY;
  
        contextMenu.style.left = x + "px";
        contextMenu.style.top = y + "px";
        contextMenu.style.display = "block";
      });
  
      // Hide the menu when clicking anywhere else
      document.addEventListener("click", function (event) {
        if (!event.target.closest("#contextMenu")) {
          contextMenu.style.display = "none";
        }
      });
    }
  });
  