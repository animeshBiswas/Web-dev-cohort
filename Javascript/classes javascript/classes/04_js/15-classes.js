class Cricketer { //classes hoti kya hai? classes ke upar synthetical sugar
    constructor(name, role){    // <= this context is being shared
        this.name = name;
        this.role = role;
        this.matchesPlayed = 0;
        this.stamina = 100;
    }
//   Cricketer.prototype.introduce()
    introduce() {     // <= Ee wala method share ho rha hai memory ke andhar and call kiya jaatha hai tabh inko "this" pass kiya jaatha hai ya reference de dega
        return `${this.name} the ${this.role} | matchesPlayed: ${this.matchesPlayed} | stamina: ${this.stamina}`;
    }
}

const player1 = new Cricketer("virat", "batsman") // this instances (player1) will have different "this" context
const player2 = new Cricketer("Bumrah", "Bowler") // this instances (player2) will have different "this" context

// Jabh player1 introduce karoge ya player2 introduce karoge dono mein difference ayeega
/// this is the basics of classes

console.log(player1.hasOwnProperty("name"));
// true
console.log(typeof Cricketer); // this is another gotcha of js and also asked in interview
// function

class Debutant {
    constructor(name) {
        this.name = name;
        this.walkout = () => `${this.name} walks out to bat for the first time`;
    }
}

const debutant1 = new Debutant("Shubham");
const somethingFromLastClass = debutant1.walkout;

const debutant2 = new Debutant("Yashasvi");
console.log(debutant1.walkout === debutant2.walkout);
// false => both this refernce will be different but they share the same memory
