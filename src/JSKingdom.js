/**
 * javascript王国的一次旅行，一个没有类的世界怎么玩转面向对象？
 * From: 老刘 码农翻身
 * Created by Tyler on 2019/9/9 8:14.
 */
function codeStylePrint(content){
    console.log(`%c${content}`, 'color:#6acc9d');
}
function output(content){
    console.log(`%c${content}`, 'padding: 20px 50px;');
}


let animal = {
    name: 'animal',
    eat() {
        output(`${this.name} is eating`);
    }
};

//對象
codeStylePrint('animal.eat();');
animal.eat();

animal.color = 'black';
codeStylePrint('console.log(animal.color)');
output(animal.color);

// 继承
let dog = {
    name: 'dog',
    __proto__: animal
};
let cat = {
    name: 'cat',
    __proto__: animal
};
codeStylePrint('dog.eat();');
dog.eat();
codeStylePrint('cat.eat();');
cat.eat();

//原型链
function Student(name){
    this.name = name;
}
Student.prototype = {
    sayHello() {
        output(`Hi, I'm ${this.name}`);
    }
};
let andy = new Student('andy');
let lisa = new Student('lisa');
codeStylePrint('andy.sayHello();');
andy.sayHello();
codeStylePrint('lisa.sayHello();');
lisa.sayHello();

//语法糖
class Student2 {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        output(`Hi, I'm ${this.name}`);
    }
}
codeStylePrint('new Student2(\'july\').sayHello();');
new Student2('july').sayHello();
