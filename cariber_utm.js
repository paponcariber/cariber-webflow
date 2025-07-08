$(document).ready(function () {
  var URLSearchParams_wb = new URLSearchParams(window.location.search);
  var utmParameters = ["utm_source", "utm_medium", "utm_campaign"];

  for (let i = 0; i < utmParameters.length; i++) {
    var utm_element = utmParameters[i];
    $("form").each(function (index) {
      if (URLSearchParams_wb.has(utm_element)) {
        var value = URLSearchParams_wb.get(utm_element);
        $(this)
          .find("." + utm_element)
          .val(value);
      }
    });
  }

  if (URLSearchParams_wb.has("workshop")) {
    var workshopValue = URLSearchParams_wb.get("workshop");
    $("form").each(function () {
      $(this).find('input[name="course"]').val(workshopValue);
    });
  }

  $("form").each(function () {
    $(this)
      .find(".TimeStamp")
      .val(new Date().toLocaleString("sv", { timeZone: "Asia/Bangkok" }));
  });
});
