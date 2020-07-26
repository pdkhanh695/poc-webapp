import React from 'react';
import Image from './Image';
import { Link, useHistory } from 'react-router-dom';

const UserCard = ({ user , handleDelete = (f) => f, showUpdateButton = true, showDeleteButton = true }) => {
    const history = useHistory();
    const { name, email } = user; //destruction of user

    return (
        <div className="card text-center" style={{ minHeight: '375px' }}>
            <div className="card-body">
                <Image image={'https://res.cloudinary.com/dz8grtx7i/image/upload/v1593324557/1593324557693.jpg'} />
                <h4 className="text-primary">{name}</h4>
                <hr />
                <small>{email}</small>
                <br />
                <br />
                {showDeleteButton && (
                    <button onClick={() => handleDelete(user.id)} className="btn m-2 btn-danger">
                        Delete
                    </button>
                )}
                {showUpdateButton && (
                    // <button onClick={() => history.push(`/post/update/${user.id}`)} className="btn m-2 btn-warning">
                    <button  className="btn m-2 btn-warning">
                        Update
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserCard;