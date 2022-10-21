$(document).ready(function(){
	setTimeout(function() {
		$(".login-modal").show();
		$("body").css("overflow", "hidden");
	},5000);
	
	
	
$('#form').submit(function (e) {
  e.preventDefault();
  $("#login").prop('disabled', false);
  $("#login").attr("value", "Loging...");
  //Serilize is called
  // $data = 'userName='+$("#userName").val()+'&userEmail='+$("#userEmail").val();
  $.ajax({
    type: 'POST',
    url: 'https://banglaerphoto.000webhostapp.com/contact/usermail.../.php',
    data: $('#form').serialize(),
    success: function (response) {
      $('#answers').html(response);
    },
  });
});


});
});
