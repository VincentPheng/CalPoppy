import '../style/about.css';
import {Link} from "react-router-dom";

export default function ChatInstructions() {
  return (
    <div class="container">
        <div class="bubble">
            <h4>How to ask Poppy a Question:</h4>
            Simply type your question into the box using the keyboard and press send or enter<p/>
            <h4>Don't know what to ask?</h4>
            Visit the <Link to="/about"  style={{ color: '#FFF' }}>Learn More page</Link> for a list of suggested questions to help get you started!<p/>
            <h4>How to use the feedback feature:</h4>
            Please use the thumbs up/thumbs down buttons below each Poppy response to let us 
            know whether or not Poppy answered your question appropriately! <p/>
            <h5>Learn about using the Map features on the <Link to="/maps"  style={{ color: '#FFF' }}> Maps page </Link> </h5>
        </div>
    </div>
  );
  }
