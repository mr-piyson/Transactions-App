import { Avatar, OptionIcon, SearchIcon } from "../Icons/index";
import img from "../Icons/img_avatar2.jpg";

export default function Header(props) {
  return (
    <div>
      <div className="top-bar">
        <div className="logo-container">
          <span className="Avatar-container">
            <img src={img.src} alt="" />
          </span>
          <span className="logo-title">Muntadher Ahmed</span>
        </div>
        <div className="tools">
          <span>
            <SearchIcon />
          </span>
          <span>
            <OptionIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
