import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ChatWindow(props) {
  const query = new URLSearchParams(window.location.search);
  const [message, setMessage] = useState("");
  const channelId = query.get("id");
  const scrollRef = useRef();
  const user = "0";
  const user2 = "0";
  const friends = {};
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  });
  const sendMessage = () => {};
  return (
    <div>
      <div className="">
        <div ref={scrollRef} className="">
          <div className="bg-white dark:bg min-h-screen !overflow-y-auto overflow-x-hidden">
            <div className="  grid place-content-center justify-start sticky border h-12 bg-white shadow-lg border-l-0 border-r-">
              <h1 className="text-black font-medium pl-5 font-mono">
                <span className="font-extrabold text-lg font-mono"># </span>
                Vishnu
              </h1>
            </div>
            <div className="">
              {[Array(5)].map((message, index) => {
                return (
                  <div className="min-h-[500px] " key={index} ref={scrollRef}>
                    <div
                      className={` sm:pl-8 dark:text-white p-3 m-2 flex w-[99%] hover:shadow-sm  rounded-lg hover:bg-opacity-50 `}
                    >
                      <div
                        className={`w-8  sm:visible invisible ${
                          (message.UserId || message.User?.uid) === user?._id
                            ? "order-2"
                            : "mt-1 mr-3"
                        } `}
                      >
                        <img
                          className={`rounded-full  ${
                            (message.UserId || message.User?.uid) === user?._id
                              ? ""
                              : ""
                          } `}
                          src="../Image/img_avatar.png"
                          alt=""
                        />
                      </div>
                      <div
                        className={` w-[99%] text-justify ${
                          (message.UserId || message.User?.uid) === user?._id
                            ? " mr-3 mt-1"
                            : ""
                        } `}
                      >
                        <div
                          className={`flex ${
                            (message.UserId || message.User?.uid) === user?._id
                              ? "justify-end"
                              : ""
                          } `}
                        >
                          <div>
                            <p
                              className={`text-sm font-light min-w-[100px] max-w-[300px] text-justify p-3 ${
                                (message.UserId || message.User?.uid) ===
                                user?._id
                                  ? "order-2  mr-2  bg-[#128C7E] bg-opacity-60 rounded-2xl text-end text-white"
                                  : " bg-[#075E54] opacity-90 text-white rounded-2xl"
                              }`}
                            >
                              <h1
                                className={`text-sm font-semibold font-Roboto pb-2  ${
                                  (message.UserId || message.User?.uid) ===
                                  user?._id
                                    ? " order-2 text-end mb-1 text-black"
                                    : ""
                                }`}
                              >
                                Vishnu
                              </h1>
                              {message?.Message}
                              Helloo
                            </p>
                            <span className={`text-xs`}>{message?.Time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="h-16 bg-white border  border-l-0 border-r-0 ">
                <div className=" text-center mt-3 flex">
                  <form className="flex w-full" onSubmit={sendMessage}>
                    <div className="grid place-content-center mr-2 ml-2  dark:text-gray-200">
                      <button className="text-2xl"></button>
                      <input
                        className="absolute block w-5 opacity-0"
                        type="file"
                      />
                    </div>
                    <input
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      className="w-[90%] text= rounded h-9 bg-slate-100 outline-gray-400 border pl-5"
                      type="text"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
