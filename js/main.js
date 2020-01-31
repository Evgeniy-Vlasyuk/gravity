$(function () {
		 $('.work-carousel').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  centerMode: true,
		  initialSlide: 2,
		  appendArrows: $('.arrow'),
		  prevArrow: '<img src="img/left.svg">',
		  nextArrow: '<img src="img/right.svg">',
		  responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        initialSlide: 0,
		        centerMode: false,
		        slidesToShow: 1
		      }
		    },
		  ]	
		});
	
		 $('.testimonial-carousel').slick({	
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  prevArrow: '<img src="img/left.svg" class="prev-arrow">',
		  nextArrow: '<img src="img/right.svg" class="next-arrow">',	
		});
	
	$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
		e.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });	
});


