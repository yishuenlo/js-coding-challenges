class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    greeting() {
        return `${this.name} said hello`;
    }

    attack() {
        return `${this.name} attacks with ${this.weapon}`;
    }
}

class Magicians extends Character {
    constructor(name, weapon, spell) {
        super(name, weapon);
        this.spell = spell;
    }

    castSpell(){
        return `${this.name} casts ${this.spell}`;
    }
}

class Hunters extends Character {
    constructor(name, weapon, beast) {
        super(name, weapon);
        this.beast = beast;
    }

    summonBeast() {
        return `${this.beast} is summoned`;
    }
}

const hermione = new Magicians('Hermione', 'wand', 'stupefy');
const gon = new Hunters('Gon', 'fishing rod', 'panther');
