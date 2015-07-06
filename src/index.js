var evens = [0,2,4,6,8,10,12,14,16,18,20];

var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

nums.forEach(v => {
    if (v % 5 === 0)
        console.log(v);
});

odds.forEach(o => console.log(o));


class Parent {
    constructor (familyName) {
        this.familyName = familyName;
    }
    setFamilyName(familyName) {
        this.familyName = familyName;
    }
}

class Child extends Parent {
    constructor (familyName, givenName) {
        super(familyName);

        this.givenName = givenName;
    }
}

var child = new Child('Sun', 'Hyunsang');
child.setFamilyName('Kim');

console.log(child);
console.log(child.constructor);
console.log(Child.prototype);
console.log(Child.prototype.setFamilyName);
console.log(child instanceof Child);
console.log(child instanceof Parent);
console.log(child.hasOwnProperty('setFamilyName'));