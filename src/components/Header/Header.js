import React, { useState } from 'react';
import Home from '../Home/Home';
const Header = () => {
    const [user, setUser] = useState("asif10h");
    const [githubUser, setGithubUser] = useState("asif10h");

    const handleUserName = (e) => {
        setUser(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setGithubUser(user);
    }

    return (
        <div>
            <nav className="navbar w-50 mx-auto mt-5">
                <div className="container-fluid  justify-content-center">
                    <form className="d-flex" onSubmit={handleFormSubmit}>
                        <input className="form-control me-2 rounded" onChange={handleUserName} type="search" placeholder="Search a Github User" aria-label="Search" />
                        <button className="btn btn-primary rounded bg-info" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            {
                <Home githubUser={githubUser}></Home>
            }
        </div>
    );
};

export default Header;