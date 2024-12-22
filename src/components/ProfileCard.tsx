import React from "react";

const ProfileCard = (props: any) => {
  return (
    <div className="w-[370px] h-[450px] border flex justify-center rounded-md bg-white">
      <div className="w-[90%] h-[60%] bg-[blue] mt-4 rounded-md">
        <img
          className="w-[100%] h-[100%] rounded-md"
          src={props.img}
          alt={props.name}
        />
        <div className="w-[100%] h-[50px] flex items-center justify-between mt-[20px] ">
          <div className="flex items-center gap-2">
            <div className="w-[50px] h-[50px]">
              <img className="rounded-full" src={props.avatar} alt="" />
            </div>
            <div>{props.description}</div>
          </div>
          <div> {props.price}</div>
        </div>
        <div className="w-[100%] h-[50px] mt-[15px] rounded-md flex items-center justify-center ">
          {" "}
          <button className="px-[7px] py-[7px] bg-[black] text-white text-[18px] rounded-md ">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
