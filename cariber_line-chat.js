document.body.innerHTML(`
<div
  id="line-chat"
  style="
    position: fixed;
    margin: 0 0 10px 10px;
    left: 0;
    bottom: 0;
    z-index: 100;
  "
>
  <style>
    .line-chat-button {
      padding: 0.5rem 1rem;
      background-color: #06c755;
      border-radius: 10px;
      color: white;
      text-align: center;
      font-weight: 600;
      font-family: "Prompt";
      display: block;
      text-decoration: none;
    }
    .line-chat-button:hover {
      background-color: #07a648;
      color: white;
    }
    #line-chat-popup {
      display: none;
      background: white;
      padding: 30px;
      margin: 10px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .line-chat-logo {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  </style>
  <script>
    function LinePopup() {
      const popup = document.getElementById("line-chat-popup");
      if (popup.style.display == "none") {
        popup.style.display = "block";
      } else {
        popup.style.display = "none";
      }
    }
  </script>
  <div id="line-chat-popup">
    <div class="line-chat-logo">
      <img
        alt="Cariber Chat Logo"
        style="width: 48px; height: 48px"
        src="https://www.cariber.co/lineChatWidget/cariber-chat-logo.png"
      />
      <svg
        style="cursor: pointer"
        onclick="LinePopup()"
        width="32"
        height="32"
        viewbox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
          fill="black"
          fill-opacity="0.04"
        ></path>
        <path
          d="M22.0278 15.0278C22.5647 15.0278 23 15.4631 23 16.0001C23 16.537 22.5647 16.9723 22.0278 16.9723L9.97222 16.9723C9.43528 16.9723 9 16.537 9 16.0001C9 15.4631 9.43528 15.0278 9.97222 15.0278L22.0278 15.0278Z"
          fill="black"
        ></path>
      </svg>
      <!-- <img onclick="LinePopup()" alt="Minimize Icon" style="width:24px;height:24px;opacity:0.5;cursor:pointer;" src="https://www.cariber.co/minimize-icon.png" /> -->
    </div>
    <div>
      <p style="color: black; margin: 1rem 0; font-family: 'Prompt'">
        สวัสดีค่ะ มีอะไรให้ Cariber ช่วยไหมคะ
      </p>
      <a class="line-chat-button" href="https://lin.ee/DmtQfgp"
        >เริ่มแชทกับเรา</a
      >
    </div>
  </div>
  <img
    onclick="LinePopup()"
    style="width: 64px; height: 64px; cursor: pointer"
    alt="INE Logo"
    src="https://www.cariber.co/lineChatWidget/LINE.png"
  />
</div>
<!--End of Line Chat Plugin-->
`);
