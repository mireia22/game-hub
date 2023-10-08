import { v4 as uuidv4 } from "uuid";

export const RIDDLES = [
  {
    name: "Carabiner",
    id: uuidv4(),
    description: "A metal loop with a gate used to connect climbing equipment.",
  },
  {
    name: "Belay",
    id: uuidv4(),

    description:
      "A safety technique using a rope to protect a climber from falling.",
  },
  {
    name: "Crag",
    id: uuidv4(),
    description:
      "A small rocky outcrop or cliff where climbers practice or complete climbs.",
  },
  {
    name: "Jam",
    id: uuidv4(),

    description:
      "A technique where a climber wedges their hand, foot, or body into a crack for support.",
  },
  {
    name: "Slab",
    id: uuidv4(),

    description:
      "A climbing surface that is less than vertical, often with a low-angle slope.",
  },
  {
    name: "Chalk",
    id: uuidv4(),

    description:
      "Magnesium carbonate used to keep climbers' hands dry for a better grip.",
  },
  {
    name: "Crux",
    id: uuidv4(),

    description: "The most challenging part of a climbing route.",
  },
  {
    name: "Route",
    id: uuidv4(),

    description: "A planned path or course that climbers follow on the rock.",
  },
  {
    name: "Pitch",
    id: uuidv4(),

    description: "A section of a climbing route between belay points.",
  },
  {
    name: "Rappel",
    id: uuidv4(),

    description:
      "A controlled descent down a rope using specialized equipment.",
  },
  {
    name: "Boulder",
    id: uuidv4(),

    description:
      "A short but challenging climb without ropes, typically close to the ground.",
  },
  {
    name: "Harness",
    id: uuidv4(),

    description:
      "A piece of climbing equipment that secures the climber to the rope.",
  },
  {
    name: "Anchor",
    id: uuidv4(),

    description:
      "A point of attachment, usually secure, for the climbing rope.",
  },
  {
    name: "Beta",
    id: uuidv4(),

    description:
      "Information or advice about a climbing route, holds, or techniques.",
  },
  {
    name: "Dyno",
    id: uuidv4(),

    description: "A dynamic move where a climber jumps to a distant hold.",
  },
  {
    name: "Sloper",
    id: uuidv4(),

    description: "A climbing hold with a smooth, sloping surface.",
  },
  {
    name: "Crimp",
    id: uuidv4(),

    description:
      "A small and sharp-edged climbing hold requiring precise grip.",
  },
  {
    name: "Jug",
    id: uuidv4(),

    description:
      "A large, easy-to-hold climbing hold, often considered a 'jug' or 'bucket.'",
  },
  {
    name: "Smear",
    id: uuidv4(),

    description:
      "A technique of pressing the shoe against the rock face for balance.",
  },
  {
    name: "Crack",
    id: uuidv4(),

    description: "A narrow fissure or gap in the rock used as a climbing hold.",
  },
  {
    name: "Arete",
    id: uuidv4(),

    description: "A sharp edge or ridge on the corner of a rock face.",
  },
];

export const RIDDLES_IMG = [
  {
    id: uuidv4(),
    src: "/assets/hangman/climbing-sequence/walk-frame.jpg",
    number: 1,
    name: "Keep walking until you find the beginning of the climbing route ",
  },
  {
    id: uuidv4(),
    src: "/assets/hangman/climbing-sequence/climb-1-frame.jpg",
    number: 2,
    name: "Great! You've started climbing! ",
  },
  {
    id: uuidv4(),
    src: "/assets/hangman/climbing-sequence/climb-2-frame.jpg",
    number: 3,
    name: "Keep it up, you're starting to get high!",
  },
  {
    id: uuidv4(),
    src: "/assets/hangman/climbing-sequence/climb-3-frame.jpg",
    number: 4,
    name: "This is a difficult step; you're almost there!",
  },
  {
    id: uuidv4(),
    src: "/assets/hangman/climbing-sequence/climb-4-frame.jpg",
    number: 4,
    name: "Push harder!",
  },
  {
    id: uuidv4(),
    src: "/assets/hangman/climbing-sequence/climb-4-frame.jpg",
    number: 4,
    name: "You're almost there!",
  },
];
