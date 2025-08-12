export const navCodes = [
    {
  id: "nav1",
  html: `
    <!-- Responsive Navbar -->
    <nav class="navbar">
      <!-- Logo -->
      <div class="navbar-logo">Logo</div>

      <!-- Desktop Navigation Links -->
      <ul class="navbar-links" id="navLinks">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>

      <!-- Desktop Sign Up/Login Button -->
      <button class="navbar-btn desktop-btn">Sign Up / Login</button>

      <!-- Mobile Menu Toggle Button -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Menu (hidden by default) -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="navbar-btn">Sign Up / Login</button>
      </div>
    </nav>
  `,
  css: `
    /* Navbar Container */
    .navbar {
      width: 100%;
      background: white;
      color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 1.2rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      position: relative;
      border-radius: 6px;
    }

    /* Logo Styling */
    .navbar-logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Navigation Links (Desktop) */
    .navbar-links {
      display: none; /* Hidden on mobile */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover Effect for Links */
    .navbar-links li {
      cursor: pointer;
      transition: color 0.3s;
    }

    .navbar-links li:hover {
      color: #2563eb; /* blue-600 */
    }

    /* Sign Up/Login Button */
    .navbar-btn {
      background: #3b82f6; /* blue-500 */
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.3s;
    }

    .navbar-btn:hover {
      background: #2563eb; /* blue-600 */
    }

    /* Desktop Button Visibility */
    .desktop-btn {
      display: none; /* Hidden on mobile */
    }

    /* Mobile Menu Toggle Button */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }

    /* Mobile Dropdown Menu */
    .mobile-menu {
      display: none; /* Hidden by default */
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      z-index: 100;
    }

    /* Mobile Menu Links */
    .mobile-menu a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      transition: color 0.3s;
    }

    .mobile-menu a:hover {
      color: #2563eb;
    }

    /* Desktop View (>=768px) */
    @media (min-width: 768px) {
      .navbar-links {
        display: flex; /* Show links on desktop */
      }
      .desktop-btn {
        display: block; /* Show button on desktop */
      }
      .menu-toggle {
        display: none; /* Hide toggle on desktop */
      }
      .mobile-menu {
        display: none !important; /* Always hidden on desktop */
      }
    }
  `,
  js: `
    // Run after the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle"); // Hamburger button
      const mobileMenu = document.getElementById("mobileMenu"); // Mobile menu container

      // Toggle mobile menu visibility on click
      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰"; // Change icon back to hamburger
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖"; // Change icon to close
        }
      });
    });
  `
},
    {
  id: "nav2",
  html: `
    <!-- Responsive Navbar -->
    <nav class="navbar">
      <!-- Logo -->
      <div class="navbar-logo">Logo</div>

      <!-- Desktop Links + Button Group -->
      <div class="navbar-group">
        <ul class="navbar-links" id="navLinks">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
        <button class="navbar-btn desktop-btn">Sign Up / Login</button>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="navbar-btn">Sign Up / Login</button>
      </div>
    </nav>
  `,
  css: `
    /* Navbar Container */
    .navbar {
      width: 100%;
      background: white;
      color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 1.2rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      position: relative;
      border-radius: 6px;
    }

    /* Logo Styling */
    .navbar-logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Group for Links + Button */
    .navbar-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Desktop Navigation Links */
    .navbar-links {
      display: none; /* Hidden on mobile */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover Effect for Links */
    .navbar-links li {
      cursor: pointer;
      transition: color 0.3s;
    }

    .navbar-links li:hover {
      color: #2563eb; /* blue-600 */
    }

    /* Sign Up/Login Button */
    .navbar-btn {
      background: #3b82f6; /* blue-500 */
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.3s;
    }

    .navbar-btn:hover {
      background: #2563eb; /* blue-600 */
    }

    /* Desktop Button Visibility */
    .desktop-btn {
      display: none; /* Hidden on mobile */
    }

    /* Mobile Menu Toggle Button */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }

    /* Mobile Dropdown Menu */
    .mobile-menu {
      display: none; /* Hidden by default */
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      z-index: 100;
    }

    /* Mobile Menu Links */
    .mobile-menu a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      transition: color 0.3s;
    }

    .mobile-menu a:hover {
      color: #2563eb;
    }

    /* Desktop View (>=768px) */
    @media (min-width: 768px) {
      .navbar-links {
        display: flex; /* Show links on desktop */
      }
      .desktop-btn {
        display: block; /* Show button on desktop */
      }
      .menu-toggle {
        display: none; /* Hide toggle on desktop */
      }
      .mobile-menu {
        display: none !important; /* Always hidden on desktop */
      }
    }
  `,
  js: `
    // Run after the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle"); // Hamburger button
      const mobileMenu = document.getElementById("mobileMenu"); // Mobile menu container

      // Toggle mobile menu visibility on click
      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰"; // Hamburger icon
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖"; // Close icon
        }
      });
    });
  `
},
    {
  id: "nav3",
  html: `
    <!-- Responsive Navbar -->
    <nav class="navbar">
      <!-- Left Section: Logo + Links -->
      <div class="navbar-left">
        <div class="navbar-logo">Logo</div>
        <ul class="navbar-links" id="navLinks">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
      </div>

      <!-- Desktop Sign Up/Login Button -->
      <button class="navbar-btn desktop-btn">Sign Up / Login</button>

      <!-- Mobile Menu Toggle Button -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="navbar-btn">Sign Up / Login</button>
      </div>
    </nav>
  `,
  css: `
    /* Navbar Container */
    .navbar {
      width: 100%;
      background: white;
      color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.8rem 1.2rem;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      position: relative;
      border-radius: 6px;
    }

    /* Left Section: Logo + Links */
    .navbar-left {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Logo Styling */
    .navbar-logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
    }

    /* Desktop Navigation Links */
    .navbar-links {
      display: none; /* Hidden on mobile */
      gap: 1.5rem;
      list-style: none;
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Hover Effect for Links */
    .navbar-links li {
      cursor: pointer;
      transition: color 0.3s;
    }

    .navbar-links li:hover {
      color: #2563eb; /* blue-600 */
    }

    /* Sign Up/Login Button */
    .navbar-btn {
      background: #3b82f6; /* blue-500 */
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.3s;
    }

    .navbar-btn:hover {
      background: #2563eb; /* blue-600 */
    }

    /* Desktop Button Visibility */
    .desktop-btn {
      display: none; /* Hidden on mobile */
    }

    /* Mobile Menu Toggle Button */
    .menu-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }

    /* Mobile Dropdown Menu */
    .mobile-menu {
      display: none; /* Hidden by default */
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: white;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      z-index: 100;
    }

    /* Mobile Menu Links */
    .mobile-menu a {
      text-decoration: none;
      color: black;
      cursor: pointer;
      transition: color 0.3s;
    }

    .mobile-menu a:hover {
      color: #2563eb;
    }

    /* Desktop View (>=768px) */
    @media (min-width: 768px) {
      .navbar-links {
        display: flex; /* Show links on desktop */
      }
      .desktop-btn {
        display: block; /* Show button on desktop */
      }
      .menu-toggle {
        display: none; /* Hide toggle on desktop */
      }
      .mobile-menu {
        display: none !important; /* Always hidden on desktop */
      }
    }
  `,
  js: `
    // Run after the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.getElementById("menuToggle"); // Hamburger button
      const mobileMenu = document.getElementById("mobileMenu"); // Mobile menu container

      // Toggle mobile menu visibility on click
      menuToggle.addEventListener("click", () => {
        if (mobileMenu.style.display === "flex") {
          mobileMenu.style.display = "none";
          menuToggle.textContent = "☰"; // Hamburger icon
        } else {
          mobileMenu.style.display = "flex";
          menuToggle.textContent = "✖"; // Close icon
        }
      });
    });
  `
}
]
