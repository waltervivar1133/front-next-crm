import React from "react";
import { MyValuesMessageToast } from "../../../types/MessageToast";


const MessageToast = ({ message, type }: MyValuesMessageToast) => {
  return (
    <div
      className={` bg-red-500 ${
        type === "success" && "bg-green-600"
      } rounded-md py-2 px-3 w-full my-5 md:max-w-lg text-white font-bold flex justify-center items-center`}
    >
      <p>{message}</p>
    </div>
  );
};

export default MessageToast;
