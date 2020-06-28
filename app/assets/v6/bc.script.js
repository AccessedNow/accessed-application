var AT_Main = {

	getWidthBrowser : function() { // Get width browser
		var myWidth;

		if( typeof( window.innerWidth ) == 'number' ) {
			//Non-IE 
			myWidth = window.innerWidth;
		} 
		else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) { 
			//IE 6+ in 'standards compliant mode' 
			myWidth = document.documentElement.clientWidth; 
		} 
		else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) { 
			//IE 4 compatible 
			myWidth = document.body.clientWidth;  
		}

		return myWidth;
	},
  
  handlePreviewPanel : function(){ // Handle preview panel - only for demo site
      jQuery(document).on('click','.pp-toggle',function(){
        var e=jQuery('#shopify-section-preview-panel');
        if (e.hasClass("opened")) {
          e.removeClass("opened");
        } else {
          e.addClass("opened");
        }
      }); 
  },
  
	stickMenu : function() {
		var enable_stick = jQuery(".header-content").data('stick');
    var	enable_stick_mobile = jQuery(".header-content").data('stickymobile');
      
		if(enable_stick && AT_Main.getWidthBrowser() > 991){
		  //Keep track of last scroll
			var lastScroll = 0;
			var header = jQuery(".header-container");
			var body_content = jQuery("#body-content");

			jQuery(window).scroll(function() {
				//Sets the current scroll position
				var st = jQuery(this).scrollTop();
				//Determines up-or-down scrolling
				if (st > lastScroll) {
					
					//Replace this with your function call for downward-scrolling
					if (st > 250 ) {
						header.addClass("header-fixed");
						body_content.addClass("has-header-fixed");
					}
				}
				else {
					//Replace this with your function call for upward-scrolling
					if (st < 250) {
						header.removeClass("header-fixed");
						body_content.removeClass("has-header-fixed");
					}
				}
				//Updates scroll position
				lastScroll = st;
			});
		}
      
    if(enable_stick_mobile && AT_Main.getWidthBrowser() < 992){

      //Keep track of last scroll
      if($("body").hasClass("templateCart")){
        var lastScroll = 0;
        var header = jQuery(".mobile-total-price");
        var body_content = jQuery("#body-content");

        jQuery(window).scroll(function() {
          //Sets the current scroll position
          var st = jQuery(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll) {

            //Replace this with your function call for downward-scrolling
            if (st > 350 ) {
              header.addClass("header-mobile-fixed");
              body_content.addClass("has-header-fixed");
            }
          }
          else {
            //Replace this with your function call for upward-scrolling
            if (st < 350) {
              header.removeClass("header-mobile-fixed");
              body_content.removeClass("has-header-fixed");
            }
          }
          //Updates scroll position
          lastScroll = st;
        });
      }
      
      else{
        var lastScroll = 0;
        var header = jQuery(".header-container");
        var body_content = jQuery("#body-content");

        jQuery(window).scroll(function() {
          //Sets the current scroll position
          var st = jQuery(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll) {

            //Replace this with your function call for downward-scrolling
            if (st > 250 ) {
              header.addClass("header-mobile-fixed");
              body_content.addClass("has-header-fixed");
            }
          }
          else {
            //Replace this with your function call for upward-scrolling
            if (st < 250) {
              header.removeClass("header-mobile-fixed");
              body_content.removeClass("has-header-fixed");
            }
          }
          //Updates scroll position
          lastScroll = st;
        });
      }
    }
	},
  
  stickAddToCart : function() {
    $(window).on( 'scroll' , function() {
		  var ps = jQuery(this).scrollTop();
      var _show_sticky = ($('#add-to-cart').offset().top);

      if ( _show_sticky < ps ) {
        $('.add-to-cart-sticky').addClass('show');  
      }
      else {
        $('.add-to-cart-sticky').removeClass('show');
      }
    });
	},
	
	toTopButton : function(){
		var to_top_btn = $("#scroll-to-top");
		if( 1 > to_top_btn.length ){
			return;
		}
		$(window).on( 'scroll' , function() {
			var b = jQuery(this).scrollTop();
			var c = jQuery(this).height();
			if (b > 100) { 
				var d = b + c / 2;
			}
			else { 
				var d = 1 ;
			}

			if (d < 1000 && d < c) { 
				jQuery("#scroll-to-top").removeClass('on off').addClass('off'); 
			} else {
				jQuery("#scroll-to-top").removeClass('on off').addClass('on'); 
			}
		});

		to_top_btn.on( 'click',function (e) {
			e.preventDefault();
			jQuery('body,html').animate({scrollTop:0},800,'swing');
		});
	},
  
	addEvent : function(obj, evt, fn){ // Exit intent
    if (obj.addEventListener) {
      obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
      obj.attachEvent("on" + evt, fn);
    }
  },

  exitIntent : function(){  // Exit intent trigger
    AT_Main.addEvent(document, 'mouseout', function(evt) {

      if (evt.toElement == null && evt.relatedTarget == null ) {
        AT_Main.newsletterPopupAction();
      };

    });
  },

  newsletterPopupAction : function(){ // Action newsletter popup
    let expire = jQuery("#newsletter-popup").data('expires');

    if (jQuery.cookie('mycookie')) {
      //it hasn't been one days yet
    }
    else {
      $.fancybox.open({
        src  : '#newsletter-popup'
        ,type : 'inline'
        ,autoDimensions: false
        ,width    : 'auto'
        ,height   : 'auto'
        ,closeBtn    : false
      })
    }
    jQuery.cookie('mycookie', 'true', { expires: expire });
  },

  newsletterPopupDelayAction : function(){ // Action newsletter popup with delay time
    let delay = jQuery("#newsletter-popup").data('delay');
    let expire = jQuery("#newsletter-popup").data('expires');

    if (jQuery.cookie('mycookie')) {
      //it hasn't been one days yet
    }
    else {
        setTimeout(function(){
          $.fancybox.open({
            src  : '#newsletter-popup'
            ,type : 'inline'
            ,autoDimensions: false
            ,width    : 'auto'
            ,height   : 'auto'
            ,closeBtn    : false
          })
        }, delay);

    }
    jQuery.cookie('mycookie', 'true', { expires: expire });
  },

  newsletterPopup : function(){ // Show newsletter popup
    let style = jQuery("#newsletter-popup").data('style');

    if ($('.newsletter-popup-content').length > 0){
      if (style == 'delay'){
        AT_Main.newsletterPopupDelayAction();
      }

      else if (style == 'exit-intent'){
        AT_Main.exitIntent();
      }

      else{
        jQuery(window).scroll(function() {
          let scroll_position = jQuery("#newsletter-popup").data('scroll');
          let newsletter_st = jQuery(this).scrollTop();

          if (newsletter_st > scroll_position ) {
            AT_Main.newsletterPopupAction();
          }
        });
      }

      jQuery('.np-close').on('click',function (e) {
        $('#newsletter-popup .fancybox-close-small').trigger('click');
      })
    }
    else {return ;}
  },

  newsletterCoupon: function(){ // Show coupon code when subscribe newsletter

    if ($('#newsletter_popup .newsletter-block--form-type').data('form-type') == 'klaviyo'){
      KlaviyoSubscribe.attachToForms('#newsletter_popup form', {
        success: function ($form) {
          jQuery('.text-box-image').hide();
          jQuery('.subscribe-result').show();
          jQuery('.newsletter-popup-content').removeClass('block-image-true').addClass('block-image-false');
        }
      });
    }
    else{

      jQuery('#mc-button').on('click', function (event) {
        if (event) event.preventDefault()
        let $form = $('#mc-form');

        jQuery.ajax({
          type: 'POST',
          url: $form.attr('action'),
          data: $form.serialize(),
          cache: false,
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
          success: function (data) {
            jQuery('.text-box-image').hide();
            jQuery('.subscribe-result').show();
            jQuery('.newsletter-popup-content').removeClass('block-image-true').addClass('block-image-false');
          }
        })
      })
    }

    jQuery('.btn-copy').on('click',function (e) {
      var _temp = $('<input>');
      $("body").append(_temp);
      _temp.val($('#mycode').text()).select();
      document.execCommand("copy");
      _temp.remove();
    })
  },
      
  toggleVerticalMenu : function(){
    jQuery(document).on('click', '.vertical-menu .head', function(e) {
      jQuery(this).toggleClass('opened');
      jQuery('.vertical-navbar').toggleClass('opened');
    });
	},
  
  toggleCartSidebar : function(){
		jQuery('.cart-toggle').on('click',function (e) {
			e.stopPropagation();
			AT_Main.fixNoScroll();
			jQuery('.cart-sb').toggleClass('opened');
			jQuery('body').toggleClass('cart-opened');
		});

		jQuery('#page-body, .c-close').on('click',function () {
			jQuery('.cart-sb').removeClass('opened');
			jQuery('html,body').removeClass('cart-opened');
          
			AT_Main.fixReturnScroll();
		}); 
	},

  smartSearch : function(){ // fix search page when disable Smart Search 
    if ((jQuery("body").hasClass('snize-results-page')) && (!jQuery("body").hasClass('as-smart'))){
      var _base_url = window.location.origin;
      var _url = window.location.href;
      var splitStr = _url.substring(_url.indexOf('?') + 1); 
      window.location.href = _base_url + '/search?type=product&' + splitStr;
    }
  },

	toggleFilterSidebar : function(){
    jQuery('.filter-icon.toggle').on('click',function (e) {
        jQuery('.filter-sidebar.position-body').slideToggle("slow");
    });
      
		jQuery('.filter-icon.drawer').on('click',function (e) {
			e.stopPropagation();
			AT_Main.fixNoScroll();
			jQuery('body').toggleClass('sidebar-opened');
		});	
      
  	jQuery('.f-close').on('click',function () {
    jQuery('#sidebar').removeClass('opened');
		jQuery('html,body').removeClass('sidebar-opened');
			AT_Main.fixReturnScroll();
		});
      
    jQuery('.filter-icon-order.toggle').on('click',function (e) {
      jQuery('.filter-order-form').slideToggle("slow");
    });
      
    jQuery('.filter-icon-order.drawer').on('click',function (e) {
  		e.stopPropagation();
  		AT_Main.fixNoScroll();
  		jQuery('body').toggleClass('order-sidebar-opened');
		});

    jQuery('.fof-close').on('click',function () {
			jQuery('html,body').removeClass('order-sidebar-opened');
			AT_Main.fixReturnScroll();
		});
	},
      
  handleGridList : function(){
      
  	if ($.cookie('cata-grid-4') == "yes") {
      jQuery("body").removeClass("cata-grid-1 cata-grid-2 cata-grid-3");
      $("body").addClass("cata-grid-4");
      $('.grid').each(function() {
        $(this).removeClass("active");
      });            
      $('.grid-4').addClass("active");  
    }
  
    if ($.cookie('cata-grid-3') == "yes") {
      jQuery("body").removeClass("cata-grid-1 cata-grid-2 cata-grid-4");
      $("body").addClass("cata-grid-3");
      $('.grid').each(function() {
        $(this).removeClass("active");
      });            
      $('.grid-3').addClass("active");
    }

    if ($.cookie('cata-grid-2') == "yes") {
      jQuery("body").removeClass("cata-grid-1 cata-grid-3 cata-grid-4");
      $("body").addClass("cata-grid-2");
      $('.grid').each(function() {
        $(this).removeClass("active");
      });            
      $('.grid-2').addClass("active");
    }

    if ($.cookie('cata-grid-1') == "yes") {
      jQuery("body").removeClass("cata-grid-2 cata-grid-3 cata-grid-4");
      $("body").addClass("cata-grid-1");
      $('.grid').each(function() {
        $(this).removeClass("active");
      });            
      $('.grid-1').addClass("active");
    }

    jQuery("body").on("click", ".grid-4", function() {
    	$.cookie('cata-grid-3','no',  {expires: 1, path: '/'});
      $.cookie('cata-grid-2','no',  {expires: 1, path: '/'});
    	$.cookie('cata-grid-1','no',  {expires: 1, path: '/'});
    	jQuery("body").removeClass("cata-grid-1 cata-grid-2 cata-grid-3");
      jQuery("body").addClass("cata-grid-4");
    
      var e = jQuery(this).closest(".grid-list");
      e.children('.grid').each(function() {
        $(this).removeClass("active");
      });            
      $(this).addClass("active");  
      
    }),jQuery("body").on("click", ".grid-3", function() {
    	$.cookie('cata-grid-4','no',  {expires: 1, path: '/'});
      $.cookie('cata-grid-2','no',  {expires: 1, path: '/'});
    	$.cookie('cata-grid-1','no',  {expires: 1, path: '/'});
    	$.cookie('cata-grid-3','yes', {expires: 1, path: '/'});
    
    	jQuery("body").removeClass("cata-grid-1 cata-grid-2 cata-grid-4");
    	jQuery("body").addClass("cata-grid-3");
    
      var e = jQuery(this).closest(".grid-list");
      e.children('.grid').each(function() {
        $(this).removeClass("active");
      });            
      $(this).addClass("active");
      
    }),jQuery("body").on("click", ".grid-2", function() {
      var e = jQuery(this).closest(".grid-list");
    	$.cookie('cata-grid-4','no',  {expires: 1, path: '/'});
    	$.cookie('cata-grid-3','no',  {expires: 1, path: '/'});
    	$.cookie('cata-grid-1','no',  {expires: 1, path: '/'});
      $.cookie('cata-grid-2','yes', {expires: 1, path: '/'});
    
    	jQuery("body").removeClass("cata-grid-1 cata-grid-3 cata-grid-4");
    	jQuery("body").addClass("cata-grid-2");
    
      var e = jQuery(this).closest(".grid-list");
      e.children('.grid').each(function() {
        $(this).removeClass("active");
      });            
      $(this).addClass("active");
      
    }),jQuery("body").on("click", ".grid-1", function() {
      var e = jQuery(this).closest(".grid-list");
      $.cookie('cata-grid-4','no',  {expires: 1, path: '/'});
    	$.cookie('cata-grid-3','no',  {expires: 1, path: '/'});
    	$.cookie('cata-grid-2','no',  {expires: 1, path: '/'});
      $.cookie('cata-grid-1','yes', {expires: 1, path: '/'});
    
    	jQuery("body").removeClass("cata-grid-2 cata-grid-3 cata-grid-4");
    	jQuery("body").addClass("cata-grid-1");
    
      var e = jQuery(this).closest(".grid-list");
      e.children('.grid').each(function() {
        $(this).removeClass("active");
      });            
      $(this).addClass("active");
    })
  },
  
  handleOrderFormQty : function(){
    jQuery("body").on("click",".global-product-info-qty-plus",function(){
      q = $(this).prev();
      var value = parseInt(q.val(), 10);
      value = isNaN(value) ? 0 : value;
      value++;
      q.val(value);
    });

    jQuery("body").on("click",".global-product-info-qty-minus",function(){
      q = $(this).next();
      var value = parseInt(q.val(), 10);
      value = isNaN(value) ? 1 : value;
      if(value > 1){
        value--;
        q.val(value);
      }
    });
  },
  
	effectNavigation : function(){ // Make hover effect of navigation
    
    jQuery(".top-account-holder").hover(function(e){
      jQuery(this).find('>.dropdown-menu').addClass("fadeInUp animated");
    },function(e){
      jQuery(this).find('>.dropdown-menu').removeClass("fadeInUp animated");
    });
    
  	jQuery(".currency-block").hover(function(e){
      jQuery(this).find('>.dropdown-menu').addClass("fadeInUp animated");
    },function(e){
      jQuery(this).find('>.dropdown-menu').removeClass("fadeInUp animated");
    });
    
    jQuery('#city-phone-numbers').on("change", function(e) {
      var _newcity = jQuery(e.currentTarget).find(':selected').attr('value');
      $('#city-phone-number-label').html(_newcity);
    });
  },
      
  menuOnMobileNew : function(){ // handle new menu on mobile

    if($('.mobile-version .mega-menu .position-left').length > 0 || $('.mobile-version .mega-menu .position-center').length > 0 || $('.mobile-version .mega-menu .position-right').length > 0){
      $('.mobile-version .mega-menu .mega-col').each(function(){
        $(this).parents('.row').first().before($(this).children());
      })
      $('.mobile-version .mega-menu .row').remove();
    }

    if($('.mobile-version .mega-menu .menu-proudct-carousel').length > 0){
      setTimeout(function(){
        $('.mobile-version .mega-menu .menu-proudct-carousel').prepend('<li class="back-prev-menu"><span class="expand back">Back</span></li>');
      },500);
    }

    jQuery(document).on('click','.mobile-version .menu-mobile .main-nav .expand',function(event){

      let _title = $(this).parents('.dropdown').first().find('a').first().children().first().text().split('\n')[0];
      let e = $(this).parents('.dropdown').first();

      e.addClass('active');
      e.parent().addClass('sub-open');

      if (e.hasClass('dropdown') ) {
        let child = e.children('.dropdown-menu');
        if(child.length > 0){
          if (child.hasClass('menu-mobile-open') == false) {
            child.addClass('menu-mobile-open');

            if (_title.length > 0) {
              child.children('.back-prev-menu').find('.back').html(_title);
            }
            return false;
          }
        }
      }

      if ($(this).parent().hasClass('back-prev-menu')) {
        let e = $(this).parent();
        let _pa = e.parents('.dropdown').first();

        $(this).parents('.dropdown-menu').first().removeClass('menu-mobile-open');

        _pa.removeClass('active');
        _pa.parent().removeClass('sub-open');
      }
    });

    jQuery(document).on('click','.ci-store-info',function(e){
      jQuery('.contactbar-info').toggleClass('active');
    });

    jQuery(document).on('click','.contactbar-info-close',function(e){
      jQuery('.contactbar-info').removeClass('active');
    });

  },
      
  megamenuWithTabs : function(){

    $(document)
    .on('mouseover','header li.mega-menu, header .menu-list li'  ,e=>$(e.currentTarget).addClass('mega-is-hover'))
    .on('mouseleave','header li.mega-menu, header .menu-list li' ,e=>(!$(e.currentTarget).hasClass('admin-editor--viewing') && $(e.currentTarget).removeClass('mega-is-hover')))

    .on('shopify:block:select', 'header li.mega-menu, header .menu-list li, header .mega-tab-item',   e=>{
      $(e.currentTarget).addClass('mega-is-hover admin-editor--viewing');

      if ($(e.currentTarget).closest('.vertical-menu').length) {
        $('.vertical-menu .head:not(.opened)').trigger('click');
      }

      if ($(e.currentTarget).closest('.dropdown-menu-tabs').length) {
        let _this = $(e.currentTarget);
        if (_this.attr('id') != undefined || _this.attr('data-id') != undefined) {
          let _id = _this.attr('id') || _this.attr('data-id');

          $('.title-item').removeClass('active');
          $('.tab-content-inner').removeClass('active');
          $('li[data-id="'+_id+'"]').addClass('active');
          $('.'+_id).addClass('active');
        }
      }
    })
    .on('shopify:block:deselect','header li.mega-menu, header .menu-list li', e=>{
      $(e.currentTarget).removeClass('mega-is-hover admin-editor--viewing');
      if ($(e.currentTarget).closest('.dropdown-menu-tabs').length) {
        $('.title-item, .tab-content-inner').removeClass('active');
        $('.title-item-1, .mm-tabs-1').addClass('active');
      }
    })

    jQuery(".tab-title .title-item").hover(function(e){
      $('.title-item').removeClass('active');
      $('.tab-content-inner').removeClass('active');

      var _class = $(this).attr('data-id');
      var idclass = "." + _class;
      var e = jQuery(this);

      e.addClass('active');
      $(idclass).addClass('active');
    });

    jQuery(".mega-menu").mouseleave(function(){
      $('.title-item, .tab-content-inner').removeClass('active');
      $('.title-item-1, .mm-tabs-1').addClass('active');
    });
  },

	fixNoScroll : function() { // Fixed persitent position of page when scroll disapear
		var windowW = jQuery(window).width();
		jQuery('#page-body, .header-content, #page-body .mobile-version').css("width", windowW + 'px');
	},

	fixReturnScroll : function() {
		jQuery('#page-body, .header-content,#page-body .mobile-version').attr('style', ''); 
	},

	fixButton : function(){
    jQuery(".product-wrapper .product-head").each(function(e){
      if($(this).children().hasClass('wrapper-countdown')){
        $(this).find('.product-button').addClass('fix');
      }
    });
  },

	handleReviews: function() {
      SPR.registerCallbacks(), SPR.initRatingHandler(), SPR.initDomEls(), SPR.loadProducts(), SPR.loadBadges();
  },
    
  menuOnMobile : function(){
      jQuery(document).on('click',function(e){
        //alert(e.target.className);
      });

      jQuery('.mobile-cart-action .btn').on('click',function (e) { // hanlde mobile cart total price on cart page
        $('.btn-checkout').trigger('click');
      })

      jQuery('.currency_icon_mobile').on('click',function () {
        jQuery(".menu-mobile").removeClass("opened");
        jQuery("html,body").removeClass("menu-opened");
      });

      jQuery('#body-content').on('click',function () {
        jQuery(".menu-mobile").removeClass("opened");
        jQuery("html,body").removeClass("menu-opened");
        jQuery(".dropdown").removeClass("menu-mobile-open");
        AT_Main.fixReturnScroll();
      });

      jQuery('.mm-block-icons .wishlist-target, .mm-block-icons .compare-target').on('click',function () {
        jQuery(".menu-mobile").removeClass("opened");
        jQuery("html,body").removeClass("menu-opened");
        AT_Main.fixReturnScroll();
      });

      jQuery(document).on('click','.responsive-menu',function(e){
        e.stopPropagation();
        AT_Main.fixNoScroll();
        jQuery(".menu-mobile").toggleClass("opened");
        jQuery("html,body").toggleClass("menu-opened")
      });

      jQuery(".navbar .menu-list li, .vertical-menu .main-nav li").hover(function(){jQuery(this).addClass("mega-is-hover")},function(){jQuery(this).removeClass("mega-is-hover")});

      jQuery(document).on('click','.sb-menu .expand',function(){
        var e=jQuery(this).parents(".dropdown").first();
        if (e.hasClass("s-open")) {
          e.removeClass("s-open");
        } else {
          e.addClass("s-open");
        }
      });

      jQuery(document).on('click','.currency_wrapper',function(){	
        if ($('.currencies-dropdown').hasClass("opened")) {
          $('.currencies-dropdown').removeClass("opened");
          $(this).removeClass("icon-opened");
        } else {
          $('.currencies-dropdown').addClass("opened");
          $(this).addClass("icon-opened");
        }
      });

      jQuery(document).on('click','.bc-toggle',function(){
        var e=jQuery(this);
        if (e.hasClass("opened")) {
          e.removeClass("opened");
        } else {
          e.addClass("opened");
        }
      });

      jQuery(document).on('click','.top-cart-holder.hover-dropdown .cart-target',function(){
        var e=jQuery(this);
        if (e.hasClass("opened")) {
          e.removeClass("opened");
        } else {
          e.addClass("opened");
        }
      });
    
      if($('#language-popup').attr('data-source') == '1'){
        let _cflag = $("#language-popup .currency_wrapper .currency_code i"); 
        let _cflag_option = $(".currency-selector__dropdown").children("option:selected").val();
        let _cflag_option_lowerCase = _cflag_option.toLowerCase();
        $(".currency_icon,.currency_icon_mobile").html('<i class="currency-flag currency-flag-' + _cflag_option_lowerCase + '"/></i>');
      }
      else if($('#language-popup').attr('data-source') == '2'){
        setTimeout(function(){
          var _cflag = $("#language-popup .currency_wrapper .currency_code i"); 
          $(".currency_icon,.currency_icon_mobile").html(_cflag);
        }, 1200);
      }
      else{
        $(".currency_icon,.currency_icon_mobile").html('<i class="demo-icon icon-globe"/></i>');
      }
    
	},
	
	handleMenuMultiLine : function() {
		var outItem = "";
		var down = false;
		var top = 0;

		jQuery(".navbar-collapse .main-nav > li").on("mousemove", function(e){
			var target = jQuery(e.currentTarget);

			if( down && outItem != "") {
				outItem.addClass("hold");
				setTimeout(function(){
					if(outItem != "")
					outItem.removeClass("hold");
					down = false;
					outItem = "";
				},500);

				if( (outItem[0] == target[0]) || (outItem.offset().top == target.offset().top) )
				{       
					outItem.removeClass("hold");
					down = false;
					outItem = "";
				}
			}
			else {
				outItem = "";
			}

		});

		jQuery(".navbar-collapse .main-nav >li").on("mouseout", function(e){

			var target = jQuery(e.currentTarget);

			if( e.pageY >= target.offset().top + 50 ) { //move down
				down = true;
			}

			if( target.hasClass("dropdown") ) { //target has child

				if(outItem == "")
					outItem = target;
			}

		});
	},
  
	lookbooks_initor : function(){ 
	 if( jQuery('.bc-lookbooks.lookbooks.margin-row').length > 0 ){
		  
			if( 'undefined' === typeof Isotope ){
				console.log(" Isotope has not defined yet! ");
				return;
			}

			jQuery('.bc-lookbooks.lookbooks.margin-row').isotope({
			  itemSelector: '.look-item',
			  layoutMode: 'fitRows'
			});
		}
      
		if( jQuery('.bc-lookbooks.lookbooks.look-slider').length > 0 ){
		  
			if( 'undefined' === typeof Swiper ){
				console.log(" Swiper has not defined yet! ");
				return;
			}
          
          	$('body').addClass('carousel-lookbook');

            var swiper_look = new Swiper('.lookbooks-wrapper.look-slider', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows : true
                },
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev', 
                pagination: '.swiper-pagination',
                paginationType: 'progress',
                slidesPerView: 'auto',
                paginationClickable: true,
                spaceBetween: 30
            });
		}      
	},
	
	fixTitle : function(){ // fix title a in filter
      jQuery(".rt a").attr("data-title", function() { return jQuery(this).attr("title"); });
      jQuery(".rt a").removeAttr("title");
      jQuery(".size-all").after(jQuery(".size-xxxl")).after(jQuery(".size-xxl")).after(jQuery(".size-xl")).after(jQuery(".size-l")).after(jQuery(".size-m")).after(jQuery(".size-s")).after(jQuery(".size-xs")).after(jQuery(".size-xxs")).after(jQuery(".size-xxxs"));
	},
  
	filterCatalogReplace : function(collectionUrl, filter_id){
      
		var value = collectionUrl.substring(collectionUrl.lastIndexOf('/') + 1);
		var val = value.substring(value.lastIndexOf('?')); 

		collectionUrl = collectionUrl.replace(value, '');

		value = value.replace(val, '');
		value = value.replace('#', '');

		var value_arr = value.split('+');

		var current_arr = [];
		jQuery('#'+filter_id+' li.active-filter').each( function() {
		  current_arr.push(jQuery(this).attr('data-handle'));
		});

		jQuery('#'+filter_id+' li.active-filter').find('a').attr('title', '');
		jQuery('#'+filter_id+' li').removeClass('active-filter');

		for(jQueryi = 0; jQueryi<current_arr.length; jQueryi++) {
		  value_arr = jQuery.grep(value_arr, function( n, i ) { return ( n !== current_arr[jQueryi]  ); });
		}

		var new_data = value_arr.join('+')

		var new_url = collectionUrl+new_data+val;

		if( typeof AT_Filter != 'undefined' && AT_Filter ){
			AT_Filter.updateURL = true;
            AT_Filter.requestPage(new_url);		
		}else{
			window.location = new_url;
		}
		
	},
  
	filterCatalog : function(){
      var currentTags = ''
      ,filters 	= jQuery('.advanced-filter');

      filters.each(function() {
          var el = jQuery(this)
          ,group = el.data('group');

          if ( el.hasClass('active-filter') ) { //Remove class hidden
            el.parents('.sb-filter').find('a.clear-filter').removeClass('hidden');
          } 
      });
      
      if($('body').hasClass('templateCollection') && $('#col-main .cata-product').length < 1 ){
        $('#col-main').append('<a href="javascript:history.go(-1)" style="text-decoration: underline;font-weight: bold;">Go Back</a>');
      }
      
      filters.on('click', function(e) {
        var el = $(this)
        ,group = el.data('group')
        ,url = el.find('a').attr('href')

        // Continue as normal if we're clicking on the active link
        if ( el.hasClass('active-filter') ) {
            return;
        }

        var _logic = jQuery(".page-cata").data('logic');

        if( _logic ){
            // Get active group link (unidentified if there isn't one)
            activeTag = $('.active-filter[data-group="'+ group +'"]');

            // If a tag from this group is already selected, remove it from the new tag's URL and continue
            if ( activeTag && activeTag.data('group') === group ) {
              e.preventDefault();
              activeHandle = activeTag.data('handle') + '+';

              // Create new URL without the currently active handle
              url = url.replace(activeHandle, '');

              window.location = url;
            }
        }

      });
      
      jQuery('.advanced-filters').each(function(index) {
          let _length = $(this).find('li');
          if((_length).length < 2){
            jQuery(this).parents('.sbw-filter').css('display', 'none');
            jQuery(this).parents('.filter-sidebar').css('display', 'none');
          }
      });
      
      jQuery('.sb-filter').on('click', '.clear-filter', function(n){ // Handle button clear

			var filter_id = jQuery(this).attr('id');
			filter_id = filter_id.replace('clear-', '');

			var collectionUrl = window.location.href;

			if(collectionUrl.match(/\?/)){
				var string = collectionUrl.substring(collectionUrl.lastIndexOf('?') - 1);

				if(string.match(/\//)){
					var str_replace = string.replace(/\//, '');
					collectionUrl = collectionUrl.replace(string, '');
					collectionUrl = collectionUrl+str_replace;
					AT_Main.filterCatalogReplace(collectionUrl, filter_id);
				}
				else{
					AT_Main.filterCatalogReplace(collectionUrl, filter_id);
				}
			}
			else{
				var value = collectionUrl.substring(collectionUrl.lastIndexOf('/') + 1);

				collectionUrl = collectionUrl.replace(value, '');  

				value = value.replace('#', '');

				var value_arr = value.split('+');

				var current_arr = [];
				jQuery('#'+filter_id+' li.active-filter').each( function() {
				  current_arr.push(jQuery(this).attr('data-handle'));
				});

				jQuery('#'+filter_id+' li.active-filter').find('a').attr('title', '');
				jQuery('#'+filter_id+' li').removeClass('active-filter');

				for(jQueryi = 0; jQueryi<current_arr.length; jQueryi++) {
				  value_arr = jQuery.grep(value_arr, function( n, i ) { return ( n !== current_arr[jQueryi]  ); });
				}

				var new_data = value_arr.join('+')

				var new_url = collectionUrl+new_data;

				if( typeof AT_Filter != 'undefined' && AT_Filter ){
					AT_Filter.updateURL = true;
		            AT_Filter.requestPage(new_url);		
				}else{
					window.location = new_url;
				}
			}

      });
  },
	
	swatch : function(){
    jQuery('.swatch :radio').change(function() {
      	var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
      	var optionValue = jQuery(this).val();
      	jQuery(this)
      	.closest('form')
      	.find('.single-option-selector')
      	.eq(optionIndex)
      	.val(optionValue)
      	.trigger('change');
    });
  },
      
  listCollections: function() { // hanlde sub collections in list collections section
    jQuery('.list-collection-section .sub-collections').each(function() {
      if($(this).length){
        let _parent = $(this).closest('.item');
        _parent.addClass('sub-collections-true');
      }
    })
  },
      
  slickProductPage: function(){
    jQuery('.slider-for-03').length && jQuery('.slider-for-03').slick({
      slidesToShow: 1
      ,slidesToScroll: 1
      ,rtl: jQuery('body').data('rtl')
      ,arrows: true
      ,fade: true
      ,asNavFor: '.slider-thumbs-03'
      ,nextArrow: $('.slick-btn-03 .btn-next')
      ,prevArrow: $('.slick-btn-03 .btn-prev')
    });

    jQuery('.slider-thumbs-03').length && jQuery('.slider-thumbs-03').slick({
      infinite: false
      ,slidesToShow: 4
      ,slidesToScroll: 1
      ,rtl: jQuery('body').data('rtl')
      ,asNavFor: '.slider-for-03'
      ,dots: false
      ,arrows: false
      ,focusOnSelect: true
    });  
  },
  
	scrollToReview : function(){ // scroll to review form on product page
    $('.rating-links a').click(function() {
      $('.product-simple-tab ul li a').removeClass('active');
      $('#tab_review_tabbed a').addClass('active');
      $('.product-simple-tab .tab-content .tab-pane').removeClass('show active');
      $('#tab-review').addClass('show active');
      $('#tab_review_tabbed').scrollToMe();
      return false;
    });
  },

  footerMenuMobile : function(){ // Handle footer menu on mobile
    jQuery(document).on('click','.footer-menu h6',function(){
      $(this).closest('.footer-menu').toggleClass('active');
    });
  },
      
  deadLine_time : function(){
    var _deadline_time = parseInt($('.shipping-time').attr('data-deadline'));
    var _currentDate = new Date();

    var _dueDate = new Date( _currentDate.getFullYear(), _currentDate.getMonth(), _currentDate.getDate());
    _dueDate.setHours(_deadline_time); 

    switch(_currentDate.getDay()) {
      case 0: // Sunday
        _dueDate.setDate(_dueDate.getDate() + 1);
        break;

      case 5: // Friday
        if(_currentDate >= _dueDate){
          _dueDate.setDate(_dueDate.getDate() + 3);          }
        break;

      case 6: // Saturday
        _dueDate.setDate(_dueDate.getDate() + 2);
        break;

      default:
        if(_currentDate >= _dueDate){
          _dueDate.setDate(_dueDate.getDate() + 1);
        }
    }

    $('.countdown_deadline').countdown({until: _dueDate, format: 'HMS', padZeroes: true});
  },

	delivery_time : function(){
    var today = new Date();
    var business_days = parseInt($('.shipping-time').attr('data-deliverytime'));
    var deliveryDate = today; //will be incremented by the for loop
    var total_days = business_days; //will be used by the for loop

    for(var days=1; days <= total_days; days++) {
      deliveryDate = new Date(today.getTime() + (days *24*60*60*1000));
      if(deliveryDate.getDay() == 0 || deliveryDate.getDay() == 6) {
        //it's a weekend day so we increase the total_days of 1
        total_days++
      }
    } 
    
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var _day = weekday[deliveryDate.getDay()];
    
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March ";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var _month = month[deliveryDate.getMonth()];
    
    $('.delivery-time').html('Want it delivered by' + '&nbsp;' + '<strong>' + _day + ',' + '&nbsp;' + deliveryDate.getDate() + '&nbsp;' + _month + ' ?' + '</strong>');
  },    
  
	scareWidth : function(){
      var _name_width = 110;
      jQuery('.variants-wrapper .selector-wrapper').find('label').each(function( index,value ){
        _name_width = jQuery(value).width() > _name_width ? jQuery(value).outerWidth() : _name_width;
      });
      jQuery('.variants-wrapper .selector-wrapper').find('label').css('width',_name_width);
    	jQuery('.swatch.size').find('.header').css('width',_name_width);
    	jQuery('.swatch.color, .swatch.colour').find('.header').css('width',_name_width);
    	jQuery('.product-qty, .quantity').find('label').css('width',_name_width);
  },   
    
  termsConditions : function(){ // handle check box terms & conditions on cart page
      jQuery('body').on('click', '[name="checkout"], [name="goto_pp"], [name="goto_gc"]', function() {

        if ($('.agree-terms-condition').is(':checked')) {
          $(this).submit();
        }
        else {
          alert("You must AGREE with Terms and Conditions.");
          return false;
        }
      });
  },

	init : function(){
      
  	if( typeof _bc_config == 'undefined' ){
       	 console.log( " _bc_config is undefined " );
       	 return ;
    }
  
  	this.handlePreviewPanel();
    this.stickMenu();
    this.toTopButton();
    this.newsletterPopup();
  	this.newsletterCoupon();
    this.smartSearch();
  	this.toggleVerticalMenu();
  	this.toggleCartSidebar();
  	this.toggleFilterSidebar();
  	this.handleGridList();
  	this.effectNavigation();
  	this.menuOnMobileNew();
  	this.megamenuWithTabs();
    this.fixButton();
		this.menuOnMobile();
		this.handleMenuMultiLine();
		this.fixTitle();
		this.filterCatalog();
    this.listCollections();
    this.swatch();
  	this.slickProductPage();
    this.footerMenuMobile();
	}
}
  
var AT_Slider ={
  
    owlSlider : function(){
      
      jQuery(".menu-proudct-carousel").length && jQuery(".menu-proudct-carousel").owlCarousel( {
        loop 		: false,
        nav		: true,
        dots 		: false,
        items		: 1,
        rtl		: jQuery('body').data('rtl'),
        navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
      });
    
    	jQuery(".slideshow-tabs-list").length && jQuery('.slideshow-tabs-list').owlCarousel({
          nav			: true,
        	dots 		: false,
           items		: 7,
        	rtl			: jQuery('body').data('rtl'),
        	margin		: 10,
          responsive	: {
              0:{
              	items: 1
              }
            	,480:{
            		items: 2
          	}
            	,768:{
            		items: 3
          	}
          	,992:{
            		items: 4
          	}
          	,1024:{
            		items: 5
          	}
            	,1100:{
            		items: 6
          	}
            	,1200:{
            		items: 7
          	}
        	},	
        	navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
      });
    
    	jQuery(".policy-list").length && jQuery('.policy-list').owlCarousel({
          nav			: false,
        	dots 		: false,
          mouseDrag	: false,
          items		: 5,
        	rtl		: jQuery('body').data('rtl'),
          responsive : {
              0:{
              	items: 1
              }
            	,480:{
            		items: 2
          	}
            	,768:{
            		items: 3
          	}
          	,992:{
            		items: 4
          	}
          	,1024:{
            		items: 5
          	}
        	}	
      });
    
    	jQuery(".image-carousel").length && jQuery('.image-carousel').owlCarousel({
        	nav		: true,
        	dots 	: false,
        	items	: 1,
        	rtl		: jQuery('body').data('rtl'),
        	navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
      });
    
    	jQuery(".catalog-list").length && jQuery('.catalog-list').owlCarousel({
        	nav			: true,
        	dots 		: false,
        	items		: 3,
        	rtl		: jQuery('body').data('rtl'),
        	margin		: 30,
          responsive : {
            	0:{
              	items: 1
              }
          	,480:{
            		items: 2
          	}
              ,992:{
            		items: 3
                	,nav	: false
          	}
        	},
        	navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
      });   	
    
    	jQuery(".gallery-image-thumb").length && jQuery('.gallery-image-thumb').owlCarousel({
          nav			: true,
        	dots 		: false,
        	items		: 4,
        	rtl			: jQuery('body').data('rtl'),
        	margin		: 20,
        	mouseDrag	: false,
          responsive	: {
              0:{
              	items: 2
              }
            	,480:{
              	items: 3
              }
            	,768:{
              	items: 4
              }
        	},
          navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
		
      });
    
    	jQuery(".type-testimonial .testimonial").length && jQuery('.type-testimonial .testimonial').owlCarousel({
          nav		: true,
        	dots 	: false,
          items	: 1,
        	rtl		: jQuery('body').data('rtl'),
          navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
		
      });
    
    	jQuery(".sb-product-list").length && jQuery('.sb-product-list').owlCarousel({
          nav		: true,
        	dots 	: false,
        	items	: 1,
        	rtl		: jQuery('body').data('rtl'),
        	navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
      });
    
    	jQuery(".sb-product-grid").length && jQuery('.sb-product-grid').owlCarousel({
          nav		: true,
        	dots 	: false,
        	items	: 1,
        	rtl		: jQuery('body').data('rtl'),
        	navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
      });
    
    	jQuery(".sb-blog-grid").length && jQuery('.sb-blog-grid').owlCarousel({
          nav		: true,
        	dots 	: false,
        	items	: 1,
        	rtl		: jQuery('body').data('rtl'),
        	navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
      });
    }
  
  	,init : function(){
      this.owlSlider();
    }
}

var AT_AddCart = {
  
  addCartAction : function(){
    var _disable_ajax_cart = jQuery('.boxed-wrapper').data('ajax-cart');

    if(_disable_ajax_cart){
      $(document).on('click', '.add-to-cart', function(e) {
        var form = $(this).parents('form');
        form.submit();
      });  
    }
    else{
      $("body").on( 'click','.add-to-cart', AT_AddCart.addToCart );
    }
  }

  ,addCart : function(){
    AT_Main.fixNoScroll();
    $('.cart-sb').toggleClass('opened');
    $('html,body').toggleClass('cart-opened');
  }

  ,notifyAddCartFail : function($i){
    $('.new-loading').removeClass('loading');
    $('.boxed-wrapper').append($i);
    $.fancybox.open({
      src  : '#cart--error',
      type : 'inline',
      afterClose : function( instance, current ) {
        $('#cart--error').remove();
      }
    })
  }

	,addToCart : function(e){  // Ajax Add To Cart
    if (typeof e !== 'undefined') e.preventDefault();

    var $this = $(this);

    $this.addClass('disabled');

    var form = $this.parents('form');

    // Hide Modal
    $('.modal').modal('hide');

    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      async: true,
      data: form.serialize(),
      dataType: 'json',
      error: AT_AddCart.addToCartFail,
      success: AT_AddCart.addToCartSuccess,
      cache: false
    });

  }

  ,addToCartSuccess : function(jqXHR, textStatus, errorThrown){
    var _cart_style = jQuery('.boxed-wrapper').data('cart-style'),
        _redirect_checkout = jQuery('.boxed-wrapper').data('redirect');
    
    $('.add-to-cart').removeClass('disabled');

    $.ajax({
      type: 'GET',
      url: '/cart.js',
      async: false,
      cache: false,
      dataType: 'json',
      success: updateCartDesc
    });

    if(_cart_style == 'dropdown'){
      $('#layer-addcart-modal').show();

      var price = jqXHR['price'];
      var qty = jqXHR['quantity'];
      var total = price * qty;
      var addcart_modal_image = '<img src="'+ Shopify.resizeImage(jqXHR['image'], 'small') +'" alt="'+ jqXHR['title'] +'"/>';
      var addcart_modal_name = jqXHR['product_title'];
      var addcart_modal_variant = ""; if(jqXHR['variant_title'] != null) addcart_modal_variant = 'Variant: '+jqXHR['variant_title'];
      var addcart_modal_qty = '<strong>Quantity:</strong>'+jqXHR['quantity'];
      var addcart_modal_price = '<strong>Cart Total:</strong>'+Shopify.formatMoney(total, _bc_config.money_format);
      var addcart_modal_numpro = ""; if ($(".basket .number .n-item").html() == 1) addcart_modal_numpro = "There is 1 item in your cart."; else addcart_modal_numpro = "There are "+$(".basket .number .n-item").html()+" items in your cart.";

      //add data

      $('.addcart-modal-image').html(addcart_modal_image);
      $('.addcart-modal-title').html(addcart_modal_name);
      $('.addcart-modal-price').html(addcart_modal_price);
      $('.addcart-modal-variant').html(addcart_modal_variant); 
      $('.addcart-modal-qty').html(addcart_modal_qty);
      $('.addcart-modal-number').html(addcart_modal_numpro);
      $('.addcart-modal-box').show();
    }

    else{
      AT_AddCart.addCart();
    }

    // Get the cart show in the cart box.
    Shopify.getCart(function(cart) {
      Shopify.updateCartInfo(cart, '#cart-info #cart-content');		
    });

    if(_redirect_checkout){
      setTimeout(function(){
        window.location.href = "/checkout";
      }, 1200);
    }
  }

  ,addToCartFail : function (jqXHR, textStatus, errorThrown){
    $('.add-to-cart').removeClass('disabled');

    var response = $.parseJSON(jqXHR.responseText);
    var $i = '<div class="error">'+ response.description +'</div>';
    AT_AddCart.notifyAddCartFail($i);
  }

	,addcartModalHide : function(){
    jQuery("#layer-addcart-modal").addClass("zoomOut animated").fadeOut();
    jQuery("#layer-addcart-modal").removeClass("zoomOut animated");
  }

  ,init : function(){
    this.addCartAction();
  }
}

