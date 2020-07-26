import { gql } from 'apollo-boost';
import { USER_INFO, POST_DATA } from './fragments';

export const USER_CREATE = gql`
    mutation createUser($name: String!, $email: String) {
        createUser(name: $name, email: $email) {
            ...userInfo
        }
    }
    ${USER_INFO}
`;

export const USER_DELETE = gql`
    mutation deleteUser($userId: String!) {
        deleteUser(id: $userId) {
            id
        }
    }
`;
