$(window).load(
	function() {
		resizeAvatarImg();		
	}
);

//-----------------------------------------------------------------------------

$( window ).resize(
	function() {
		resizeAvatarImg();
	}
);

//-----------------------------------------------------------------------------

function resizeAvatarImg() {
	var height = $("#avatarImg").height();
	var left = ($("#avatarContainer").width()/2) - ( (height+5) / 2 );
	
	$("#avatarImg").css({"width": height+"px", "left": left+"px"});
}

//-----------------------------------------------------------------------------