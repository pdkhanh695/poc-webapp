import React from 'react';

const UserProfile = ({ handleSubmit, handleChange, username, name, email, about, loading }) => (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                className="form-control"
                placholder="Name"
            />
        </div>

        <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="form-control"
                placholder="Username"
            />
        </div>

        <button className="btn btn-primary" type="submit" disabled={!email}>
            Submit
        </button>
    </form>
);

export default UserProfile;