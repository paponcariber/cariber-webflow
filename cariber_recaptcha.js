/* Load reCAPTCHA: <script src="https://www.google.com/recaptcha/api.js?onload=addRecaptchaToWebflowForms&render=explicit" async defer></script> */
function addRecaptchaToWebflowForms() {
  const sitekey = "6LewcY0rAAAAACkgzQ35E6Rn4aTRBxu4vJg2JIhW";
  const forms = document.querySelectorAll('form[id^="wf-form"]');

  forms.forEach((form, index) => {
    const recaptchaId = "recaptcha-" + index;

    // Create reCAPTCHA container
    const recaptchaContainer = document.createElement("div");
    recaptchaContainer.className = "g-recaptcha";
    recaptchaContainer.id = recaptchaId;
    recaptchaContainer.setAttribute("data-sitekey", sitekey);

    // Insert before submit button
    const submitButton = form.querySelector(
      "button[type='submit'], input[type='submit']"
    );
    if (submitButton) {
      submitButton.parentNode.insertBefore(recaptchaContainer, submitButton);
    }

    // Render reCAPTCHA
    const widgetId = grecaptcha.render(recaptchaId, {
      sitekey: sitekey,
    });

    // Prevent form submit if CAPTCHA not completed
    form.addEventListener("submit", function (e) {
      const response = grecaptcha.getResponse(widgetId);
      if (!response) {
        e.preventDefault();
        alert("Please complete the reCAPTCHA before submitting.");
      }
    });
  });
}
