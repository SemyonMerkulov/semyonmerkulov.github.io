$('.header__btn').click(function(){
	$('#nav-menu').toggleClass('header-nav--open');
});

$(window).on("scroll", function(){
    if ($(window).scrollTop() >= 37) {
       $('.header').addClass('header--fixed');
    } else {
    	$('.header').removeClass('header--fixed');
    }
    scrollSpy();
});

function testimonialSlider(){
	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlide(n) {
	  showSlides(slideIndex += n);
	}

	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	$('.slider__btn-prev').click(function(){
		plusSlide(-1);
	})

	$('.slider__btn-next').click(function(){
		plusSlide(1);
	})

	$('.slider-nav__item').click(function(){
		var n = $(this).data('item');
		currentSlide(n);
	})

	function showSlides(n) {
	  var slides = $('.slider__item');
	  var dots = $('.slider-nav__item');

	  if (n > slides.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = slides.length}

	  for (i = 0; i < slides.length; i++) {
	     slides[i].style.display = "none";  
	  }

	  for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" slider-nav__item--active", "");
	  }

	  slides[slideIndex-1].style.display = "block";  
	  dots[slideIndex-1].className += " slider-nav__item--active";
	}
};

$(document).ready(function(){
	testimonialSlider();
});

$(document).on('click', 'a[data-attr="anchor"]', function(e) {	
    var id = $(this).attr('href'), 
    	$id = $(id),
    	pos = $(id).offset().top - $('.header').height();
    
    if ($id.length === 0) {
        return false;
    }
    
    e.preventDefault();
    $('body, html').animate({scrollTop: pos}, 650);
});

function scrollSpy(){
	$('section').each(function(index, elem){
		var top = $(elem).offset().top - $('.header').height() - 5;
			scroll = $(window).scrollTop(),
			id = $(elem).attr('id');

		if( scroll > top ){
            $('.header-nav__link--active').removeClass('header-nav__link--active');
        	$('a[href="#'+id+'"].header-nav__link').addClass('header-nav__link--active');	
    	}
	});
}