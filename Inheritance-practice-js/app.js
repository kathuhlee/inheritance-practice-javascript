class Cat {
    constructor(color, breed, personality) {
        this.color = color;
        this.breed = breed;
        this.personality = personality;
        this.pets = pets;
    }

    extraLove() {
        this.pets++;
    }
}

class Mochi extends Cat {
    constructor(color, breed, personality, pets, athleticism) {
        super(color, breed, personality, pets);
        this.athleticism = athleticism;
    }
}

class Tux extends Cat {
    constructor(color, personality, pets, isAngry = true) {
        super(color, personality, pets);
        this.isAngry = isAngry;
    }

    eat() {
        if(this.anger) {
            this.anger = false;
        } else {
            console.log("Give Tux a toy! He's angry.");
        }
    }
}

let cat = new Cat('gray', 'calico', 'tired');
let mochi = new Mochi('orange', 'friendly', 5, 'loaf');
let tux = new Tux('black', 'sleepy', 1, false);

console.log(cat);
console.log(mochi);
console.log(tux);

cat.extraLove();
mochi.extraLove();
tux.extraLove();

console.log(cat);
console.log(mochi);
console.log(tux);


