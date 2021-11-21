import { LogoIcon, OptionIcon, SearchIcon } from "../Icons";
import React, { useState } from "react";

export default function TopBar(props) {
  const [searchToggle, set_SearchToggle] = useState(true);

  function SearchClickHandler(params: any) {
    set_SearchToggle(!searchToggle);
  }

  const SearchTop = () => {
    return (
      <div className="logo-container">
        <input type="search" />
        <div className="tools">
          <span>
            <SearchIcon onClick={SearchClickHandler} />
          </span>
        </div>
      </div>
    );
  };

  const NormalTop = () => {
    return (
      <>
        <div className="logo-container">
          <span>
            <LogoIcon />
          </span>
          <span className="logo-title">mr.piyson</span>
        </div>
        <div className="tools">
          <span>
            <SearchIcon onClick={SearchClickHandler} />
          </span>
          <span>
            <OptionIcon />
          </span>
        </div>
      </>
    );
  };
  return (
    <div className="top-bar">
      {searchToggle ? <NormalTop /> : <SearchTop />}
    </div>
  );
}
