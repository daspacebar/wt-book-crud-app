import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import { BsPencil } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import Axios from "axios";
import Button from "./UI/Button";

const BookList = () => {
    const { books, removeBook } = useContext(GlobalContext);

    const removeHandler = (id) => {
        removeBook(id);
        Axios.delete(`http://localhost:3004/delete/${id}`);
    };

    return (
        <div className="container" style={{marginTop: '10px'}}>
        <table className="table">
            <thead className="card-header">
                <tr>
                    <th className="">Book Title</th>
                    <th className="">Author</th>
                    <th className="">Category</th>
                    <th className="">Actions</th>
                </tr>
            </thead>
            {books.length > 0 && (
                <tbody>
                    {books.map((book) => {
                        return (
                            <tr key={book._id} className="">
                                <td style={{ fontWeight: 'bold' }}>{book.bookName}</td>
                                <td>{book.bookAuthor}</td>
                                <td>{book.bookCategory}</td>
                                <td>
                                    <div className="actions">
                                        <Link
                                            to={`/edit/${book._id}`}
                                            id=""
                                            className="btn btn-primary"
                                            style={{ marginRight: "10px" }}
                                        >
                                            <BsPencil />
                                            Edit
                                        </Link>
                                        <Button
                                            onClick={() =>
                                                removeHandler(book._id)
                                            }
                                            className="btn btn-danger"
                                        >
                                            <MdDeleteForever />
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            )}
        </table>
        </div>
    );
};

export default BookList;
