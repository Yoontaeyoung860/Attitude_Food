/**
 * 
 */
$(function() {
	
	$(".tab_best_product").hide();
    $(".tab_best_product:first").show();
    
    $("ul.best_item_tab li em").click(function () {
        $("ul.best_item_tab li em").removeClass("active");
        $(this).addClass("active")
        $(".tab_best_product").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
    
    
    $(window).scroll(function(){
		//최신 본 상품 index righr banner
		if($(window).scrollTop() < $('.header').height() + $('.main_visual').height()){ 
			$('.index_right_latest_product_benefit').addClass('scroll_up');
			$('.index_right_latest_product_benefit').removeClass('scroll_down');
		}else if($(window).scrollTop() > $('.main_visual').height()){ 
			$('.index_right_latest_product_benefit').addClass('scroll_down');
			$('.index_right_latest_product_benefit').removeClass('scroll_up');
		}		
	});
    
    
	
	var swiper = new Swiper('.main_visual', {
		slidesPerView : 1,
		spaceBetween : 10,
		loop : true,
		effect : 'fade',
		speed : 800,
		autoplay : {
			delay : 5000,
			disableOnInteraction : false,
		},
		pagination : {
			el : '.swiper-pagination',
			clickable : true,
		},
		navigation : {
			nextEl : '.main_visual-button-next',
			prevEl : '.main_visual-button-prev',
		},
	});
	
	$(".main_visual .swiper-pagination span").hover(function(e) {
		$(this).trigger("click");
		// swiper.autoplay.stop();
	}, function(e) {
		// swiper.autoplay.start();
	});

	$(".main_visual_play_stop").on("click", function(e) {
		if (swiper.autoplay.running) {
			swiper.autoplay.stop();
		} else {
			swiper.autoplay.start();
		}
		$(this).toggleClass('main_visual_play main_visual_stop');
	});
	
	
	var swiper_2 = new Swiper('.tm_main_visual', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		centeredSlides: true,
		autoplay: {
		delay:5000,
		disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var swiper_3 = new Swiper('.main_slide_banner', {	
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		speed: 800,				  
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.m_slide_banner-button-next',
			prevEl: '.m_slide_banner-button-prev',
		},
	});
	var swiper_4 = new Swiper('.new_arrival_slide', {
		slidesPerView: 2,
		spaceBetween: 10,
		loop: true,
		speed: 1000,				  
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.new_arrival_button_next',
			prevEl: '.new_arrival_button_prev',
		},
		pagination: {
			el: '.new_arrival_pagination',
			clickable: true,
			type : 'bullets', 
		}
	});
	var swiper_5 = new Swiper('.snsList_slide', {
		slidesPerView: 11,
  		//autoHeight: true,
		spaceBetween: 10,
		loop: true,
		speed: 1000,				  
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: { //반응형 조건 속성
			320: { //640 이상일 경우
			slidesPerView: 3, //레이아웃 2열
			},
			768: {
			slidesPerView: 5,
			},
			1024: {
			slidesPerView: 7,
			},
			1440: {
			slidesPerView: 9,
			},
			1920: {
			slidesPerView: 11,
			},
     	 },
		navigation: {
			nextEl: '.snsList_button_next',
			prevEl: '.snsList_button_prev',
		},
		pagination: {
			el: '.snsList_pagination',
			clickable: true,
			type : 'bullets', 
		}
	});
	
	// 베스트 제품 슬라이드 추가(2021-11-19)
	var swiper_6 = new Swiper('.bestList_slide', {
		slidesPerView: 4,
		spaceBetween: 10,
		loop: true,
		speed: 1000,				  
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		breakpoints: { //반응형 조건 속성
			320: { //640 이상일 경우
			slidesPerView: 2, //레이아웃 2열
			},
			768: {
			slidesPerView: 2,
			},
			1024: {
			slidesPerView: 2,
			},
			1440: {
			slidesPerView: 4,
			},
			1920: {
			slidesPerView: 4,
			},
     	 },
		navigation: {
			nextEl: '#bestList_button_next',
			prevEl: '#bestList_button_prev',
		},
		pagination: {
			el: '.bestList_pagination',
			clickable: true,
			type : 'bullets',
		}
	});
	
	$(document).on("click", ".point_reference, .card_reference", function (e) {
		$("span", this).toggle();
    });
	
});