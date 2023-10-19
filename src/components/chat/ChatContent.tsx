import React from "react";

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