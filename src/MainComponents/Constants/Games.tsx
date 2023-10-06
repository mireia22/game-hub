import { v4 as uuidv4 } from "uuid";

export const GAMES = [
  {
    name: "Tictactoe",
    id: uuidv4(),
    route: "/dashboard/tic-tac-toe",
    image: "/assets/tictactoe/tictactoe-principal.jpg",
    description: "Classic two-player grid-based game.",
    introText: {
      p1: "Get your gear ready!",
      p2: "Climb strategically to be the first to clip 3 carabiners",
      p3: "together, whether up, across, or diagonally,",
      p4: "to reach the summit of victory.",
    },

    climbingWalls: [
      {
        name: "El Capitan",
        image: "/assets/tictactoe/walls/elcapitan.jpg",
      },
      {
        name: "Mallos de Riglos",
        image: "/assets/tictactoe/walls/riglos.jpg",
      },

      {
        name: "Pedraforca",
        image: "/assets/tictactoe/walls/pedraforca.jpg",
      },
    ],
  },
  {
    name: "Hangman",
    id: uuidv4(),
    route: "/dashboard/hangman",

    image: "/assets/hangman/hangman-principal.jpg",
    description: "Guess the word before the hangman is drawn.",
    introText: {
      p1: "Imagine hanging from a Linguistic Cliff, where every correct guess pulls you higher, but a wrong one might cut your rope!",
      p2: "Number of quickdraws you want to take:",
    },
  },
  {
    name: "Sudoku",
    id: uuidv4(),
    route: "/dashboard/sudoku",
    image: "/assets/sudoku/sudoku-principal.jpg",
    description: "Number puzzle game on a 9x9 grid.",
    introText: {
      p1: "Your task: complete the Sudoku puzzle while ensuring the climbing wall's safety.",
      p2: "With each correct number you place, you secure a climbing hold",
      p3: "Are you ready?",
    },
  },
];
