function test() {
    console.log('Hello World');
    console.log(this);
    this.title = "Coursera Course"
}
test();
console.log(window.title);

// Function constructors
function Circle (radius) {
    console.log(this);
    this.radius = radius;
  }

  Circle.prototype.getArea = 
    function () {
      return Math.PI * Math.pow(this.radius, 2);
    };
  
  
  var myCircle = new Circle(10);
  console.log("Area is " + myCircle.getArea());
  console.log(myCircle);
  
  var myOtherCircle = new Circle(20);
  console.log(myOtherCircle);