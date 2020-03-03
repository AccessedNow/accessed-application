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
	}
  
    ,handlePreviewPanel : function(){ // Handle preview panel - only for demo site
        jQuery(document).on('click','.pp-toggle',function(){
          var e=jQuery('#shopify-section-preview-panel');
          if (e.hasClass("opened")) {
            e.removeClass("opened");
          } else {
            e.addClass("opened");
          }
        }); 

    }
  
	,homeSlideshow : function(){
        if(jQuery('.slideshow-01 .home-slideshow-wrapper').length){
            jQuery('.slideshow-01 .home-slideshow-wrapper').each(function(index,value){
              
                var _delay_time = '';
                if(jQuery(value).data('autoplay')){
                	_delay_time = jQuery(value).data('time');
                }
              
                var swiper = new Swiper('.swiper-container-01', {
                  	autoplay: _delay_time
                  	,loop: true
                    ,pagination: '.swiper-pagination-01'
                    ,paginationClickable: '.swiper-pagination-01'
                    ,nextButton: '.swiper-button-next-01'
                    ,prevButton: '.swiper-button-prev-01'
                    ,spaceBetween: 0
                    ,scrollbarDraggable: true
                    ,effect: jQuery(value).data('animation')
                  	,setWrapperSize: false
                    ,onImagesReady: function(swiper){
                    	var slideH = $(swiper.container[0]).find('.swiper-slide > img').height(),
                      		slideW = $(swiper.container[0]).find('.swiper-slide > img').width();
                      	$(swiper.container[0]).find('.swiper-slide > img').css('visibility','hidden');
                      	$(swiper.container[0]).find('.swiper-slide').each(function(){
                          var _this = $(this);
                          _this.find('.video-slide').show();                         
                          
                        });
                    }
                });
            });
        }
    }

  	,homeSlideshow02 : function(){
        if(jQuery('.slideshow-02 .home-slideshow-wrapper').length){
            jQuery('.slideshow-02 .home-slideshow-wrapper').each(function(index,value){
              
                var _delay_time = '';
                if(jQuery(value).data('autoplay')){
                	_delay_time = jQuery(value).data('time');
                }
              
                var swiper = new Swiper('.swiper-container-02', {
                  	autoplay: _delay_time
                  	,loop: true
                    ,pagination: '.swiper-pagination-02'
                    ,paginationClickable: '.swiper-pagination-02'
                    ,nextButton: '.swiper-button-next-02'
                    ,prevButton: '.swiper-button-prev-02'
                    ,spaceBetween: 0
                    ,scrollbarDraggable: true
                    ,effect: jQuery(value).data('animation')
                  	,setWrapperSize: false
                    ,onImagesReady: function(swiper){
                    	var slideH = $(swiper.container[0]).find('.swiper-slide > img').height(),
                      		slideW = $(swiper.container[0]).find('.swiper-slide > img').width();
                      	$(swiper.container[0]).find('.swiper-slide > img').css('visibility','hidden');
                    }
                });
            });
        }
    }
  
  	,homeIE : function(){
        if(jQuery('.slideshow-01 .home-slideshow-wrapper').length){
            jQuery('.slideshow-01 .home-slideshow-wrapper').each(function(index,value){
              
                var _delay_time = '';
                if(jQuery(value).data('autoplay')){
                  _delay_time = jQuery(value).data('time');
                }
              
                var swiper = new Swiper('.swiper-container-01', {
                    autoplay: _delay_time
                  	,loop: true
                  	,pagination: '.swiper-pagination-01'
                    ,paginationClickable: '.swiper-pagination-01'
                    ,nextButton: '.swiper-button-next-01'
                    ,prevButton: '.swiper-button-prev-01'
                    ,spaceBetween: 0
                    ,scrollbarDraggable: true
                    ,effect: 'fade'
                  	,setWrapperSize: true
                    ,onImagesReady: function(swiper){
                    	var slideH = $(swiper.container[0]).find('.swiper-slide > img').height(),
                      		slideW = $(swiper.container[0]).find('.swiper-slide > img').width();
                      	$(swiper.container[0]).find('.swiper-slide > img').css('visibility','hidden');
                      	$(swiper.container[0]).find('.swiper-slide').each(function(){
                          var _this = $(this);
                          _this.find('.video-slide').show();
                          
                        });
                    }
                });
            });
        }
    }
	
	,stickMenu : function() {
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
  
  	,stickAddToCart : function() {
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
	}
	
	,toTopButton : function(){
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
	}

	,mailchipPopup : function(){
		var expire = jQuery("#mailchimp-popup").data('expires');
		if (jQuery.cookie('mycookie')) {
			//it hasn't been one days yet
		}
		else {
         
          var _style = jQuery("#mailchimp-popup").data('style');
          
            if(_style == 'delay'){
              setTimeout(function(){
                $.fancybox.open({
                  src  : '#mailchimp-popup'
                  ,type : 'inline'
                  ,autoDimensions: false
                  ,width		: 760
                  ,height		: 390  
                })
              }, 4000);
            }

            else if(_style == 'leaves'){
              var _dis = ouibounce(document.getElementById('mailchimp-popup'), {
                aggressive: true,
                timer: 0
              });
              
              $('.intent-exit-btn > a').on('click', function() {
                $('#mailchimp-popup').hide();
              });

            }

		}
		jQuery.cookie('mycookie', 'true', { expires: expire });
	}
      
    ,toggleVerticalMenu : function(){
        jQuery(document).on('click', '.vertical-menu .head', function(e) {
          jQuery(this).toggleClass('opened');
          jQuery('.vertical-navbar').toggleClass('opened');
        });
	}
  
  	,toggleCartSidebar : function(){
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
	}

  	,toggleFilterSidebar : function(){
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
      
      	jQuery('.filter-icon-order').on('click',function (e) {
			e.stopPropagation();
			AT_Main.fixNoScroll();
			jQuery('body').toggleClass('order-sidebar-opened');
		});

      	jQuery('.fof-close').on('click',function () {
			jQuery('html,body').removeClass('order-sidebar-opened');
			AT_Main.fixReturnScroll();
		});
	}
      
    ,handleGridList : function(){
      
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
    }
  
    ,handleOrderFormQty : function(){
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
    }
  
  	,effectNavigation : function(){ // Make hover effect of navigation
      
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
      
      	jQuery(document).on('click','.searchbox>a',function(e){
            $(this).parents().find('.searchbox').toggleClass('open');
  		});
      
        jQuery('#city-phone-numbers').on("change", function(e) {
          var _newcity = jQuery(e.currentTarget).find(':selected').attr('value');
          $('#city-phone-number-label').html(_newcity);
        });
      
	}
      
    ,menuOnMobileNew : function(){ // handle new menu on mobile

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
          $(this).parents('.dropdown-menu').first().removeClass('menu-mobile-open')
        }
      });
      
    }
      
    ,megamenuWithTabs : function(){
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
        $('.title-item').removeClass('active');$('.title-item-1').addClass('active');
        $('.tab-content-inner').removeClass('active');$('.mm-tabs-1').addClass('active')
      });
    }

	,fixNoScroll : function() { // Fixed persitent position of page when scroll disapear
		var windowW = jQuery(window).width();
		jQuery('#page-body, .header-content, #page-body .mobile-version').css("width", windowW + 'px');
	}

	,fixReturnScroll : function() {
		jQuery('#page-body, .header-content,#page-body .mobile-version').attr('style', ''); 
	}

  	,fixButton : function(){
      	jQuery(".product-wrapper .product-head").each(function(e){
            if($(this).children().hasClass('wrapper-countdown')){
              	$(this).find('.product-button').addClass('fix');
            }
  		});
    }
  
  	,handleReviews: function() {
        SPR.registerCallbacks(), SPR.initRatingHandler(), SPR.initDomEls(), SPR.loadProducts(), SPR.loadBadges();
    }
    
	,menuOnMobile : function(){
        jQuery(document).on('click',function(e){
          //alert(e.target.className);
        });
        
		jQuery('#body-content').on('click',function () {
			jQuery(".menu-mobile").removeClass("opened");
			jQuery("html,body").removeClass("menu-opened");
            jQuery(".dropdown").removeClass("menu-mobile-open");
			AT_Main.fixReturnScroll();
		});
      
      	jQuery('.mm-block-icons .wishlist-target, .mm-block-icons .compare-target, .m-close').on('click',function () {
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

		jQuery(".navbar .menu-list li").hover(function(){jQuery(this).addClass("hover")},function(){jQuery(this).removeClass("hover")});
      
      	jQuery(document).on('click','.sb-menu .expand',function(){
			var e=jQuery(this).parents(".dropdown").first();
            if (e.hasClass("s-open")) {
                e.removeClass("s-open");
            } else {
                e.addClass("s-open");
            }
		})
      
      	jQuery(document).on('click','.currency_wrapper',function(){	
            if ($('.currency-block').hasClass("opened")) {
                $('.currency-block').removeClass("opened");
            } else {
                $('.currency-block').addClass("opened");
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

	}
	
	,handleMenuMultiLine : function() {
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
	}
  
  	,lookbooks_initor : function(){ 
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
	}
	
	,fixTitle : function(){ // fix title a in filter
		jQuery(".rt a").attr("data-title", function() { return jQuery(this).attr("title"); });
		jQuery(".rt a").removeAttr("title");
        jQuery(".size-all").after(jQuery(".size-xxxl")).after(jQuery(".size-xxl")).after(jQuery(".size-xl")).after(jQuery(".size-l")).after(jQuery(".size-m")).after(jQuery(".size-s")).after(jQuery(".size-xs")).after(jQuery(".size-xxs")).after(jQuery(".size-xxxs"));
	}

	,filterCatalogReplace : function(collectionUrl, filter_id){
      
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
		
	}
  
	,filterCatalog : function(){
		var currentTags = ''
			,filters 	= jQuery('.advanced-filter');

		filters.each(function() {
			var el = jQuery(this)
				,group = el.data('group');

			if ( el.hasClass('active-filter') ) { //Remove class hidden
				el.parents('.sb-filter').find('a.clear-filter').removeClass('hidden');
			}
		});
      
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

      jQuery('.style-accordion').on('click', '.sb-filter', function(n){ // Handle accordion in sidebar filter
        $(this).toggleClass('accordion-active');
        $(this).find('.advanced-filters').slideToggle('slow');
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
    }
	
	,swatch : function(){
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
  	}
  
  	,switchImgProduct: function() {
    	$('.product-wrapper .swatch-element > input').on('change', function(e){
          	e.stopPropagation();
          	var imgUrl = $(this).data("swatch-image"),
                parent = $(this).parents('.product-wrapper'),
                imgElem = parent.find('.product-image img.featured-image');
          	imgElem.parents('.product-image').addClass('img-loading');
          	imgElem.attr('src', imgUrl)
          	var fakeImg = new Image();
          	fakeImg.src = imgUrl;
            fakeImg.onload = function(event){
                imgElem.parents('.product-image').removeClass('img-loading');
            };
            fakeImg.onerror = function() {
                //Code for error loading
            };
        });
    }
      
    ,slickProductPage: function(){

        jQuery('.slider-for-03').length && jQuery('.slider-for-03').slick({
          slidesToShow: 1
          ,slidesToScroll: 1
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
          ,asNavFor: '.slider-for-03'
          ,dots: false
          ,arrows: false
          ,focusOnSelect: true
        });  
    }
      
    ,deadLine_time : function(){
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
    }
  
  	,delivery_time : function(){
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
      weekday[4] = "Thurday";
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
      
      $('.delivery-time').html('Want it delivered by' + '&nbsp;' + '<strong>' + _day + ',' + '&nbsp;' + deliveryDate.getDate() + '&nbsp;' + _month + '?' + '</strong>');
    }
  
  	,scareName : function(){
        var _name_height = 0;
        jQuery('.cata-product .product-wrapper, .product-slider-section .row .product-wrapper').find('h5.product-name').each(function( index,value ){
          _name_height = jQuery(value).height() > _name_height ? jQuery(value).height() : _name_height;
        });
        jQuery('.cata-product .product-wrapper, .product-slider-section .row .product-wrapper').find('h5.product-name').css('height',_name_height);
    }        
  
  	,scareWidth : function(){
        var _name_width = 110;
        jQuery('.variants-wrapper .selector-wrapper').find('label').each(function( index,value ){
          _name_width = jQuery(value).width() > _name_width ? jQuery(value).outerWidth() : _name_width;
        });
        jQuery('.variants-wrapper .selector-wrapper').find('label').css('width',_name_width);
      	jQuery('.swatch.size').find('.header').css('width',_name_width);
      	jQuery('.swatch.color, .swatch.colour').find('.header').css('width',_name_width);
      	jQuery('.product-qty, .quantity').find('label').css('width',_name_width);
    }       
  
    ,scareScreen : function(){
      	if( typeof _bc_config == "undefined" ){
          	return;
      	}
      	var _current = this;
      
      	if( _bc_config.enable_title_blance == "true" ){
          	this.scareName();
      	}      
      	
      	jQuery( document ).ajaxComplete(function( event,request, settings ) {
          if( _bc_config.enable_title_blance == "true" ){
              _current.scareName();
          }  
        });  
    }
      
    ,termsConditions : function(){ // handle check box terms & conditions on cart page
        jQuery('body').on('click', '[name="checkout"], [name="goto_pp"], [name="goto_gc"]', function() {

          if ($('#agree').is(':checked')) {
            $(this).submit();
          }
          else {
            alert("You must AGREE with Terms and Conditions.");
            return false;
          }
        });
    }

	,init : function(){
      
      	if( typeof _bc_config == 'undefined' ){
           	 console.log( " _bc_config is undefined " );
           	 return ;
        }
      
      	this.handlePreviewPanel();
        this.stickMenu();
		this.toTopButton();
		this.mailchipPopup();
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
        this.swatch();
      	this.switchImgProduct();
      	this.slickProductPage();
        this.termsConditions();
	}
}


/* Handle when window resize */
jQuery(window).resize(function() {
  
  	/* Reset sticky menu */
  	AT_Main.stickMenu();
    
    /* Fakecrop */
    if(AT_Main.getWidthBrowser() < 768){
        AT_Main.scareScreen();
    }

	/*Reset Page when fixNoScroll had called before*/
	AT_Main.fixReturnScroll();
	if(AT_Main.getWidthBrowser() > 992 && jQuery('.menu-mobile').hasClass('opened'))
		jQuery("#body-content").trigger('click');
          
});
      
jQuery(document).ready(function($) {
	
	AT_Main.init();
  
  	/* Fakecrop */
    if(AT_Main.getWidthBrowser() < 768){
        AT_Main.scareScreen();
    }
  
});

                        
