function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(function (section) {
        const isActive = section.id === sectionId;
        section.style.display = isActive ? "block" : "none";
        section.hidden = !isActive;
    });

    document.querySelectorAll("[data-section]").forEach(function (element) {
        const isActive = element.dataset.section === sectionId;
        element.classList.toggle("active", isActive);
    });

    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu) {
        mobileMenu.classList.remove("show");
    }
}

window.showSection = showSection;

document.addEventListener("DOMContentLoaded", function () {
    const mobileToggle = document.querySelector(".mobile-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener("click", function () {
            const isOpen = mobileMenu.classList.toggle("show");
            mobileToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    document.addEventListener("click", function (event) {
        const navButton = event.target.closest("[data-section]");
        if (navButton) {
            const sectionId = navButton.dataset.section;
            if (sectionId) {
                event.preventDefault();
                showSection(sectionId);
            }
        }

        const mobileLink = event.target.closest(".mobile-menu a");
        if (mobileLink) {
            const href = mobileLink.getAttribute("href") || "";
            const match = href.match(/^#(.+)$/);
            if (match) {
                event.preventDefault();
                showSection(match[1]);
            }
        }
    });

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
