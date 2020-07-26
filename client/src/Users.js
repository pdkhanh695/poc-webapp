import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import produce from "immer";
import Subscriber from "./Subscriber";
import NewUser from "./NewUser";

function Users({subscribeToNew, newItemPosition, createParams}) {
  const LIST_USERS = gql`
    {
      listUsers {
        id
        name
        email
      }
    }
  `;

  const USERS_SUBSCRIPTION = gql`
    subscription onUserCreated {
      userCreated {
        id
        name
        email
      }
    }
  `

  return (
    <div>
        <h1> Dau xanh</h1>
    </div>
  );
}
export default Users;
