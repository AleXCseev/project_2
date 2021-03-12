$(function () {
	$("body").on('click', '[href*="#"]', function (e) {
		var fixedOffset = 0;
		$('html,body')
			.stop()
			.animate({ scrollTop: $(this.hash).offset().top - fixedOffset }, 1000);
		e.preventDefault();
	});
})
