(function () {
  // --- Create container ---
  const container = document.createElement("div");
  container.id = "line-chat";
  container.style.cssText = `
    position: fixed;
    margin: 0 1rem 1rem 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    font-family: 'Prompt', sans-serif;
  `;
  document.body.appendChild(container);

  // --- Inject CSS ---
  const style = document.createElement("style");
  style.innerHTML = `
    #line-chat-popup {
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.25s ease, transform 0.25s ease;
      pointer-events: none;
      background: #ffffff;
      padding: 1.5rem;
      margin-bottom: 1rem;
      max-width: 20rem;
      border-radius: 1rem;
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    }
    #line-chat-popup.active {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    .line-chat-popup-btn {
      display: block;
      width: 60%;
      background-color: #06c755;
      color: white;
      padding: 0.5rem 0;
      border-radius: 16px;
      text-align: center;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.2s ease;
      margin: 0 auto;
    }
    .line-chat-popup-btn:hover {
      background-color: #07a648;
    }
    .line-chat-toggle {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background-color: #06c755;
      padding: 8px 16px;
      border-radius: 48px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      box-shadow: 0 8px 16px rgba(0,0,0,0.15);
      transition: background 0.2s ease, transform 0.2s ease;
    }
    .line-chat-toggle:hover {
      background-color: #07a648;
      transform: translateY(-2px);
    }
  `;
  container.appendChild(style);

  // --- Create Popup ---
  const popup = document.createElement("div");
  popup.id = "line-chat-popup";
  popup.innerHTML = `
    <div style="display:flex;justify-content:space-between;">
      <img src="https://www.cariber.co/lineChatWidget/cariber-chat-logo.png" alt="Cariber Chat Logo" style="width:48px;height:48px;">
      <svg
        style="cursor: pointer;"
        onclick="document.getElementById('line-chat-popup').classList.remove('active')"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <p style="color:black;margin:1rem 0;text-align:center;">
      สวัสดีครับ สามารถสอบถามได้เลยครับ
    </p>
    <div style="display:flex;justify-content:center;">
      <a class="line-chat-popup-btn" href="https://lin.ee/DmtQfgp" target="_blank">
        เริ่มแชทกับเรา
      </a>
    </div>

  `;
  container.appendChild(popup);

  // --- Create Toggle Button ---
  const toggleWrapper = document.createElement("div");
  toggleWrapper.style.cssText = "display:flex;justify-content:flex-end;";
  const toggle = document.createElement("div");
  toggle.className = "line-chat-toggle";
  toggle.innerHTML = `
    <img src="https://www.cariber.co/lineChatWidget/LINE.png" alt="Line Logo" style="width:32px;height:32px;">
    คุยกับเรา
  `;
  toggle.onclick = togglePopup;
  toggleWrapper.appendChild(toggle);
  container.appendChild(toggleWrapper);

  // --- Toggle Function ---
  function togglePopup(e) {
    popup.classList.toggle("active");
    if (popup.classList.contains("active")) {
      document.addEventListener("click", outsideClose);
    } else {
      document.removeEventListener("click", outsideClose);
    }
  }

  function outsideClose(e) {
    if (!popup.contains(e.target) && !toggle.contains(e.target)) {
      popup.classList.remove("active");
      document.removeEventListener("click", outsideClose);
    }
  }
})();
