// ============================================================
// Accessibility Controls: High Contrast & Font Size
// ============================================================

(function () {
    const increaseFontBtn   = document.getElementById('increase-font');
    const decreaseFontBtn   = document.getElementById('decrease-font');
    const htmlElement       = document.documentElement;

    // ── Font Size Controls ────────────────────────────────────────────────────
    // Sets html element font-size directly in px.
    // Because Tailwind's rem-based classes (text-sm, text-xl, etc.) are relative
    // to the root font-size, changing it here scales ALL text on the page.
    const FONT_MIN  = 12;
    const FONT_MAX  = 24;
    const FONT_STEP = 2;

    const STORAGE_KEY = 'a11y-font-size';

    function getCurrentFontSize() {
        return parseInt(getComputedStyle(htmlElement).fontSize, 10) || 16;
    }

    function setFontSize(px) {
        htmlElement.style.fontSize = `${px}px`;
        localStorage.setItem(STORAGE_KEY, px);
    }

    // Restore saved font size on load
    const saved = parseInt(localStorage.getItem(STORAGE_KEY), 10);
    if (saved && saved >= FONT_MIN && saved <= FONT_MAX) setFontSize(saved);

    increaseFontBtn.addEventListener('click', () => {
        const current = getCurrentFontSize();
        if (current < FONT_MAX) setFontSize(current + FONT_STEP);
    });

    decreaseFontBtn.addEventListener('click', () => {
        const current = getCurrentFontSize();
        if (current > FONT_MIN) setFontSize(current - FONT_STEP);
    });
})();
