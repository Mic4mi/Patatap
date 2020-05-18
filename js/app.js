var keyData = {
    a: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/sounds/bubbles.mp3']
        })
    },
    b: {
        color: "green",
        sound: new Howl({
            src: ['sounds/sounds/clay.mp3']
        })
    },
    c: {
        color: "yellow",
        sound: new Howl({
            src: ['sounds/sounds/confetti.mp3']
        })
    },
};

var circles = [];

function onKeyDown(event) {
    if (keyData[event.key]) {
        // Establece los límites de dónde puede aparecer el circulo nuevo
        var maxPoint = new Point(view.size.width, view.size.height);
        // obetener un punto aleatorio ya viene incorporado en paperJS
        var randomPoint = Point.random();
        // Es un paralelo de math random * math floor
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 300);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        circles.push(newCircle);
    }
}

function onFrame() {
    // Hay que recorrer la lista de circulos para añadirles la animación a c/u
    for (var i = 0; i < circles.length; i++) {
        // Cambia el color del objeto
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
    }
}