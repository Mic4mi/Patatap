var circles = [];

function onKeyDown(event) {
    // Establece los límites de dónde puede aparecer el circulo nuevo
    var maxPoint = new Point(view.size.width, view.size.height);
    // obetener un punto aleatorio ya viene incorporado en paperJS
    var randomPoint = Point.random();
    // Es un paralelo de math random * math floor
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, 10);
    newCircle.fillColor = "orange";
    circles.push(newCircle);
}

function onFrame(event) {
    // Hay que recorrer la lista de circulos para añadirles la animación a c/u
    for (var i = 0; i < circles.length; i++) {
        // Cambia el color del objeto
        circles[i].fillColor.hue += 1;
    }
}