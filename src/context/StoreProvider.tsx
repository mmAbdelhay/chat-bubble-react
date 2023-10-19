import React, {useState, createContext, useEffect} from "react";
import {getRandomNumber} from "../services/getRandimNumber.ts";

export const MainContext = createContext(null);

const defaultMessages = [
    {
        id: getRandomNumber(),
        content: "just default content",
        type: "text",
        sender: {
            id: getRandomNumber(),
            name: "default1",
            avatar: 'https://rb.gy/xbf6j'
        }
    },
    {
        id: getRandomNumber(),
        content: "another default content",
        type: "text",
        sender: {
            id: getRandomNumber(),
            name: "default2",
            avatar: 'https://rb.gy/xbf6j'
        }
    }
];

const StoreProvider = (props: any) => {
    const [user, setUser] = useState();
    const [direction, setDirection] = useState("ltr");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(defaultMessages)
    }, [])

    return (
        <React.Fragment>
            <MainContext.Provider
                value={{
                    user, setUser,
                    direction, setDirection,
                    messages, setMessages
                }}
            >
                {props.children}
            </MainContext.Provider>
        </React.Fragment>
    );
};
export default StoreProvider;