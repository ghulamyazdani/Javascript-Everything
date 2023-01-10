// myFunction();

// // code here can use carName(Automatically global)
// console.log(carName);
// function myFunction() {
//   carName = "Volvo";
// }

// let a = 10;
// function f() {
//   if (true) {
//     let b = 9;

//     // It prints 9
//     console.log(b);
//   }

//   // It gives error as it
//   // defined in if block
//   //   console.log(b);
// }
// f();

// // It prints 10
// console.log(a);

// const a = 10;
// function f() {
//   a = 9;
//   console.log(a);
// }
// f();

// // It gives error as it is const

function f() {
  let a = 10; // a is local to f and is created each time f is called
  function g() {
    return console.log(++a);
  }
  g();
}
f();
