class Transport  {
    constructor(type, name, model) {
        this.type = type;
        this.name = name;
        this.model = model;

    }
    startEngine () {
        console.log(`Engine on ${this.name} Started!`)
    }
}

class Car extends Transport {
    constructor(type, name, model, number, ) {
        super(type, name, model);
        this.number = number;
    }
    startEngine() {
        super.startEngine();
    }

}
const mercedes = new Car('car' , 'Mercedes-Benz', 'W463', '777 ТТ' )

console.log(mercedes)
mercedes.startEngine();



const bmw = new Transport('car' , 'BMW', 'X6', '555 ТТ' )

console.log(bmw)
bmw.startEngine();