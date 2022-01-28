import React, {useState, useContext, useEffect} from 'react';
import { GlobalContext } from "./context/GlobalState";
import { Link, useHistory } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import Button from  './UI/Button';
import UserFormField from './UI/BookFormField';
import Axios from "axios";
import SelectCategory from './UI/SelectCategory';

const EditBook = (props) => {
    const [selectedBook, setSelectedBook] = useState({
        bookName: '',
        bookAuthor: '',
        bookCategory: ''
    })
    const { books, editBook } = useContext(GlobalContext);
    const history = useHistory();
    const currentBookId = props.match.params.id;

    useEffect(() => {
        const bookId = currentBookId;
        const selectedBook = books.find(book => book._id === bookId)
        setSelectedBook(selectedBook);
    }, [currentBookId, books])

    const updateFood = function (id) {
        const {bookName, bookAuthor, bookCategory} = selectedBook

        Axios.put("http://localhost:3004/update", {
            id: id,
            bookName: bookName,
            bookAuthor: bookAuthor,
            bookCategory: bookCategory
        });
    };

    const onSubmit = function(e){

        editBook(selectedBook)
        history.push('/')
        updateFood(currentBookId)
    }

    const onBookNameChange = function(e){
        setSelectedBook({...selectedBook,[e.target.name]: e.target.value})
    }

    const onBookAuthorChange = function(e){
        setSelectedBook({...selectedBook,[e.target.name]: e.target.value})
    }

    const onBookCategoryChange = function(e){
        setSelectedBook({...selectedBook,[e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={onSubmit} className="">
             <div className="container" style={{marginTop:'200px', marginLeft:'550px'}}>
            <UserFormField
                label="Book Title"
                name="bookName"
                value={selectedBook.bookName}
                type="text"
                placeholder="enter book title"
                onChange={onBookNameChange}
            />

            <UserFormField
                label="Author"
                name="bookAuthor"
                value={selectedBook.bookAuthor}
                type="text"
                placeholder="enter book Author"
                onChange={onBookAuthorChange}

            />
            <SelectCategory name="bookCategory" onChange={onBookCategoryChange} value={selectedBook.bookCategory}/>

            <div className="">
                <Button type="submit" className="btn btn-success"> <BsPencil/> Done</Button>
                <Link to="/" className="btn btn-danger"> <GiCancel/> Cancel</Link>
            </div>
            </div>
        </form>
    )
}

export default EditBook