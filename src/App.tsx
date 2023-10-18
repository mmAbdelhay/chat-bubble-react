import './App.css'
import ChatBubble from "./components/chat/ChatBubble.tsx";
import NavBar from "./components/header/NavBar.tsx";
import {useContext} from "react";
import {MainContext} from "./context/StoreProvider.tsx";
import ChatInput from "./components/chat/ChatInput.tsx";
import Login from './components/auth/Login.tsx';
function App() {
    const {direction, user} = useContext(MainContext);

    if(!user)
        return <Login />

    return (
        <div style={{direction: direction}}>
            <NavBar/>
            <ChatBubble/>
            <ChatInput/>
        </div>
    );
}

export default App
