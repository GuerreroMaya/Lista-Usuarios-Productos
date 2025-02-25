import React from "react";

const UserItem = ({ userData }) => {
  const { name, login, picture } = userData;
  return (
    <li
      key={login.uuid}
      className="list-group-item d-flex justify-content-around align-items-center"
    >
      <div style={{ width: "50px", height: "50px" }}>
        <img
          src={picture.thumbnail}
          alt={`${name.first} ${name.last}`}
          className="rounded-circle img-fluid"
        />
      </div>
      <span className="fs-1">
        {name.first} {name.last}
      </span>
      <button className="btn btn-primary">Detalle</button>
    </li>
  );
};

export default UserItem;
