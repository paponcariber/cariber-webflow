(function () {
  const container = document.createElement("div");
  container.id = "line-chat";
  container.style.cssText = `
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 9999;
    font-family: 'Prompt', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `;
  document.body.appendChild(container);

  // --- Inject CSS ---
  const style = document.createElement("style");
  style.innerHTML = `
    .line-chat-popup {
      background: #ffffff;
      padding: 1.5rem;
      max-width: 20rem;
      border-radius: 1rem;
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.25s ease, transform 0.25s ease;
      margin-bottom: 1rem; /* GAP between popup and toggle */
    }
    .line-chat-popup.active {
      opacity: 1;
      transform: translateY(0);
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
      margin: 0 auto;
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
    }
    .line-chat-toggle:hover {
      background-color: #07a648;
    }
  `;
  container.appendChild(style);

  let popup = null;

  /** Create popup DOM */
  function createPopup() {
    const p = document.createElement("div");
    p.className = "line-chat-popup";

    p.innerHTML = `
      <div style="display:flex;justify-content:space-between;">
        <img src="https://www.cariber.co/lineChatWidget/cariber-chat-logo.png" style="width:48px;height:48px;">
        <svg width="24" height="24" style="cursor:pointer;" viewBox="0 0 24 24">
          <path d="M6 6L18 18M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" />
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

    // Close button
    p.querySelector("svg").onclick = closePopup;

    return p;
  }

  /** Open popup (add DOM above toggle) */
  function openPopup() {
    if (popup) return;

    popup = createPopup();

    // Insert popup at the top of container
    container.insertBefore(popup, toggle);

    requestAnimationFrame(() => popup.classList.add("active"));

    document.addEventListener("click", outsideClose);
  }

  /** Close popup (remove DOM) */
  function closePopup() {
    if (!popup) return;

    popup.classList.remove("active");

    setTimeout(() => {
      popup.remove();
      popup = null;
    }, 250);

    document.removeEventListener("click", outsideClose);
  }

  function outsideClose(e) {
    if (!popup) return;

    if (!popup.contains(e.target) && !toggle.contains(e.target)) {
      closePopup();
    }
  }

  // --- Toggle Button (ALWAYS bottom) ---
  const toggle = document.createElement("div");
  toggle.className = "line-chat-toggle";
  toggle.innerHTML = `
    <img src="https://www.cariber.co/lineChatWidget/LINE.png" style="width:32px;height:32px;">
    คุยกับเรา
  `;
  toggle.onclick = () => (popup ? closePopup() : openPopup());
  container.appendChild(toggle);
})();
