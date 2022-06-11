import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import User from "../../components/User/User";
import Home from "../Home/Home";
import "./Layout.scss";

const Layout: React.FC = () => {
  const [users, setUsers] = useState<UserList[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        const items = response.data.results;
        const userListData = items.map((item: any, index: number) => ({
          key: index,
          name: item.name.title + " " + item.name.first + " " + item.name.last,
          gender: item.gender,
          city: item.location.city,
          state: item.location.state,
          country: item.location.country,
          img: item.picture.large,
          phone: item.phone,
          days: item.dob.date,
        }));
        // console.log(response.data.results);
        // console.log(userListData);
        setLoading(false);
        setUsers(userListData);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/users"}
          element={<Home users={users} loading={loading} />}
        />
        <Route path={"/users/:id"} element={<User users={users} />} />
        <Route path={"/"} element={<Navigate replace to={"/users"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
