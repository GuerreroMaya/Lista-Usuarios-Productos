import React, { useState, useEffect } from "react";
import UsersList from "../../Components/UsersList";


function Users() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?inc=name,picture,login&results=20"
        );
        const data = await response.json();
        setUsersList(data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <UsersList users={usersList} />
    </div>
  );
}

export default Users;
