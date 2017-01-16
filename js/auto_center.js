(function(){
	var divs = [];

	$(window).load(function(){
		$( "center" ).each(function(index, element) {
  			divs = divs.append(element);
		});
	});
})()