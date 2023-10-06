import { useNavigate } from "react-router-dom";
import { HomeWrp, HomeTextWrp, HomeUl, GameCard } from "./Home-styles";
import Button from "../../MainComponents/Button/Button";
import { GAMES } from "../../MainComponents/Constants/Games";
import { useAuthContext } from "../../Context/AuthContext";

const Home: React.FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const gameRoutes: Record<string, string> = {};

  for (const game of GAMES) {
    gameRoutes[game.name] = game.route;
  }

  const goToGame = (gameName: string) => {
    const route = gameRoutes[gameName];
    if (route) {
      navigate(route);
    }
  };

  return (
    <HomeWrp>
      <HomeTextWrp>
        <h3>Nice to see you here</h3>
        <h1>{user?.username?.toUpperCase()}</h1>
        <h2>What do you want to play?</h2>
      </HomeTextWrp>
      <HomeUl>
        {GAMES.map((game) => (
          <GameCard key={game.id}>
            <h3>{game.name}</h3>
            <img src={game.image} alt={game.name} />
            <p>{game.description}</p>
            <Button variant="play" onClick={() => goToGame(game.name)}>
              Play
            </Button>
          </GameCard>
        ))}
      </HomeUl>
    </HomeWrp>
  );
};

export default Home;
