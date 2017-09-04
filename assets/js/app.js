var pContainerHeight = $('.hero-container').height();
$(window).scroll(function(){
	var coutscroll= $(this).scrollTop();
	if(coutscroll <= pContainerHeight )
	// console.log(coutscroll);
	{
		$('.hero-back-layer').css({
				'transform' : 'translate(0px, '+ coutscroll /2 +'%)'
			});
 		$('.hero-mid-layer').css({
				'transform' : 'translate(0px, '+ coutscroll /1.5 +'px)'
		});
 		$('.hero-front-layer').css({
				'transform' : 'translate(0px, -'+ coutscroll /30 +'%)'
			});
			// console.log("DONE f");
	}


})

var masterslider_8f99 = new MasterSlider();
			// slider controls
			masterslider_8f99.control('arrows'     ,{ autohide:true, overVideo:true  });
			masterslider_8f99.control('slideinfo'  ,{ autohide:false, overVideo:true, dir:'h', align:'bottom',inset:false , margin:10   });
			// slider setup
			masterslider_8f99.setup("MS59aaafb5eb5b6", {
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
			preload:'all',
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

var yplayer = videojs('preview-player',{
            techOrder: ["html5", "flash", "youtube"],
            ytcontrols:true,
            sourceOrder: true,
						fluid: false
        		}, function(){
        // Player (this) is initialized and ready.
    				});
 yplayer.playlist(
	 [{
  name: 'BiG -J TV LIVE',
  description: 'You are Watching Live Webcasting. ' + '24/7 Web-Tv Telecasted by Big J Media' ,
  duration: 45,
  sources: [{ src: '//209.58.177.152:1935/bigjtv/bigjtv', type: 'rtmp/mp4/' }, { src: '//209.58.177.152/bigjtvhls/bigjtv.m3u8', type: 'application/x-mpegurl' }],
  poster: 'assets/img/slide/logo.png',
  thumbnail: [{
    srcset: 'assets/img/slide/logo.png',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: 'assets/img/slide/logo.png'
  }]
}, {
  name: ' \"Rejoice in the Hope of God\" Pleasantry with Pastor Eric John',
  description: 'Grace and the truth are from Jesus, it Came to us By God \'s Will,.',
  sources: [{ src: '//www.youtube.com/watch?v=T2SPtB64JQE', type: 'video/youtube' }, { src: 'https://www.youtube.com/watch?v=T2SPtB64JQE', type: 'video/youtube' }],
  duration: 888,
  poster: '//img.youtube.com/vi/T2SPtB64JQE/mqdefault.jpg',
  thumbnail: [{
    srcset: '//img.youtube.com/vi/T2SPtB64JQE/mqdefault.jpg',
    type: 'image/png',
    media: '(min-width: 400px;)'
  }, {
    src: '//img.youtube.com/vi/T2SPtB64JQE/mqdefault.jpg'
  }]
}, {
  name: '\"How God Protects us in his Grace, and Grace his Jesus \" Pleasantry with Pastor Alwin boloor',
  description: "Most of time understanding Grace as Knowledge is wrong, it leads a person into morality ",
  sources: [{
    src: '//www.youtube.com/watch?v=j3BHpi0_uBU', type: 'video/youtube' }],
		Poster: '//img.youtube.com/vi/j3BHpi0_uBU/mqdefault.jpg',
		thumbnail:[{
			srcset:'//img.youtube/vi/j3BHpi0_uBU/mqdefault.jpg',
			type: 'image/jpg',
			media: '(min-width: 400px;)'
		},{
			src: '//img.youtube.com/vi/j3BHpi0_uBU/mqdefault.jpg'
		}]
},
{
  name: '\"Family is a wonderful Essence of life that god established among Humans\" Pleasantry with Sister Vandana Philip',
  description: "Love and forgiveness is an important quality in family, How a women must commit herself playing a role in the family",
  sources: [{ src: '//www.youtube.com/watch?v=XME8s0TPIlA', type: 'video/youtube' }],
		Poster: '//img.youtube.com/vi/XME8s0TPIlA/mqdefault.jpg',
		thumbnail:[{
			srcset:'//img.youtube/vi/XME8s0TPIlA/mqdefault.jpg',
			type: 'image/jpg',
			media: '(min-width: 400px;)'
		},{
			src: '//img.youtube.com/vi/XME8s0TPIlA/mqdefault.jpg'
		}]
}

, {
  name: '\"Vyabhichari stri skit by U.K.C Church Dubai \" ',
  description: "A skit by U.K.C fellowship",
  sources: [{
    src: '//www.youtube.com/watch?v=ieWEK2BeerE', type: 'video/youtube' }],
		Poster: '//img.youtube.com/vi/ieWEK2BeerE/mqdefault.jpg',
		thumbnail:[{
			srcset:'//img.youtube/vi/ieWEK2BeerE/mqdefault.jpg',
			type: 'image/jpg',
			media: '(min-width: 400px;)'
		},{
			src: '//img.youtube.com/vi/ieWEK2BeerE/mqdefault.jpg'
		}]
}, {
  name: '\"Aathmada koduge Tulu Skit',
  description: "A skit by U.K.C fellowship",
  sources: [{
    src: '//www.youtube.com/watch?v=QgA4j6EFAwg', type: 'video/youtube' }],
		Poster: '//img.youtube.com/vi/QgA4j6EFAwg/mqdefault.jpg',
		thumbnail:[{
			srcset:'//img.youtube/vi/QgA4j6EFAwg/mqdefault.jpg',
			type: 'image/jpg',
			media: '(min-width: 400px;)'
		},{
			src: '//img.youtube.com/vi/QgA4j6EFAwg/mqdefault.jpg'
		}]
},
{
  name: 'Hallelujah Worship song sang by U.K.C fellowship',
  description: "Hallelujah..Hallelujah.. Hallelujah ningesu... ",
  sources: [{
    src: '//www.youtube.com/watch?v=zDVITpywwsY', type: 'video/youtube' }],
		Poster: '//img.youtube.com/vi/zDVITpywwsY/mqdefault.jpg',
		thumbnail:[{
			srcset:'//img.youtube/vi/zDVITpywwsY/mqdefault.jpg',
			type: 'image/jpg',
			media: '(min-width: 400px;)'
		},{
			src: '//img.youtube.com/vi/zDVITpywwsY/mqdefault.jpg'
		}]
},
{
  name: '\"kalvary Shikaradhi worship song sang by Sis SUNEETHI',
  description: "kalvary Shilubeyali aa kruje meleye..",
  sources: [{
    src: '//www.youtube.com/watch?v=UmntkB2moE0', type: 'video/youtube' }],
		Poster: '//img.youtube.com/vi/UmntkB2moE0/mqdefault.jpg',
		thumbnail:[{
			srcset:'//img.youtube/vi/UmntkB2moE0/mqdefault.jpg',
			type: 'image/jpg',
			media: '(min-width: 400px;)'
		},{
			src: '//img.youtube.com/vi/UmntkB2moE0/mqdefault.jpg'
		}]
},
{
  name: '\"Korangrapady church sunday school Dance \" ',
  description: "Dance Choreography performed by Korangrapady",
  sources: [{
    src: '//www.youtube.com/watch?v=H6gR8hTL6lg', type: 'video/youtube' }],
		Poster: '//img.youtube.com/vi/H6gR8hTL6lg/mqdefault.jpg',
		thumbnail:[{
			srcset:'//img.youtube/vi/H6gR8hTL6lg/mqdefault.jpg',
			type: 'image/jpg',
			media: '(min-width: 400px;)'
		},{
			src: '//img.youtube.com/vi/H6gR8hTL6lg/mqdefault.jpg'
		}]
}]);
//[{
//       name: 'BVSC',
//       description: 'Explore the depths of our planets oceans. Experience the stories that connect their world to ours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.!',
//       sources: [
//         { src: 'https://www.youtube.com/watch?v=tGbRZ73NvlY', type: 'video/youtube' }
//       ],
//       thumbnail: [
//         {
//           srcset: 'http://img.youtube.com/vi/tGbRZ73NvlY/0.jpg',
//           type: 'image/jpeg',
//           media: '(min-width: 400px;)'
//         },
//         {
//           src: 'http://img.youtube.com/vi/tGbRZ73NvlY/0.jpg'
//         }
//       ]
//     }, {
//       name: 'Thunder!',
//       description: 'sdfsdfsdacdc',
//       sources: [
//         { src: 'https://www.youtube.com/watch?v=ZtOpP4QJa9k', type: 'video/youtube' }
//       ],
//       thumbnail: [
//         {
//           srcset: 'http://img.youtube.com/vi/ZtOpP4QJa9k/0.jpg',
//           type: 'image/jpeg',
//           media: '(min-width: 400px;)'
//         },
//         {
//           src: 'http://img.youtube.com/vi/ZtOpP4QJa9k/0.jpg'
//         }
//       ]
//     }
//     ]);
yplayer.playlistUi();
