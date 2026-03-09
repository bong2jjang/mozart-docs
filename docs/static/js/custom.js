// Remove doc sidebar logo - runs after DOM is loaded
// IMPORTANT: Only targets .theme-doc-sidebar-container (left doc sidebar),
// NOT .navbar-sidebar (mobile hamburger menu)
(function() {
  function removeSidebarLogo() {
    // Target ONLY the doc sidebar (left panel), never the mobile navbar-sidebar
    const docSidebar = document.querySelectorAll('.theme-doc-sidebar-container, aside.theme-doc-sidebar-container');
    docSidebar.forEach(container => {
      // Remove logo images
      container.querySelectorAll('img[src*="logo"]').forEach(el => el.remove());
      // Remove brand links
      container.querySelectorAll('.navbar__brand').forEach(el => el.remove());
      // Remove Mozart bold tags
      container.querySelectorAll('b').forEach(b => {
        if (b.textContent.includes('Mozart')) b.remove();
      });
    });
  }

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeSidebarLogo);
  } else {
    removeSidebarLogo();
  }

  // Run a few times to catch dynamic content
  setTimeout(removeSidebarLogo, 300);
  setTimeout(removeSidebarLogo, 1000);

  // Watch for DOM changes (debounced)
  let timeoutId;
  const observer = new MutationObserver(() => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(removeSidebarLogo, 150);
  });

  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();
