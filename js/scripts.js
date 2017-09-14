$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var nameInputfirst = $("input#person1").val().toUpperCase();
    var nameInputlast = $("input#person2").val().toUpperCase();
    var addressInput = $("input#address").val().toUpperCase();
    var telephoneInput = $("input#telephone").val();
    var paintingSize = $("input:radio[name=sizes]:checked").val();
    var shippingInput = $("#shipping").val();
    $(".person1").text(nameInputfirst);
    $(".person2").text(nameInputlast);
    $(".address").text(addressInput);
    $(".telephone").text(telephoneInput);
    $(".telephone").text(paintingSize);
    $(".shipping").text(shippingInput);

    $("#output").show();
    event.preventDefault();
  });
});
