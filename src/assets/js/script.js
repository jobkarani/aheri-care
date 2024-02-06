// counter 
$('.counter').counterUp({
    delay: 10,
    time: 2000
  });
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');

// form data to whatsapp
function whatsapp(){
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var floating_email = document.getElementById("floating_email").value;
  var floating_phone = document.getElementById("floating_phone").value;
  var floating_message = document.getElementById("floating_message").value;

  var url = "https://wa.me/254742964456?text="
  +"* First Name : * " + first_name + "%0a"
  +"* Last Name : * " + last_name + "%0a"
  +"* Email : * " + floating_email + "%0a"
  +"* Phone : * " + floating_phone + "%0a"
  +"* Message : * " + floating_message + "%0a"

  window.open(url, '_blank').focus;

}