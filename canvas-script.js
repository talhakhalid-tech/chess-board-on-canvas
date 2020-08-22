window.onload = function () {
  //definitions
  const canvas = document.getElementById("lab3-canvas");
  canvas.width = 900;
  canvas.height = 600;
  const context = canvas.getContext("2d");

  let x;
  let y = 100;

  for (let i = 0; i < 8; i++) {
    x = 250;
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        context.fillStyle = "black";
      } else {
        context.fillStyle = "white";
      }
      context.fillRect(x, y, 50, 50);
      x += 50;
    }
    y += 50;
  }
  context.strokeStyle = "black";
  context.strokeRect(250, 100, 400, 400);
};
