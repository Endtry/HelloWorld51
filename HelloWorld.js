var HelloWorld = /** @class */ (function () {
    function HelloWorld(name) {
        this.fullName = name;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.fullName + '.');
    };
    HelloWorld.prototype.printName = function () {
        console.log('Name is: ' + this.fullName);
    };
    return HelloWorld;
}()); // end of class
var myHelloInstance = new HelloWorld('Lucas Phan');
myHelloInstance.sayHello();
myHelloInstance.printName();
