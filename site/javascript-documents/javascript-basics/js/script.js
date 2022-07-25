var x="Hello World";

var message = "in global";
console.log("global : message = " + message);

var a = function() {
    var message = "in function a";
    console.log("a : message = " + message);
    b();

    function c() {
        console.log("c : message = " + message);
    }
    c();
}

function b() {
    console.log("b : message = " + message);
}

a();