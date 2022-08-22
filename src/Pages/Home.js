import React from "react";
import ChatWindow from "../Components/ChatWindow";
import SidePannel from "../Components/SidePannel";

function Home() {
  return (
    <div className="flex justify-between">
      <div className="">
        <SidePannel />
      </div>
      <div className="w-screen h-screen">
        <ChatWindow />
      </div>
      <div className="flex place-content-end">
        <SidePannel right={true} />
      </div>
    </div>
  );
}

export default Home;
