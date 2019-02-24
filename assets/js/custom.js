$(function(){
	/* --header left cover-- */
	var leftCover="<div class='left-cover'></div>";
		$("header.header").append(leftCover);
	function calcLeftWidth(){
		
		var wWidth=$(window).outerWidth();
		var containerWidth=$(".header__nav .container").outerWidth();
		var widthFromLeft=Number((wWidth-containerWidth)/2)+18;
		$(".left-cover").css("width",widthFromLeft+"px");
	}

	calcLeftWidth();

	$(window).on("resize",function(){
		calcLeftWidth();
	});


	// Add active class in Navigation


   $(".header__nav .navigation ul li").on("click",function(){
    $('.header__nav .navigation ul li').removeClass('active');
    $(this).addClass('active');
});

	$(document).on("click", ".menu-toggle", function(){
      $(document).find(".navigation").slideToggle();

      var wWidth=$(window).width();
      if(wWidth < 992){
        if($(".form-search").is(":visible")){
          $("#search-toggler").attr("data-search-expanded","false"); 
          $(".form-search").slideToggle();
        }
      }

  });

    // Fixed Side Bar

    $( '.sidebar' ).fixedsticky();



	// search form
	$(document).on("click","#search-toggler",function(){
		if($(this).attr('data-search-expanded') == "true"){
			$(this).attr('data-search-expanded',"false");
			$(this).find(".trigger-icon").removeClass("fa-times").addClass("fa-search");
			$(this).parent(".navigation-form").find(".form-search").fadeOut();

		}else{
			$(this).attr('data-search-expanded',"true");
			$(this).find(".trigger-icon").removeClass("fa-search").addClass("fa-times");
			$(this).parent(".navigation-form").find(".form-search").fadeIn();
		}


    var current = location.pathname;
    $('.navigation ul li ').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })

      var wWidth=$(window).width();
      if(wWidth < 992){
        if($(".navigation").is(":visible")){
          $(".navigation").slideToggle();
        }
      }
	});

	//slick slider

	$('.section-slider__carousel').slick({
	    draggable: true,
	    autoplay: true,
	    autoplaySpeed: 7000,
	    arrows: true,
	    dots: true,
	    fade: true,
	    speed: 500,
	    infinite: true,
	    cssEase: 'ease-in-out',
	    touchThreshold: 100,
	  prevArrow:"<div class='slick-arrow arrow-left'><i class='fas fa-arrow-left'></i></div>",
	  nextArrow:"<div class='slick-arrow arrow-right'><i class='fas fa-arrow-right'></i></div>",
	});		

	$('.section-tour-details-slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll:1,
	  arrows:false,
	  autoplay:true,
	  autoplayspeed:2000,
    dots:true
	});	
	
	$('.clientreview-slick-slider').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll:2,
	  autoplay:false,
	  autoplayspeed:2000,
	  arrows:false,
	  dots: true,
	  	   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1
      }
    }
  	]
	});

	$(".bike-slick-slider").slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows:true,
	  prevArrow:"<div class='slick-arrow arrow-left'><i class='fas fa-chevron-left'></i></div>",
	  nextArrow:"<div class='slick-arrow arrow-right'><i class='fas fa-chevron-right'></i></div>",
	   responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow:2,
        slidesToScroll:2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  	]
	});

	$(".section-trekking__slider").slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows:true,
	  prevArrow:"<div class='slick-arrow arrow-left'><i class='fas fa-chevron-left'></i></div>",
	  nextArrow:"<div class='slick-arrow arrow-right'><i class='fas fa-chevron-right'></i></div>",
	  	   responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll:2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  	]
	});
	$(".section-responsible__slider").slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  arrows:false,
	  autoplay:true,
	  autoplayspeed:1000,
	  	   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  	]
	});	
	$(".stories-slick-slider").slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  arrows:false,
	  dots:true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1
      }
    }
    ]

	});

    $(".faq-slider").slick({
    infinite: true,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:500,
    arrows:false,
    dots:true
  });

    $('.itinerary-box .toggle').click(function(e){
        e.preventDefault();
        
        $(this).next('.content').slideToggle();
    });


    // Accordion 
    $(".accordion .set .title").on("click",function(){

    	$('.accordion .set .title').removeClass("active")
    							   .next('.content')
    							   .slideUp();
    	var _this=$(this);
    	if(_this.next('.content').is(":visible")){
    		_this.removeClass("active")
    			 .next('.content')
    			 .slideUp();
    	}else{
    		_this.addClass("active")
    			 .next('.content')
    			 .slideDown();
    	}
    });


    // match height
    var height={
    	byRow:true,
    	property:'min-height'
    }
    if($(".section-trip-description").length > 0){

	    $(".section-trip-description figure img").matchHeight(height);
	    $(".section-trip-description figcaption .title").matchHeight(height);
	}

	// Home Page Article Section
 
   if($(".section-article__tips").length > 0){

	    $(".section-article__tips .article-image img").matchHeight(height);   
	    $(".section-article__tips .article-description ").matchHeight(height);

	}  

	// Home Page Packages Slider 
	if($(".section-biking__slider ").length > 0){
	    $(".section-biking__slider  figure img").matchHeight(height);   
	}
	// Home Page Packages Slider 
	if($(".section-trekking__slider ").length > 0){
	    $(".section-trekking__slider  figure img").matchHeight(height); 
	    $(".section-trekking__slider  figure figcaption").matchHeight(height);  
	}




	// smooth scroll
	$(".section-subnav-bar a").on("click",function(e){
		e.preventDefault();
		$(".section-subnav-bar li").removeClass("active");
		var target=$(this).attr("href");
		$(this).parent("li").addClass("active");

		$("html,body").animate({
			scrollTop:$(target).offset().top - $(".section-subnav-bar").height()
		},1000);
		
	});
	var total= $(".section-tour-details").length;
	var list=$(".section-subnav-bar li").length;
	

	$(window).scroll(function(){
		var currentScrollPos=$(this).scrollTop();
		var target=$(".section-tour-details");
		$(".section-subnav-bar li").removeClass("active");
		var currentTarget="";
		for(var i=0; i<total; i++){
			if(currentScrollPos > target.eq(i).offset().top - $(".section-subnav-bar").height() - 30){
				currentTarget= target.eq(i).attr("id");
			}	
		}
		
		for(var i=0; i<list; i++){

			if($(".section-subnav-bar li").eq(i).find("a").attr("href") == "#"+currentTarget){
				$(".section-subnav-bar li").eq(i).find("a[href='#"+currentTarget+"']").parent("li").addClass("active");
			}

		}
	})


  // tooltips

  $('[data-toggle="tooltip"]').tooltip(); 


});

// Wow Js

    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       10,
      }
    );
    wow.init();



// Date Picker 

$(".arrival_date").datepicker({
    format: "yyyy-mm-dd",
    todayBtn: true,
    autoclose: true,
    startDate: new Date()
  })
  .on("changeDate", function(e) {
    var checkInDate = e.date, $checkOut = $(".departure_date");    
    checkInDate.setDate(checkInDate.getDate() + 1);
    $checkOut.datepicker("setStartDate", checkInDate);
    $checkOut.datepicker("setDate", checkInDate).focus();
  });

$(".departure_date").datepicker({
  format: "yyyy-mm-dd",
  todayBtn: true,
  autoclose: true
});

// Share Stories date picker
 $('.datepicker').datepicker({
                format: 'mm-dd-yyyy',
                autoclose: true
            })






// Scroll Back to Top

$(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {        // If page is scrolled more than 150px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});


$(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {        // If page is scrolled more than 150px;
        $('#customize-icon').fadeIn(200);    // Fade in the arrow
    } else {
        $('#customize-icon').fadeOut(200);   // Else fade out the arrow
    }
});

// Fixed Sticky Sidebar


