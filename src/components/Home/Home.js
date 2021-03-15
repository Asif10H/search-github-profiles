import React, { useEffect, useState } from 'react';

const Home = (props) => {
    const githubUser = props.githubUser;
    console.log('githubUser', githubUser);
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `https://api.github.com/users/${githubUser}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [githubUser])
    return (
        <div>
            <div className="card mb-3 w-50 mx-auto shadow-lg p-3 mb-5 bg-body rounded rounded" style={{ width: ' 540px' }}>
                <div className="row g-0">
                    <div className="col-md-6 col-sm-12 order-last">
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">Followers: {user.followers}</p>
                            <p className="card-text">Following: {user.following}</p>
                            <p className="card-text">public_repos: {user.public_repos}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img className="img-fluid rounded" src={user.avatar_url} alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;