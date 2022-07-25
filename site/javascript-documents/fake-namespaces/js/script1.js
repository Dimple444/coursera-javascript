var name = "Yaakov";
function sayHello() {
    console.log("Hello "+name);
}

var yaakovGreeter = {};
yaakovGreeter.name = "Yaakov2";
yaakovGreeter.sayHello = function() {
    console.log("Hello "+ yaakovGreeter.name);
};

//IIFE
(function (window) {
    var yaakovGreeter2 = {};
    yaakovGreeter2.name = "Yaakov3";
    var greeting = "Hello ";
    yaakovGreeter2.sayHello = function() {
        console.log(greeting + yaakovGreeter2.name);
    }

    window.yaakovGreeter2 = yaakovGreeter2;

})(window);
