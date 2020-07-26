import React, { useState, useMemo, Fragment, useContext } from 'react';
import { toast } from 'react-toastify';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import omitDeep from 'omit-deep';
import { PROFILE } from '../graphql/queries';
import { USER_CREATE} from '../graphql/mutations';
import Resizer from 'react-image-file-resizer';
import axios from 'axios';
import UserProfile from '../components/forms/UserProfile';
import { ALL_USERS} from '../graphql/queries';

const Profile = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        image: {
            url: 'https://via.placeholder.com/200x200.png?text=Post',
            public_id: '123'
        }
    });
    
    // mutation
    const [userCreate] = useMutation(USER_CREATE, {
        update: ({ data }) => {
            toast.success('Profile updated');
        }
    });

    // destructure
    const { name, email } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        userCreate({ variables: { name: values.name, email: values.email }, 
             refetchQueries: [{ query: ALL_USERS }]});
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="container p-5">
            <UserProfile {...values} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
};

export default Profile;