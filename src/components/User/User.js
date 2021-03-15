 import React from 'react';
 
 const User = (props) => {
     const {name, html_url} = props.repo;
     return (
         <div>
             <div className="card mb-3 w-50 mx-auto shadow-lg p-3 mb-5 bg-body rounded rounded" style={{ width: ' 540px' }}>
                <div className="row g-0">
                    <div className="col-md-6 col-sm-12 order-last">
                        <div className="card-body">
                             <a className="btn btn-primary" href={html_url} target="_blank">{name}</a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     );
 };
 
 export default User;