$(document).ready(function() {
	//$(document).snowfall({flakeCount : 500, maxSpeed : 10});
	
	$("#frontmenus").each(function(){
		
		var $active, $content, $links = $(this).find('a');
		$active = $links.last().addClass('active');
		$links.last().parents('li').addClass('active');
		$content = $($active.attr('href'));
		$links.not(':last').each(function () {
			
			$($(this).attr('href')).hide();
		});
		$(this).on('click', 'a', function(e){
						 
			if(!$(this).parents('li').hasClass('active')){
				
		
			$links.each(function () {
			
				$active = $($(this)).removeClass('active');
				$($(this)).parents('li').removeClass('active');
				$($(this).attr('href')).hide();
			
		});
			// Make the old tab inactive.
			$active.removeClass('active');
			$active.parents('li').removeClass('active');
			//$content.hide();
			 $content.hide();
			// Update the variables with the new link and content
			$active = $(this);
			$(this).parents('li').addClass('active');
			$content = $($(this).attr('href'));

			// Make the tab active.
			$active.addClass('active');
			$content.animate({width: 'toggle',height: 'toggle'})
			//$content.animate({width: 'linear',height: 'easeOutBounce'}); 
			
			//$content.slideToggle();
			//$content.fadeToggle();
			//$content.slideDown('slow');
			//$content.show('slide', {direction: 'right'});
			//$content.snowfall();
			//$content.snowfall({flakeCount : 500, maxSpeed : 10});
			//$('.maincontent').snowfall({flakeCount : 500, maxSpeed : 10});
			}
			
			
			
		});
		
		
	});	
});

