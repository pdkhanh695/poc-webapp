import { gql } from 'apollo-boost';
import { USER_INFO} from './fragments';

export const ALL_USERS = gql`
    query {
        listUsers{
            ...userInfo
        }
    }
    ${USER_INFO}
`;

export const SINGLE_USER = gql`
    query listUser($userId: String!) {
        listUser(id: $userId) {
            ...userInfo
        }
    }
    ${USER_INFO}
`;


export const PROFILE = gql`
    query {
        userCreated{
            ...userInfo
        }
    }
    ${USER_INFO}
`;