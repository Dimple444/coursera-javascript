// Object literals and "this"
var literalCircle = {  //new object
    radius: 10,
  
    getArea: function () {
      console.log(this);
   
      return Math.PI * Math.pow(this.radius, 2);
    }
  };
  
  console.log(literalCircle.getArea());


  // Object literals and "this"
var literalCircle2 = {
    radius: 10,
  
    getArea: function () {
      var self = this;
      console.log(this);
  
      var increaseRadius = function () {
        self.radius = 20;
      };
      increaseRadius();
      console.log(this.radius);
  
      return Math.PI * Math.pow(this.radius, 2);
    }
  };
  
  console.log(literalCircle2.getArea());