$(document).ready(function() {

	$('#open').click(function() {
		$(this).addClass("d-none");
		$('#form').removeClass("d-none");
		});

	$('#close').click(function() {
		$('#open').removeClass("d-none");
		$('#form').addClass("d-none");
		});

	$('#send').click(function() {
		var msg = $("#message").val()
		if (msg != "") {
			$(location).attr('href',' https://wa.me/6283145627552?text='+msg);				
		}
		});
	});