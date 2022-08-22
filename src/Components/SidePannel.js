import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function SidePannel({right}) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = new URLSearchParams(window.location.search);
  const channelId = query.get("id");
  const user = "0";
  const loading = "";
  const communities = "";
  const communication = (id) => {
    setSearchParams(`?id=${id}`);
    console.log(id);
  };

  const Main = [
    { title: "Community", link: "/Community" },
    { title: "Members", link: "/Members" },
    { title: "News", link: "/News" },
    { title: "Streams", link: "/Streams" },
  ];

  return (
    <div>
      <div className="border-r-2 border-l-2 h-screen top-0 duration-300 w-[250px] bg-white">
        <div className="text-3xl font-poppins ba-white font-bold h-[50px] duration-500 pt-10 mb-10">
            {right? "Online":"CHATAPP"}
          
        </div>
        <div className="flex overflow-y-auto">
          <div className="">
            <ul className="text-black text-xl cursor-pointer text-justify duration-500">
              {Main.map((list, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      channelId === list?._id
                        ? "bg-slate-500 bg-opacity-70"
                        : " hover:bg-slate-300 hover:bg-opacity-50"
                    }   text-base font-extrabold pl-5 pt-3 pb-3 ml-4 rounded-md  w-[220px] `}
                    onClick={() => {
                      communication(list?._id);
                    }}
                  >
                    {" "}
                    <span
                      className={`text-xl mr-1  ${
                        channelId === list?._id
                          ? "text-gray-700"
                          : "text-gray-500"
                      } `}
                    >
                      #
                    </span>
                    {`${list.title}`}{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidePannel;
