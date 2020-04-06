function disableScroll(){
	$('body').css({
		'position': 'fixed',
		'width': '100%',
 		'height': '100%',
 		'overflow': 'hidden'

	})
};

function enableScroll(){
	$('body').css({
		'position': 'relative',
 		'overflow': 'auto'
	});
};


$('#callback').on('click', function(ev){
	ev.preventDefault;
	console.log('click!');

	$(".callback-container").fadeIn(400, disableScroll)
	$(".callback-container").css({"display": "flex"})
})


$('#callback2').on('click', function(ev){
	ev.preventDefault;
	console.log('click!');

	$(".callback-container").fadeIn(400, disableScroll)
	$(".callback-container").css({"display": "flex"})
})


$('#callback3').on('click', function(ev){
	ev.preventDefault;
	console.log('click!');

	$(".callback-container").fadeIn(400, disableScroll)
	$(".callback-container").css({"display": "flex"})
})




$('.callback-container').click(function(event){
	if(event.target == this) {
		$(this).fadeOut(400, enableScroll);
	}
})

$('.close-popup').click(function(event){
	$(".callback-container").fadeOut(400, enableScroll);
})