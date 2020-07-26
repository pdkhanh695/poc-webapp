import { gql } from 'apollo-boost';

export const USER_INFO = gql`
    fragment userInfo on User {
        id
        name
        email
    }
`;
