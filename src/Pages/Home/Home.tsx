import { useNavigate } from "react-router-dom";
import { HomeWrp, HomeTextWrp, HomeUl, GameCard } from "./Home-styles";
import Button from "../../MainComponents/Button/Button";
import { GAMES } from "../../MainComponents/Constants/Games";
import { useAuthContext } from "../../Hooks/Context/useAuthContext";

type Game = {
  name: string;
  id: string;
  route: string;
  image: string;
  description: string;
};

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
        {GAMES.map((game: Game) => (
          <GameCard key={game.id}>
            <h3>{game.name}</h3>
            <img src={game.image} alt={game.name} loading="lazy" />
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
