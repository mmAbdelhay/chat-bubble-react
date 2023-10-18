import React, {useState, useRef, useContext} from 'react';
import {MainContext} from "../../context/StoreProvider.tsx";
import {getRandomNumber} from "../../services/getRandimNumber.ts";

interface Props {
}

const VoiceRecorder: React.FC<Props> = () => {
    const {setMessages, user} = useContext(MainContext)
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioBlob, setAudioBlob] = useState(null);
    const audioRef = useRef(null);
    const [recording, setRecording] = useState(false);

    const startRecording = () => {
        navigator.mediaDevices
            .getUserMedia({audio: true})
            .then((stream) => {
                setRecording(true)
                const recorder = new MediaRecorder(stream);
                const audioChunks = [];

                recorder.ondataavailable = (e) => {
                    if (e.data.size > 0) {
                        audioChunks.push(e.data);
                    }
                };

                recorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, {type: 'audio/wav'});
                    setAudioBlob(audioBlob);
                };

                recorder.start();
                setMediaRecorder(recorder);
            })
            .catch((error) => {
                console.error('Error accessing the microphone:', error);
            });
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            setRecording(false)
            mediaRecorder.stop();
        }
    };

    const playRecording = () => {
        if (audioBlob) {
            const audioURL = URL.createObjectURL(audioBlob);
            audioRef.current.src = audioURL;
            audioRef.current.play();
        }
    };

    const handleSendVoice = () => {
        if (!audioBlob) return;

        const payload = {
            id: getRandomNumber(),
            content: URL.createObjectURL(audioBlob),
            type: 'voice',
            sender: user
        }
        setMessages((previousMessages: never) => [...previousMessages, payload]);
        setRecording(false);
        setMediaRecorder(null);
        setAudioBlob(null)

    }

    return (
        <div className={'my-2'}>
            Record voice note :
            {!recording ?
                <button className="btn  btn-success btn-sm mx-3" onClick={startRecording}>Start</button> :
                <button className="btn  btn-error btn-sm mx-3" onClick={stopRecording}>Stop</button>}

            {audioBlob && (
                <div>
                    <button className={'btn  btn-success btn-sm mx-3'} onClick={playRecording}>Play</button>
                    <button className="btn" onClick={handleSendVoice}>send</button>
                    <audio controls ref={audioRef}></audio>
                </div>
            )}
        </div>
    );
};

export default VoiceRecorder;
