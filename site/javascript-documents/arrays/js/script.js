// Arrays
var array = new Array();
array[0]="TestName";
array[1]=2;
array[2]=function(name) {
    console.log("Hello "+ name);
};
array[3]={course: " HTML, CSS, Javascript"};

console.log(array);
console.log(array[1]);
array[2]();
array[2]("TestName");
array[2](array[0]);

console.log(array[3].course);
console.log("----------------------------------");

// Short hand Array Creation
var names = [
    {name: "yaakov"},
    {name: "John"},
    "David"
];
console.log(names);
console.log("----------------------------------");


var names2 = ["Yaakov", "John", "David"];
console.log(names2);
for(var i=0; i<names2.length; i++) {
    console.log("Hello "+ names2[i]);
}
console.log("----------------------------------");

names2[100]="Jim";
for(var i=0; i<names2.length; i++) {
    console.log("Hello "+ names2[i]);
}
console.log("----------------------------------");


var names3 = ["Yaakov", "John", "David"];
var myObj = {
    name: "Yaakov",
    course:"HTML/CSS/JS",
    platform:"Coursera"
};
for (var prop in myObj) {
    console.log(prop + ": " + myObj[prop]);
}
console.log("----------------------------------");

for(var name in names3) {
    console.log("Hello " + names3[name]);
}
console.log("----------------------------------");

names3.greeting = "HI";
for(var name in names3) {
    console.log("Hello " + names3[name]);
}
console.log("----------------------------------");