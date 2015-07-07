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

export { Parent, Child };