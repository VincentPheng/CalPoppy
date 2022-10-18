import { libguide, contactIntro, creatorIntro, aboutJMS, aboutKurfess, aboutHayes, calPoppyResearch, poppy21_22 } from "./contactTxt"
import "../style/home.scss";
import "../style/contact.css";
import kurfess from "../images/kurfess_franz.jpeg";
import hayes from "../images/hayes_grey.jpeg";

const Contact = () => {
    return (
        <div style={{padding: "20px"}}>
            <h1>Contact</h1>
            { contactIntro[0] }
            <a href={`${libguide.calpoppy}`} target="_blank" rel="noreferrer">{ contactIntro[1] }</a>
            { contactIntro[2] }
            
            <br /><hr className="divline"></hr>

            <h1>Creators</h1>
            { creatorIntro[0] } <br /><br />


            <h2>Cal Poppy Research Team</h2> <br />
            <div className="inlineImg">
                <div id="scaramozzino" className="inlineImgBlock">
                    <h4>{ calPoppyResearch.scaramozzino }</h4>
                    { aboutJMS[0] }
                </div>
                <div id="kurfess" className="inlineImgBlock">
                    <h4>{ calPoppyResearch.kurfess }</h4>
                    <img src={kurfess} className="contactImg" alt="Dr. Franz J. Kurfess" />
                    {aboutKurfess[0]}<br/>{aboutKurfess[1]}
                </div>
                <div id="hayes" className="inlineImgBlock">
                    <h4>{ calPoppyResearch.hayes }</h4>
                    <div className="contactImg">
                        <img src={hayes} className="contactImg" alt="Dr. Grey Hayes" /><br />
                        <text className="imgCaption">{aboutHayes[1]}</text>
                    </div>
                    {aboutHayes[0]}
                </div>
            </div>

            <h2>Team Poppy 2021&ndash;2022</h2>
            <h4>Advisors</h4>
            { poppy21_22.advisor.slivovsky }<br />
            { poppy21_22.advisor.kurfess }<br /><br />
            <h4>Poppies</h4>
            { poppy21_22.poppy.barruel }<br />
            { poppy21_22.poppy.chang }<br />
            { poppy21_22.poppy.chekhanovsky }<br />
            { poppy21_22.poppy.mccoy }<br />
            { poppy21_22.poppy.nguyen }<br />
            { poppy21_22.poppy.thurman }<br />
            { poppy21_22.poppy.wesolowski }

            <br /><br />

            <h2>Additional Creators</h2>
            Click here for additional creators: <a href={`${libguide.poppychatbot}`} target="_blank" rel="noreferrer">{ libguide.poppychatbot }</a>
             
        </div>
    )
}

export default Contact;
