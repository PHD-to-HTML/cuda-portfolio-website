

$(document).ready(function(){


	// sticky navigation bar design
	$(window).on('scroll', function(){

		var scroll = $(window).scrollTop();

		if( scroll < 1 ){
			$("nav").removeClass("scroll-header");

		}else{
			$("nav").addClass("scroll-header");

		}

	});



	// Menu active link
	$("nav ul li a").click(function(){

		$("nav ul li a").removeClass("active");

		$(this).addClass("active");

	});
	$("nav a img").click(function(){

		$("nav ul li a").removeClass("active");

		$("nav ul li:first-child a").addClass("active");

	});



	// tab or mixitup 
	var mixer = mixitup('.tabjs');



	//contact section form validation
	$(".contact-container input#submit").click(function(){

		var name	= $("input#name").val();
		var email	= $("input#email").val();
		var message = $("textarea#message").val();


		// name
		if( name == "" ){

			$("input#name").css("border","1px solid red");

		}else{

			$("input#name").css("border","1px solid #273a71");

		}
		// email
		if( email == "" ){

			$("input#email").css("border","1px solid red");

		}else{

			$("input#email").css("border","1px solid #273a71");

		}
		// message
		if( message == "" ){

			$("textarea#message").css("border","1px solid red");

		}else{

			$("textarea#message").css("border","1px solid #273a71");

		}

		return false

	})


});


// // mobile menu
function openNav(){

	document.getElementById("myNav").style.width = "100%";

}
function closeNav(){

	document.getElementById("myNav").style.width = "0%";

}