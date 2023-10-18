import React, {useState, createContext} from "react";

export const MainContext = createContext(null);

const StoreProvider = (props: any) => {
    const [user, setUser] = useState();
    const [direction, setDirection] = useState("ltr");
    const [messages, setMessages] = useState([]);

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