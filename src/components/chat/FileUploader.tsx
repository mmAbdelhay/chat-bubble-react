import React, {useContext, useState} from "react";
import {getRandomNumber} from "../../services/getRandimNumber.ts";
import {MainContext} from "../../context/StoreProvider.tsx";

interface Props {
}

const FileUploader: React.FC<Props> = () => {
    const {setMessages, user} = useContext(MainContext);
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

    const handleSendFile = () => {
        if (!file) return;

        const payload = {
            id: getRandomNumber(),
            content: file,
            type: 'image',
            sender: user
        }
        setMessages((previousMessages: never) => [...previousMessages, payload]);
        setFile(null)
    }

    return (
        <div className={'flex gap-2'}>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={handleUploadFile}/>
            <button className="btn" onClick={handleSendFile}>send</button>
        </div>
    )
}

export default FileUploader;