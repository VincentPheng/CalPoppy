/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import ChatInstructions from "./ChatInstructions"
import GreetingCard from "./GreetingCard";
import "../style/chatWindow.css";
import "../style/text.css";

export default function ChatWindow({
conversation,
suggestionsOpen,
onSend,
onSuggestionClick,
onFeedbackGiven,
}) {

const chatWindowRef = useRef(null);

// Scroll to the bottom of the chat window every time a new message is sent
useEffect(() => {
    if (!chatWindowRef.current || suggestionsOpen) return;
    chatWindowRef.current.scrollTo({
        top: chatWindowRef.current.scrollHeight,
        left: 0,
        behavior: "smooth",
    });
});

/**
 * Create message bubbles from the current conversation
 */
const conversationElements = conversation.length ? (
    conversation.map((msg) => (
    <MessageBubble
        key={msg.timestamp}
        text={msg.text}
        timestamp={msg.timestamp}
        showFeedback={msg.responseType === "answer"}
        senderID={msg.sender !== "user"}
        feedback={msg.feedback}
        onFeedbackGiven={onFeedbackGiven}
    />
    ))
) : (
    <GreetingCard />
);
return (
    <div className="ChatWindow scrollableY windowStyles" ref={chatWindowRef}>
    {/* toggles the How to Use Poppy instructions page */}
    {suggestionsOpen ? (
        <ChatInstructions
        onSend={onSend}
        onSuggestionClick={onSuggestionClick} 
        />
    ) : (
        conversationElements
    )}
    </div>
);
}
