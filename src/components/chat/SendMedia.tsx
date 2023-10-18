import React from "react";
import VoiceRecorder from "./VoiceRecorder.tsx";
import {getRandomNumber} from "../../services/getRandimNumber.ts";
import FileUploader from "./FileUploader.tsx";

interface Props {
}

const SendMedia: React.FC<Props> = () => {

    return (
        <>
            <button className="btn btn-circle" onClick={() => document.getElementById('send-media-modal').showModal()}>+</button>
            <dialog id="send-media-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className={'m-3'}>
                        <FileUploader />
                        <hr className={'m-3'}/>
                        <VoiceRecorder />
                        <hr className={'m-3'}/>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default SendMedia