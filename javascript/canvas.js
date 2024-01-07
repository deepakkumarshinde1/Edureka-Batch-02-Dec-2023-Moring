let canvas = document.querySelector("canvas");

// canvas area instance
let ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(20, 20, 50, 50);

ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.strokeRect(70, 70, 50, 50);

function createShapes(
  pointList,
  color = "black",
  border = { width: 0, color: "black" }
) {
  ctx.beginPath();
  ctx.moveTo(pointList[0][0], pointList[0][1]);
  pointList.forEach(function (points, index) {
    if (index > 0) {
      ctx.lineTo(points[0], points[1]);
    }
  });
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  if (border.width !== 0) {
    ctx.strokeStyle = border.color;
    ctx.lineWidth = border.width;
    ctx.stroke();
  }
}

let reactList = [
  [100, 100],
  [100, 300],
  [250, 300],
  [250, 100],
];
createShapes(reactList, "red");

let triangle = [
  [300, 300],
  [250, 400],
  [350, 400],
];
createShapes(triangle, "brown");
// moveTo
//lineTo

function createText(text = { size: "16px", font: "Arial" }, color = "black") {
  ctx.fillStyle = "green";
  ctx.font = `${text.size} ${text.font}`;
  ctx.fillText(text.name, text.x, text.y);
}

createText({
  name: "Deepakkumar",
  x: 400,
  y: 50,
});
