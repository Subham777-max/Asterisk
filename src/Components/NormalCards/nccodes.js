export const nccodes=[
    {
  html: `
    <div class="profile-card">
      
      <!-- Top Section -->
      <div class="profile-top">
        <div class="profile-img-wrapper">
          <img 
            src="https://via.placeholder.com/80" 
            alt="Profile" 
            class="profile-img"
          />
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="profile-bottom">
        <h1 class="profile-name">David Cell</h1>
        <p class="profile-desc">
          Passionate developer crafting sleek interfaces with precision.
        </p>
        <button class="profile-btn">View More</button>
      </div>

    </div>
  `,

  css: `
    body {
      background-color: #f3f4f6; /* Light gray background */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    .profile-card {
      width: 20rem;
      height: 22rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to right, white, #3b82f6); /* from-white to-blue-500 */
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
    }

    .profile-card:hover {
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    }

    /* Top Section */
    .profile-top {
      width: 100%;
      height: 50%;
      background-color: #3b82f6; /* blue-500 */
      border-bottom-left-radius: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .profile-img-wrapper {
      padding: 0.25rem;
      border: 2px solid white;
      border-radius: 50%;
      background: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }

    .profile-img-wrapper:hover {
      transform: scale(1.05);
    }

    .profile-img {
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      object-fit: cover;
    }

    /* Bottom Section */
    .profile-bottom {
      width: 100%;
      height: 50%;
      background-color: white;
      border-top-right-radius: 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      color: #111827; /* gray-900 */
      padding: 1.25rem;
      gap: 0.75rem;
    }

    .profile-name {
      font-size: 1.4rem;
      font-weight: 800;
      color: #1f2937; /* gray-800 */
      letter-spacing: 0.05rem;
    }

    .profile-desc {
      font-size: 0.9rem;
      color: #6b7280; /* gray-500 */
      line-height: 1.4;
    }

    .profile-btn {
      padding: 0.5rem 1.25rem;
      font-weight: 600;
      color: white;
      background-color: #3b82f6; /* blue-500 */
      border: none;
      border-radius: 9999px; /* fully rounded */
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .profile-btn:hover {
      background-color: #2563eb; /* blue-600 */
      box-shadow: 0 3px 8px rgba(0,0,0,0.3);
    }
  `,

  js: `
    // No JS required for this card unless you want click handling
    const btn = document.querySelector('.profile-btn');
    btn.addEventListener('click', () => {
      alert('View More clicked!');
    });
  `
    },
    {
  html: `
    <div class="ecommerce-card">
      
      <!-- Top Section -->
      <div class="ecommerce-img-wrapper">
        <img 
          src="https://via.placeholder.com/300x200?text=Headphones" 
          alt="Headphone" 
          class="ecommerce-img"
        />
      </div>

      <!-- Bottom Section -->
      <div class="ecommerce-details">
        <h1 class="ecommerce-price">
          Price: <span>$49.99</span>
        </h1>

        <div class="ecommerce-info">
          <h2 class="ecommerce-title">Wireless Headphones</h2>
          <p class="ecommerce-desc">Immersive sound. Sleek design. Long-lasting battery.</p>
        </div>

        <button class="ecommerce-btn">Buy Now</button>
      </div>

    </div>
  `,

  css: `
    body {
      background-color: #f3f4f6; /* light gray */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    .ecommerce-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 18rem;
      height: 23rem;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      transition: box-shadow 0.3s ease;
      background-color: white;
    }

    .ecommerce-card:hover {
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    }

    /* Top Image Section */
    .ecommerce-img-wrapper {
      width: 100%;
      height: 50%;
    }

    .ecommerce-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Bottom Details Section */
    .ecommerce-details {
      width: 100%;
      height: 50%;
      background-color: #111827; /* gray-900 */
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      color: white;
    }

    .ecommerce-price {
      font-size: 1.125rem;
      font-weight: bold;
      letter-spacing: 0.05rem;
    }

    .ecommerce-price span {
      color: #a78bfa; /* purple-400 */
    }

    .ecommerce-info {
      margin-top: 0.5rem;
      text-align: center;
    }

    .ecommerce-title {
      font-weight: 600;
      font-size: 1rem;
    }

    .ecommerce-desc {
      font-size: 0.875rem;
      color: #9ca3af; /* gray-400 */
      margin-top: 0.25rem;
    }

    /* Button */
    .ecommerce-btn {
      padding: 0.5rem 1.5rem;
      font-weight: 600;
      background-color: #a855f7; /* purple-500 */
      color: white;
      border: none;
      border-radius: 9999px;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
      margin-top: 1rem;
    }

    .ecommerce-btn:hover {
      background-color: #9333ea; /* purple-600 */
      transform: translateY(-2px);
      box-shadow: 0 3px 8px rgba(0,0,0,0.3);
    }
  `,

  js: `
    const buyBtn = document.querySelector('.ecommerce-btn');
    buyBtn.addEventListener('click', () => {
      alert('Thanks for your purchase!');
    });
  `
    },
    {
  html: `
    <div class="nature-card">
      
      <!-- Image -->
      <img 
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
        alt="Beautiful sunset at beach" 
        class="nature-img"
      />

      <!-- Text Content -->
      <div class="nature-content">
        <h2 class="nature-title">Beautiful Sunset</h2>
        <p class="nature-desc">
          Experience the most breathtaking sunsets from our exclusive locations around the world.
          Perfect for romantic evenings or peaceful moments alone.
        </p>
      </div>

      <!-- Tags & Button -->
      <div class="nature-footer">
        <span class="nature-tag">#Travel</span>
        <button class="nature-btn">Read More...</button>
      </div>

    </div>
  `,

  css: `
    body {
      background-color: #f3f4f6; /* light gray */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    .nature-card {
      max-width: 20rem;
      background-color: white;
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: box-shadow 0.3s ease;
    }

    .nature-card:hover {
      box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }

    .nature-img {
      width: 100%;
      height: 12rem;
      object-fit: cover;
    }

    .nature-content {
      padding: 1.5rem;
    }

    .nature-title {
      font-size: 1.25rem;
      font-weight: bold;
      color: #1f2937; /* gray-800 */
      margin-bottom: 0.5rem;
    }

    .nature-desc {
      font-size: 1rem;
      color: #4b5563; /* gray-600 */
      line-height: 1.4;
    }

    .nature-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1.5rem 1.5rem 1.5rem;
    }

    .nature-tag {
      background-color: #e5e7eb; /* gray-200 */
      color: #374151; /* gray-700 */
      font-size: 0.875rem;
      font-weight: 600;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
    }

    .nature-btn {
      background-color: #8b5cf6; /* purple-500 */
      color: white;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .nature-btn:hover {
      background-color: #7c3aed; /* purple-600 */
      transform: scale(1.02);
    }
  `,

  js: `
    const natureBtn = document.querySelector('.nature-btn');
    natureBtn.addEventListener('click', () => {
      alert('Redirecting to full article...');
    });
  `
    },
    {
  html: `
    <div class="auth-card">
      <div class="auth-header">
        <h2 id="auth-title">Sign In</h2>
        <button id="toggle-btn" class="toggle-link">Create Account</button>
      </div>

      <form class="auth-form">
        <div id="signup-name-field" class="form-group hidden">
          <input type="text" placeholder="Full Name" />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" />
        </div>
        <div id="signup-confirm-field" class="form-group hidden">
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button type="button" class="auth-btn" id="submit-btn">Sign In</button>
      </form>

      <div class="auth-footer" id="auth-footer">
        Don't have an account? <button id="switch-btn" class="footer-link">Sign Up</button>
      </div>
    </div>
  `,

  css: `
    body {
      font-family: Arial, sans-serif;
      background-color: #f3f4f6;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .auth-card {
      width: 100%;
      max-width: 400px;
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }

    .auth-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .auth-header h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .toggle-link {
      background: none;
      border: none;
      font-size: 0.875rem;
      color: #2563eb;
      cursor: pointer;
      text-decoration: underline;
    }

    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-group input {
      width: 100%;
      padding: 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid #d1d5db;
      font-size: 1rem;
    }

    .auth-btn {
      width: 100%;
      padding: 0.75rem;
      background-color: #2563eb;
      color: white;
      font-weight: 600;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .auth-btn:hover {
      background-color: #1d4ed8;
    }

    .auth-footer {
      margin-top: 1.5rem;
      text-align: center;
      font-size: 0.875rem;
      color: #6b7280;
    }

    .footer-link {
      background: none;
      border: none;
      color: #2563eb;
      cursor: pointer;
      text-decoration: underline;
      font-size: 0.875rem;
    }

    .hidden {
      display: none;
    }
  `,

  js: `
    let mode = "signin";

    const authTitle = document.getElementById('auth-title');
    const toggleBtn = document.getElementById('toggle-btn');
    const signupNameField = document.getElementById('signup-name-field');
    const signupConfirmField = document.getElementById('signup-confirm-field');
    const submitBtn = document.getElementById('submit-btn');
    const authFooter = document.getElementById('auth-footer');
    const switchBtn = document.getElementById('switch-btn');

    function updateMode(newMode) {
      mode = newMode;
      if (mode === "signin") {
        authTitle.textContent = "Sign In";
        toggleBtn.textContent = "Create Account";
        submitBtn.textContent = "Sign In";
        signupNameField.classList.add("hidden");
        signupConfirmField.classList.add("hidden");
        authFooter.innerHTML = \`Don't have an account? <button id="switch-btn" class="footer-link">Sign Up</button>\`;
      } else {
        authTitle.textContent = "Sign Up";
        toggleBtn.textContent = "Sign In";
        submitBtn.textContent = "Sign Up";
        signupNameField.classList.remove("hidden");
        signupConfirmField.classList.remove("hidden");
        authFooter.innerHTML = \`Already have an account? <button id="switch-btn" class="footer-link">Sign In</button>\`;
      }

      // rebind footer button event
      document.getElementById('switch-btn').addEventListener('click', () => {
        updateMode(mode === "signin" ? "signup" : "signin");
      });
    }

    toggleBtn.addEventListener('click', () => {
      updateMode(mode === "signin" ? "signup" : "signin");
    });

    document.getElementById('switch-btn').addEventListener('click', () => {
      updateMode(mode === "signin" ? "signup" : "signin");
    });
  `
    }

]