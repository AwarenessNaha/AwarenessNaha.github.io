"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, findAuthors, addBook, findIDs, showTitles }; //add all of your function names here that you need for the node mocha tests

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}
/**
 * 
 * @param {array} libraryBooks array of objects
 * @returns {array} a list of author
 */
function findAuthors(libraryBooks) {
    const author = [];
    for (const book in libraryBooks) {
        author.push(libraryBooks[book].author);
    }
    author.sort();
    return author;
}
/**
 * 
 * @param {array} libraryBooks array of objects
 * @returns {array} a list of IDs
 */
function findIDs(libraryBooks) {
    const IDs = [];
    for (const book in libraryBooks) {
        IDs.push(libraryBooks[book].libraryID)
    }
    IDs.sort();
    return IDs;
}
/**
 * 
 * @param {array} libraryBooks an array of objects
 * @returns {array} a list of book title
 */
function findTitles(libraryBooks) {
    bookTitles = [];
    for (const book in libraryBooks) {
        bookTitles.push(libraryBooks[book].title);
    }
    bookTitles.sort();
    return bookTitles;
}
/**
 * 
 * @param {String} title of a book
 * @param {String} author of a book
 * @param {String} libraryID of a book
 * @returns {object} a book
 */
function addBook(title, author, libraryID) {
    const book = {
        title: title,
        author: author,
        libraryID: libraryID,
    };
    library.push(book);
    return book;
}
