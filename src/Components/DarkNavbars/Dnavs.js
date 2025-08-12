export const Dnavs=[
    {
  html: `
    <!-- Dark Theme Responsive Navbar -->
    <nav class="navbar-dark">
      <!-- Logo -->
      <div class="logo">Logo</div>

      <!-- Desktop Navigation Links -->
      <ul class="nav-links" id="navLinks">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>

      <!-- Desktop Sign Up/Login Button -->
      <button class="btn desktop-btn">Sign Up / Login</button>

      <!-- Mobile Menu Toggle Button -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="btn">Sign Up / Login</button>
      </div>
    </nav>
  `,
  css: `
    /* Navbar Container */
    .navbar-dark {
      width: 100%;
      background: #1E1E1E;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 12vh;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      position: relative;
    }

    /* Logo */
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Navigation Links (Desktop) */
    .nav-links {
      display: none; /* Hidden on mobile */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover Effects for Links */
    .nav-links li,
    .mobile-menu a {
      cursor: pointer;
      transition: color 0.3s;
    }

    .nav-links li:hover,
    .mobile-menu a:hover {
      color: #60a5fa; /* blue-400 */
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* Sign Up/Login Button */
    .btn {
      background: linear-gradient(to right, #3b82f6, #8b5cf6); /* blue-500 to purple-500 */
      color: white;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 600;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }

    .btn:hover {
      background: linear-gradient(to right, #2563eb, #7c3aed); /* blue-600 to purple-600 */
    }

    /* Desktop Button Visibility */
    .desktop-btn {
      display: none;
    }

    /* Mobile Menu Toggle Button */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      color: white;
    }

    /* Mobile Menu */
    .mobile-menu {
      display: none;
      position: absolute;
      top: 12vh;
      left: 0;
      width: 100%;
      background: #1E1E1E;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      z-index: 50;
    }

    /* Desktop View (>=768px) */
    @media (min-width: 768px) {
      .nav-links {
        display: flex;
      }
      .desktop-btn {
        display: block;
      }
      .menu-toggle {
        display: none;
      }
      .mobile-menu {
        display: none !important;
      }
    }
  `,
  js: `
    // Wait until DOM is loaded
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle");
      const mobileMenu = document.getElementById("mobileMenu");

      // Toggle menu visibility
      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰";
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖";
        }
      });
    });
  `
},
    {
  html: `
    <!-- Dark Theme Navbar (DarkNav2) -->
    <nav class="navbar-dark">
      
      <!-- Logo -->
      <div class="logo">Logo</div>

      <!-- Desktop Navigation Links + Button Container -->
      <div class="nav-actions">
        <ul class="nav-links" id="navLinks">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>

        <!-- Sign Up/Login Button -->
        <button class="btn desktop-btn">Sign Up / Login</button>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Dropdown Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="btn">Sign Up / Login</button>
      </div>
    </nav>
  `,
  css: `
    /* Navbar Container */
    .navbar-dark {
      width: 100%;
      background: #1E1E1E;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 12vh;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      position: relative;
    }

    /* Logo */
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Flex container for links + button */
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    /* Navigation Links (Desktop) */
    .nav-links {
      display: none; /* Mobile hidden */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover styles for links */
    .nav-links li,
    .mobile-menu a {
      cursor: pointer;
      transition: color 0.3s;
    }

    .nav-links li:hover,
    .mobile-menu a:hover {
      color: #60a5fa; /* blue-400 */
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* Gradient Button */
    .btn {
      background: linear-gradient(to right, #3b82f6, #8b5cf6);
      color: white;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 600;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }

    .btn:hover {
      background: linear-gradient(to right, #2563eb, #7c3aed);
    }

    /* Desktop button visibility */
    .desktop-btn {
      display: none;
    }

    /* Mobile menu toggle button */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      color: white;
    }

    /* Mobile dropdown menu */
    .mobile-menu {
      display: none;
      position: absolute;
      top: 12vh;
      left: 0;
      width: 100%;
      background: #1E1E1E;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      z-index: 50;
    }

    /* Show desktop layout at 768px and above */
    @media (min-width: 768px) {
      .nav-links {
        display: flex;
      }
      .desktop-btn {
        display: block;
      }
      .menu-toggle {
        display: none;
      }
      .mobile-menu {
        display: none !important;
      }
    }
  `,
  js: `
    // Toggle mobile menu visibility
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle");
      const mobileMenu = document.getElementById("mobileMenu");

      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰";
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖";
        }
      });
    });
  `
},
{
  html: `
    <!-- Dark Theme Navbar (DarkNav3) -->
    <nav class="navbar-dark">
      
      <!-- Logo + Inline Navigation Links -->
      <div class="logo-section">
        <div class="logo">Logo</div>
        <ul class="nav-links" id="navLinks">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
      </div>

      <!-- Sign Up/Login Button (Desktop) -->
      <button class="btn desktop-btn">Sign Up / Login</button>

      <!-- Mobile Menu Toggle -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Dropdown Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="btn">Sign Up / Login</button>
      </div>
    </nav>
  `,
  css: `
    /* Navbar Container */
    .navbar-dark {
      width: 100%;
      background: #1E1E1E;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 12vh;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      position: relative;
    }

    /* Logo + inline nav container */
    .logo-section {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Logo */
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Navigation Links (Desktop) */
    .nav-links {
      display: none; /* Hidden on mobile */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover effect for links */
    .nav-links li,
    .mobile-menu a {
      cursor: pointer;
      transition: color 0.3s;
    }

    .nav-links li:hover,
    .mobile-menu a:hover {
      color: #60a5fa; /* blue-400 */
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    /* Gradient Button */
    .btn {
      background: linear-gradient(to right, #3b82f6, #8b5cf6);
      color: white;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 600;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }

    .btn:hover {
      background: linear-gradient(to right, #2563eb, #7c3aed);
    }

    /* Desktop-only button */
    .desktop-btn {
      display: none;
    }

    /* Mobile menu toggle */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      color: white;
    }

    /* Mobile dropdown menu */
    .mobile-menu {
      display: none;
      position: absolute;
      top: 12vh;
      left: 0;
      width: 100%;
      background: #1E1E1E;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      z-index: 50;
    }

    /* Desktop view */
    @media (min-width: 768px) {
      .nav-links {
        display: flex;
      }
      .desktop-btn {
        display: block;
      }
      .menu-toggle {
        display: none;
      }
      .mobile-menu {
        display: none !important;
      }
    }
  `,
  js: `
    // Mobile menu toggle functionality
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle");
      const mobileMenu = document.getElementById("mobileMenu");

      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰";
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖";
        }
      });
    });
  `
}

]