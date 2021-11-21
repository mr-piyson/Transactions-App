import { DarkBackground, InboxIcon, Avatar } from "../Icons/index";

const users = [
  { name: "Ali", phone: "36860504", total: -8.0, date: "2021/12/12" },
  { name: "john", phone: "35860504", total: 3.0, date: "2021/12/5" },
  { name: "Jak", phone: "36890504", total: 90.0, date: "2021/9/5" },
  { name: "Dewan", phone: "360504", total: -15.0, date: "2021/5/3" },
  { name: "Showman", phone: "66860504", total: 0.0, date: "2021/7/9" },
  { name: "Sara", phone: "76860504", total: 5.0, date: "2021/2/1" },
  { name: "Ali", phone: "36860504", total: 8.0, date: "2021/12/12" },
  { name: "Showman", phone: "66860504", total: 0.0, date: "2021/7/9" },
  { name: "Jak", phone: "36890504", total: 90.0, date: "2021/9/5" },
];
export default function Background(props: any) {
  return (
    <div className="scroll-viewBox">
      <div>
        {users.map((user) => (
          <ActiveUser user={user} />
        ))}
      </div>
    </div>
  );
 
}

const ActiveUser = ({ user }) => {
  const { name, phone, date, total } = user;
  return (
    <div className="user active">
      <div className="avatar">
        <Avatar />
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
