document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);

  // Loop through all forms
  document.querySelectorAll("form").forEach((form) => {
    // Fill fields based on URL parameters matching input[name]
    urlParams.forEach((value, key) => {
      // Special case: map 'workshop' to 'course'
      if (key === "workshop") {
        const courseInput = form.querySelector('input[name="course"]');
        if (courseInput) courseInput.value = value;
      } else {
        const input = form.querySelector(`input[name="${key}"]`);
        if (input) input.value = value;
      }
    });

    // Set timestamp in Bangkok timezone if there's an input with name="TimeStamp"
    const timestampInput = form.querySelector('[name="TimeStamp"]');
    if (timestampInput) {
      const bangkokTime = new Date().toLocaleString("sv", {
        timeZone: "Asia/Bangkok",
      });
      timestampInput.value = bangkokTime;
    }
  });
});
