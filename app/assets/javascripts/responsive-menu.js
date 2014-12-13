function changeDrop() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
 
	if (windowHeight > 450 && windowWidth > 960) {
		jQuery( "#site-nav" ).slideDown("slow");
		jQuery( "#header-bottom-shape" ).removeClass('showDown');
	}
	else {          
		jQuery( "#site-nav" ).slideUp("slow");
		jQuery( "#header-bottom-shape" ).addClass('showDown');
	}
}

changeDrop();
$(window).resize(changeDrop);

jQuery(document).ready(function() {
	jQuery("#header-bottom-shape").click(function(){
		if ( jQuery( "#site-nav" ).is( ":hidden" ) ) {
			jQuery( "#site-nav" ).slideDown("slow");
		} 
		else {
			jQuery( "#site-nav" ).slideUp("slow");
		}
		jQuery( this ).toggleClass('showDown');
	});
	jQuery( "#site-nav dd:last" ).addClass("noBottomBorder");
	jQuery( ".navigation-links a:first" ).addClass("topBorder");
	jQuery( "#site-nav li:parent" ).find('ul.sub-menu').parent().addClass("haschild");
});

jQuery( "#site-nav dd:last" ).addClass("noBottomBorder");
jQuery( "#site-nav li:parent" ).find('ul.sub-menu').parent().addClass("haschild");