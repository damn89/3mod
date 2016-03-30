(function($){ $(function(){

// New URL path
var url = window.location.protocol + "//" + 'localhost/github/3mod-jquery/wp-content/uploads/byggnader';

// Get Grandparent
for (var j = 0; j < dirData.length; j++) {

	var html = $('<li class="dropdown"/>');
	html.append('<a>' + dirData[j].filename + '</a>');
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
	}); 
	html.append('<ul role="menu" class="test dropdown-menu">'+ subMenu +'</ul>');
}

/*$('body').on('click', 'a', function(){
	$('.post-inner-content').html('<iframe id="one"></iframe>');
  var src = $(this).attr('data-href');
  $('#one').attr('src', src);
});
*/

}); })(jQuery);


