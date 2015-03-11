$(function(){
	$('.teacher-bxslider').bxSlider({
	  minSlides: 1,
	  maxSlides: 3,
	  slideWidth: 278,
	  slideMargin: 0,
	  pager: false
	});
	
	$('.relate-bxslider').bxSlider({
	  minSlides: 3,
	  maxSlides: 4,
	  slideWidth: 180,
	  slideMargin: 25,
	  pager: false
	});
	
	window.onscroll = function(){
		setNavs();
	};
	setNavs();
	function setNavs(){
		var scrollTop = $(window).scrollTop(),
			$introNav = $(".intro-nav"),
			$introNavMain = $(".intro-nav-main"),
			$introSiderbar = $(".intro-siderbar");
			
		if(scrollTop >= $introNav.offset().top - 2){
			$introNavMain.addClass("fixed");
			$introSiderbar.addClass("fixed");
		}else{
			$introNavMain.removeClass("fixed");
			$introSiderbar.removeClass("fixed");
		}
	}
});
