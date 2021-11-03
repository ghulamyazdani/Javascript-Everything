var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
    if (!bookName.includes('great')) {
        favoriteBooks.push(bookName);
        
    }
}

// TODO: define printFavoriteBooks() function 
function printFavoriteBooks() {
    console.log(`favoriteBooks:${favoriteBooks.length}`);
    for (let bookName of favoriteBooks){
        console.log(bookName);
    }
}



// TODO: print out favorite books

}
