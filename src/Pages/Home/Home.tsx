import { useNavigate } from "react-router-dom";
import { HomeWrp, GameCard } from "./Home-styles";
import Button from "../../MainComponents/Button/Button";
import { GAMES } from "../../MainComponents/Constants/Games";
import { useAuthContext } from "../../Context/AuthContext";

type GameRoutes = {
  Tictactoe: string;
  Hangman: string;
  Sudoku: string;
};

const Home = () => {
  const { user } = useAuthContext();
  console.log(user);
  const navigate = useNavigate();
  const gameRoutes: GameRoutes = {
    Tictactoe: "/dashboard/tic-tac-toe",
    Hangman: "/dashboard/hangman",
    Sudoku: "/dashboard/sudoku",
  };

  const goToGame = (gameName: string) => {
    const route = gameRoutes[gameName];
    if (route) {
      navigate(route);
    }
  };

  return (
    <>
      <h2>Hi {user.username.toUpperCase()}</h2>
      <h2>What do you want to play?</h2>
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
    </>
  );
};

export default Home;
