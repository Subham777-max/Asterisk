export const spnavcodes = [
    {
  id: "special-nav-1",
  html: `
    <!-- Glassy Navbar -->
    <nav class="glassy-nav">
      
      <!-- Logo -->
      <div class="nav-logo">GlassyNav</div>

      <!-- Desktop Navigation Links -->
      <ul class="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>

      <!-- Desktop "Sign Up" Button -->
      <button class="nav-signup">Sign Up</button>

      <!-- Mobile Menu Toggle Button (Hamburger / Close) -->
      <button class="nav-toggle" id="navToggle">☰</button>

      <!-- Mobile Menu (Initially Hidden) -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="nav-signup">Sign Up</button>
      </div>
    </nav>
  `,
  css: `
    /* -------------------- BASIC RESET -------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: #0f172a; /* Dark background for contrast */
      color: white;
      padding: 20px;
    }

    /* -------------------- NAVBAR CONTAINER -------------------- */
    .glassy-nav {
      width: 100%;
      max-width: 1200px; /* Prevent stretching too wide */
      margin: auto;
      background: rgba(255, 255, 255, 0.1); /* Transparent white */
      backdrop-filter: blur(10px); /* Glass effect */
      border: 1px solid rgba(255, 255, 255, 0.2); /* Subtle border */
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
      position: relative;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2); /* Soft shadow */
    }

    /* -------------------- LOGO -------------------- */
    .nav-logo {
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    }

    /* -------------------- DESKTOP LINKS -------------------- */
    .nav-links {
      display: flex;
      gap: 20px;
      list-style: none;
      font-weight: 600;
    }

    .nav-links li {
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .nav-links li:hover {
      color: #93c5fd; /* Light blue hover */
    }

    /* -------------------- SIGN UP BUTTON -------------------- */
    .nav-signup {
      background: rgba(59, 130, 246, 0.7); /* Blue glassy button */
      color: white;
      border: none;
      padding: 8px 14px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background 0.3s ease;
      backdrop-filter: blur(5px);
    }

    .nav-signup:hover {
      background: rgba(96, 165, 250, 0.7);
    }

    /* -------------------- MOBILE MENU TOGGLE BUTTON -------------------- */
    .nav-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      display: none; /* Hidden on desktop */
    }

    /* -------------------- MOBILE MENU -------------------- */
    .mobile-menu {
      display: none; /* Hidden by default */
      flex-direction: column;
      align-items: center;
      gap: 12px;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      padding: 16px 0;
      animation: slideDown 0.3s ease;
    }

    .mobile-menu a {
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .mobile-menu a:hover {
      color: #93c5fd;
    }

    /* -------------------- ANIMATION -------------------- */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* -------------------- RESPONSIVE STYLES -------------------- */
    @media (max-width: 768px) {
      .nav-links,
      .nav-signup {
        display: none; /* Hide desktop links & button */
      }
      .nav-toggle {
        display: block; /* Show hamburger button */
      }
    }
  `,
  js: `
    // Get DOM Elements
    const navToggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle mobile menu visibility
    navToggle.addEventListener("click", () => {
      if (mobileMenu.style.display === "flex") {
        // Hide menu
        mobileMenu.style.display = "none";
        navToggle.textContent = "☰"; // Show hamburger icon
      } else {
        // Show menu
        mobileMenu.style.display = "flex";
        navToggle.textContent = "✖"; // Show close icon
      }
    });
  `
},
    {
  id: "special-nav-2",
  html: `
    <!-- Gradient Glow Navbar -->
    <nav class="glow-nav">
      
      <!-- Logo -->
      <div class="nav-logo">GlowNav</div>

      <!-- Desktop Navigation Links -->
      <ul class="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>

      <!-- Desktop Join Button -->
      <button class="nav-join">Join Now</button>

      <!-- Mobile Menu Toggle -->
      <button class="nav-toggle" id="navToggle">☰</button>

      <!-- Mobile Menu (Initially Hidden) -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="nav-join">Join Now</button>
      </div>
    </nav>
  `,
  css: `
    /* -------------------- BASIC RESET -------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: #0f172a; /* Dark background for contrast */
      color: white;
      padding: 20px;
    }

    /* -------------------- NAVBAR CONTAINER -------------------- */
    .glow-nav {
      width: 100%;
      max-width: 1200px;
      margin: auto;
      background: linear-gradient(to right, #ec4899, #8b5cf6, #6366f1); /* Pink → Purple → Indigo */
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
      position: relative;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }

    /* -------------------- LOGO -------------------- */
    .nav-logo {
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: 1px;
      cursor: pointer;
    }

    /* -------------------- DESKTOP LINKS -------------------- */
    .nav-links {
      display: flex;
      gap: 20px;
      list-style: none;
      font-weight: 600;
    }

    .nav-links li {
      cursor: pointer;
      transition: filter 0.3s ease;
    }

    .nav-links li:hover {
      filter: drop-shadow(0 0 10px #fff);
    }

    /* -------------------- JOIN BUTTON -------------------- */
    .nav-join {
      background: rgba(0, 0, 0, 0.3);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }

    .nav-join:hover {
      background: rgba(255, 255, 255, 0.2);
      filter: drop-shadow(0 0 5px #fff);
    }

    /* -------------------- MOBILE MENU TOGGLE -------------------- */
    .nav-toggle {
      font-size: 1.5rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      display: none; /* Hidden on desktop */
    }

    /* -------------------- MOBILE MENU -------------------- */
    .mobile-menu {
      display: none; /* Hidden by default */
      flex-direction: column;
      align-items: center;
      gap: 12px;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: linear-gradient(to bottom, #ec4899, #8b5cf6, #6366f1);
      border-radius: 0 0 8px 8px;
      padding: 16px 0;
      animation: slideDown 0.3s ease;
    }

    .mobile-menu a {
      cursor: pointer;
      transition: filter 0.3s ease;
    }

    .mobile-menu a:hover {
      filter: drop-shadow(0 0 10px #fff);
    }

    /* -------------------- ANIMATION -------------------- */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* -------------------- RESPONSIVE STYLES -------------------- */
    @media (max-width: 768px) {
      .nav-links,
      .nav-join {
        display: none; /* Hide desktop items */
      }
      .nav-toggle {
        display: block; /* Show hamburger menu */
      }
    }
  `,
  js: `
    // Get DOM elements
    const navToggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle mobile menu visibility
    navToggle.addEventListener("click", () => {
      if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
        navToggle.textContent = "☰"; // Hamburger icon
      } else {
        mobileMenu.style.display = "flex";
        navToggle.textContent = "✖"; // Close icon
      }
    });
  `
},
    {
  id: "special-nav-3",
  html: `
    <!-- Aurora Gradient Navbar -->
    <nav class="aurora-nav">
      
      <!-- Logo -->
      <div class="nav-logo">Aurora</div>

      <!-- Desktop Navigation Links -->
      <ul class="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>

      <!-- Desktop Join Button -->
      <button class="nav-join">Join Now</button>

      <!-- Mobile Menu Toggle -->
      <button class="nav-toggle" id="navToggle">☰</button>

      <!-- Slide-in Mobile Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <button class="close-btn" id="closeMenu">✖</button>
        <a>Home</a>
        <a>Features</a>
        <a>Contact</a>
        <button class="nav-join">Join Now</button>
      </div>
    </nav>
  `,
  css: `
    /* -------------------- RESET -------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: Arial, sans-serif;
      background: #0f172a;
      color: white;
      padding: 20px;
    }

    /* -------------------- NAV CONTAINER -------------------- */
    .aurora-nav {
      width: 100%;
      max-width: 1200px;
      margin: auto;
      height: 70px;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      background: linear-gradient(to right, #6366f1, #8b5cf6, #ec4899);
      overflow: hidden;
      position: relative;
    }

    /* -------------------- LOGO -------------------- */
    .nav-logo {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: 1px;
      cursor: pointer;
    }

    /* -------------------- DESKTOP LINKS -------------------- */
    .nav-links {
      display: flex;
      gap: 16px;
      list-style: none;
      font-weight: 500;
    }
    .nav-links li {
      padding: 6px 12px;
      border-radius: 9999px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .nav-links li:hover {
      background: white;
      color: #4338ca; /* Indigo-600 */
    }

    /* -------------------- DESKTOP JOIN BUTTON -------------------- */
    .nav-join {
      background: white;
      color: #4338ca;
      font-weight: 600;
      border: none;
      border-radius: 9999px;
      padding: 8px 16px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .nav-join:hover {
      background: #e0e7ff;
    }

    /* -------------------- MOBILE MENU TOGGLE -------------------- */
    .nav-toggle {
      font-size: 1.8rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      display: none;
    }

    /* -------------------- SLIDE-IN MOBILE MENU -------------------- */
    .mobile-menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 250px;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      box-shadow: -4px 0 12px rgba(0,0,0,0.3);
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 1000;
    }
    .mobile-menu a {
      cursor: pointer;
      transition: color 0.3s ease;
    }
    .mobile-menu a:hover {
      color: #c7d2fe; /* Indigo-200 */
    }

    /* -------------------- CLOSE BUTTON -------------------- */
    .close-btn {
      align-self: flex-end;
      font-size: 1.8rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
    }

    /* -------------------- RESPONSIVE STYLES -------------------- */
    @media (max-width: 768px) {
      .nav-links,
      .nav-join {
        display: none;
      }
      .nav-toggle {
        display: block;
      }
    }

    /* -------------------- MOBILE MENU OPEN STATE -------------------- */
    .mobile-menu.open {
      transform: translateX(0);
    }
  `,
  js: `
    // Select elements
    const navToggle = document.getElementById("navToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");

    // Open menu
    navToggle.addEventListener("click", () => {
      mobileMenu.classList.add("open");
    });

    // Close menu
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  `
},
    {
  id: "special-nav-4",
  html: `
    <!-- Pixel Style Navbar -->
    <nav class="pixel-nav">
      <!-- Logo -->
      <div class="nav-logo">PixelNav</div>

      <!-- Desktop Links -->
      <ul class="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>

      <!-- Desktop Play Button -->
      <button class="play-btn">Play</button>

      <!-- Mobile Menu Toggle -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Dropdown Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Service</a>
        <button class="play-btn">Play</button>
      </div>
    </nav>
  `,
  css: `
    /* -------------------- RESET -------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: #111;
      font-family: monospace;
      color: white;
      padding: 20px;
    }

    /* -------------------- NAV CONTAINER -------------------- */
    .pixel-nav {
      width: 100%;
      max-width: 1200px;
      margin: auto;
      height: 12vh;
      padding: 8px 16px;
      background: #222;
      color: white;
      font-family: monospace;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      box-shadow: 0 0 0 3px #ffcc00;
      position: relative;
    }

    /* -------------------- LOGO -------------------- */
    .nav-logo {
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: -1px;
      cursor: pointer;
    }

    /* -------------------- DESKTOP LINKS -------------------- */
    .nav-links {
      display: flex;
      gap: 20px;
      list-style: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.9rem;
    }
    .nav-links li {
      cursor: pointer;
      padding: 4px 8px;
      transition: all 0.2s ease;
    }
    .nav-links li:hover {
      background: #ffcc00;
      color: black;
    }

    /* -------------------- DESKTOP PLAY BUTTON -------------------- */
    .play-btn {
      display: none;
      background: #ffcc00;
      color: black;
      font-weight: bold;
      padding: 6px 12px;
      border: 2px solid black;
      border-radius: 0;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background 0.2s ease;
    }
    .play-btn:hover {
      background: #facc15;
    }

    /* -------------------- MOBILE MENU TOGGLE -------------------- */
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: white;
      cursor: pointer;
    }

    /* -------------------- MOBILE DROPDOWN -------------------- */
    .mobile-menu {
      display: none;
      position: absolute;
      top: 12vh;
      left: 0;
      width: 100%;
      background: #222;
      box-shadow: 0 0 0 3px #ffcc00;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 16px 0;
      z-index: 50;
    }
    .mobile-menu a {
      padding: 4px 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .mobile-menu a:hover {
      background: #ffcc00;
      color: black;
    }

    /* -------------------- RESPONSIVE -------------------- */
    @media (max-width: 768px) {
      .nav-links,
      .pixel-nav > .play-btn {
        display: none;
      }
      .menu-toggle {
        display: block;
      }
      .play-btn {
        display: block;
      }
    }

    /* -------------------- MOBILE MENU OPEN STATE -------------------- */
    .mobile-menu.open {
      display: flex;
      animation: slideDown 0.3s ease forwards;
    }

    /* -------------------- ANIMATION -------------------- */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  js: `
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      menuToggle.textContent = mobileMenu.classList.contains("open") ? "✖" : "☰";
    });
  `
},
    {
  id: "special-nav-5",
  html: `
    <!-- SmoothGlow Navbar -->
    <nav class="smoothglow-nav" id="smoothNav">
      <!-- Glow Effect -->
      <div class="nav-glow" id="navGlow"></div>

      <!-- Logo -->
      <div class="nav-logo">SmoothGlow</div>

      <!-- Desktop Links -->
      <ul class="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>

      <!-- Mobile Toggle -->
      <button class="menu-toggle" id="menuToggle">☰</button>

      <!-- Mobile Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
      </div>
    </nav>
  `,
  css: `
    /* -------------------- RESET -------------------- */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: #111;
      font-family: sans-serif;
      padding: 20px;
      color: white;
    }

    /* -------------------- NAV CONTAINER -------------------- */
    .smoothglow-nav {
      width: 100%;
      max-width: 1200px;
      height: 12vh;
      background: #111827; /* Tailwind gray-900 */
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    /* -------------------- GLOW EFFECT -------------------- */
    .nav-glow {
      position: absolute;
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background: rgba(168, 85, 247, 0.4); /* purple-500/40 */
      filter: blur(24px);
      pointer-events: none;
      transition: top 0.5s ease-out, left 0.5s ease-out;
      z-index: 0;
    }

    /* -------------------- LOGO -------------------- */
    .nav-logo {
      font-size: 1.1rem;
      font-weight: bold;
      z-index: 1;
      cursor: pointer;
    }

    /* -------------------- DESKTOP LINKS -------------------- */
    .nav-links {
      display: flex;
      gap: 16px;
      font-size: 0.9rem;
      font-weight: 500;
      z-index: 1;
      list-style: none;
    }
    .nav-links li {
      cursor: pointer;
      transition: color 0.2s ease;
    }
    .nav-links li:hover {
      color: #d8b4fe; /* purple-300 */
    }

    /* -------------------- MENU TOGGLE -------------------- */
    .menu-toggle {
      display: none;
      font-size: 1.5rem;
      background: none;
      border: none;
      color: white;
      z-index: 1;
      cursor: pointer;
    }

    /* -------------------- MOBILE MENU -------------------- */
    .mobile-menu {
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      background: #111827;
      border-top: 1px solid #a855f7;
      padding: 16px 0;
      position: absolute;
      top: 12vh;
      left: 0;
      width: 100%;
      z-index: 50;
      animation: slideDown 0.3s ease forwards;
    }
    .mobile-menu a {
      cursor: pointer;
      transition: color 0.2s ease;
    }
    .mobile-menu a:hover {
      color: #d8b4fe;
    }

    /* -------------------- RESPONSIVE -------------------- */
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      .menu-toggle {
        display: block;
      }
    }

    /* -------------------- ANIMATION -------------------- */
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* -------------------- OPEN MENU STATE -------------------- */
    .mobile-menu.open {
      display: flex;
    }
  `,
  js: `
    const smoothNav = document.getElementById("smoothNav");
    const navGlow = document.getElementById("navGlow");
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    // Glow follow effect
    smoothNav.addEventListener("mousemove", (e) => {
      const rect = smoothNav.getBoundingClientRect();
      const x = e.clientX - rect.left - 48; // center glow
      const y = e.clientY - rect.top - 48;
      navGlow.style.left = x + "px";
      navGlow.style.top = y + "px";
    });

    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      menuToggle.textContent = mobileMenu.classList.contains("open") ? "✖" : "☰";
    });
  `
},
]
