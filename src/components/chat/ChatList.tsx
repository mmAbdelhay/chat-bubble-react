import React, {useContext} from "react";
import {MainContext} from "../../context/StoreProvider.tsx";
import ChatContent from "./ChatContent.tsx";

interface Props {
    message: {
        id: number,
        content: string;
        type: string,
        sender: {
            id: number,
            name: string
        }
    }
}

const ChatList: React.FC<Props> = ({message}) => {
    const {user} = useContext(MainContext)

    return (
        <div className={`chat ${user.id == message.sender.id ? "chat-end" : "chat-start"}`}>
            <div className="chat-image avatar ">
                <div className="w-10 rounded-full">
                    <img src={message.sender.avatar} alt={'avatar'} className="w-10 rounded-full"/>
                </div>
            </div>
            <div className={"chat-header"}>
                {message.sender.name}
            </div>
            <div className="chat-bubble">
                <ChatContent message={message}/>
            </div>
        </div>
    )
}

export default ChatList