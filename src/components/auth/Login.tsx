import React, {useContext, useState} from "react";
import {MainContext} from "../../context/StoreProvider.tsx";
import {getRandomNumber} from "../../services/getRandimNumber.ts";


const Login : React.FC = () => {
    const {setUser} = useContext(MainContext);
    const [newUser, setNewUser] = useState("");
    const [file, setFile] = useState(null);
    const handleUploadFile = (e: any) => {
        if (e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setFile(reader.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const handleLogin = () => {
        if (newUser.length <= 0) return;

        const payload = {
            id: getRandomNumber(),
            name: newUser,
            avatar: file ?? 'https://rb.gy/xbf6j'
        }
        setUser(payload)
    }

    return (
        <div className={'flex items-center justify-center h-screen'}>
            <div>
                <h2 className={'my-3 text-center text-4xl'}>Login</h2>
                <div className="m-4">
                    <label className={'my-3'}>Name : </label>
                    <input type="text" placeholder="Name" value={newUser} onChange={e => setNewUser(e.target.value)}
                           className="input input-bordered w-full max-w-xs"/>
                </div>
                <div className="m-4">
                    <label className={'my-3'}>Avatar : </label>
                    <input type="file" className="file-input file-input-bordered  max-w-xs w-full" required={true}
                           onChange={handleUploadFile}/>
                </div>

                <div className="m-4">
                    <label className={'my-3'}>Theme : </label>
                    <select className="select w-full max-w-xs" onChange={e => {
                        document.documentElement.setAttribute('data-theme', e.target.value);
                    }}>
                        <option disabled selected>Pick your favorite theme</option>

                        <option>light</option>
                        <option>dark</option>
                        <option>cupcake</option>
                        <option>bumblebee</option>
                        <option>emerald</option>
                        <option>corporate</option>
                        <option>synthwave</option>
                        <option>retro</option>
                    </select>
                </div>

                <button className={'btn float-right mx-10 mt-3'} disabled={newUser.length <= 0}
                        onClick={handleLogin}>Login
                </button>
            </div>

        </div>
    )
}

export default Login;