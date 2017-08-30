$(window).scroll(function(){
	var coutscroll= $(this).scrollTop();
	console.log(coutscroll);
			$('.par-fore').css({
				'transform' :'translate(0px, '+ coutscroll / 2 +' %)'
			})
			if (coutscroll > $('.par-fore').offset().top - ($(window).height()/2)){
				console.log("yes");

				$('.par-fore').css({
					'transform' :'translate(0px, '+ coutscroll / 2 +' %)'
				})
			}
})

var masterslider_8f99 = new MasterSlider();

			// slider controls
			masterslider_8f99.control('arrows'     ,{ autohide:true, overVideo:true  });
			masterslider_8f99.control('slideinfo'  ,{ autohide:false, overVideo:true, dir:'h', align:'bottom',inset:false , margin:10   });
			// slider setup
			masterslider_8f99.setup("MS59a32e2458f99", {
				width           : 240,
				height          : 240,
				minHeight       : 0,
				space           : 0,
				start           : 1,
				grabCursor      : true,
				swipe           : true,
				mouse           : true,
				keyboard        : false,
				layout          : "partialview",
				wheel           : true,
				autoplay        : false,
                instantStartLayers:false,
				mobileBGVideo:false,
				loop            : true,
				shuffle         : false,
				preload         : 4,
				heightLimit     : true,
				autoHeight      : false,
				smoothHeight    : true,
				endPause        : false,
				overPause       : true,
				fillMode        : "fill",
				centerControls  : true,
				startOnAppear   : false,
				layersMode      : "center",
				autofillTarget  : "",
				hideLayers      : false,
				fullscreenMargin: 0,
				speed           : 20,
				dir             : "h",
				parallaxMode    : 'swipe',
				view            : "focus"
			});
      var slider = new MasterSlider();
		slider.setup('masterslider' , {
			loop:true,
			width:240,
			height:240,
			speed:20,
			view:'focus',
			//preload:'all',
			space:0,
			wheel:true
		});
		slider.control('arrows');
		slider.control('slideinfo',{insertTo:'#staff-info'});

      // var slider = new MasterSlider();
      // 		slider.setup('masterslider' , {
      // 			width:1024,
      // 			height:768,
      // 			space:5,
      // 			view:'basic',
      // 			autofill:true,
      // 			speed:20
      // 		});
      //
      // 		slider.control('arrows' ,{insertTo:'#masterslider'});
      // 		slider.control('bullets');
      //
      //
      // var wrapper = $('#slider1-wrapper');
      // 		wrapper.height(window.innerHeight - 118);
      // 		$(window).resize(function(event) {
      // 			wrapper.height(window.innerHeight - 118);
      // 		});
          var masterslider_1de4 = new MasterSlider();

        			// slider controls
        			masterslider_1de4.control('bullets'    ,{ autohide:true, overVideo:true, dir:'v', align:'right', space:10 , margin:10  });
        			// slider setup
        			masterslider_1de4.setup("MS59a341c841de4", {
        				width           : 1400,
        				height          : 768,
        				minHeight       : 0,
        				space           : 0,
        				start           : 1,
        				grabCursor      : true,
        				swipe           : true,
        				mouse           : true,
        				keyboard        : true,
        				layout          : "fullscreen",
        				wheel           : false,
        				autoplay        : true,
                        instantStartLayers:true,
        				mobileBGVideo:false,
        				loop            : false,
        				shuffle         : false,
        				preload         : 0,
        				heightLimit     : true,
        				autoHeight      : false,
        				smoothHeight    : true,
        				endPause        : false,
        				overPause       : true,
        				fillMode        : "fill",
        				centerControls  : true,
        				startOnAppear   : false,
        				layersMode      : "center",
        				autofillTarget  : "",
        				hideLayers      : false,
        				fullscreenMargin: 80,
        				speed           : 20,
        				dir             : "v",
        				parallaxMode    : 'swipe',
        				view            : "basic"
        			});


        			$("head").append( "<link rel='stylesheet' id='ms-fonts'  href='//fonts.googleapis.com/css?family=Poppins:600,regular' type='text/css' media='all' />" );

        			window.masterslider_instances = window.masterslider_instances || [];
        			window.masterslider_instances.push( masterslider_1de4 );
// 							<form action="//formspree.io/veigasbros@gmail.com" method="POST">
//  <fieldset>
//  <label for="name">Your name</label><br>
//  <input type="text" name="name" placeholder="Name" id="name" required>
//  </fieldset>
//  <fieldset>
//  <label for="_replyto">Your email</label><br>
//  <input type="email" name="_replyto" placeholder="example@domain.com" id="_replyto" required>
//  </fieldset>
//  <fieldset>
//  <label for="message">Your message</label><br>
//  <textarea name="message" rows="1" placeholder="Message" id="message" required></textarea>
//  </fieldset>
//   <input type="hidden" name="_format" value="plain" />
//   <input type="hidden" name="_subject" value="New submission! BIGJTV.ORG" />
//  <input class="hidden" type="text" name="_gotcha" style="display:none">
//  <input class="hidden" type="hidden" name="_subject" value="Message via http://domain.com">
//   <input type="hidden" name="_next" value="http://bigjtv.org/terms.html" />
// <input class="button submit" type="submit" value="Send">
// </form>
//
// .foot-2,.foot-4
// 		 flex: 1
// 		 h2,i
// 			font-family: Ralway
// 			letter-spacing: 0.5em
// 			color: white
// 			font-weight: 500
// 			&::after
// 			&:hover
// 				color: tomato
// 				font-weight: 800
// 		li,a
// 			font-size: 1.1em
// 			color: white
// 			padding: 10px
// .foot-2
// 	ul
// 		display: flex
// 	i
// 		font-size: 2.8em
// 	.icon-facebook-circled
// 		color: #4b8aac
// 	.icon-videocam
// 		color: #FF5722
// 	.icon-twitter-circled
// 		color: #00BCD4
// .foot-3
// 	ul
// 		h3
// 			font-family: serif
// 			color: brown
// 			letter-spacing: 0.1em
// .foot-4
// 	background: #2d2b2b
// 	li
// 		text-align: end
// 		padding-right: 15px
// 		.w-contact
// 			text-align: right
// 			display: inline-block
