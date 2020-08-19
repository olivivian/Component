
//最里层轮播
var mySwiper1 = new Swiper('#swiper1',{
		loop: true,
		autoplay : 2500,
		speed : 600,
		autoplayDisableOnInteraction : false
	});

//上层轮播
var mySwiper2 = new Swiper('#swiper2',{
		loop: true,
		autoplay : 2500,
		speed : 600,
		slidesPerView :2,
		autoplayDisableOnInteraction : false
  });




//前进后退按钮
$(".left").click(function(){
	mySwiper1.slidePrev();
	mySwiper2.slidePrev();
})
$(".right").click(function(){
	mySwiper1.slideNext();
	mySwiper2.slideNext();
})