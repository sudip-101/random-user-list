import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./User.scss";

const User: React.FC<IUserListProps> = ({ users }) => {
  let params = useParams();
  const USER_ID = params.id;
  const userItems = users;
  const [user, setUser] = useState<UserList>();
  useEffect(() => {
    if (userItems && USER_ID) {
      console.log(userItems[parseInt(USER_ID)]);
      setUser(userItems[parseInt(USER_ID)]);
    }
  }, [params]);
  // if (user) {
  //   const birthday = new Date(user?.days);
  //   const currentDate = new Date();
  //   const nextYear = currentDate.getFullYear() + 1;
  //   const nextDate = birthday.setFullYear(nextYear);
  //   const daysLeft = moment(nextDate).diff(moment(currentDate), "days");
  //   setDaysToDob(daysLeft);
  //   console.log(daysLeft);
  // }
  return (
    <div className="user-card">
      <img className="user-img" src={user?.img} alt="" />
      <h3 className="user-name">{user?.name}</h3>
      <div className="label-flex">
        <p className="label">Phone:</p>
        <p>{user?.phone}</p>
      </div>
      <div className="label-flex">
        <p className="label">Days to next birthday:</p>
        <p>
          {user
            ? moment(
                new Date(user?.days).setFullYear(new Date().getFullYear() + 1)
              ).diff(moment(new Date()), "days")
            : "365"}
        </p>
      </div>
    </div>
  );
};

export default User;
