function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function logoClicked(sectionId) {
    alert('');
    // You can replace the alert with another action:
    // window.location.href = "https://yourwebsite.com";
}

document.addEventListener('DOMContentLoaded', function () {
    const scrollBtn = document.getElementById('to_top_scrollup');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    const borderSlider = document.getElementById("borderSlider");
    if (borderSlider) {
        borderSlider.addEventListener("input", function () {
            document.documentElement.style.setProperty('--border-size', this.value + 'px');
        });
    }
});
