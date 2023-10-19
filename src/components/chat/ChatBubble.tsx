import React, {useContext} from "react";
import {MainContext} from "../../context/StoreProvider.tsx";
import ChatList from "./ChatList.tsx";

const ChatBubble: React.FC = () => {
    const {user, messages} = useContext(MainContext)

    if (messages.length == 0)
        return <div className={'text-center mt-8'}>No chat yet</div>

    return (
        <div style={{marginBottom : 80}}>
            {messages.map((message) => <ChatList key={message.id} message={message}/>)}
        </div>
    );
}

export default ChatBubble;