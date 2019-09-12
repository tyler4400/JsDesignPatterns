class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        alert(`${this.name} eat something`)
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}

class Student extends People {
    constructor(name, age, number){
        super(name, age)
        this.number = number
    }

    study() {
        alert(`${this.name} is studying`)
    }
}

let lisa = new Student('lisa', 10, 'A1')
let linda = new Student('linda', 11, 'A2')

lisa.study()
console.log(lisa.number)
linda.study()
console.log(lisa.number)
