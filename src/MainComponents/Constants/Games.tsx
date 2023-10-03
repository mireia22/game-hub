import { v4 as uuidv4 } from "uuid";

export const GAMES = [
  {
    name: "Tictactoe",
    id: uuidv4(),
    image: "/assets/tictactoe/tictactoe-principal.jpg",
    description: "Classic two-player grid-based game.",
    introText: {
      p1: "Get your gear ready!",
      p2: `Climb strategically and be the first to
          clip three carabiners together, whether up, across, or diagonally, to
          reach the summit of victory.`,
    },
    climbingWalls: [
      {
        name: "El Capitan",
        image: "/assets/tictactoe/elcapitan.jpg",
      },
      {
        name: "Mallos de Riglos",
        image: "/assets/tictactoe/riglos.jpg",
      },

      {
        name: "Pedraforca",
        image: "/assets/tictactoe/pedraforca.jpg",
      },
    ],
  },
  {
    name: "Hangman",
    id: uuidv4(),
    image: "/assets/hangman/hangman-principal.jpg",
    description: "Guess the word before the hangman is drawn.",
    introText: {
      p1: "Embark on this new Climbing Challenge, where your VACABULARY becomes your gear.",
      p2: "Imagine hanging from a Linguistic Cliff, where every correct guess pulls you higher, but a wrong one might cut your rope!",
      p3: "Number of quickdraws you want to take:",
    },
  },
  {
    name: "Sudoku",
    id: uuidv4(),
    image: "/assets/sudoku/sudoku-principal.jpg",
    description: "Number puzzle game on a 9x9 grid.",
    introText: {
      p1: "Step into the shoes of a ROUTE SETTER",
      p2: "Your task: complete the Sudoku puzzle while ensuring the climbing wall's safety.",
      p3: "With each correct number you place, you secure a climbing hold",
      p4: "Are you ready?",
    },
  },
];
