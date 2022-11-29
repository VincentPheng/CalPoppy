/* chat tab: bottom bar */

/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { Send } from "react-feather";
import "../style/chatComposer.css";
import "../style/text.css";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { useEffect } from "react";
import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export default function ChatComposer({ onSend }) {

    // keyboard functionality
    const [onscreenKey, setOnscreenKey] = useState(false);
    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("default");
    const [isRecording, setIsRecording] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const keyboard = useRef();

    const onChange = input => {
        setInput(input);
        // console.log("Input changed", input);
    };

    const handleShift = () => {
        const newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
    };

    const onKeyPress = (button, e) => {
        // console.log("Button pressed", button);

        if (button === "{shift}" || button === "{lock}") handleShift();
        if (button === "{enter}") sendMessage(e);
    };

    const onChangeInput = ({target}) => {
        setInput(target.value);
        console.log("set input to", input)
        if (onscreenKey) {
            keyboard.current.setInput(input);
        }
    };

    useEffect(async () => {
        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({"audio": true}).then((stream) => {
                setIsBlocked(false);
            }).catch((err) => {
                setIsBlocked(true);
                console.error('Cannot connect to microphone, check to see if microphone is attached');
            });
        } else {
            setIsBlocked(true);
            console.error('Cannot connect to microphone, update your browser');
        }
    }, []);

    const start = () => {
        if (isBlocked) {
          console.log('Permission Denied');
        } else {
          Mp3Recorder
            .start()
            .then(() => {
                setIsRecording(true);
            }).catch((e) => console.error(e));
        }
    };

    const stop = () => {
        Mp3Recorder
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob);
            console.log(blobURL)
            const tmp = new Audio(blobURL);
            tmp.play() 
            setIsRecording(false);
          }).catch((e) => console.log(e));
    };

    // Takes the message from the content editable field and sends it out
    function sendMessage(e) {
        e.preventDefault();

        if (input) {
            onSend(input);
            setInput("");
            if (onscreenKey) {
                keyboard.current.clearInput();
            }
            
        }
        return;
    }

    return (
        <div>
            <div className="menuBarStyle ChatComposer">
                <form className="contentStyle" onSubmit={sendMessage}>
                    <input
                        className="scrollableY txtFieldStyle"
                        value={input}
                        onChange={onChangeInput}
                    />
                    <button type="button" className="sendButtonStyle" onClick={() => {console.log("input:", input); setOnscreenKey(!onscreenKey)}}>
                        <i class="bi bi-keyboard"></i>
                    </button>
                    { isRecording ? 
                        <button type="button" className="sendButtonStyle" onClick={() => {stop()}}>
                            stop
                        </button> :
                        <button type="button" className="sendButtonStyle" onClick={() => {start()}}>
                            mic
                        </button>
                    }
                    <button type="submit" className="sendButtonStyle">
                        <Send size={20} />
                        <p className="buttonTextStyle">Send</p>
                    </button>
                </form>
            </div>

            {onscreenKey && (
                <Keyboard
                    keyboardRef={r => (keyboard.current = r)}
                    layoutName={layout}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                />
            )}
        </div>
    );
}