import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = (props) => {
    const githubUser = props.githubUser;
    const [user, setUser] = useState({});
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        const url = `https://api.github.com/users/${githubUser}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [githubUser])

    useEffect(() => {
        const url = `https://api.github.com/users/${githubUser}/repos`
        fetch(url)
            .then(res => res.json())
            .then(data => setRepo(data))
    }, [githubUser])
    // console.log(repo);
    return (
        <div>
            <div className="card mb-3 w-50 mx-auto shadow-lg p-3 mb-5 bg-body rounded rounded" style={{ width: ' 540px' }}>
                <div className="row g-0">
                    <div className="col-md-6 col-sm-12 order-last">
                        <div className="card-body">
                            <h5 className="card-title"><b>{user.name}</b></h5>
                            <p className="card-text"><b>Followers: {user.followers}</b></p>
                            <p className="card-text"><b>Following: {user.following}</b></p>
                            <p className="card-text"><b>Public Repositories: {user.public_repos}</b></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img className="img-fluid rounded" src={user.avatar_url} alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="card w-50 mx-auto rounded d-flex justify-content-between" style={{ width: ' 540px' }}>
                <div className="row">
                    <h3>Your Repositories</h3>
                    <div className=" d-flex flex-wrap">
                        {
                            repo.map(repo => <User repo={repo}></User>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;