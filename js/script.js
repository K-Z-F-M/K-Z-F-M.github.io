function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    if (menu) {
        menu.classList.toggle("show");
    }
}

function setActiveNav(sectionId) {
    const navButtons = document.querySelectorAll(".desktop-nav button, .mobile-menu a");
    navButtons.forEach((item) => {
        const matches = item.dataset.section === sectionId;
        item.classList.toggle("active", matches);
    });
}

function showSection(sectionId) {
    document.querySelectorAll(".content-section").forEach(function (section) {
        section.style.display = "none";
    });

    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = "block";
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setActiveNav(sectionId);

    const menu = document.getElementById("mobileMenu");
    if (menu) {
        menu.classList.remove("show");
    }

    const toggle = document.querySelector(".mobile-toggle");
    if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".mobile-toggle");
    const menu = document.querySelector(".mobile-menu");

    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            const isOpen = menu.classList.toggle("show");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    const borderSlider = document.getElementById("borderSlider");
    if (borderSlider) {
        borderSlider.addEventListener("input", function () {
            document.documentElement.style.setProperty("--border-size", this.value + "px");
        });
    }

    const scrollBtn = document.getElementById("scrollUp");
    if (scrollBtn) {
        const updateScrollBtn = function () {
            scrollBtn.style.display = window.scrollY > 200 ? "flex" : "none";
        };

        updateScrollBtn();
        window.addEventListener("scroll", updateScrollBtn);
        scrollBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const logoItems = document.querySelectorAll(".company-logo-item");
    if (logoItems.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        }, { threshold: 0.25 });

        logoItems.forEach((item) => revealObserver.observe(item));
    }
});
