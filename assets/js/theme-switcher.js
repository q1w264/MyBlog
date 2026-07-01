(function () {
  const STORAGE_KEY = "theme";
  const THEMES = ["auto", "light", "dark"];

  function getCurrentTheme() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return THEMES.includes(value) ? value : "auto";
    } catch {
      return "auto";
    }
  }

  function setStoredTheme(theme) {
    try {
      if (theme === "auto") {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, theme);
      }
    } catch {
      // Ignore storage errors.
    }
  }

  function resolveTheme(theme) {
    if (theme !== "auto") return theme;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function updateToggleUI(theme) {
    const toggleBtn = document.getElementById("theme-toggle");
    const lightIcon = document.querySelector(".theme-icon-light");
    const darkIcon = document.querySelector(".theme-icon-dark");
    const autoIcon = document.querySelector(".theme-icon-auto");

    if (lightIcon && darkIcon && autoIcon) {
      lightIcon.style.display = "none";
      darkIcon.style.display = "none";
      autoIcon.style.display = "none";

      if (theme === "auto") {
        autoIcon.style.display = "block";
      } else if (theme === "light") {
        lightIcon.style.display = "block";
      } else {
        darkIcon.style.display = "block";
      }
    }

    if (toggleBtn) {
      const key = "tooltip" + theme.charAt(0).toUpperCase() + theme.slice(1);
      const label = toggleBtn.dataset[key];
      if (label) toggleBtn.setAttribute("aria-label", label);
    }
  }

  function applyTheme(theme) {
    const html = document.documentElement;
    const resolved = resolveTheme(theme);

    // Always set explicit effective theme attrs to avoid auto/dark selector conflicts.
    html.setAttribute("data-color-mode", resolved);
    html.setAttribute("data-light-theme", resolved);
    html.setAttribute("data-dark-theme", resolved);

    updateToggleUI(theme);
  }

  function cycleTheme() {
    const current = getCurrentTheme();
    const idx = THEMES.indexOf(current);
    const next = THEMES[(idx + 1) % THEMES.length];
    setStoredTheme(next);
    applyTheme(next);
  }

  function initThemeToggle() {
    const current = getCurrentTheme();
    applyTheme(current);

    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) toggleBtn.addEventListener("click", cycleTheme);

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
        if (getCurrentTheme() === "auto") {
          applyTheme("auto");
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
