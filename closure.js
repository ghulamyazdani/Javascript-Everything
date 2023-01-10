// const makeTimer = () => {
//   let elapsed = 0;
//   const stopwatch = () => {
//     return elapsed;
//   };
//   const increase = () => elapsed++;
//   setInterval(stopwatch, 1000);
//   return stopwatch;
// };
// let timer = makeTimer();

// const consider = (name) => {
//   return `I think it could be...${name}`;
// };
// const exclaim = (statement) => {
//   return `${statement.toUpperCase()}!`;
// };
// const blame = _.compose(consider, exclaim);
// blame("you");

function myObject() {
  var myValue = 1;
  return {
    increment: function () {
      //   myValue += typeof inc === "number" ? inc : 1;
      return myValue++;
    },
    display: function () {
      return console.log(myValue);
    },
  };
}

var myObj = myObject();
myObj.increment();
myObj.display();
myObj.increment();
myObj.display();
myObj.increment();

var other = myObject();
other.display();
other.increment();
