var URLSearchParams_wb = new URLSearchParams(window.location.search);
var utmParameters = ["utm_source", "utm_medium", "utm_campaign"];
for (let i = 0; i < utmParameters.length; i++) {
  var utm_element = utmParameters[i];
  /* if utm_source exist */
  $("form").each(function (index) {
    if (URLSearchParams_wb.has(utm_element)) {
      /* get UTM value of this utm param */
      var value = URLSearchParams_wb.get(utm_element);
      /* change form hidden field to this utm url value */
      $(this)
        .find("." + utm_element)
        .val(value);
    }
  });
} /* end for loop */
$(document).ready(function () {
  $(this)
    .find("." + "TimeStamp")
    .val(new Date().toLocaleString("sv", { timeZone: "Asia/Bangkok" }));
});
