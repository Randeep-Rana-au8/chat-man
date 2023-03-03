import React, { useContext } from "react";
import Cam from "../Assets/img/cam.png";
import Add from "../Assets/img/add.png";
import More from "../Assets/img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const displayName = data.user?.displayName || '';
  const username = displayName.charAt(0).toUpperCase() + displayName.slice(1)
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{username}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
