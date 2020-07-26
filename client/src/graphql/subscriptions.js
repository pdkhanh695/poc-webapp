import { gql } from 'apollo-boost';
import { USER_INFO } from './fragments';

export const USER_ADDED = gql`
    subscription {
        createUser {
            ...userInfo
        }
    }
    ${USER_INFO}
`;

export const USER_UPDATED = gql`
    subscription {
        userUpdated {
            ...userInfo
        }
    }
    ${USER_INFO}
`;

export const USER_DELETED = gql`
    subscription {
        deleteUser {
            ...userInfo
        }
    }
    ${USER_INFO}
`;