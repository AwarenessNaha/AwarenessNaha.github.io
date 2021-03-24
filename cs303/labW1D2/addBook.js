"use strick";
/**
 * addBook, which will take title, author, and libraryID as inputs. It will create a
new book object and add it to the library, which will be represented as a global
array named libraryBooks. addBook should return the newly created book.
 */

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

function addBook(title, author, libraryID) {
    const book = {
        title: title,
        author: author,
        libraryID: libraryID,
    };
    library.push(book);
    return book;
}
addBook("Yoga Yoga Yogeshwaraya", "Adi Shankara", 1200);
addBook("Shambho Shambho Mahadevaya", "Adi Shankara", 1288);
console.log(" the library: ", library);