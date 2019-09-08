class Person {
    constructor(name){
        this.name = name;
    };
    getName(){
        return this.name;
    };
}

let jack = new Person('Jack');
alert(jack.getName());
console.log(jack);
