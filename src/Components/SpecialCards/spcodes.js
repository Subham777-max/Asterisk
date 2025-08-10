export const spcodes=[
    {
  html: `
    <div class="card">
      <!-- Image section -->
      <div class="card-image">
        <img src="shoe.png" alt="Shoe" />
      </div>

      <!-- Details section -->
      <div class="card-details">
        <p>Shoe: <span>Nike</span></p>
        <p>Price: <span>$49</span></p>
      </div>

      <!-- Buttons -->
      <div class="card-buttons">
        <button id="seeDetailsBtn">See details</button>
        <button id="buyNowBtn">Buy Now</button>
      </div>
    </div>
  `,

  css: `
    body {
      background-color: #111827; /* bg-gray-900 */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    /* ===== Card Styles ===== */
    .card {
      position: relative;
      background: #111827;
      color: white;
      width: 15rem;
      height: 18rem;
      margin-top: 2.5rem;
      border-radius: 0.75rem; /* rounded-xl */
      display: flex;
      flex-direction: column;
      padding: 1rem;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* ===== Image Styles ===== */
    .card-image {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10rem;
      height: 7rem;
      transform: translate(-50%, -5rem);
      transition: all 1s ease;
    }

    .card-image img {
      width: 100%;
      height: 100%;
    }

    /* ===== Details Styles ===== */
    .card-details {
      text-align: center;
      font-size: 1.25rem;
      overflow: hidden;
      opacity: 0;
      max-width: 0;
      transition: all 0.5s ease 0.5s;
    }

    .card-details span {
      font-weight: bold;
      color: #facc15; /* text-yellow-500 */
    }

    /* ===== Button Container ===== */
    .card-buttons {
      position: absolute;
      top: 12rem;
    }

    /* ===== Buttons ===== */
    .card-buttons button {
      padding: 0.5rem 1rem;
      font-weight: 600;
      color: white;
      background: #facc15;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0,0,0,0.2);
      transition: background 0.3s;
    }

    .card-buttons button:hover {
      background: #eab308;
    }

    /* ===== Active States ===== */
    .card.active .card-image {
      transform: translate(-50%, -11.5rem) rotate(-45deg);
    }

    .card.active .card-details {
      opacity: 1;
      max-width: 10rem;
    }
  `,

  js: `
    const card = document.querySelector('.card');
    const seeDetailsBtn = document.getElementById('seeDetailsBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');

    // Initial state: hide Buy Now button
    buyNowBtn.style.display = 'none';

    seeDetailsBtn.addEventListener('click', () => {
      // Activate animation
      card.classList.add('active');

      // Toggle buttons
      seeDetailsBtn.style.display = 'none';
      buyNowBtn.style.display = 'inline-block';

      // Reverse after 5 seconds
      setTimeout(() => {
        card.classList.remove('active');
        seeDetailsBtn.style.display = 'inline-block';
        buyNowBtn.style.display = 'none';
      }, 5000);
    });
  `
    },
    {
  html: `
    <div class="profile-card" id="profileCard">
      <!-- Image Section -->
      <div class="profile-image">
        <img 
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop" 
          alt="Profile" 
        />
      </div>

      <!-- Details Section -->
      <div class="profile-details">
        <h2>David Johnson</h2>
        <p class="role">UI/UX Designer</p>
        <p class="description">
          Passionate about crafting user-friendly digital experiences.
        </p>
        <div class="buttons">
          <button class="btn message">Message</button>
          <button class="btn follow">Follow</button>
        </div>
      </div>
    </div>
  `,

  css: `
    body {
      background-color: #1f2937; /* bg-gray-800 */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    /* ===== Card Container ===== */
    .profile-card {
      background: #1f2937;
      color: white;
      width: 17rem;
      height: 23rem;
      border-radius: 0.75rem;
      overflow: hidden;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      transition: transform 0.3s;
    }

    .profile-card:hover {
      transform: scale(1.05);
    }

    /* ===== Image Section ===== */
    .profile-image {
      width: 100%;
      height: 100%;
      transition: all 0.7s ease-in-out;
    }

    .profile-image img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    /* ===== Details Section ===== */
    .profile-details {
      padding: 0 1rem;
      opacity: 0;
      height: 0;
      overflow: hidden;
      transition: all 0.7s ease-in-out;
    }

    .profile-details h2 {
      font-size: 1.25rem;
      font-weight: bold;
    }

    .profile-details .role {
      color: #facc15; /* text-yellow-400 */
    }

    .profile-details .description {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      color: #d1d5db; /* text-gray-300 */
    }

    .profile-details .buttons {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .btn {
      padding: 0.25rem 0.75rem;
      border-radius: 0.375rem;
      border: none;
      cursor: pointer;
      transition: background 0.3s;
    }

    .btn.message {
      background: #facc15;
      color: white;
    }

    .btn.message:hover {
      background: #eab308;
    }

    .btn.follow {
      background: #4b5563; /* bg-gray-600 */
      color: white;
    }

    .btn.follow:hover {
      background: #374151; /* bg-gray-700 */
    }

    /* ===== Active State ===== */
    .profile-card.active .profile-image {
      height: 50%;
    }

    .profile-card.active .profile-details {
      opacity: 1;
      height: 50%;
      padding: 1rem;
    }
  `,

  js: `
    const profileCard = document.getElementById('profileCard');

    profileCard.addEventListener('click', () => {
      profileCard.classList.toggle('active');
    });
  `
    },
    {
  html: `
    <div class="card-container" id="flipCard">
      <div class="card-inner">
        
        <!-- Front Side -->
        <div class="card-front">
          <img 
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg" 
            alt="Course" 
          />
          <div class="card-front-content">
            <h2>Intro to Web Development</h2>
            <p>Start your journey in web development</p>
            <button class="btn see-details">See Details</button>
          </div>
        </div>
        
        <!-- Back Side -->
        <div class="card-back">
          <h2>Course Details</h2>
          <div class="course-info">
            <p><span class="label">Instructor:</span> <span class="highlight">John Doe</span></p>
            <p><span class="label">Duration:</span> <span class="highlight">6 Weeks</span></p>
            <p class="description">
              Learn HTML, CSS, and JavaScript to create responsive, modern websites from scratch.
            </p>
          </div>
          <button class="btn join-now">Join Now</button>
        </div>

      </div>
    </div>
  `,

  css: `
    body {
      background-color: #1f2937; /* bg-gray-800 */
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }

    /* ===== Card Container ===== */
    .card-container {
      width: 18rem;
      height: 24rem;
      perspective: 1000px;
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.7s;
      transform-style: preserve-3d;
    }

    .card-container.flipped .card-inner {
      transform: rotateY(180deg);
    }

    /* ===== Front & Back Common ===== */
    .card-front, .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #1f2937;
      border: 1px solid #374151; /* border-gray-700 */
      border-radius: 0.75rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      color: white;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* ===== Front ===== */
    .card-front img {
      width: 100%;
      height: 12rem;
      object-fit: cover;
    }

    .card-front-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem;
      text-align: center;
    }

    .card-front-content h2 {
      font-size: 1.25rem;
      font-weight: bold;
    }

    .card-front-content p {
      font-size: 0.875rem;
      color: #d1d5db; /* text-gray-300 */
    }

    /* ===== Back ===== */
    .card-back {
      padding: 1.25rem;
      transform: rotateY(180deg);
    }

    .card-back h2 {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
      text-align: center;
    }

    .course-info {
      flex: 1;
      font-size: 0.875rem;
      text-align: center;
    }

    .label {
      color: #9ca3af; /* text-gray-400 */
    }

    .highlight {
      font-weight: bold;
      color: #fbbf24; /* text-amber-400 */
    }

    .description {
      margin-top: 1rem;
      color: #d1d5db;
    }

    /* ===== Buttons ===== */
    .btn {
      padding: 0.5rem 1.5rem;
      font-weight: bold;
      border-radius: 0.5rem;
      cursor: pointer;
      border: none;
      transition: background-color 0.3s;
    }

    .see-details {
      background: #fbbf24; /* amber-400 */
      color: #1f2937;
    }

    .see-details:hover {
      background: #f59e0b; /* amber-500 */
    }

    .join-now {
      background: #059669; /* emerald-600 */
      color: white;
    }

    .join-now:hover {
      background: #047857; /* emerald-700 */
    }
  `,

  js: `
    const flipCard = document.getElementById('flipCard');
    const seeDetailsBtn = flipCard.querySelector('.see-details');
    const joinNowBtn = flipCard.querySelector('.join-now');

    seeDetailsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      flipCard.classList.add('flipped');
    });

    joinNowBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      flipCard.classList.remove('flipped');
    });
  `
    }

]