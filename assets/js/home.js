$(document).ready(function () {
  var windowWidth = $(window).width();
  var window_width = $(window).width();
  var TM = TweenMax;
  var tl = new TimelineMax();
  console.log("Designed & Developed by Dcastalia");
  $("body").prepend(
    '<div class="overlay"></div><div class="form-overlay"></div>'
  );

  //------------ Light gallery
  if ($(".light").length > 0) {
    $(".light").lightGallery({
      selector: "a",
    });
  }

  //------------ Light gallery with thumbnail
  if ($(".lightThumb").length > 0) {
    $(".light").lightGallery({
      selector: "a",
      exThumbImage: "data-exthumbimage",
    });
  }

  //------------ nice select
  if ($(".Select").length > 0) {
    $(".Select select").niceSelect();
  }

  //------------ tab change in mobile using nice select
  $(".TabSelect").on("change", function (e) {
    $(".TabMenus li a").eq($(this).val()).tab("show");
  });

  //------ form validation
  $("form .dynamic_submit_btn").click(function () {
    $(".form-overlay").addClass("doit");
  });

  $(document).on("click", ".form-overlay.doit,.ok-class", function () {
    $(".form-overlay.doit, .form-message-container").hide();
  });

  $(".btn , button").click(function () {
    $(".form-overlay.doit, .form-message-container").removeAttr("style");
  });

  $(".dynamic_submit_btn").on("click", function () {
    setTimeout(function () {
      $(".form-overlay.doit").hide();
    }, 15000);
  });
  //------ form validation

  //------------------- T.A.1.0-Component-11 start
  if ($('.benefit-nd-slider-init').length > 0) {
    $('.benefit-nd-slider-init').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 900,
      dots: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      autoplay: false,
      arrows: false,
      draggable: true,
      // prevArrow: '.FaciNext',
      // nextArrow: '.Faciprev',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            dots: true,
            draggable: true
          }
        }


      ]
    });
  }
  //------------------- T.A.1.0-Component-11 end

  //-------------------------- T.A.1.0-listing-06 start
  if ($('.listing-six-init').length > 0) {
    $('.listing-six-init').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 900,
      dots: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      autoplay: false,
      arrows: false,
      draggable: false,
      // prevArrow: '.FaciNext',
      // nextArrow: '.Faciprev',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            dots: true,
            draggable: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            dots: true,
            draggable: true
          }
        }


      ]
    });
  }
  //-------------------------- T.A.1.0-listing-06 end


  //------------------- T.A.1.0-listing-05 start
  if ($('.listing-five-slider-init').length > 0) {
    $('.listing-five-slider-init').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 900,
      dots: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      autoplay: false,
      arrows: false,
      draggable: true,
      // prevArrow: '.FaciNext',
      // nextArrow: '.Faciprev',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            dots: true,
            draggable: true
          }
        }


      ]
    });
  }
  //------------------- T.A.1.0-listing-05 end

  //-------------------------------  T.A.1.0-Gallery-01 start
  if ($('.gallery-slider-init').length > 0) {
    $('.gallery-slider-init').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      draggable: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows: false,
      asNavFor: '.gallery-with-thumb-init'
    });
  }
  if ($('.gallery-with-thumb-init').length > 0) {
    $('.gallery-with-thumb-init').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.gallery-slider-init',
      draggable: true,
      focusOnSelect: true,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      lazyLoad: 'ondemand',
      responsive: [

        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            centerMode: false,
            dots: true,
            draggable: true
          }
        }
      ]
    });
  }
  //-------------------------------  T.A.1.0-Gallery-01 end

  //------------------------ T.A.1.0-Gallery-03 start
  if ($('.showcase-two__wrap').length > 0) {
    $('.showcase-two__wrap').isotope({
      itemSelector: '.grid',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid'
      }
    })
  }
  //------------------------ T.A.1.0-Gallery-03 end

  //-------------------------- T.A.1.0-Gallery-04 start
  if ($('.gallery-one__init').length > 0) {
    $('.gallery-one__init').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '250px',
      prevArrow: '.gallery-left',
      nextArrow: '.gallery-right',
      speed: 1200,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            dots: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            dots: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            dots: true,
          }
        }
      ]
    })
  }
  //-------------------------- T.A.1.0-Gallery-04 end

  // ------------------------- T.A.1.0-Gallery-06 start
  if ($('.filter-wrap').length > 0) {
    var container = $('.filter-wrap');
    var container_height = container.height();
    var $grid = container.isotope({
      itemSelector: '.filter-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.filter-item'
      }
    });
    $('.filter-nav a').on('click', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({filter: filterValue});
      $('.filter-nav a').removeClass('active');
      $(this).addClass('active');
      return false;
    });

    // mobile filter
    $('.filter-mobile li').on('click', function () {
      var filterValue = $(this).attr('data-value');
      $grid.isotope({filter: filterValue});
    });

    if (768 < windowWidth) {
      container.css({'min-height': container_height})
    }
  }
  // ------------------------- T.A.1.0-Gallery-06 end

  //-------------------------- T.A.1.0-Project-details-05 start
  if ($('.floor-plan-one-slide-init').length > 0) {
    $('.floor-plan-one-slide-init').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 900,
      dots: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      autoplay: false,
      arrows: false,
      draggable: false,
      fade: true

    });
  }
  //-------------------------- T.A.1.0-Project-details-05 end

  //------------------- T.A.1.0-Project-details-08 start
  if ($('.specification-one-init').length > 0) {
    $('.specification-one-init').slick({
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      speed: 900,
      dots: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      autoplay: false,
      arrows: false,
      draggable: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false,
            dots: true,
            draggable: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
            dots: true,
            draggable: true
          }
        }


      ]

    });
  }
  //---------------- T.A.1.0-Project-details-08 end

  //----------------------  T.A.1.0-News-list-01 start
  if ($('.news-list-one-slider-init').length > 0) {
    $('.news-list-one-slider-init').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 1200,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows: false,
      dots: true,
      draggable: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
            dots: true,
            draggable: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: true,
          }
        }
      ]
    })
  }
  //----------------------  T.A.1.0-News-list-01 end


  //----------------------  T.A.1.0-News-list-02 start
  if ($('.news-list-two-slider-init').length > 0) {
    $('.news-list-two-slider-init').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 1200,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows: false,
      dots: true,
      draggable: false,
      responsive: [

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: true,
          }
        }
      ]
    })
  }
  //----------------------  T.A.1.0-News-list-02 end

  //------------------- T.A.1.0-Component-02 start
  if ($('.benefits-slider__init').length > 0) {
    $('.benefits-slider__init').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 3,
      speed: 500,
      dots: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      autoplay: false,
      arrows: false,
      draggable: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            centerMode: true,
            dots: true,
            draggable: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            dots: true,
            draggable: true
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            draggable: true
          }
        }
      ]
    });

  }
  //------------------- T.A.1.0-Component-02 end

  //-------------------- T.A.1.0-Component-03 start
  if ($('.choose-color__right__image__init').length > 0) {
    $('.choose-color__right__image__init').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1500,
      dots: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      draggable: false,
      fade: true,
      cssEase: 'ease',
      arrows: false,
    });
  }
  if($('.choose-color').length > 0){
    $main = $('.plain-text-nd .title').offset().left;
    $('.choose-color .choose-color__left').css('padding-left',$main);
  }
  $(window).on('resize', function () {
    if($('.choose-color').length > 0){
      $main = $('.plain-text-nd .title').offset().left;
      $('.choose-color .choose-color__left').css('padding-left',$main);

    }

  });
  //-------------------- T.A.1.0-Component-03 end



  //------------------- T.A.1.0-Component-07 start
  if ($('.text-slider__init').length > 0) {
    $('.text-slider__init').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 3,
      speed: 900,
      dots: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      autoplay: false,
      arrows: false,
      draggable: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            centerMode: false,
            dots: false,
            draggable: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            dots: false,
            draggable: true
          }
        }


      ]
    });
  }
  if (767 > windowWidth) {
    if ($('.text-slider__init').length > 0) {
      $('.text-slider__init').slick('unslick');
    }
  }
  //------------------- T.A.1.0-Component-07 end


  //------------------- T.A.1.0-Component-10 start
  if ($('.facility-list__img-slider__init').length > 0) {
    $('.facility-list__img-slider__init').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: $('.facility-list-prev'),
      nextArrow: $('.facility-list-next'),
      responsive: [

        {
          breakpoint: 768,
          settings: {
            centerPadding: '120px',
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true,
          }
        },
        {
          breakpoint: 575,
          settings: {
            centerPadding: '80px',
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true,
          }
        }
      ]
    });
  }
  //------------------- T.A.1.0-Component-10 end


  // sticky menu
  screenPosition = 0;
  $(window).scroll(function () {
    scrolled = $(window).scrollTop();
    if (screenPosition - scrolled > 0) {
      $("body").addClass("ShowIt");
    } else {
      $("body").removeClass("ShowIt");
    }
    screenPosition = scrolled;
  });
  var first_section = $("body").position().top + 250;
  $(window).scroll(function () {
    if ($(window).scrollTop() <= first_section) {
      $("body").removeClass("ShowIt");
    }
  });

  // scroll to section
  $("#ScrollTo").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var $target = $(this.hash);
      $target =
        ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $("html,body").animate({ scrollTop: targetOffset }, 1000);
        return false;
      }
    }
  });

  //------- message box start

  $(document).delegate(".msg_cont", "click", function () {
    open_msg();
  });

  $(document).delegate(".msg_icon", "click", function () {
    open_msg();
  });

  function open_msg() {
    $(".msg_cont_wrap").css({ width: "330px", height: "446px" });
    TM.to(".msg_cont", 0.2, {
      height: 580,
      width: 580,
      right: -86,
      bottom: -86,
      borderRadius: 290,
      background: "rgba(255, 255, 255, 1)",
      onComplete: function () {},
    });

    TM.to(".msg_form", 0.5, {
      right: 0,
      delay: 0.2,
      onComplete: function () {
        $(".msg_cont_wrap").addClass("bx_shadow");
      },
    });

    $(".msg_cont_wrap").addClass("msg_opened");
    $(".msg_cont_wrap").removeClass("msg_closed");
  }

  $(document).delegate(".close_btn", "click", function () {
    close_msg();
  });

  function close_msg() {
    $(".msg_cont_wrap").removeClass("bx_shadow");

    TM.to(".msg_cont", 0.2, {
      width: "50px",
      height: "50px",
      right: 35,
      bottom: 8,
      borderRadius: "100%",
      background: "#008C44",
      onComplete: function () {
        setTimeout(function () {
          $(".msg_cont_wrap").css({ width: "120px", height: "120px" });
        }, 500);
      },
    });

    TM.to(".msg_form", 0.5, {
      right: -500,
    });

    setTimeout(function () {
      $(".msg_cont_wrap").removeClass("msg_opened");
      $(".msg_cont_wrap").addClass("msg_closed");
    }, 500);
  }

  $(".msg_cont , .msg_icon").click(function () {
    $(".msg_cont_wrap .title").fadeIn(2000);
    $(".close_btn").fadeIn();
  });

  $(".close_btn").click(function () {
    $(".msg_cont_wrap .title,.close_btn").hide();
  });

  //------------ message box end


}); //document.ready
