import { DarkBackground, InboxIcon, Avatar } from "../Icons/index";
import ClickEffect from "../Hooks/ClickEffect";
import { useRef } from "react";
import img from "../Icons/img_avatar2.jpg"

const users = [
  { name: "Ali", phone: "654651321", total: -8.0, date: "2021/12/12" },
  { name: "john", phone: "654651321", total: 3.0, date: "2021/12/5" },
  { name: "Jak", phone: "8464654654", total: 90.0, date: "2021/9/5" },
  { name: "Dewan", phone: "54654654", total: -15.0, date: "2021/5/3" },
  { name: "Showman", phone: "66860504", total: 0.0, date: "2021/7/9" },
  { name: "Sara", phone: "76860504", total: 5.0, date: "2021/2/1" },
  { name: "Ali", phone: "464654651", total: 8.0, date: "2021/12/12" },
  { name: "Showman", phone: "66860504", total: 0.0, date: "2021/7/9" },
  { name: "Jak", phone: "654655465", total: 90.0, date: "2021/9/5" },
];
export default function Background(props: any) {
  return (
    <div className="scroll-viewBox">
      {users.map((user, index) => (
        <ActiveUser key={index} user={user} />
      ))}
    </div>
  );
}

const ActiveUser = ({ user }) => {
  const div = useRef(null);
  const { name, phone, date, total } = user;
  return (
    <div
      ref={div}
      className="user"
      onClick={(e) => {
        ClickEffect(e, div.current);
      }}
    >
      <div className="avatar">
        <img src={img.src} alt="" />
      </div>
      <div className="user-info">
        <div className="top">
          <div className="name"> {name}</div>
          <div className="phone">{phone}</div>
        </div>
        <div className="bottom">
          <div className="date">{date}</div>
          <div className={total < 0 ? "safe" : "danger"}>
            {total.toFixed(3)}
          </div>
        </div>
      </div>
    </div>
  );
};
