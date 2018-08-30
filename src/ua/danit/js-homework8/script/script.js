var Car = {
    isMachine: true
}

function BMV(model) {
    this.model = model;
}
BMV.prototype = Car;

new BMV("Toyota").is