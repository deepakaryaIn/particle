(function ($) {
	"use strict";

	// Page Loaded...
$(document).ready(function () {    

		// Nice Scroll
		$(".scroll").niceScroll({
			cursorcolor: '#949fab',
			cursorborder: 'none',
			cursorborderradius: '0px',
			cursorwidth: '2px'
		});
		if ($(window).width() > 1200) {
			$(".blog-scroll").niceScroll({
				cursorcolor: '#949fab',
				cursorborder: 'none',
				cursorborderradius: '0px',
				cursorwidth: '2px'
			});
		}

		// Quotes Slider
		var allQuotes = $("div.quotes").children("div");
			transitionBox(null, allQuotes.first());

		// Menu
		$('.menu-open').on('click', function(event) {
			event.preventDefault();
			$(this).addClass('close');
			$('.menu').addClass('open');
			$('.menu-overlay').addClass('open');
			$('body').addClass('no-scroll');
		});
		$('.menu-close').on('click', function(event) {
			event.preventDefault();
			$('.menu').removeClass('open');
			$('.menu-overlay').removeClass('open');
			$('.menu-open').removeClass('close');
			$('body').removeClass('no-scroll');
		});
		$(document).on('click', function(event) { 
			if (!$(event.target).closest('.menu').length && !$(event.target).closest('.menu-open').length && !$(event.target).closest('.submenu-close').length && !$(event.target).closest('.bottom-info').length && !$(event.target).closest('.submenu').length) {
				if($('.menu').hasClass('open')) {
					$('.menu').removeClass('open');
					$('.menu-overlay').removeClass('open');
					$('.menu-open').removeClass('close');
					$('body').removeClass('no-scroll');
				}
			}
		});
		if ($(window).width() > 1200) {
			$('.has-submenu').on({
				mouseenter: function(event) {
					var submenu = $(this).data('submenu');
					$(submenu).addClass('open');
				},
				mouseleave: function(event) {
					var submenu = $(this).data('submenu');
					$(submenu).removeClass('open');
				}
			});
			$('.submenu').on({
				mouseenter: function(event) {
					$(this).addClass('open');
				},
				mouseleave: function(event) {
					$(this).removeClass('open');
				}
			});
			$('.submenu').each(function(index) {
				var submenu = $(this);
				var number = submenu.children('.item').length;
				var percent = 100 / number;
				submenu.children('.item').css('height', percent + '%');
				submenu.imagesLoaded( function() {
					var width = submenu.find('img').first().width();
					submenu.width(width);
					submenu.children('.overlay').width(width);
				});
			});
			$(window).resize(function(){
				$('.submenu').each(function(index) {
					var width = $(this).find('img').first().width();
					$(this).width(width);
				});
			});
		} else if ($(window).width() < 1200) {
			$('.has-submenu').on('click', function(event) {
				event.preventDefault();
				var submenu = $(this).data('submenu');
				$(submenu).addClass('open');
			});
		}
		$('.submenu-close').on('click', function(event) {
			event.preventDefault();
			$('.submenu').removeClass('open');
		});

		$('.credits-open').on('click', function(event) {
			event.preventDefault();
			$('.credits').addClass('open');
		});
		$(document).on('click', function(event) { 
			if (!$(event.target).closest('.credits').length && !$(event.target).closest('.credits-open').length) {
				$('.credits').removeClass('open');
			}
		});
		$('.main-nav li').each(function(index) {
			index = (index + 2) * .1 / 2;
			index = index + 's';
			$(this).css('transition-delay', index);
		});
		$('.submenu').each(function(index) {
			$(this).children('.item').each(function(index) {
				index = (index) * .1 / 2;
				index = index + 's';
				$(this).css('transition-delay', index);
			});
		});

		/*==========  Cast Slider  ==========*/
		$('.cast-slider').owlCarousel({
			loop:true,
			nav:true,
			dots: false,
			navText: ['<i class="pe-7s-angle-left"></i>','<i class="pe-7s-angle-right"></i>'],
			touchDrag: false,
			responsive: {
				0: {
					items: 1
				},
				640: {
					items: 3
				},
				769: {
					items: 6
				}
			}
		});
		$('.cast-slider .owl-prev').on({
			mouseenter: function() {
				$('.cast-slider .owl-item').removeClass('hover-effect');
				$('.cast-slider .owl-item.active:first').addClass('hover-effect');
			},
			mouseleave: function() {
				$('.cast-slider .owl-item').removeClass('hover-effect');
			},
			click: function() {
				$('.cast-slider .owl-item').removeClass('hover-effect');
			}
		});
		$('.cast-slider .owl-next').on({
			mouseenter: function() {
				$('.cast-slider .owl-item').removeClass('hover-effect');
				$('.cast-slider .owl-item.active:last').addClass('hover-effect');
			},
			mouseleave: function() {
				$('.cast-slider .owl-item').removeClass('hover-effect');
			},
			click: function() {
				$('.cast-slider .owl-item').removeClass('hover-effect');
			}
		});

		/*==========  Featured Slider  ==========*/
		$('.featured-slider').owlCarousel({
			loop:true,
			nav:true,
			dots: false,
			navText: ['<i class="pe-7s-angle-left"></i>','<i class="pe-7s-angle-right"></i>'],
			items: 1,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn'
		});

		// Image Slider
		$('.image-slider').owlCarousel({
			loop:true,
			nav:true,
			dots: false,
			navText: ['<i class="pe-7s-angle-left"></i>','<i class="pe-7s-angle-right"></i>'],
			items: 1,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn'
		});

		// Testimonial Slider
		$('.testimonial-slider').owlCarousel({
			loop:true,
			nav:true,
			dots: false,
			navText: ['<i class="pe-7s-angle-left"></i>','<i class="pe-7s-angle-right"></i>'],
			items: 1
		});

		// Trailer Slider
		$('.trailer-slider').owlCarousel({
			loop:true,
			nav:true,
			dots: false,
			navText: ['<i class="pe-7s-angle-left"></i>','<i class="pe-7s-angle-right"></i>'],
			items: 1,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn'
		});

		// Release Date Slider
		$('.release-date-slider').owlCarousel({
			loop:true,
			nav:false,
			dots: false,
			touchDrag: true,
			responsive: {
				0: {
					items: 1
				},
				640: {
					items: 2
				},
				769: {
					items: 4
				}
			}
		});
		$('.release-date-slider').on('mousewheel', '.owl-stage', function(e) {
			if (e.deltaY>0) {
				$('.release-date-slider').trigger('next.owl');
			} else {
				$('.release-date-slider').trigger('prev.owl');
			}
			e.preventDefault();
		});

		/*==========  Gallery  ==========*/
		$('.gallery-slider').owlCarousel({
			loop:true,
			nav:false,
			dots: false,
			touchDrag: true,
			margin: 40,
			stagePadding: 40,
			responsive: {
				0: {
					items: 1
				},
				640: {
					items: 3
				},
				769: {
					items: 6
				}
			}
		});
		$('.gallery-slider').on('mousewheel', '.owl-stage', function(e) {
			if (e.deltaY>0) {
				$('.gallery-slider').trigger('next.owl');
			} else {
				$('.gallery-slider').trigger('prev.owl');
			}
			e.preventDefault();
		});
		$('.gallery-slider .item').each(function(index) {
			var height = $(this).width();
			height = height * 2;
			$(this).height(height);
		});
		$(window).resize(function(){
			$('.gallery-slider .item').each(function(index) {
				var height = $(this).width();
				height = height * 2;
				$(this).height(height);
			});
		});
		var prev_bg = $('.page-wrapper').css('background-image');
		$('.gallery-slider .item figure').on({
			mouseenter: function(event) {
				var new_bg = $(this).data('bg');
				$('.page-wrapper').css('background-image', 'url("'+new_bg+'")');
			},
			mouseleave: function(event) {
				
			}
		});

		// Blog
		var $blogContainer = $('#blog').imagesLoaded(function() {
			$blogContainer.isotope({
				itemSelector: '.item',
				layoutMode: 'masonry',
				percentPosition: true,
				masonry: {
					columnWidth: $blogContainer.find('.blog-sizer')[0]
				}
			});
			return false;
		});
		$(".blog .item").slice(0, 100).fadeIn();
		$(".load-more a").on('click', function(e){
			e.preventDefault();
			$(".blog .item:hidden").slice(0, 8).fadeIn();
			if($(".blog .item:hidden").length == 0){
				$(this).fadeOut();
			}
			$blogContainer.isotope('reloadItems').isotope();
			$(".blog-scroll").getNiceScroll().resize();
		});
		$('.read-more a').on('click', function(event) {
			event.preventDefault();
			var href = $(this).attr('href');
			$(href).addClass('open');
			$('body').addClass('no-scroll');
		});
		$('.blog-post-title').on('click', function(event) {
			event.preventDefault();
			var href = $(this).attr('href');
			$(href).addClass('open');
			$('body').addClass('no-scroll');
		});
		$('.blog-post .close').on('click', function(event) {
			event.preventDefault();
			$(this).parents('.blog-post').removeClass('open');
			$('body').removeClass('no-scroll');
		});
		$('.post-nav a').on('click', function(event) {
			event.preventDefault();
			var href = $(this).attr('href');
			$('.blog-post.open').removeClass('open');
			$(href).addClass('open');
		});
		$('.blog-post .toggle').on('click', function(event) {
			event.preventDefault();
			$(this).toggleClass('rotate');
			$(this).parents('.content').toggleClass('close-content');
		});
		if (window.location.hash) {
			var hash = window.location.hash;
			if (!$(hash).length == 0) {
				$(hash).addClass('open');
				$('body').addClass('no-scroll');
			}
		}

		// Cast Expand
		var original_height = $('.cast-slider .hover').outerHeight();
		$('.cast-slider .hover .expand').on('click', function(event) {
			event.preventDefault();
			var height = $(this).parents('.item').height() - 44;
			
			if ($(this).parents('.hover').hasClass('open-content')) {
				$(this).parents('.hover').animate({height: original_height}, 200);
				$('.owl-carousel .owl-stage-outer').css('z-index', 'auto');
			} else {
				$(this).parents('.hover').animate({height: height}, 200);
				$('.owl-carousel .owl-stage-outer').css('z-index', '2');
			}
			if ($(this).children('i').hasClass('pe-7s-plus')) {
				$(this).children('i').removeClass('pe-7s-plus').addClass('pe-7s-less');
			} else if ($(this).children('i').hasClass('pe-7s-less')) {
				$(this).children('i').removeClass('pe-7s-less').addClass('pe-7s-plus');
			}
			$(this).parents('.hover').toggleClass('open-content');
		});

		// Share
		$('.share-open').on('click', function(event) {
			event.preventDefault();
			$('.share').slideToggle(100);
			var n = $(document).height();
			$('html, body').animate({scrollTop: n}, 100);
		});
		$(document).on('click', function(event) { 
			if (!$(event.target).closest('.share-open').length && !$(event.target).closest('.share').length) {
				$('.share').slideUp(100);
			}
		});
		$('.follow-open').on('click', function(event) {
			event.preventDefault();
			$('.follow').slideToggle(100);
			var n = $(document).height();
			$('html, body').animate({scrollTop: n}, 100);
		});
		$(document).on('click', function(event) { 
			if (!$(event.target).closest('.follow-open').length && !$(event.target).closest('.follow').length) {
				$('.follow').slideUp(100);
			}
		});

		// Audio Control
		$('.audioControl').on('click', function(e) {
			e.preventDefault();
			var player = $('.bgAudio');
			if (player[0].paused == false) {
				player.animate({volume: 0}, 1000, function() {
					player[0].pause();
				});
				$('.audioControl').addClass('pause');
			} else {
				player[0].play();
				player.animate({volume: 1}, 1000);
				$('.audioControl').removeClass('pause');
			}
		});

		// Video Play
		$('.video-play').nivoLightbox({
			afterShowLightbox: function() {
				var src = $('.nivo-lightbox-content > iframe').attr('src');
				$('.nivo-lightbox-content > iframe').attr('src', src + '?autoplay=1');
				if ($(window).width() < 769) {
					var height = $('.nivo-lightbox-content iframe').height() / 2 + 28;
					$('.nivo-lightbox-close').css('margin-top', -height);
				}
			},
			beforeShowLightbox: function() {
				$('.video-play').find('i').removeClass('pe-7s-play');
				$('.video-play').find('i').addClass('pe-7s-pause');
				if ($('.bgAudio').length) {
					var player = $('.bgAudio');
					if (player[0].paused == false) {
						player.animate({volume: 0}, 1000, function() {
							player[0].pause();
						});
						$('.audioControl').addClass('pause');
					} else {
						player[0].play();
						player.animate({volume: 1}, 1000);
						$('.audioControl').removeClass('pause');
					}
				}
			},
			afterHideLightbox: function() {
				$('.video-play').find('i').removeClass('pe-7s-pause');
				$('.video-play').find('i').addClass('pe-7s-play');
				if ($('.bgAudio').length) {
					var player = $('.bgAudio');
					if (player[0].paused == false) {
						player.animate({volume: 0}, 1000, function() {
							player[0].pause();
						});
						$('.audioControl').addClass('pause');
					} else {
						player[0].play();
						player.animate({volume: 1}, 1000);
						$('.audioControl').removeClass('pause');
					}
				}
			}
		});
		$('.video-popup').nivoLightbox({
			afterShowLightbox: function() {
				var src = $('.nivo-lightbox-content > iframe').attr('src');
				$('.nivo-lightbox-content > iframe').attr('src', src + '?autoplay=1');
				if ($(window).width() < 769) {
					var height = $('.nivo-lightbox-content iframe').height() / 2 + 28;
					$('.nivo-lightbox-close').css('margin-top', -height);
				}
			},
			beforeShowLightbox: function() {
				$('.video-popup').find('i').removeClass('pe-7s-play');
				$('.video-popup').find('i').addClass('pe-7s-pause');
				if ($('.bgAudio').length) {
					var player = $('.bgAudio');
					if (player[0].paused == false) {
						player.animate({volume: 0}, 1000, function() {
							player[0].pause();
						});
						$('.audioControl').addClass('pause');
					} else {
						player[0].play();
						player.animate({volume: 1}, 1000);
						$('.audioControl').removeClass('pause');
					}
				}
			},
			afterHideLightbox: function() {
				$('.video-popup').find('i').removeClass('pe-7s-pause');
				$('.video-popup').find('i').addClass('pe-7s-play');
				if ($('.bgAudio').length) {
					var player = $('.bgAudio');
					if (player[0].paused == false) {
						player.animate({volume: 0}, 1000, function() {
							player[0].pause();
						});
						$('.audioControl').addClass('pause');
					} else {
						player[0].play();
						player.animate({volume: 1}, 1000);
						$('.audioControl').removeClass('pause');
					}
				}
			}
		});
		$('.home-video').nivoLightbox({
			afterShowLightbox: function() {
				var src = $('.nivo-lightbox-content > iframe').attr('src');
				$('.nivo-lightbox-content > iframe').attr('src', src + '?autoplay=1');
				if ($(window).width() < 769) {
					var height = $('.nivo-lightbox-content iframe').height() / 2 + 28;
					$('.nivo-lightbox-close').css('margin-top', -height);
				}
			},
			beforeShowLightbox: function() {
				$('.home-video').find('i').removeClass('pe-7s-play');
				$('.home-video').find('i').addClass('pe-7s-pause');
				if ($('.bgAudio').length) {
					var player = $('.bgAudio');
					if (player[0].paused == false) {
						player.animate({volume: 0}, 1000, function() {
							player[0].pause();
						});
						$('.audioControl').addClass('pause');
					} else {
						player[0].play();
						player.animate({volume: 1}, 1000);
						$('.audioControl').removeClass('pause');
					}
				}
			},
			afterHideLightbox: function() {
				$('.home-video').find('i').removeClass('pe-7s-pause');
				$('.home-video').find('i').addClass('pe-7s-play');
				if ($('.bgAudio').length) {
					var player = $('.bgAudio');
					if (player[0].paused == false) {
						player.animate({volume: 0}, 1000, function() {
							player[0].pause();
						});
						$('.audioControl').addClass('pause');
					} else {
						player[0].play();
						player.animate({volume: 1}, 1000);
						$('.audioControl').removeClass('pause');
					}
				}
			}
		});

		// Countdown
		$("#countdown").countdown({
			date: "11 Apr 2017 12:00:00", // Put your date here
			format: "on"
		});

		$('input:not([type=submit]):not([type=file]):not([type=checkbox]):not([type=radio]), textarea').blur(function() {
			if ($(this).val()) {
				$(this).parents('.form-group').addClass('has-content');
			} else {
				$(this).parents('.form-group').removeClass('has-content');
			}
		});

		if ($(window).width() > 1200) {
			$('.main-nav li').on({
				mouseenter: function(event) {
					if ($(this).children('ul').length) {
						$(this).children('ul').slideToggle('fast');
					}
				},
				mouseleave: function(event) {
					if ($(this).children('ul').length) {
						$(this).children('ul').slideToggle('fast');
					}
				}
			});
		}

		// color switcher
		$('.color-switcher-wrapper .trigger').on('click', function(event) {
			event.preventDefault();
			$(this).parent().toggleClass('open');
		});

		$('.color-switcher-wrapper .color').each(function(index) {
			$(this).on('click', function(event) {
				event.preventDefault();
				var style = $(this).attr('data-style');
				
				if ($('#color-switcher').length) {
					$('#color-switcher').attr('href', 'css/' + style + '.css');
				}
			});
		});

		$('.color-switcher-wrapper').fadeIn('slow');

	});

	$(window).load(function() {
		$('#loadingContainer').stop(true,true).fadeOut(1000);
	});

	function transitionBox(from, to) {
		function next() {
			var nextTo;
			if (to.is(":last-child")) {
				nextTo = to.closest(".quotes").children("div").first();
			} else {
				nextTo = to.next();
			}
			to.fadeIn(500, function () {
				setTimeout(function () {
					transitionBox(to, nextTo);
				}, 5000);
			});
		}
		
		if (from) {
			from.fadeOut(500, next);
		} else {
			next();
		}
	}

	/*==========  Validate Email  ==========*/
	function validateEmail($validate_email) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if( !emailReg.test( $validate_email ) ) {
			return false;
		} else {
			return true;
		}
		return false;
	}
	
	/*==========  Contact Form  ==========*/
	$('#contact-form').on('submit', function() {
		$('#contact-error').fadeOut();
		$('#contact-success').fadeOut();
		$('#contact-loading').fadeOut();
		$('#contact-loading').fadeIn();
		if (validateEmail($('#contact-email').val()) && $('#contact-email').val().length !== 0 && $('#contact-name').val().length !== 0 && $('#contact-message').val().length !== 0) {
			var action = $(this).attr('action');
			$.ajax({
				type: "POST",
				url : action,
				data: {
					contact_name: $('#contact-name').val(),
					contact_email: $('#contact-email').val(),
					contact_phone: $('#contact-phone').val(),
					contact_website: $('#contact-website').val(),
					contact_message: $('#contact-message').val()
				},
				success: function() {
					$('#contact-error').fadeOut();
					$('#contact-success').fadeOut();
					$('#contact-loading').fadeOut();
					$('#contact-success .message').html('Success! Thanks for contacting us!');
					$('#contact-success').fadeIn();
				},
				error: function() {
					$('#contact-error').fadeOut();
					$('#contact-success').fadeOut();
					$('#contact-loading').fadeOut();
					$('#contact-error .message').html('Sorry, an error occurred.');
					$('#contact-error').fadeIn();
				}
			});
		} else if (!validateEmail($('#contact-email').val()) && $('#contact-email').val().length !== 0 && $('#contact-name').val().length !== 0 && $('#contact-message').val().length !== 0) {
			$('#contact-error').fadeOut();
			$('#contact-success').fadeOut();
			$('#contact-loading').fadeOut();
			$('#contact-error .message').html('Please enter a valid email.');
			$('#contact-error').fadeIn();
		} else {
			$('#contact-error').fadeOut();
			$('#contact-success').fadeOut();
			$('#contact-loading').fadeOut();
			$('#contact-error .message').html('Please fill out all the fields.');
			$('#contact-error').fadeIn();
		}
		return false;
	});

})(jQuery);