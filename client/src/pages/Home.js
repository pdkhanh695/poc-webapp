import React, { useState, useContext } from 'react';
import UserCard from '../components/UserCard';
import { toast } from 'react-toastify';
import { useQuery, useMutation, useSubscription, useLazyQuery } from '@apollo/react-hooks';
import { ALL_USERS, SINGLE_USER } from '../graphql/queries';
import { USER_DELETE } from '../graphql/mutations';

const Home = () => {
  const { data, loading, error } = useQuery(ALL_USERS);
  const [userDelete] = useMutation(USER_DELETE, {
    update: ({ data }) => {
        console.log('USER DELETE MUTATION', data);
        toast.error('User deleted');
    },
    onError: (err) => {
        console.log(err);
        toast.error('User delete failed');
    }
  });
  const handleDelete = async (userId) => {
    let answer = window.confirm('Do you want to delete User?');
    if (answer) {
        userDelete({
            variables: { userId },
            refetchQueries: [{ query: ALL_USERS }] 
        });
    }
  };
  return (
    <div className="container">
      <div className="row p-5">
        {data &&
          data.listUsers.map((user) => (
            <div className="col-md-6 pt-5" key={user.id}>
              <UserCard 
                user={user}
                handleDelete={handleDelete}
                showUpdateButton={true}
                showDeleteButton={true} />
            </div>
          ))}
      </div>
    </div>
  );
};
  
export default Home;