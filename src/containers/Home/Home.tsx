import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import UserList from "../../components/UsersList/UserList";
import "./Home.scss";

const Home: React.FC<IUserListProps> = ({ users, loading }) => {
  return (
    <div className="home-container">
      <h1>Welcome! Here's the users list</h1>
      <UserList users={users} loading={loading} />
    </div>
  );
};

export default Home;
