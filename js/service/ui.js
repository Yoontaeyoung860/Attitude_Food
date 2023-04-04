/**
 * 
 */
$(function(){
	
	//상단 회원가입
	function swing() {
        $('.top_join_point').animate({'top':'30px'},600).animate({'top':'33px'},600, swing);
    }
	swing();
	
	
	
	// 검색창 보이기 숨기기
	$('.btn_search').click(function(event){
	    event.stopPropagation();
	    $('.searchbar_wrap').toggle();
		$('.searchbar_wrap').animate({ height: '275px' });
	});
	$('.close_btn').click(function(){
	    $('.searchbar_wrap').hide();
		$('.searchbar_wrap').animate({ height: '0' });
	}); 

	
	//total_category 보이기 숨기기
	$(".btn_total_nav").click(function() {
		$(".total_category_inner").toggle();
	});
	
	/*gnb  2depth 메뉴 열기-가로1201px 이상*/
	$(".gnb li").hover(function(){
		$('ul:first',this).show(300);
	}, function(){
		$('ul:first',this).hide();
	});
	
	//header bottom Scrol시 CSS적용
	/*
	var containerOffset = $( '.common_container' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > containerOffset.top ) {
			$( '.bottom' ).addClass( 'bottom_fixed' );
		}
		else {
			$( '.bottom' ).removeClass( 'bottom_fixed' );
		}
	});
	*/
	//모바일 1차,2차 카테고리 가로 메뉴 보이기 숨기기
	$(".btn_tm_h_menu").click(function  () {
		$(".tm_h_menu02_wrap").toggle();
		$(".bg_color02").toggle();
	});
	
	$('.btn_tm_nav_open').click(function () {
		 var side_menu = parseInt($('.side_tm_menu_wrap').css('left'));

		if (side_menu < 0) {
		
			$('.bg_color').show(); //body 어둡게
	        $('.side_tm_menu_wrap').css({ height: ($(window).height()) + 'px' }); //디바이스 높이만큼 side_menu 높이 적용
	        $('body').css({ position: 'fixed' }); //body 스크롤 금지
	        $('.side_tm_menu_wrap').animate({ left: '0' });  //side_menu 슬라이드(show)

		} else {
			
			$('.bg_color').hide(); //body 어둡게 해제
	        $('.side_tm_menu_wrap').animate({ left: '-100%' }); //side_menu 슬라이드(hide)
	        $('body').css({ position: 'relative' }); //body 스크롤
	        }
	     });
		 
		 $(".side_tm_menu_wrap").find(".accordion-toggle").click(function() {
			$(this).next().toggleClass("open").slideToggle("fast");
			$(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
		
			$(".side_tm_menu_wrap .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
			$(".side_tm_menu_wrap .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
		  });
	// 어두운 영역 클릭시
	$('.bg_color, .side_tm_close').click(function () {
		$('.bg_color').hide(); //body 어둡게 해제
		$('.side_tm_menu_wrap').animate({ left: '-100%' }); //side_menu 슬라이드(hide)
	    $('body').css({ position: 'relative' }); //body 스크롤
	});
	
	if(location.pathname == "/" ){
		//메인 best 제품 선택 탭
		
	}else{
		var rightBanner = parseInt($(".right_latest_product_benefit").css('top'));
		$(window).scroll(function() {
			var sT = $(window).scrollTop();
			var stopPosition = sT + rightBanner + "px";

			$(".right_latest_product_benefit").css('top', stopPosition);

			$(".right_latest_product_benefit").stop().animate({
				"top" : stopPosition
			}, 50);

		}).scroll();	
		
	}
	
	
	// footer top버튼 시작
	$(".right_top_btn, .top_btn").click(function() {
		$("html, body").animate({scrollTop:0},300,"swing");
		return false;
	});
	// footer top버튼 끝	
	
	const header = document.querySelector('#m_header_wrap'); 
	function scrollFunc(){ 
	    if (pageYOffset >= 90) { 
	        header.classList.add('on'); 
	    } else { 
	        header.classList.remove('on');
	     } 
	    } 
	    window.addEventListener('scroll', scrollFunc);
});