!function(e){"use strict";e(window).stellar({responsive:!0,parallaxBackgrounds:!0,parallaxElements:!0,horizontalScrolling:!1,hideDistantElements:!1,scrollProperty:"scroll"});e(".js-fullheight").css("height",e(window).height()),e(window).resize((function(){e(".js-fullheight").css("height",e(window).height())}));setTimeout((function(){e("#ftco-loader").length>0&&e("#ftco-loader").removeClass("show")}),1),e.Scrollax();e(".carousel-testimony").owlCarousel({center:!0,loop:!0,items:1,margin:30,stagePadding:0,nav:!1,navText:['<span class="ion-ios-arrow-back">','<span class="ion-ios-arrow-forward">'],responsive:{0:{items:1},600:{items:2},1e3:{items:3}}}),e(".carousel-destination").owlCarousel({center:!1,loop:!0,items:1,margin:30,stagePadding:0,nav:!1,navText:['<span class="ion-ios-arrow-back">','<span class="ion-ios-arrow-forward">'],responsive:{0:{items:1},600:{items:2},1e3:{items:4}}}),e("nav .dropdown").hover((function(){var a=e(this);a.addClass("show"),a.find("> a").attr("aria-expanded",!0),a.find(".dropdown-menu").addClass("show")}),(function(){var a=e(this);a.removeClass("show"),a.find("> a").attr("aria-expanded",!1),a.find(".dropdown-menu").removeClass("show")})),e("#dropdown04").on("show.bs.dropdown",(function(){console.log("show")}));e(window).scroll((function(){var a=e(this).scrollTop(),o=e(".ftco_navbar"),n=e(".js-scroll-wrap");a>150&&(o.hasClass("scrolled")||o.addClass("scrolled")),a<150&&o.hasClass("scrolled")&&o.removeClass("scrolled sleep"),a>350&&(o.hasClass("awake")||o.addClass("awake"),n.length>0&&n.addClass("sleep")),a<350&&(o.hasClass("awake")&&(o.removeClass("awake"),o.addClass("sleep")),n.length>0&&n.removeClass("sleep"))}));e("#section-counter, .hero-wrap, .ftco-counter").waypoint((function(a){if("down"===a&&!e(this.element).hasClass("ftco-animated")){var o=e.animateNumber.numberStepFactories.separator(",");e(".number").each((function(){var a=e(this),n=a.data("number");console.log(n),a.animateNumber({number:n,numberStep:o},7e3)}))}}),{offset:"95%"});e(".ftco-animate").waypoint((function(a){"down"!==a||e(this.element).hasClass("ftco-animated")||(e(this.element).addClass("item-animate"),setTimeout((function(){e("body .ftco-animate.item-animate").each((function(a){var o=e(this);setTimeout((function(){var e=o.data("animate-effect");"fadeIn"===e?o.addClass("fadeIn ftco-animated"):"fadeInLeft"===e?o.addClass("fadeInLeft ftco-animated"):"fadeInRight"===e?o.addClass("fadeInRight ftco-animated"):o.addClass("fadeInUp ftco-animated"),o.removeClass("item-animate")}),50*a,"easeInOutExpo")}))}),100))}),{offset:"95%"}),e(".image-popup").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{verticalFit:!0},zoom:{enabled:!0,duration:300}}),e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),e(".checkin_date, .checkout_date").datepicker({format:"m/d/yyyy",autoclose:!0})}(jQuery);const multipleItemCarousel=document.querySelector("#testimonialCarousel");if(window.matchMedia("(min-width:576px)").matches){new bootstrap.Carousel(multipleItemCarousel,{interval:5e3});var carouselWidth=$(".carousel-inner")[0].scrollWidth,cardWidth=$(".carousel-item").width(),scrollPosition=0;$(".carousel-control-next").on("click",(function(){scrollPosition<carouselWidth-3*cardWidth&&(console.log("next"),scrollPosition+=cardWidth,$(".carousel-inner").animate({scrollLeft:scrollPosition},800))})),$(".carousel-control-prev").on("click",(function(){scrollPosition>0&&(scrollPosition-=cardWidth,$(".carousel-inner").animate({scrollLeft:scrollPosition},800))}))}else $(multipleItemCarousel).addClass("slide");function shareOnWhatsApp(){var e=encodeURIComponent(window.location.href);window.open("https://api.whatsapp.com/send?text="+e,"_blank")}function shareOnInstagram(){alert("To share on Instagram, please open the Instagram app and post manually.")}function shareOnFacebook(){var e=encodeURIComponent(window.location.href);window.open("https://www.facebook.com/sharer/sharer.php?u="+e,"_blank")}function shareOnLinkedIn(){var e=encodeURIComponent(window.location.href);window.open("https://www.linkedin.com/sharing/share-offsite/?url="+e,"_blank")}function shareOnTwitter(){var e=encodeURIComponent(window.location.href);window.open("https://twitter.com/intent/tweet?url="+e)}