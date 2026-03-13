/**
 * Swizzled SecondaryMenu component
 * Ensures color mode toggle is rendered and visible in mobile sidebar
 */
import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';

function SecondaryMenuBackButton(props: {onClick: () => void}) {
  return (
    <button type="button" {...props} className="clean-btn navbar-sidebar__back">
      ← Back to main menu
    </button>
  );
}

export default function NavbarMobileSidebarSecondaryMenu(): JSX.Element | null {
  const {
    colorMode: {disableSwitch},
  } = useThemeConfig();

  // If color mode switch is disabled, don't render anything
  if (disableSwitch) {
    return null;
  }

  return (
    <div className="navbar-sidebar__item menu">
      <ColorModeToggle className="margin-horiz--md" />
    </div>
  );
}
