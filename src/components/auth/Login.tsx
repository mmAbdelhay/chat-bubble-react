import React, {useContext, useState} from "react";
import {MainContext} from "../../context/StoreProvider.tsx";
import {getRandomNumber} from "../../services/getRandimNumber.ts";

interface Props {
}

const Login: React.FC<Props> = () => {
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
                    <label>Name : </label>
                    <input type="text" placeholder="Name" value={newUser} onChange={e => setNewUser(e.target.value)}
                           className="input input-bordered w-full max-w-xs"/>
                </div>
                <div className="m-4">
                    <label>Avatar : </label>
                    <input type="file" className="file-input file-input-bordered  max-w-xs w-full" required={true}
                           onChange={handleUploadFile}/>
                </div>
                <button className={'btn float-right mx-10 mt-3'} disabled={newUser.length <= 0}
                        onClick={handleLogin}>Login
                </button>
            </div>

        </div>
    )
}

export default Login;