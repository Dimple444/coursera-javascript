sayHello();
sayHi();

yaakovGreeter.sayHello();
johnGreeter.sayHi();

yaakovGreeter2.sayHello();
johnGreeter2.sayHi();


// Immediately Invoked Function Expression
// IIFE
(function () {
    console.log("Hello Coursera !");
})();

(function (name) {
    console.log("Hello "+name);
})("Coursera");
  