let fitBit;
let y = 0;
let counter = 0;
let logoImage;

function preload() {
    f = loadModel('frame.obj', true);
    d = loadModel('display.obj', true);
    s1 = loadModel('strap1.obj', true);
    s2 = loadModel('strap2.obj', true);
    fit = loadModel('Fitbit.obj', true);
    logoImage = loadImage('Fitbit-Symbol.jpg');
}

function setup() {
    createCanvas(600, 600, WEBGL);
}

function draw() {
    let dx = mouseX - width / 2
    let dy = mouseY - height / 2
    let v = createVector(dx, dy, 0)
    directionalLight(255, 255, 255, v)
    v.div(100)

    background(255);
    noStroke()
    ambientMaterial(200);

    push()
    translate(p5.Vector.fromAngle(millis() / 1000, 140));
    scale(0.4)
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    model(f);
    pop();

    push()
    translate(p5.Vector.fromAngle(millis() / 1200, 180));
    scale(0.4)
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    texture(logoImage);
    model(d);
    pop();

    push()
    translate(-210, -210)
    scale(0.5)
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    model(s1);
    pop();

    push()
    translate(210, 210)
    scale(0.5)
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.05);
    model(s2);
    pop();

    push()
    counter++
    if (counter > 500) {
        if (counter == 1000) {
            counter = 0
        }
        y = y - 1
    } else {
        y = y + 1
    }
    camera(0, y, (height / 2) / tan(PI / 6), 0, 0, 0, 0, 1, 0)
    scale(0.8);
    rotateX(90);
    model(fit);
    pop()
}
