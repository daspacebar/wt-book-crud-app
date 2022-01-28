import React from "react";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

const Heading = () => {
    return (
        <div className="container">
            <header className="">
                <nav>
                    <Link className="btn btn-success" style={{ marginTop: '20px', marginLeft: '10px', rounded:'sm' }} to="/add">
                            <BiPlus/>
                            Add Book
                    </Link>
                </nav>
            </header>
        </div>
    );
};

export default Heading;
