import { Link, Navigate } from "react-router-dom";
import Button from "../MainComponents/Button/Button";
import { useAuthContext } from "../Hooks/Context/useAuthContext";
import { GiMountainClimbing } from "react-icons/gi";
import { LinksWrp, ProtectedNavWrp } from "./ProtectedLayout-styles";
import { GAMES } from "../MainComponents/Constants/Games";

export const ProtectedNavLayout = () => {
  const { user, logout } = useAuthContext();
  const isUserLoggedIn = Boolean(user);
  return (
    <ProtectedNavWrp>
      {isUserLoggedIn ? (
        <LinksWrp>
          <Link to="/dashboard">
            <GiMountainClimbing className="climb-icon" />
          </Link>

          {GAMES.map((game) => (
            <Link key={game.id} to={game.route}>
              <span className="link-label">{game.name}</span>
            </Link>
          ))}

          <Button variant="log" onClick={logout}>
            Logout
          </Button>
        </LinksWrp>
      ) : (
        <Navigate to="/" />
      )}
    </ProtectedNavWrp>
  );
};
