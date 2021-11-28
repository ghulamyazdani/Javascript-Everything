const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.close');
const notesEl = document.querySelector('.notes')
const main = notesEl.querySelector('.main');
const textArea = notesEl.querySelector('.textarea');
daalKeCheck();
editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
});
textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);
    console.log(marked(value));

});
function daalKeCheck(){
    main.innerHTML = `<h1>HelloWorld</h1>`; 
}