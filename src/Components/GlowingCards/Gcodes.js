export const Gcodes=[
    {
  html: `
    <!-- Glow Card Container -->
    <div id="glow-card" class="glow-card">
      <!-- Card Title -->
      <h2 id="glow-title" class="glow-title">"Hover to Awaken"</h2>
      
      <!-- Card Text -->
      <p id="glow-text" class="glow-text">
        The future belongs to those who dare to imagine the impossible — and build it anyway.
      </p>

      <!-- Action Button -->
      <button id="glow-btn" class="glow-btn">
        Inspire Me
      </button>
    </div>
  `,

  css: `
    /* Base Page Styling */
    body {
      font-family: Arial, sans-serif;
      background-color: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    /* Card Container */
    .glow-card {
      width: 16rem;
      height: 18rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: 0.75rem;
      border: 1px solid #6D28D9;
      padding: 1.5rem 1rem;
      gap: 1rem;
      background-color: transparent;
      color: white;
      transition: all 0.3s ease;
      box-shadow: 0 0 20px rgba(109,40,217,0.4);
    }

    /* Hover Glow State */
    .glow-card:hover {
      background-color: #6D28D9;
      box-shadow: 0 0 40px rgba(109,40,217,0.9);
    }

    /* Active "Inspired" State */
    .inspired {
      background-color: #b91c1c; /* red-700 */
      border-color: #ef4444;     /* red-500 */
      box-shadow: 0 0 25px rgba(239,68,68,0.7);
    }

    /* Title Styling */
    .glow-title {
      font-size: 1.125rem;
      font-weight: bold;
      color: #c4b5fd; /* purple-200 */
      transition: color 0.3s ease;
    }

    /* Inspired Title Color */
    .inspired-title {
      color: #fee2e2; /* red-100 */
    }

    /* Text Styling */
    .glow-text {
      color: #d8b4fe; /* purple-300 */
      transition: color 0.3s ease;
    }

    /* Inspired Text Color */
    .inspired-text {
      color: #fecaca; /* red-200 */
    }

    /* Button Styling */
    .glow-btn {
      margin-top: 0.5rem;
      padding: 0.25rem 1rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: bold;
      border: none;
      background-color: white;
      color: #6D28D9;
      cursor: pointer;
      transition: filter 0.2s ease;
    }

    /* Button Hover */
    .glow-btn:hover {
      filter: brightness(1.1);
    }

    /* Inspired Button Colors */
    .inspired-btn {
      color: #b91c1c;
    }
  `,

  js: `
    // Get DOM Elements
    const glowCard = document.getElementById('glow-card');
    const glowTitle = document.getElementById('glow-title');
    const glowText = document.getElementById('glow-text');
    const glowBtn = document.getElementById('glow-btn');

    // Click Event for "Inspire Me" Button
    glowBtn.addEventListener('click', () => {
      // Add "inspired" styles
      glowCard.classList.add('inspired');
      glowTitle.classList.add('inspired-title');
      glowText.classList.add('inspired-text');
      glowBtn.classList.add('inspired-btn');

      // Change content to inspired message
      glowTitle.textContent = '🔥 Awakened 🔥';
      glowText.textContent = 'Believe in yourself so fiercely that even doubt surrenders.';

      // Reset after 3 seconds
      setTimeout(() => {
        glowCard.classList.remove('inspired');
        glowTitle.classList.remove('inspired-title');
        glowText.classList.remove('inspired-text');
        glowBtn.classList.remove('inspired-btn');

        glowTitle.textContent = '"Hover to Awaken"';
        glowText.textContent = 'The future belongs to those who dare to imagine the impossible — and build it anyway.';
      }, 3000);
    });
  `
    },
    {
  html: `
    <!-- Glow Card Container -->
    <div class="glow-card2">
      
      <!-- Rotating Gradient Border Layer -->
      <div class="glow-border">
        <!-- Empty oversized div to ensure smooth rotation coverage -->
        <div class="glow-border-fill"></div>
      </div>

      <!-- Inner Content Area -->
      <div class="glow-content">
        <h2 class="glow-title">Magic In Border</h2>
        <p class="glow-text">
          You may have tried to made it now here it is.
        </p>
      </div>

    </div>
  `,

  css: `
    /* Page Styling for Demo */
    body {
      background-color: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }

    /* Outer Container with fixed size */
    .glow-card2 {
      position: relative;
      width: 18rem;
      height: 20rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 0.375rem; /* rounded-md */
    }

    /* Rotating Gradient Border Layer */
    .glow-border {
      position: absolute;
      width: 30rem;
      border-radius: 0.75rem; /* rounded-xl */
      overflow: hidden;
      padding: 3px;
      background: linear-gradient(to right, #ec4899, #a855f7, #3b82f6); /* pink → purple → blue */
      animation: spin-slow 8s linear infinite;
      z-index: 0;
    }

    /* Large fill div to cover rotation edges */
    .glow-border-fill {
      width: 100rem;
      height: 100rem;
    }

    /* Inner Content Card */
    .glow-content {
      position: relative;
      z-index: 10;
      width: calc(100% - 6px);  /* leaves border visible */
      height: calc(100% - 6px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1.5rem 1rem;
      text-align: center;
      background-color: #111827; /* gray-900 */
      color: white;
      border-radius: 0.5rem; /* rounded-lg */
    }

    /* Title Styling */
    .glow-title {
      font-size: 1.125rem; /* text-lg */
      font-weight: bold;
    }

    /* Description Text Styling */
    .glow-text {
      font-size: 0.875rem; /* text-sm */
      color: #d1d5db; /* gray-300 */
    }

    /* Slow spin animation */
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `
    },
    {
  html: `
    <!-- Glassy Glow Card -->
    <div class="glow-card3">
      <!-- Title -->
      <h2 class="glow-card3-title">Glassy Card</h2>

      <!-- Description -->
      <p class="glow-card3-text">
        This is a modern glassy card with a glowing gradient shadow on hover.
      </p>
    </div>
  `,

  css: `
    /* Page styling for demo */
    body {
      background-color: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }

    /* Glassy Glow Card */
    .glow-card3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      position: relative;
      padding: 1.5rem; /* p-6 */
      width: 18rem;
      height: 20rem;

      border-radius: 0.75rem; /* rounded-xl */
      background: rgba(255, 255, 255, 0.1); /* bg-white/10 */
      border: 1px solid rgba(255, 255, 255, 0.2); /* border-white/20 */

      backdrop-filter: blur(8px); /* backdrop-blur-md */
      color: white;

      transition: all 0.5s ease; /* duration-500 */
    }

    /* Hover effect: glowing purple shadow */
    .glow-card3:hover {
      box-shadow: 0 0 30px 5px rgba(109, 40, 217, 0.5);
    }

    /* Title styling */
    .glow-card3-title {
      font-size: 1.25rem; /* text-xl */
      font-weight: 600; /* font-semibold */
      margin-bottom: 0.5rem; /* mb-2 */
    }

    /* Description text */
    .glow-card3-text {
      font-size: 0.875rem; /* text-sm */
      opacity: 0.8; /* opacity-80 */
    }
  `
    }
]