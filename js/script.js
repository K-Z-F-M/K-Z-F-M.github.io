function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(function (section) {
        section.style.display = "none";
        section.hidden = true;
    });

    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = "block";
        section.hidden = false;
    }

    const navButtons = document.querySelectorAll(".desktop-nav button, .mobile-menu a");
    navButtons.forEach(function (button) {
        const action = button.getAttribute("onclick") || "";
        const matches = action.includes("'" + sectionId + "'") || action.includes('"' + sectionId + '"');
        button.classList.toggle("active", matches);
    });

    const menu = document.getElementById("mobileMenu");
    if (menu) {
        menu.classList.remove("show");
    }
}

window.showSection = showSection;

document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".desktop-nav button");
    navButtons.forEach(function (button) {
        const action = button.getAttribute("onclick");
        if (!action) return;

        const match = action.match(/showSection\(['"]([^'"]+)['"]\)/);
        if (match && match[1]) {
            button.addEventListener("click", function () {
                showSection(match[1]);
            });
        }
    });

    const mobileLinks = document.querySelectorAll(".mobile-menu a");
    mobileLinks.forEach(function (link) {
        const href = link.getAttribute("href") || "";
        const sectionMatch = href.match(/#(.*)$/);
        if (!sectionMatch) return;

        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = sectionMatch[1];
            showSection(targetId);
        });
    });

    const toggle = document.querySelector(".mobile-toggle");
    const menu = document.querySelector(".mobile-menu");

    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            menu.classList.toggle("show");
            toggle.setAttribute("aria-expanded", menu.classList.contains("show") ? "true" : "false");
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
        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        }, { threshold: 0.25 });

        logoItems.forEach(function (item) {
            revealObserver.observe(item);
        });
    }
});
