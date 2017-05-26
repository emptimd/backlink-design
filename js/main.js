let c=document.getElementById("canvas");
let ctx=c.getContext("2d");

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

let i1=1;
function draw2() {
    console.log(11);
      // vars
      let startX = 150,
          startY = 0,
          move1X = 150,
          move1Y = 50,
          move2X = 100,
          move2Y = 50,
          move3X = 100,
          move3Y = 55;

      let m2xr = move2X/10*i1;
      // console.log(m1yr);
      ctx.beginPath();
      ctx.moveTo(150,0);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#fff';
      // ctx.setLineDash([1.5, 1.5]);
      // ctx.lineCap = 'round';
      
      let you = setInterval(function() {
        // ctx.beginPath();
        // ctx.moveTo(150,0);
        // ctx.lineTo(150,50);
        // ctx.lineTo(move1X,m1yr);
        console.log(move1Y);
        let m1yr = move1Y/10*i1;
        console.log(m1yr);
        ctx.lineTo(move1X,m1yr);
        ctx.stroke();
        if(i1++ === 10) {
          clearInterval(you); i1=1;
          let you2 = setInterval(function() {
                  // ctx.beginPath();
                  // ctx.moveTo(150,0);
                  // console.log("I"+i1);
                  console.log(((move1X-move2X)/10));
                  let t = move1X-((move1X-move2X)/10)*i1;
                  console.log(t);
                  // ctx.lineTo(100,50);
                  ctx.lineTo(t,move2Y);
                  ctx.stroke();
                  if(i1++ === 10) clearInterval(you2);
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

