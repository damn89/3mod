(function($){ $(function(){

//console.log(dirData);
// 5 commits 

/*
for (var key in dirData) {
  if (dirData.hasOwnProperty(key)) {
    alert(key + " -> " + dirData[key]);
  }
}
*/

/*		
for(var key in dirData){
  var val = dirData[key];
  console.log('Key: ', key, 'Val: ', val);
  for (var i = 0; i < val.children.length; i++ ) {
  	console.log('SNÄLLA ', val[i]);
  }
}
*/

// Get Grandparent
for (var j = 0; j < dirData.length; j++) {
	//console.log('Nuuuu då? ', dirData[j]);
	console.log('Grandparent path ', dirData[j].path);
	
	// Get Parent object
	for (var h = 0; h < dirData[j].children.length; h++) {
		console.log('Parent ', dirData[h].children);

		// Get children object
		for(var k = 0; k < dirData[h].children.length; k++) {
			console.log('Children? ', dirData[k].children);
		}
	}
}



/*// Get Grandparent
for (var j = 0; j < dirData.length; j++) {
	var grandParent = dirData[j].path;
	console.log('Grandparent path ', grandParent);
	
	// Get Parent object
	for (var h = 0; h < grandParent.length; h++) {
		var parent = dirData[h].children;
		console.log('Parent ', parent);


		// Get children object
		for(var k = 0; k < parent.length; k++) {
			var children = dirData[k].children;
			console.log('Children? ', children);
		}

	}
}
*/



/*for (var j = 0; j < dirData.length; j++) {
	console.log('Nuuuu då? ', dirData[j]);
	for(var key in this){
  	var val = this[key];
  	console.log('TEST key: ', key, 'val: ', val );
	}
}*/



}); })(jQuery);
