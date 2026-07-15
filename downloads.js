// downloads.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn");
    const tabs = document.querySelectorAll(".tab-content");

    function showTab(id) {
        if (!id) return;
        
        // Hide all tabs and deactivate all buttons
        tabs.forEach(tab => tab.classList.remove("active"));
        buttons.forEach(button => button.classList.remove("active"));

        // Show targeted tab and activate matched button
        const targetTab = document.getElementById(id);
        const targetBtn = document.querySelector(`[data-tab="${id}"]`);

        if (targetTab) targetTab.classList.add("active");
        if (targetBtn) targetBtn.classList.add("active");
    }

    // Bind standard click behavior
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            showTab(button.dataset.tab);
        });
    });

    // NEW: Check the URL on load (e.g. 'downloads.html#rejei')
    if (window.location.hash) {
        // window.location.hash provides '#rejei', .substring(1) cleans it to 'rejei'
        const currentHash = window.location.hash.substring(1);
        showTab(currentHash);
    }
});
