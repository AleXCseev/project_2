$(function () {
	$('[data-fancybox="slider"]').fancybox({
		loop: true,
	});

	$('[data-fancybox="gallery1"]').fancybox({
		loop: true,
	});

	$('[data-fancybox="gallery2"]').fancybox({
		loop: true,
	});

	$('[data-fancybox="gallery3"]').fancybox({
		loop: true,
	});

	$('[data-fancybox="slider__mobile"]').fancybox({
		loop: true,
	});

	$(".review__btn").click(function () {
		$.fancybox.open($(".modal"), {
			infobar: false,
		})
	})
})

