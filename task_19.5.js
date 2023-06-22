class ElectricalDevices
{
    constructor(name, power) {
        this.name = name;  
        this.power = power;   
        this.isPlugged = false; 
    }

    turnOn() {  
        this.isPlugged = true;
        console.log(this.name + " включён!");
    }
    
    turnOff() { 
        this.isPlugged = false;
        console.log(this.name + " выключен!"); 
    }

    getPowerUsed() {
        return this.isPlugged ? this.power : 0;
    }
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
