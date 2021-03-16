function carousel(selector) {
	var acarousel = $(selector).acarousel();

	// function changeActive(move) {
	// 	var index = acarousel.getPos(move).index;
	// 	$(mark + " .move").removeClass("active").eq(index).addClass("active");
	// }
	// changeActive();

	// $(".move").click(function () {
	// 	if (acarousel.isAnim()) return false;
	// 	var index = $(".move").index(this);
	// 	var move = acarousel.moveByIndex(index);
	// 	changeActive(move);
	// 	return false;
	// });

	$(".btn__prev").click(function () {
		if (acarousel.isAnim()) return false;
		var move = acarousel.move(1);
		changeActive(move);
		return false;
	});

	$(".btn__next").click(function () {
		if (acarousel.isAnim()) return false;
		acarousel.move(-1);
		// changeActive(move);
		return false;
	});

	$(window).resize(function () {
		acarousel.init();
	});
}

carousel(".slider")


// function autoPlay() {
// 	var autoplaySpeed = 5000;

// 	var interval = setInterval(int, autoplaySpeed)

// 	function int() {
// 		$(".move_next").click()
// 	}

// 	$(".carousel_container, .move_mark").mouseover(function () {
// 		clearInterval(interval)
// 	})

// 	$(".carousel_container, .move_mark").mouseleave(function () {
// 		interval = setInterval(int, autoplaySpeed)
// 	})
// }

// autoPlay()

$(function () {
	$('.slider__mobile').slick({
		dots: false,
		// autoplay: true,
		// autoplaySpeed: 2000,
		arrows: true,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		zIndex: 100000,
		prevArrow: $('.btn__prev'),
		nextArrow: $('.btn__next'),
	});
	// $('.slider').slick({
	// 	centerMode: true,
	// 	slidesToShow: 5,
	// 	slidesToScroll: 1,
	// 	zIndex: 100,
	// 	variableWidth: true,
	// 	infinite: true,
	// 	dots: false,
	// 	arrows: true,
	// 	prevArrow: $('.btn__prev'),
	// 	nextArrow: $('.btn__next'),
	// 	centerPadding: '310px',

	// responsive: [
	//   {
	//     breakpoint: 768,
	//     settings: {
	//       arrows: false,
	//       centerMode: true,
	//       centerPadding: '40px',
	//       slidesToShow: 3
	//     }
	//   },
	//   {
	//     breakpoint: 480,
	//     settings: {
	//       arrows: false,
	//       centerMode: true,
	//       centerPadding: '40px',
	//       slidesToShow: 1
	//     }
	//   }
	// ]
	// });
	$('.messages').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true,
		dots: false,
		arrows: true,
		prevArrow: $('.message__btn-prev'),
		nextArrow: $('.message__btn-next'),
		responsive: [
			{
				breakpoint: 660,
				settings: {
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
					// variableWidth: true,
				}
			},
		]
	});
})
