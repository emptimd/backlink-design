"use strict";

/*---CSRF TOKEN---*/
// $.ajaxSetup({
//     headers: {
//         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//     }
// });

/**
 * Get background color of elemet.
 */

// $.fn.getHexBackgroundColor = function () {
// 	let rgb = $(this).css('background-color');
// 	if (!rgb) {
// 			return '#FFFFFF'; //default color
// 	}
// 	let hex_rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

// 	function hex(x) {
// 			return ("0" + parseInt(x).toString(16)).slice(-2);
// 	}

// 	if (hex_rgb) {
// 			return "#" + hex(hex_rgb[1]) + hex(hex_rgb[2]) + hex(hex_rgb[3]);
// 	} else {
// 			return rgb; //ie8 returns background-color in hex format then it will make                 compatible, you can improve it checking if format is in hexadecimal
// 	}
// }

/**
 * Exemple of usage for bgc changing.
 */
// $.each($("#rebus > .container .guess i"), function (i, el) {
// 	let $this = $(this);
// 	setTimeout(function () {
// 		let oldBGColor = $this.parent().getHexBackgroundColor();
// 		let newBGColor = oldBGColor.replace(/[^,]+(?=\))/, '1');
// 		$this.parent().css({backgroundColor: newBGColor});
// 	}, 500 + ( i * 250 ));
// 	setTimeout(function () {
// 		$this.animate({opacity: 1}, 200);
// 	}, 500 + ( i * 240 ));
// });

/**
 * Fade button + scroll to top on click.
 */
// function window_scrool() {
//  $(window).scroll(function () {
//      if ($(this).scrollTop() > 70) {
//          $('#bttop').fadeIn();
//      } else {
//          $('#bttop').fadeOut();
//      }
//  });
//  $('#bttop').click(function () {
//      $('body,html').animate({scrollTop: 0}, 800);
//  });
// }

/**
 * Google map
 * @param {number} lat
 * @param {number} lang
 * @param {number} zoom
 */
// function googlemap(lat=10,lang=10,zoom=2) {
// 	let mapCanvas = document.getElementById('map');
// 	let latlng = new google.maps.LatLng(lat, lang);
// 	let settings = {
// 	zoom: zoom,
// 	center: latlng,
// 	mapTypeControl: true,
// 	mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
// 	navigationControl: true,
// 	navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
// 	mapTypeId: google.maps.MapTypeId.ROADMAP
// 	};
// 	let map = new google.maps.Map(mapCanvas, settings);
// }


/*export default*/ /*function submit(action, values, method='POST') {
                   var form = $('<form/>', {
                   action: action,
                   method: method
                   });
                   // add csrf token
                   form.append($('<input/>', {
                   type: 'hidden',
                   name: '_token',
                   value: $('meta[name="csrf-token"]').attr('content')
                   }));
                   $.each(values, function() {
                   form.append($('<input/>', {
                   type: 'hidden',
                   name: this.name,
                   value: this.value
                   }));
                   });
                   form.appendTo('body').submit();
                   }*/

// var clipboard = new Clipboard('#copy');
// clipboard.on('success', function(e) {
//     $copy.attr('title', 'Copied!');

//     $copy.tooltip('show');
//     $copy.attr('title', '');
// });
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// @TODO create function for circles(with borders). Send data to draw(), draw2() including direction.

// setTimeout(draw1, 1000);

// function draw1() {
//   for (let i = 0; i < 3; i++) {
//     ctx.beginPath();
//     if(i == 0) {
//       ctx.lineWidth = 2;
//       ctx.strokeStyle = '#fff';
//       // ctx.setLineDash([1.5, 1.5]);
//       // ctx.lineCap = 'round';
//       ctx.moveTo(150,0);
//       ctx.lineTo(150,50);
//       ctx.lineTo(100,50);
//       ctx.lineTo(100,55);
//       ctx.stroke();
//     }else if(i==1) {
//       ctx.fillStyle = 'lightblue';
//       ctx.strokeStyle = '#fff';
//       ctx.arc(100, 57, 2, 0, 2 * Math.PI);
//       ctx.fill();
//     }else if(i == 2) {
//       ctx.lineWidth = 1;
//       // ctx.moveTo(100,57);
//       ctx.arc(100, 57, 3, 0, 2 * Math.PI);
//       ctx.stroke();
//     }
//   }
// }

var i1 = 1;
function draw2() {
    console.log(11);
    // vars
    var startX = 150,
        startY = 0,
        move1X = 150,
        move1Y = 50,
        move2X = 100,
        move2Y = 50,
        move3X = 100,
        move3Y = 55;

    var m2xr = move2X / 10 * i1;
    // console.log(m1yr);
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#fff';
    // ctx.setLineDash([1.5, 1.5]);
    // ctx.lineCap = 'round';

    var you = setInterval(function () {
        // ctx.beginPath();
        // ctx.moveTo(150,0);
        // ctx.lineTo(150,50);
        // ctx.lineTo(move1X,m1yr);
        console.log(move1Y);
        var m1yr = move1Y / 10 * i1;
        console.log(m1yr);
        ctx.lineTo(move1X, m1yr);
        ctx.stroke();
        if (i1++ === 10) {
            clearInterval(you);i1 = 1;
            var you2 = setInterval(function () {
                // ctx.beginPath();
                // ctx.moveTo(150,0);
                // console.log("I"+i1);
                console.log((move1X - move2X) / 10);
                var t = move1X - (move1X - move2X) / 10 * i1;
                console.log(t);
                // ctx.lineTo(100,50);
                ctx.lineTo(t, move2Y);
                ctx.stroke();
                if (i1++ === 10) clearInterval(you2);
            }, 20);
        };
    }, 20);

    // setTimeout(function(){
    //   console.log(67444);
    // }, 200)

    // let you2 = setInterval(function() {
    //   // ctx.beginPath();
    //   // ctx.moveTo(150,0);
    //   console.log(move2Y);
    //   let m2yr = move2Y/10*i1;
    //   console.log(m2yr);
    //   ctx.lineTo(move2X,m2yr);
    //   ctx.stroke();
    //   if(i1++ === 10) clearInterval(you2);
    // }, 20);

    // let you3 = setInterval(function() {
    //   ctx.beginPath();
    //   ctx.moveTo(150,0);
    //   let m1yr = move1Y/10*i1;
    //   console.log(m1yr);
    //   ctx.lineTo(move1X,m1yr);
    //   ctx.stroke();
    //   if(i1++ === 10) clearInterval(you3);
    // }, 20);
    // ctx.lineTo(m2xr,50);
    // ctx.lineTo(move3X,55);


    // if(i1++ === 10) clearInterval(you);
}

// let you = setInterval(draw2, 20);
draw2();