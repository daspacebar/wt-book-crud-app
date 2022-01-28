import React, { useState, useContext, useReducer, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import { GiCancel } from "react-icons/gi";
import Button from "./UI/Button";
import BookFormField from "./UI/BookFormField";
import SelectCategory from "./UI/SelectCategory";

const AddBook = () => {
    const { addBook } = useContext(GlobalContext);
    const history = useHistory();
    const [isFormValid, setIsFormValid] = useState(false);

    //book title
    const [bookTitle, dispatchBookTitle] = useReducer(
        (state, action) => {
            if(action.type === "BOOK_INPUT"){
                return {value: action.val, isValid: action.val.length > 5}
            }
            
            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

    //book author
    const [bookAuthor, dispatchBookAuthor] = useReducer(
        (state, action) => {
            if(action.type === "BOOK_INPUT"){
                return {value: action.val, isValid: action.val.length > 5}
            }

            return {value: "", isValid: false}
        },
        {value: "", isValid: null}
    )

    //bookSelect
    const [bookCategory, dispatchBookCategory] = useReducer(
        (state, action) => {
            if(action.type === 'BOOK_INPUT'){
                return {value: action.val, isValid: action.val !== ''}
            }

            return {value: '', invalid: false}
        },
        {value: '', isValid: false}
    )

    const { isValid: bookTitleIsValid} = bookTitle;
    const { isValid: bookAuthorIsValid} = bookAuthor;
    const { isValid: bookCategoryIsValid} = bookCategory;

    //useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFormValid(
                bookTitleIsValid &&
                bookAuthorIsValid &&
                bookCategoryIsValid !== false
            );
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [bookTitleIsValid, bookAuthorIsValid, bookCategoryIsValid]);


    const onSubmit = function (e) {
        e.preventDefault()
        if(isFormValid !== true) return

        const newBook = {
            bookName: bookTitle.value,
            bookAuthor: bookAuthor.value,
            bookCategory: bookCategory.value,
        };

        Axios.post("http://localhost:3004/insert", {
            bookName: bookTitle.value,
            bookAuthor: bookAuthor.value,
            bookCategory: bookCategory.value,
        });
        addBook(newBook);
        history.push("/");
    };

    const onBookTitleChange = function (e) {
        dispatchBookTitle({type: "BOOK_INPUT", val: e.target.value} )
    };

    const onAuthorChange = function (e) {
        dispatchBookAuthor({type: 'BOOK_INPUT', val: e.target.value});
    };

    const onCategoryChange = function (e) {
        dispatchBookCategory({type: "BOOK_INPUT", val: e.target.value});
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="container" style={{marginTop:'200px', marginLeft:'550px'}}>
            <BookFormField
                label="Book Title"
                value={bookTitle.value}
                type="text"
                placeholder="enter book title"
                onChange={onBookTitleChange}
            />

            <BookFormField
                label="Author"
                value={bookAuthor.value}
                type="text"
                placeholder="enter book Author"
                onChange={onAuthorChange}
                className=""
            />

            <SelectCategory onChange={onCategoryChange} />

            <div style={{marginTop:'20px'}}>
                <Button type="submit" className="btn btn-primary">
                    Submit
                </Button>
                <Link to="/" className="btn btn-danger" style={{marginLeft:'20px'}}>
                    <GiCancel /> Cancel
                </Link>
            </div>
            </div>
        </form>
    );
};

export default AddBook;
