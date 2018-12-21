$(document).ready(function () {
	$("#read").click(function () {
		$('.Read_More').fadeIn(500);
		$("#read").hide();
		$('.read_less').show();


	});
});
$(document).ready(function () {
	$('.read_less').click(function () {
		$('.Read_More').fadeOut(300);
		$('.read_less').hide();
		$("#read").show();
	});
});