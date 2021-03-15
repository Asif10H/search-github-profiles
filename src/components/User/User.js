import React from 'react';

const User = (props) => {
    const { name, html_url } = props.repo;
    return (
        <div className="m-2 overflow-hidden">
            <a className="btn btn-primary" href={html_url} target="_blank">{name}</a>
        </div>
    );
};

export default User;