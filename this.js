//function to represent a single node in the tree
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}   
var teacher = "Kyle";
function teacherChange() {
    var teacher = "Joy";
    console.log(teacher);
}
teacherChange();
console.log(teacher);

// function ask(question){
//     console.log(this.teacher,question);
// }
// function otherClass(){
//     var myContext = {
//         teacher: ["Joy","Kyle","Karen"]
//     };

//     ask.call(myContext,"What is your name?");
// }
// otherClass();


// class Workshop{
//     constructor(teacher){
//         this.teacher = teacher;
//     }
//     ask(question){
//         console.log(this.teacher,question);
//     }
// }   
// var deepJS = new Workshop("Kyle");
// deepJS.ask("What is your name?");