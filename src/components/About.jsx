import {suggestions, suggestionsAnswers, aboutSPR, aboutCreators, aboutHayes, aboutKurfess, disclaimer} from "./aboutTxt";
import '../style/about.css';
import hayes from "../images/hayes_grey.jpeg";
import kurfess from "../images/kurfess_franz.jpeg";
import { suggested } from "./Chatbot";
import { libguide } from "./contactTxt";
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row text-white center-block">
        <div className="col" align="center">
          <div className="bubble">
            <div className="card-body">
              <h4 className="card-title">Suggested Questions</h4>
              <h6>Click on any of the questions to ask Poppy!</h6>
              <div className="btn-group-vertical">
                <button onClick={() =>{navigate('/'); suggested(suggestions[0], suggestionsAnswers[0]);}} type="button" className="roundbutton">{suggestions[0]}</button>
                <button onClick={() =>{navigate('/'); suggested(suggestions[1], suggestionsAnswers[1]);}} type="button" className="roundbutton">{suggestions[1]}</button>
                <button onClick={() =>{navigate('/'); suggested(suggestions[2], suggestionsAnswers[2]);}} type="button" className="roundbutton">{suggestions[2]}</button>
                <button onClick={() =>{navigate('/'); suggested(suggestions[3], suggestionsAnswers[3]);}} type="button" className="roundbutton">{suggestions[3]}</button>
                <button onClick={() =>{navigate('/'); suggested(suggestions[4], suggestionsAnswers[4]);}} type="button" className="roundbutton">{suggestions[4]}</button>
                <button onClick={() =>{navigate('/'); suggested(suggestions[5], suggestionsAnswers[5]);}} type="button" className="roundbutton">{suggestions[5]}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col" align="center">
          <div className="bubble">
            <div className="card-body">
              <h4 className="card-title">About Swanton Pacific Ranch</h4>
              <h6>
                <br/>{aboutSPR[0]}<p/>
                <br/>{aboutSPR[1]}<br/>
                <br/>{aboutSPR[2]}<br/>
                <a href={`${libguide.swanton}`} target="_blank" style={{color:"white"}}>{libguide.swanton}</a>
              </h6>
            </div>
          </div>
        </div>

        <div className="w-70"></div>

        <div className="col" align="center">
          <div className="bubble">
            <div className="card-body">
              <h4 className="card-title">About the Creators</h4>
              <h6><br/>{aboutCreators[0]}<p/>
                  {aboutCreators[1]}<br/>
                  {aboutCreators[2]}
              </h6>

              <h5>
                <br/>Dr. Grey Hayes<br/>
              </h5>
              <img src={hayes} width="50%" /><br/>
              {aboutHayes[1]}
              <h6>
                <br/>{aboutHayes[0]}
              </h6>

              <h5>
                <br/>Dr. Franz J. Kurfess<br/>
              </h5>
              <img src={kurfess} width="50%" /><br/>
              <h6>
                <br/>{aboutKurfess[0]}<br/>{aboutKurfess[1]}
              </h6>
            </div>
          </div>
        </div>
        <div className="col" align="center">
          <div className="bubble">
            <div className="card-body">
              <h4 className="card-title">Disclaimer</h4>
              <h6>{ disclaimer }</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}