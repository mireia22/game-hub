import { useNavigate } from "react-router-dom";
import { HomeWrp, GameCard } from "./Home-styles";
import Button from "../../MainComponents/Button/Button";
import { GAMES } from "../../MainComponents/Constants/Games";

type GameRoutes = {
  Tictactoe: string;
  Hangman: string;
  Sudoku: string;
};

const Home = () => {
  const navigate = useNavigate();
  const gameRoutes: GameRoutes = {
    Tictactoe: "tic-tac-toe",
    Hangman: "hangman",
    Sudoku: "sudoku",
  };

  const goToGame = (gameName: string) => {
    const route = gameRoutes[gameName];
    if (route) {
      navigate(route);
    }
  };

  return (
    <HomeWrp>
      {GAMES.map((game) => (
        <GameCard key={game.id}>
          <h3>{game.name}</h3>
          <img src={game.image} alt={game.name} />
          <p>{game.description}</p>
          <Button onClick={() => goToGame(game.name)}>Play</Button>
        </GameCard>
      ))}
    </HomeWrp>
  );
};

export default Home;
