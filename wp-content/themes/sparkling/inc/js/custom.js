(function($){ $(function(){

// Get Grandparent
for (var j = 0; j < dirData.length; j++) {
	//console.log('Nuuuu då? ', dirData[j]);
	console.log('Grandparent: ', dirData[j].path);
	
	// Get Parent object
	dirData[j].children.forEach(function(parent) {
	  console.log('Parent: ', parent.path);

		parent.children.forEach(function(children) {
				console.log('Children: ', children.path);
		});

	});
}

}); })(jQuery);
