var AT_Slider ={
  
    owlSlider : function(){
      
        jQuery(".menu-proudct-carousel").length&&jQuery(".menu-proudct-carousel").owlCarousel( {
          loop 		: false
          ,nav		: true
          ,dots 		: false
          ,items		: 1
          ,navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
        });
      
      	jQuery(".slideshow-tabs-list").length && jQuery('.slideshow-tabs-list').owlCarousel({
            nav			: true
          	,dots 		: false
      		,items		: 7
          	,margin		: 10
			,responsive : {
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
          	}	
          	,navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
        });
      
      	jQuery(".policy-list").length && jQuery('.policy-list').owlCarousel({
            nav			: false
          	,dots 		: false
      		,items		: 5
			,responsive : {
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
          	nav			: true
          	,dots 		: false
          	,items		: 1
          	,navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
        });
      
      	jQuery(".catalog-list").length && jQuery('.catalog-list').owlCarousel({
          	nav			: true
          	,dots 		: false
          	,items		: 3
          	,margin		: 30
			,responsive : {
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
          	}
          	,navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
        });   	
      
      	jQuery(".gallery-image-thumb").length && jQuery('.gallery-image-thumb').owlCarousel({
            nav			: true
          	,dots 		: false
          	,margin		: 20
          	,mouseDrag	: false
			,responsive : {
                0:{
                	items: 2
                }
              	,480:{
                	items: 3
                }
              	,768:{
                	items: 4
                }
          	}
			,navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
			
        });
      
      	jQuery(".bottom-partner-list").length && jQuery('.bottom-partner-list').owlCarousel({
            nav			: true
          	,dots 		: false
          	,margin		: 30
			,responsive : {
                0:{
                	items: 2
                }
              	,480:{
                	items: 3
                }
              	,768:{
                	items: 4
                }
              	,992:{
                	items: 5
                }
          	}
			,navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
			
        });
      
      	jQuery(".type-testimonial .testimonial").length && jQuery('.type-testimonial .testimonial').owlCarousel({
            nav			: true
          	,dots 		: false
			,items		: 1 
			,navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
			
        });
      
      	jQuery(".sb-product-list").length && jQuery('.sb-product-list').owlCarousel({
            nav			: true
          	,dots 		: false
          	,items		: 1
          	,navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
        });
      
      	jQuery(".sb-product-grid").length && jQuery('.sb-product-grid').owlCarousel({
            nav			: true
          	,dots 		: false
          	,items		: 1
          	,navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
        });
      
      	jQuery(".sb-blog-grid").length && jQuery('.sb-blog-grid').owlCarousel({
            nav			: true
          	,dots 		: false
          	,items		: 1
          	,navText	: ['<span class="button-prev"></span>', '<span class="button-next"></span>']
        });

	}
  
  	,init : function(){
      this.owlSlider();
    }
  
}

/* Check IE */
var bcMsieVersion = {

  MsieVersion: function() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    else                 // If another browser, return 0
      {
      return 0;
    }
  }

  ,init : function(){
    this.MsieVersion();
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

function addCart(){
  AT_Main.fixNoScroll();
  $('.cart-sb').toggleClass('opened');
  $('html,body').toggleClass('cart-opened');
}

function notifyAddCartFail($i){
  $.jGrowl($i,{
    life: 3000,
    position:'center'
  });	
}

/* Ajax Add To Cart */

function addToCart(e){
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
    error: addToCartFail,
    success: addToCartSuccess,
    cache: false
  });
  
}

function addToCartSuccess (jqXHR, textStatus, errorThrown){
  $('.add-to-cart').removeClass('disabled');

  $.ajax({
    type: 'GET',
    url: '/cart.js',
    async: false,
    cache: false,
    dataType: 'json',
    success: updateCartDesc
  });
  
  
    addCart();
  
  

  // Get the cart show in the cart box.
  Shopify.getCart(function(cart) {
    Shopify.updateCartInfo(cart, '#cart-info #cart-content');		
  });
  
  
}

function addToCartFail(jqXHR, textStatus, errorThrown){
  var response = $.parseJSON(jqXHR.responseText);

  var $i = '<div class="error">'+ response.description +'</div>';
  notifyAddCartFail($i);
  $this.removeClass('disabled');
}

function addcartModalHide(){
  $("#layer-addcart-modal").addClass("zoomOut animated").fadeOut();
  $("#layer-addcart-modal").removeClass("zoomOut animated");
}

jQuery(document).ready(function($) {
  
  AT_Slider.init();
  
  
    $("body").on( 'click','.add-to-cart', addToCart );
  
  
})