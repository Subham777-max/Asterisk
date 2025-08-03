export const buttonCodes=[
    {
        html: `<div class="container">
                <button id="morphButton" class="btn">
                    Click Me
                </button>
                </div>
                `,
        css: `  .container {
                text-align: center;
                }

                .btn {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 12px 24px;
                background-color: #4f46e5; /* indigo-600 */
                color: white;
                border: none;
                border-radius: 9999px;
                font-size: 16px;
                font-weight: 600;
                width: 130px;
                transition: all 0.7s ease;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                cursor: pointer;
                }

                .btn:hover {
                background-color: #4338ca; /* indigo-700 */
                }

                .btn.success {
                background-color: #22c55e; /* green-500 */
                color: white;
                width: 160px;
                transform: scale(1.1);
                animation: pulse 2s infinite;
                }

                .btn i {
                margin-right: 8px;
                animation: bounce 1s infinite;
                }

                /* Pulse animation */
                @keyframes pulse {
                0%, 100% {
                    box-shadow: 0 0 0px rgba(34, 197, 94, 0.7);
                }
                50% {
                    box-shadow: 0 0 20px rgba(34, 197, 94, 0.9);
                }
                }

                /* Bounce animation */
                @keyframes bounce {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-5px);
                }
                }
                `,
        js: `
    const button = document.getElementById("morphButton");

    button.addEventListener("click", () => {
      // Change to success state
      button.classList.add("success");
      button.innerHTML = \`<i class="fas fa-check"></i>Success!\`;

      // Revert after 2 seconds
      setTimeout(() => {
        button.classList.remove("success");
        button.innerHTML = "Click Me";
      }, 2000);
    });
  `
    },
    {
          html: `
    <div class="container">
      <button id="submitBtn" class="btn idle">
        <span class="btn-text">Submit</span>
      </button>
    </div>
  `,
  css: `
    .container {
      text-align: center;
    }

    .btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      border: none;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.5s ease;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    }

    .btn.idle {
      background-color: #2563eb;
      padding: 12px 24px;
      width: auto;
    }

    .btn.idle:hover {
      background-color: #1d4ed8;
    }

    .btn.loading {
      background-color: #eab308;
      width: 48px;
      height: 48px;
      padding: 0;
      border-radius: 9999px;
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid white;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      z-index: 10;
    }

    .btn.success {
      background-color: #16a34a;
      width: 160px;
      transform: scale(1.05);
    }

    .btn-text {
      z-index: 10;
    }

    .btn-success-content {
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 10;
      animation: bounce 0.6s infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
  `,
  js: `
    const button = document.getElementById("submitBtn");

    function setIdle() {
      button.className = "btn idle";
      button.innerHTML = \`<span class="btn-text">Submit</span>\`;
      button.disabled = false;
    }

    function setLoading() {
      button.className = "btn loading";
      button.innerHTML = \`<div class="spinner"></div>\`;
      button.disabled = true;
    }

    function setSuccess() {
      button.className = "btn success";
      button.innerHTML = \`
        <div class="btn-success-content">
          <i class="fas fa-check"></i>
          <span>Done</span>
        </div>
      \`;
    }

    button.addEventListener("click", () => {
      if (button.disabled) return;

      setLoading();

      setTimeout(() => {
        setSuccess();

        setTimeout(() => {
          setIdle();
        }, 2500);
      }, 2000);
    });
  `
    }
];