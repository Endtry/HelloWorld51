var HelloWorld = /** @class */ (function () {
    function HelloWorld(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName + '.');
    };
    return HelloWorld;
}()); // end of class
var myHelloInstance = new HelloWorld('Lucas', 'Phan');
myHelloInstance.sayHello();
