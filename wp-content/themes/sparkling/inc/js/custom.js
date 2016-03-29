(function($){ $(function(){

var url = 'wp-content/uploads/byggnader';

// Get Grandparent
for (var j = 0; j < dirData.length; j++) {

	var html = $('<li class="dropdown"/>');
	html.append('<a href="'+ dirData[j].path +'">'+ dirData[j].filename +'</a>');
	$('.navbar-nav').append(html); 

	// Get Parent
	var subMenu = '';
	dirData[j].children.forEach(function(parent) {
	  console.log('Parent: ', parent.path);

		subMenu += ('<li><a href="'+ url + parent.path +'">'+ parent.filename +'</a></li>');

		// Get Children
		parent.children.forEach(function(children) {
				console.log('Children: ', children.path);
		});

	}); html.append('<ul role="menu" class="dropdown-menu">'+ subMenu +'</ul>');
}

}); })(jQuery);


