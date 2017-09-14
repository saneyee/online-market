$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var nameInputfirst = $("input#person1").val().toUpperCase();
    var nameInputlast = $("input#person2").val().toUpperCase();
    var addressInput = $("input#address").val().toUpperCase();
    var telephoneInput = $("input#telephone").val();
    var paintingSize = $("input:radio[name=sizes]:checked").val();
    var shippingInput = $("#shipping").val();

    $("#person1d").text(nameInputfirst);
    $("#person2d").text(nameInputlast);
    $("#addressd").text(addressInput);
    $("#telephoned").text(telephoneInput);
    $("#product").text(paintingSize);
    $("#shippingd").text(shippingInput);

    $("#output").show();
    event.preventDefault();
  });
});
