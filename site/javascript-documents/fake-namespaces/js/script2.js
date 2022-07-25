var name = "John";
function sayHi() {
    console.log("Hi "+name);
}


var johnGreeter ={};
johnGreeter.name = "John2";
johnGreeter.sayHi = function() {
    console.log("Hi "+ johnGreeter.name);
};


//IIFE
(function(window){
    var johnGreeter2 ={};
    johnGreeter2.name = "John3";
    var greeting = "Hi ";
    johnGreeter2.sayHi = function() {
        console.log(greeting + johnGreeter2.name);
    }

    window.johnGreeter2 = johnGreeter2;

})(window);
