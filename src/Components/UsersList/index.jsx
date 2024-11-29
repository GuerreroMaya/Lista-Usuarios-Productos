import React from "react";
import UserItem from "../../Components/UserItem"


const UsersList = ({ users }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1>Lista de Usuarios</h1>
        <ul className="list-group">
          {users.map((user) => (
            <UserItem key={user.login.uuid} userData={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
