const express = require('express');
const router = express.Router();
const BookModel = require('./../db/models/Book');
const IDGen = require('./../utility').generateUniqueId;
const emptyProp = require('./../utility').removeEmptyObjectProperties;

// Book add test
router.post('/hamilton', (req, res) => {
    BookModel.create({
        title: "The Federalist Papers",
        author: "Alexander Hamilton",
        additionalAuthors: ["John Jay", "James Madison"],
        ISBN: 99999,
        authorId: 99999,
        rating: 4.9,
        publishDate: new Date()
    }, function(err, created) {
        if (err) {
            res.status(500).send("There was a problem with the book add test!", err);
        }
        res.json(created)
    })  
  })

// Get all books
router.get('/all', (req, res) => {
    BookModel.find({}, function(err, books) {
        if (err) {
            res.status(500).send("There was a problem retrieving books!", err);
        }
        res.json(books); 
    })
})

// Add a book from frontend
router.post('/add', (req, res) => {
    const book = req.body;
    console.log("book", book);

    BookModel.create({
        title: book.title,
        ref: IDGen(),
        author: book.author,
        additionalAuthors: book.additionalAuthors,
        ISBN: book.ISBN,
        authorId: book.authorId,
        rating: book.rating,
        publishDate: book.publishDate
    }, function(err, created) {
        if (err) {
            res.status(500).send("Book was not successfully created!", err);
        }
        res.json(created);
    })
})

// Delete a book from frontend
router.delete('/delete', (req, res) => {
    const ID = req.query.id;

    BookModel.deleteOne({ref:ID},
    function(err, deleted) {
        if (err) {
            res.status(500).send("Book was not successfully deleted!", err);
        }
        res.status(200).send("Book was successfully deleted");
    })
})

// Retrieve books by Title, Author, or ISBN
router.get('/find', (req, res) => {
    const title = req.query.title || "";
    const author = req.query.author || "";
    const ISBN = parseInt(req.query.isbn) || 0;

    console.log(emptyProp({title, author, ISBN}))

    BookModel.find(emptyProp({
        title, author, ISBN
    }), function(err, books) {
        if (err) {
            res.status(500).send("Could not retrieve books!", err);
        }
        res.json(books);
    })
})

module.exports = router;