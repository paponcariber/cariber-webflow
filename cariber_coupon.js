$(document).ready(function () {
  var params = new URLSearchParams(window.location.search);
  var sub1y = "634cac96-9b75-41d0-8605-f902cde1566f";
  var sub2y = "54d5fde4-7e62-4093-ab3a-d5a3a89584b4";
  if (params.has("cpc1")) {
    var coupon1 = params.get("cpc1");
    $('a[href*="https://checkout.cariber.co/add-sku-' + sub1y + '"]').each(
      function () {
        this.href =
          "https://checkout.cariber.co/add-sku-" + sub1y + "/?cpc=" + coupon1;
      }
    );
  }
  if (params.has("cpc2")) {
    var coupon2 = params.get("cpc2");
    $('a[href*="https://checkout.cariber.co/add-sku-' + sub2y + '"]').each(
      function () {
        this.href =
          "https://checkout.cariber.co/add-sku-" + sub2y + "/?cpc=" + coupon2;
      }
    );
  }
});
