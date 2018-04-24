class Person {
    constructor(name){
        this.name = name;
    }
    sleep(hours) {
        return `<h1>im boring i sleep: ${hours}.</h1>`;
    }
    drink(cup) {
        return `<h1>Im going to drink ${cups} of water per day.</h1>`;
    }
    speak(message) {
        return `<h1>Hi, ${this.name} said ${message}</h1>`;
    }
}

class SuperPerson extends Person {
    xray () {
        return `<h1>${this.name} is a hero!</h1>`;
    }
}

export default SuperPerson; 