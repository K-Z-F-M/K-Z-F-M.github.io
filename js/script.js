function showSection(sectionId) {
    document.querySelectorAll(".content-section").forEach(section => {
        section.style.display = "none";
    });
    const section = document.getElementById(sectionId);
    if (section) section.style.display = "block";

    // Close mobile menu after selection
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.remove("show");
}

function logoClicked(sectionId) {
    alert('');
    // You can replace the alert with another action:
    // window.location.href = "https://yourwebsite.com";
}

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
}

  // Show button when scrolling down
  window.onscroll = function () {
    let scrollBtn = document.getElementById("scrollUp");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  // Scroll to top when clicked
  document.getElementById("scrollUp").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

document.addEventListener("DOMContentLoaded", function () {
        const toggle = document.querySelector(".mobile-toggle");
        const menu = document.querySelector(".mobile-menu");

        toggle.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    });
    
    const borderSlider = document.getElementById("borderSlider");
    if (borderSlider) {
        borderSlider.addEventListener("input", function () {
            document.documentElement.style.setProperty('--border-size', this.value + 'px');
        });
    }
});
