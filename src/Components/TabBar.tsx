import { useLayoutEffect, useRef, useState } from "react";
import { Inbox2Icon, WalletIcon, HistoryIcon } from "../Icons";

export default function (props: any) {
  const [WinWidth, set_width] = useState(0);
  const [position, set_position] = useState(0);
  const [tabSelected, set_tabSelected] = useState(0);
  const ele = useRef(null);

  let PointerStyle = {
    width: `${WinWidth}px`,
    left: `${position}px`,
  };

  useLayoutEffect(() => {
    set_width(window.innerWidth / 3);
    set_position((window.innerWidth / 3) * tabSelected);

    window.addEventListener("resize", () => {
      const calc = window.innerWidth / 3;
      set_width(calc);
      set_position(calc * tabSelected);
    });
  }, [tabSelected]);

  function onClickHandler(key) {
    set_tabSelected(key);
    props.onTabChange ? props.onTabChange(key) : null;
  }

  return (
    <div className="tab_bar">
      <button
        ref={ele}
        onClick={(e) => {
          onClickHandler(0);
        }}
      >
        <Inbox2Icon className={tabSelected === 0 ? "selected" : "icon"} />
      </button>

      <button
        // className={tabSelected === 1 ? "Active-tab" : ""}
        onClick={(e) => {
          onClickHandler(1);
        }}
      >
        <HistoryIcon className={tabSelected === 1 ? "selected" : "icon"} />
      </button>

      <button
        // className={tabSelected === 2 ? "Active-tab" : ""}
        onClick={(e) => {
          onClickHandler(2);
        }}
      >
        <WalletIcon className={tabSelected === 2 ? "selected" : "icon"} />
      </button>
      <span className="pointer" style={PointerStyle}></span>
    </div>
  );
}
