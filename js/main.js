let c=document.getElementById("canvas-2");
c.width = c.clientWidth;
let ctx=c.getContext("2d");

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

let linesDrawed=0,
  linesDrawedPos=[];

function drawCircle(startX, startY) {
  linesDrawedPos.push([startX, startY]);
  if(++linesDrawed < 3) return;
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.fillStyle = '#009a93';
    ctx.strokeStyle = '#fff';
    ctx.arc(linesDrawedPos[i][0], linesDrawedPos[i][1]+3, 4, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.arc(linesDrawedPos[i][0], linesDrawedPos[i][1]+3, 4, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

let i1=0;
function draw2(startX, startY, move1X, move1Y ,move2X, move2Y, move3X, move3Y) {
    let diff = move3Y - move2Y;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#fff';
    
    let interval1 = setInterval(function() { // first interval we draw a line from top to bottom.
      // here we start experiment.
    let to = move1Y/10*i1;

    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(move1X,to);
    ctx.stroke();
    if(i1++ >= 10) { // draw has end, now if we have direction draw a line to that direction.
      clearInterval(interval1); i1=1;
      if(typeof move2X === "undefined") return drawCircle(move1X, to);
      let interval2 = setInterval(function() {
          let dir = move1X-((move1X-move2X)/10)*i1;
          // let dirn = move1X-((move1X-move2X)/10)*i1;
          ctx.beginPath();
          ctx.moveTo(move1X,to);
          ctx.lineTo(dir,to);
          ctx.stroke();
          if(i1++ >= 10) { // 3
          clearInterval(interval2); i1=1;
          let interval3 = setInterval(function() {
            ctx.beginPath();
            ctx.moveTo(dir,move2Y);

            ctx.lineTo(move3X, move2Y + i1);
            ctx.stroke();

            if(i1++ >= diff) {
              clearInterval(interval3);
              drawCircle(move3X, move2Y + i1);
            }
          }, 20);
          }
      }, 20);
    };
    }, 20);
}

draw2(255, 0 , 255, 35, 12, 35 , 12, 60);
draw2(366, 0 , 366, 58);
draw2(482, 0 , 482, 35, 723, 35, 723, 60);

let c1=document.getElementById("canvas-1");
c1.width = c1.clientWidth;
let ctx1=c1.getContext("2d");

let i=0;
function draw1(color, startX, startY, move1X, move1Y ,move2X, move2Y, move3X, move3Y) {
    // let diff = move3Y - move2Y;
    // ctx1.beginPath();
    // ctx1.moveTo(startX,startY);
    ctx1.strokeStyle = '#fff';
    ctx1.lineWidth = 1;
    ctx1.setLineDash([1.5, 1.5]);
    ctx1.beginPath();
    ctx1.moveTo(startX,startY);
    ctx1.lineTo(move1X,move1Y);
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(move1X,move1Y);
    ctx1.lineTo(move2X,move2Y);
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(move2X,move2Y);
    ctx1.lineTo(move3X,move3Y);
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.fillStyle = color;
    ctx1.strokeStyle = '#fff';
    if(typeof move2X === "undefined") ctx1.arc(move1X, move1Y+3, 4.5, 0, 2 * Math.PI);
    else ctx1.arc(move3X, move3Y+3, 4, 0, 2 * Math.PI);
    ctx1.fill();

    ctx1.beginPath();
    ctx1.setLineDash([]);
    ctx1.restore();
    ctx1.lineWidth = 2;
    if(typeof move2X === "undefined") ctx1.arc(move1X, move1Y+3, 4.5, 0, 2 * Math.PI);
    else ctx1.arc(move3X, move3Y+3, 4, 0, 2 * Math.PI);
    ctx1.stroke();
}

draw1('#dcdcdc', 72, 0 , 72, 17, 366, 17 , 366, 36);
draw1('#009a93', 268, 0 , 268, 14, 382, 14 , 382, 36);
draw1('#4585f4', 463, 0 , 463, 36);
draw1('#28599c', 659, 0 , 659, 14, 586, 14 , 586, 36);
draw1('#dcdcdc', 853, 0 , 853, 17, 561, 17 , 561, 36);

