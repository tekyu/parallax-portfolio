$(document).ready(function(){


function parallaxing(){
	function getObjects(parallax){
		for (var i=0;i<parallax.length;i++){
			var tempObject = document.getElementsByClassName(parallax[i].objectClassName);
			parallax[i].objects=tempObject[0];
		}
	}

// obtaining object offset from key "objects" to key "objectOffset" // object must be set with absolute position
// values of offset are available to change as top,bottom property
	function getOffset(parallax){
		for (var i=0;i<parallax.length;i++){
			parallax[i].objectOffset = parallax[i].objects.offsetTop;
		}
	}

//wziac parent objectu, jego offset i jezeli sie pojawi na ekranie uruchomic parallax

// array of objects ready to be parallaxed;
	var parallaxObjects = [

		{
			objectClassName:'something-image',
			scrollDirection:-1,
			scrollSpeed:0.1
		},

		{
			objectClassName:'something-description',
			scrollDirection:-1,
			scrollSpeed:0.25
		},

		{
			objectClassName:'anything-description',
			scrollDirection:-1,
			scrollSpeed:0.4
		},

		{
			objectClassName:'anything-image',
			scrollDirection:1,
			scrollSpeed:0.025
		},

		{
			objectClassName:'stayathome-image',
			scrollDirection:-1,
			scrollSpeed:0.5
		},

		{
			objectClassName:'stayathome-description',
			scrollDirection:-1,
			scrollSpeed:0.6
		},	

		{
			objectClassName:'top-description',
			scrollDirection:-1,
			scrollSpeed:0.3
		},

		{
			objectClassName:'top-image',
			scrollDirection:-1,
			scrollSpeed:0.1
		},

		{
			objectClassName:'background-polka',
			scrollDirection:1,
			scrollSpeed:0.2
		},

		{
			objectClassName:'background-polka2',
			scrollDirection:-1,
			scrollSpeed:0.2
		},

		{
			objectClassName:'background-strip',
			scrollDirection:1,
			scrollSpeed:0.3
		},

		{
			objectClassName:'concept-image',
			scrollDirection:-1,
			scrollSpeed:0.2
		},

		{
			objectClassName:'concept-description',
			scrollDirection:1,
			scrollSpeed:0.15
		},

		{
			objectClassName:'concept2-image',
			scrollDirection:-1,
			scrollSpeed:0.15
		},

		{
			objectClassName:'concept2-description',
			scrollDirection:-1,
			scrollSpeed:0.4
		},

		{
			objectClassName:'concept3-image',
			scrollDirection:-1,
			scrollSpeed:0.15
		},

		{
			objectClassName:'concept3-description',
			scrollDirection:-1,
			scrollSpeed:0.3
		},

		{
			objectClassName:'nivea-image',
			scrollDirection:-1,
			scrollSpeed:0.15
		},

		{
			objectClassName:'nivea-description',
			scrollDirection:-1,
			scrollSpeed:0.3
		},

		{
			objectClassName:'background-polka-nivea',
			scrollDirection:-1,
			scrollSpeed:0.1
		},

		{
			objectClassName:'archina-image',
			scrollDirection:-1,
			scrollSpeed:0.15
		},

		{
			objectClassName:'archina-description',
			scrollDirection:-1,
			scrollSpeed:0.3
		},

		{
			objectClassName:'background-polka-archina',
			scrollDirection:-1,
			scrollSpeed:0.1
		},

		{
			objectClassName:'concept4-image',
			scrollDirection:-1,
			scrollSpeed:0.2
		},

		{
			objectClassName:'concept-image',
			scrollDirection:-1,
			scrollSpeed:0.2
		},

		{
			objectClassName:'concept-description',
			scrollDirection:1,
			scrollSpeed:0.15
		}

	];

//triggering functions
	getObjects(parallaxObjects);
	getOffset(parallaxObjects);

//console.log(parallaxObjects[4].objects);

//main function
	function parallaxEffect(parallax){
		//console.log(parallax[0].objects);
		var ypos = window.pageYOffset;	// position of the page

		for (var i=0; i<parallax.length;i++){
			parallax[i].objects.style.top = (parallax[i].scrollDirection*ypos) * parallax[i].scrollSpeed + parallax[i].objectOffset + 'px';
			//console.log(parallax[i].objectOffset,ypos);
		}
	}

	window.addEventListener('scroll',function(){
		parallaxEffect(parallaxObjects);
	},false);



	//nav do przeniesienia
	$(window).scroll(function(){
		$('nav').stop().animate({'marginTop':($(window).scrollTop()) + 'px'}, 300); 
	});

}


///////////

var windowWidth = window.innerWidth;
if(windowWidth>1280){
	parallaxing();
}

$(window).resize(function(){
	if ($(this).width() > 1280){
		console.log('test');
	parallaxing();
}}); //resize


}); //ready



