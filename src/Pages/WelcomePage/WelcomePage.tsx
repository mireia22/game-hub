import { Link } from "react-router-dom";
import { WelcomeWrp, TitleWrp, PWrp, LinkWrp } from "./WelcomePage-styles";
const WelcomePage = () => {
  return (
    <WelcomeWrp>
      <TitleWrp>
        <h1>Welcome</h1>
        <h1>Peak Bagger!</h1>
      </TitleWrp>
      <LinkWrp>
        <Link to="/login">
          <span>Login Here!</span>
        </Link>
      </LinkWrp>
      <PWrp>
        <p>Immerse in our collection of games </p>
        <p> and use strategies to resolve </p>
        <p>exciting mental challenges.</p>
      </PWrp>
    </WelcomeWrp>
  );
};

export default WelcomePage;
