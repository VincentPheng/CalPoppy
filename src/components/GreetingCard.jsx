/** @jsxImportSource @emotion/react */
import '../style/greetingCard.css';
import logoSrc from "../images/spr_logo.png"

export default function GreetingCard() {
  const titleText = "Welcome to Swanton Poppy Chat!";
  const descriptionText = `Welcome to the Alpha version of Poppy Chat! Ask Poppy about Swanton Pacific Ranch! Check out how to use Poppy and about FAQs by clicking the question mark above.
   Please note Poppy is a child and is learning more vocabulary every day. Your questions help Poppy learn!`;
  
  const logoAltText = `Swanton Poppy Logo`;

  const description = descriptionText.split("\n").map((text, i) => (
    <p key={i} className="descriptionStyle">
      {text}
    </p>
  ));

  return (
    <div className="cardStyles">
      <img className="logoStyle" src={logoSrc} alt={logoAltText} />
      <h2 className="titleStyle">{titleText}</h2>
      {description}
    </div>
  );
}
