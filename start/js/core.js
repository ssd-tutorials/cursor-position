var cursorObject = {
	offsetLeft : 0,
	offsetTop : 0,
	cursorX : 0,
	cursorY : 0,
	run : function(obj) {
		
		if (obj.length > 0) {
		
			obj.live('mouseover mousemove mouseout', function(event) {
				
				var pos = $(this).position();
				
				cursorObject.offsetLeft = pos.left;
				cursorObject.offsetTop = pos.top;
				
				switch(event.type) {
					
					case 'mouseover':
					cursorObject.mouseOver(event);
					break;
					case 'mousemove':
					cursorObject.mouseMove(event);
					break;
					case 'mouseout':
					cursorObject.mouseOut();
					break;
					
				}
				
			});
		
		}
		
	},
	mouseOver : function(event) {
		
		cursorObject.updatePosition(event);
		
		var result = '<div id="result">Position left: <span class="pos_left">';
		result += cursorObject.cursorX;
		result += '</span> / Position top: <span class="pos_top">';
		result += cursorObject.cursorY;
		result += '</span></div>';
		
		$('#wrapper').append(result);
		
	},
	mouseMove : function(event) {
		
		cursorObject.updatePosition(event);
		
		$('.pos_left').html(cursorObject.cursorX);
		$('.pos_top').html(cursorObject.cursorY);
		
	},
	mouseOut : function() {
		
		$('#result').remove();
		
	},
	updatePosition : function(event) {
		
		cursorObject.cursorX = Math.round(event.pageX - cursorObject.offsetLeft);
		cursorObject.cursorY = Math.round(event.pageY - cursorObject.offsetTop);
		
	}
};
$(function() {
	
	cursorObject.run($('#container'));
	
});






