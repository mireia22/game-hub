import { Link } from "react-router-dom";
import { WelcomeWrp, PWrp, LinkWrp } from "./WelcomePage-styles";

const WelcomePage = () => {
  return (
    <WelcomeWrp>
      <article>
        <h1>Welcome</h1>
        <h1>Peak Bagger!</h1>
      </article>

      <PWrp>
        <p>Immerse in our collection of games </p>
        <p> and use strategies to resolve </p>
        <p>exciting mental challenges.</p>
      </PWrp>
      <LinkWrp>
        <Link to="/login">
          <span>Login Here!</span>
        </Link>
      </LinkWrp>
    </WelcomeWrp>
  );
};

export default WelcomePage;
