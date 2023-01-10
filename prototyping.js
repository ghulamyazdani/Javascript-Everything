function Person(first, last, age, eyecolor) {
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  this.eyecolor = eyecolor;
}

const myFather = new Person("John", "Doe", 42, "Blue");

console.log(myFather.age);
