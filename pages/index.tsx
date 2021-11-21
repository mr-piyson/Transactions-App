import { TabBar, TopBar, Background } from "@Components/index";
import { InboxIcon } from "../src/Icons/index";
import React, { useState } from "react";

export default function Home() {
  const [page, set_page] = useState(0);
  function onTabChangeHandler(key) {
    set_page(key);
  }
  function handlePages(params: number) {
    switch (params) {
      case 0:
        return <Background />;

      case 1:
        return <EmptyPage />;

      case 2:
        return <EmptyPage />;
      default:
        return <Background />;
    }
  }

  return (
    <main>
      <TopBar />
      <TabBar onTabChange={onTabChangeHandler} />
      {/* // ! FIXME: This swiper should allow to scroll vertically; */}

      {handlePages(page)}
    </main>
  );
}
const EmptyPage = () => {
  return (
    <div className="background">
      {true ? <InboxIcon /> : null}
      <span>There is no Deals yet</span>
    </div>
  );
};
