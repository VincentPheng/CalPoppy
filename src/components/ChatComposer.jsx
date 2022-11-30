/* chat tab: bottom bar */

/** @jsxImportSource @emotion/react */
import {Component, useRef, useState} from "react";
import { Send } from "react-feather";
import "../style/chatComposer.css";
import "../style/text.css";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import RecorderJS from 'recorder-js';
import { getAudioStream, exportBuffer } from '../lib/audio'

class Mic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stream: null,
            recording: false,
            recorder: null
        };
        this.startRecord = this.startRecord.bind(this);
        this.stopRecord = this.stopRecord.bind(this);
    }

    async componentDidMount() {
        let stream;
        try {
            stream = await getAudioStream();
        } catch (error) {
            // Users browser doesn't support audio. Add handler.
            console.log(error);
        }
        this.setState({ stream });
    }

    startRecord() {
        const { stream } = this.state;
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const recorder = new RecorderJS(audioContext);
        recorder.init(stream);
        this.setState(
          {
              recorder,
              recording: true
          }, () => recorder.start());
    }

    async stopRecord() {
        const { recorder } = this.state;
        recorder.stop().then(({blob, buffer}) => {
            RecorderJS.download(blob, 'audio'); // downloads a .wav file
            console.log("downloaded audio.wav");
        });
        this.setState({
            recording: false
        });
    }

    render() {
        const { recording, stream } = this.state;
        // Don't show record button if their browser doesn't support it.
        if (!stream) {
            return null;
        }
        return (
          <button type="button" className="sendButtonStyle" onClick={() => {
              recording ? this.stopRecord() : this.startRecord();
          }}>
              <i className={recording ? "bi bi-mic-mute" : "bi bi-mic"}></i>
          </button>
        );
    }
}

export default function ChatComposer({ onSend }) {

    // keyboard functionality
    const [onscreenKey, setOnscreenKey] = useState(false);
    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("default");
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
                    <button type="button" className="sendButtonStyle" onClick={() => setOnscreenKey(!onscreenKey)}>
                        <i className="bi bi-keyboard"></i>
                    </button>
                    <Mic />
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