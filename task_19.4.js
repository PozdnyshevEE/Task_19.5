function ElectricalDevices(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalDevices.prototype.turnOn = function() {
    console.log(this.name + " включён!");
    this.isPlugged = true;
}

ElectricalDevices.prototype.turnOff = function() {
    console.log(this.name + " выключен!");
    this.isPlugged = false;
}

ElectricalDevices.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
}

const laptop = new ElectricalDevices('Ноутбук', 45);
const tv = new ElectricalDevices('Телевизор', 1000);

console.log(`Потребляемая мощность электроприборов = ${(laptop.getPowerUsed() + tv.getPowerUsed())} кВт`);

laptop.turnOn();
console.log(`Потребляемая мощность электроприборов = ${(laptop.getPowerUsed() + tv.getPowerUsed())}  кВт`);

tv.turnOn();
console.log(`Потребляемая мощность электроприборов = ${(laptop.getPowerUsed() + tv.getPowerUsed())}  кВт`);

laptop.turnOff();
console.log('Потребляемая мощность электроприборов ' + (laptop.getPowerUsed() + tv.getPowerUsed()) + ' кВт');

tv.turnOff();
console.log('Потребляемая мощность электроприборов ' + (laptop.getPowerUsed() + tv.getPowerUsed()) + ' кВт');