

class HelloWorld {

    firstName: string;
    lastName: string;

    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
    }

    sayHello(){
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName + '.')
    }
} // end of class

const myHelloInstance = new HelloWorld('Lucas', 'Phan');

myHelloInstance.sayHello();