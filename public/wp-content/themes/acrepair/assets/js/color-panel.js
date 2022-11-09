jQuery(document).ready(function($) {
	
	var primary_color = '4245BE';
	var second_color = 'FF7300';
	//Function to convert rgb format to a hex color
	function rgb2hex(rgb){
	 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
	 return (rgb && rgb.length === 4) ? "#" +
	  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
	  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
	  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
	}
	
	$('.color-palate .palate').click(function(){

	var thiscolor = $(this).css('background-color');
	var thatcolor = $(this).css('color');
	
	primary_color = rgb2hex(thiscolor);
	primary_color = primary_color.replace("#", "");
	
	second_color = rgb2hex(thatcolor);
	second_color = second_color.replace("#", "");
	
    var linkcss = 'https://wp1.efforttech.com/newwp/acrepair/wp-content/themes/acrepair/';

    $('link[rel*=jquery]').remove();

    $('head').append('<link rel="stylesheet jquery" href="'+linkcss+'assets/css/color.php?main_color='+primary_color+'&second_color='+second_color+'" type="text/css" />');

    return false;

  });

  

  if ($.cookie('boxed') == "yes") {

            $("body").addClass("boxed");

        }



  if ($.cookie('boxed') == "no") {

    $("body").removeClass("boxed");

  }

});



jQuery(document).ready(function($) {

	"use strict";

    $('.color-trigger').on('click', function () {
        $(this).parent().toggleClass('visible-palate');
    });
	
	$('.color-palate .colors-list .palate').on('click', function() {
		var newThemeColor = $(this).attr('data-theme-file');
		var targetCSSFile = $('link[id="theme-color-file"]');
	   $(targetCSSFile).attr('href',newThemeColor);
	   $('.color-palate .colors-list .palate').removeClass('active');
        $(this).addClass('active');
	});
	
	
	$(".style-selector-content [name='rtl_type']").change(function(){
		if($(this).val()=="rtl-yes")
		{
			$(".page-wrapper").addClass("rtl");
			$("#re-rtl-clone").remove();
			setCookie("re_menu_type", "");
		}
		else
		{
			$(".page-wrapper").removeClass("rtl");
			setCookie("re_rtl_type", "add-rtl");
		}
	});
	
	var directionChanger = $(".color-palate .rtl-version li");
	var wrapper = $(".page-wrapper");
	directionChanger.on("click", function(e) {
        var $this = $(this);
        if ( $this.hasClass("rtl") ) {
            wrapper.addClass("rtl");
        } else {
        	wrapper.removeClass("rtl");
    	};
	});
	
	var layoutChangerBtn = $(".color-palate .box-version li");
	var body = $("body");
	layoutChangerBtn.on("click", function(e) {
        var $this = $(this);
        if ( $this.hasClass("box") ) {
            body.addClass("box-layout");
        } else {
        	body.removeClass("box-layout");
    	};
	});
	
	var layoutChangerBtn = $(".color-palate .sticky-menu-version li");
	var body = $("body");
	layoutChangerBtn.on("click", function(e) {
        var $this = $(this);
        if ( $this.hasClass("fixed") ) {
            body.addClass("no-sticky");
        } else {
        	body.removeClass("no-sticky");
    	};
	});
	
	
	

}(jQuery));





jQuery(document).ready(function($) {

	$(".switcher .fa-cog").click(function(e) { 

	e.preventDefault();

	$(".switcher").toggleClass("active");

	});

});