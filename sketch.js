let angulo = 0.8;
let desplazamiento = 250;
let escalar = 120;
let velocidad = 0.02;

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(150);

  console.log("X: " + mouseX + " Y:" + mouseY);

  //Cuadrados
  push();
  let x1 = desplazamiento + sin(angulo) * escalar;
  let x2 = desplazamiento + sin(angulo + 0.4) * escalar;
  let x3 = desplazamiento + sin(angulo + 0.8) * escalar;
  let x4 = desplazamiento + sin(angulo + 0.12) * escalar;

  angulo += velocidad;

  rect(129, 190, 60, 60);
  stroke(100);
  noFill();
  rect(x1, 194, 60, 60);
  rect(x2, 199, 50, 50);
  rect(x3, 230, 20, 20);
  rect(x4, 204, 40, 40);

  pop();

  //Quad superpuestos
  stroke(255);
  noFill(0);
  quad(130, 183, 124, 250, 190, 244, 192, 188);
  quad(127, 194, 127, 252, 191, 248, 185, 194);
  quad(358, 238, 354, 254, 377, 252, 374, 240);
  quad(191, 198, 183, 246, 243, 250, 244, 196);
  quad(193, 200, 186, 252, 245, 256, 241, 200);
  quad(189, 191, 192, 249, 246, 250, 244, 191);

  //Lineas

  push();
  stroke(185);
  line(255, 202, 255, 247);
  line(251, 202, 251, 247);
  line(305, 195, 305, 250);
  line(299, 201, 299, 260);
  line(248, 202, 248, 250);
  line(329, 185, 329, 257);
  pop();

  push();
  strokeWeight(3);
  strokeCap(SQUARE);
  line(258, 196, 258, 252);
  line(359, 192, 359, 232);
  pop();
}