jQuery.fn.extend({
  scrollToMe: function() {
    if (jQuery(this).length) {
      var top = jQuery(this).offset().top - 200;
      jQuery('html,body').animate({
        scrollTop: top
      }, 500);
    }
  },
});;

/* Handle when window resize */
jQuery(window).resize(function() {
  
  /* Reset sticky menu */
  AT_Main.stickMenu();

	/* Reset Page when fixNoScroll had called before */
	AT_Main.fixReturnScroll();
  
	if(AT_Main.getWidthBrowser() > 992 && jQuery('.menu-mobile').hasClass('opened'))
    jQuery("#body-content").trigger('click');
          
});
 
jQuery(document).ready(function($) {
  var i_sections = new theme.Sections();
  
  $('.currency-selector select').on('change', function() {
    $(this).parents('form').submit();
  });
  
  jQuery('.style-accordion').on('click', '.sb-filter', function(n){ // Handle accordion in sidebar filter
    $(this).toggleClass('accordion-active');
    $(this).find('.advanced-filters').slideToggle('slow');
  });
  
  AT_Slider.init();
  AT_Main.init();
  AT_AddCart.init();
  
  i_sections.register('reload_section' ,AT_Main.reload_sections);  
  i_sections.register('reload_insta'   ,AT_Main.init_insta);
  
  i_sections.register('reload_newsletter' ,function(){
    $('#newsletter-popup').closest('.shopify-section').on('shopify:section:select'   ,function(){
      $('.fancybox-container.fancybox-is-open').remove();
      
      !$('.fancybox-container').length && $.fancybox.open({
        src  : '#newsletter-popup'
        ,type : 'inline'
        ,autoDimensions: false
        ,width    : 'auto'
        ,height   : 'auto'
        ,closeBtn    : false
      })
    })
    .on('shopify:section:deselect' ,function(){
      
    });

    $("#newsletter-popup .block-coupon").on('shopify:block:deselect', function(){
      jQuery('.text-box-image').show();
      jQuery('.subscribe-result').hide();
      let _image = jQuery('#newsletter-popup .newsletter-popup-content').data('image');
      jQuery('.newsletter-popup-content').addClass('block-image-'+_image).removeClass('block-image-false');
    })
    .on('shopify:block:select', function(){
      jQuery('.text-box-image').hide();
      jQuery('.subscribe-result').show();
      jQuery('.newsletter-popup-content').removeClass('block-image-true').addClass('block-image-false');
    });
  });
  
});