/**
 * findIDs, which will find all the libraryIDs in libraryBooks and return them in an
alphabetically ordered array.
 */

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 },
    { title: "Shiva Shiva Sarveshwaraya", author: "Naha Awareness", libraryID: 1278 }
];

function findIDs(libraryBooks) {
    const IDs = [];
    for (const book in libraryBooks) {
        IDs.push(libraryBooks[book].libraryID)
    }
    IDs.sort();
    return IDs;
}
console.log(findIDs(library));