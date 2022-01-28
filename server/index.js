const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const BookModel = require("./models/book");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
})

app.post("/insert", async (req, res) => {
    const bookName = req.body.bookName;
    const bookAuthor = req.body.bookAuthor;
    const bookCategory = req.body.bookCategory
    const book = new BookModel({bookName: bookName, bookAuthor: bookAuthor, bookCategory: bookCategory});

    try {
        await book.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});

app.get("/read", async (req, res) => {
    // FoodModel.find({$where: {foodName:  "Apple"}}, )
    BookModel.find({}, (err, results) => {
        if (err) {
            res.send(err);
        }

        res.send(results);
    });
});

app.put("/update", async (req, res) => {
    const id = req.body.id;
    const bookName = req.body.bookName;
    const bookAuthor = req.body.bookAuthor;
    const bookCategory = req.body.bookCategory;
    try {
        await BookModel.findById(id, (err, updateBook) => {
            updateBook.bookName = bookName;
            updateBook.bookAuthor = bookAuthor;
            updateBook.bookCategory = bookCategory;
            updateBook.save();
            res.send("updated");
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await BookModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

app.listen(3004, () => {
    console.log("server running on port 3004");
});
