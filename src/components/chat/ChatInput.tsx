import React, {useContext, useState} from "react";
import {MainContext} from "../../context/StoreProvider.tsx";
import SendMedia from "./SendMedia.tsx";
import {getRandomNumber} from "../../services/getRandimNumber.ts";

const ChatInput: React.FC = () => {
    const [newMessage, setNewMessage] = useState("");
    const {setMessages, user} = useContext(MainContext)

    const handleSendContent = () => {
        if (newMessage.length <= 0) return;
        const payload = {
            id: getRandomNumber(),
            content: newMessage,
            sender: user
        }
        setMessages((previousMessages: never) => [...previousMessages, payload]);
        setNewMessage("");
    }

    return (
        <div className={'flex w-full flex-wrap gap-2 fixed bottom-2'}>
            <SendMedia />
            <textarea className="textarea  textarea-bordered block grow" required={true} value={newMessage} onChange={e => setNewMessage(e.target.value)} rows="1" placeholder="Type here"></textarea>
            <button className="btn" disabled={newMessage.length <= 0} onClick={handleSendContent}>send</button>
        </div>
    )
}

export default ChatInput