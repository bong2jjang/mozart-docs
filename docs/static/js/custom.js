// Remove sidebar logo - runs after DOM is loaded
(function() {
  function removeSidebarLogo() {
    // Method 1: Remove navbar__brand in sidebar contexts
    const brandSelectors = [
      'aside .navbar__brand',
      '.theme-doc-sidebar-container .navbar__brand',
      '[class*="sidebar"] .navbar__brand',
      '[class*="Sidebar"] .navbar__brand',
      '.menu .navbar__brand',
      'div[class*="docSidebar"] .navbar__brand'
    ];

    brandSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        const topNavbar = element.closest('.navbar.navbar--fixed-top');
        if (!topNavbar) {
          element.remove();
        }
      });
    });

    // Method 2: Remove logo images in sidebar contexts
    const imgSelectors = [
      'aside img[src*="logo"]',
      '.theme-doc-sidebar-container img[src*="logo"]',
      '[class*="sidebar"] img[src*="logo"]',
      '[class*="Sidebar"] img[src*="logo"]',
      '.menu img[src*="logo"]',
      'div[class*="docSidebar"] img[src*="logo"]'
    ];

    imgSelectors.forEach(selector => {
      const images = document.querySelectorAll(selector);
      images.forEach(img => {
        const topNavbar = img.closest('.navbar.navbar--fixed-top');
        if (!topNavbar) {
          img.remove();
        }
      });
    });

    // Method 3: Remove any element with logo/brand in class name within sidebar
    const sidebarContainers = document.querySelectorAll('aside, [class*="sidebar"], [class*="Sidebar"], .menu, [class*="docSidebar"]');
    sidebarContainers.forEach(container => {
      const logoElements = container.querySelectorAll('[class*="logo"], [class*="Logo"], [class*="brand"], [class*="Brand"]');
      logoElements.forEach(element => {
        const topNavbar = element.closest('.navbar.navbar--fixed-top');
        if (!topNavbar) {
          element.remove();
        }
      });
    });

    // Method 4: Remove any <b> tags containing "Mozart" in sidebar
    const sidebarBTags = document.querySelectorAll('aside b, [class*="sidebar"] b, [class*="Sidebar"] b, .menu b');
    sidebarBTags.forEach(b => {
      if (b.textContent.includes('Mozart')) {
        b.remove();
      }
    });
  }

  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeSidebarLogo);
  } else {
    removeSidebarLogo();
  }

  // Run multiple times to catch all dynamic content
  setTimeout(removeSidebarLogo, 100);
  setTimeout(removeSidebarLogo, 300);
  setTimeout(removeSidebarLogo, 500);
  setTimeout(removeSidebarLogo, 1000);
  setTimeout(removeSidebarLogo, 2000);
  setTimeout(removeSidebarLogo, 3000);

  // Watch for DOM changes
  let timeoutId;
  const observer = new MutationObserver(() => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(removeSidebarLogo, 100);
  });

  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
})();
