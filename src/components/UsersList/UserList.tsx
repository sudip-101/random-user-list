import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./UserList.scss";
import Loader from "../Loader/Loader";

const UserList: React.FC<IUserListProps> = ({ users, loading }) => {
  return (
    <div className="user-table-section">
      <div className="user-table-container">
        {loading ? (
          <Loader />
        ) : (
          <table className="user-table">
            <thead className="table-head">
              <tr className="table-head-row">
                <th className="table-row-item">Name</th>
                <th className="table-row-item">Gender</th>
                <th className="table-row-item">City</th>
                <th className="table-row-item">State</th>
                <th className="table-row-item">Country</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {users?.map((user: UserList) => (
                <tr className="table-body-row" key={user.key}>
                  <td className="table-row-item user-link">
                    <Link to={`/users/${user.key}`}>{user.name}</Link>
                  </td>
                  <td className="table-row-item">{user.gender}</td>
                  <td className="table-row-item">{user.city}</td>
                  <td className="table-row-item">{user.state}</td>
                  <td className="table-row-item">{user.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserList;
