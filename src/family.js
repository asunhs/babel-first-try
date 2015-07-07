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


function run() {
    var child = new Child('Sun', 'Hyunsang');
    child.setFamilyName('Kim');

    console.group('검사');
    console.log("child : ", child);
    console.log("child.constructor : ", child.constructor);
    console.log("Child.prototype : ", Child.prototype);
    console.log("Child.prototype.setFamilyName : ", Child.prototype.setFamilyName);
    console.log("child instanceof Child : ", child instanceof Child);
    console.log("child instanceof Parent : ", child instanceof Parent);
    console.log("child.hasOwnProperty('setFamilyName') : ", child.hasOwnProperty('setFamilyName'));
    console.groupEnd();
}


export default run;