

class HelloWorld {

    fullName: string;

    constructor(name: string) {
        this.fullName = name;
    }

    sayHello(){
        console.log('Hello World!' + ' My name is ' + this.fullName + '.')
    }

    printName() {
        console.log('Name is: ' + this.fullName)
    }
} // end of class

const myHelloInstance = new HelloWorld('Lucas Phan');

myHelloInstance.sayHello();
myHelloInstance.printName();