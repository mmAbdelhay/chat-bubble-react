import React, {useContext} from "react";
import {MainContext} from "../../context/StoreProvider.tsx";
import avatar from '../../assets/avatar.png'
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
        <div className={`chat chat-${user.id == message.sender.id ? "end" : "start"}`}>
            <div className="chat-image avatar ">
                <div className="w-10 rounded-full">
                    <img src={user.avatar} alt={'avatar'} className="w-10 rounded-full"/>
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