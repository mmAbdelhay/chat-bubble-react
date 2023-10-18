import React, {useContext} from "react";
import {MainContext} from "../../context/StoreProvider.tsx";
import ChatList from "./ChatList.tsx";

interface Props {
}

const ChatContent: React.FC<Props> = ({message}) => {

    switch (message.type) {
        case "image":
            return <img alt={'message'} className="chat-bubble w-52" src={message.content}/>
        case "voice":
            return <audio controls src={message.content}></audio>
        default:
            return <div>{message.content}</div>
    }
}

export default ChatContent;