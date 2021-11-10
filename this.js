//function to represent a single node in the tree
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}   
let teacher = "Kyle";
function teacherChange() {
    let teacher = "Joy";
    console.log(teacher);
}
teacherChange();
console.log(teacher);