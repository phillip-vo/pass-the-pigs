import { createContext } from "react";

export const GameContext = createContext({
  highScore:
    typeof window !== "undefined"
      ? parseInt(localStorage.getItem("passThePigs"))
      : 0,
  setHighScore: () => {},
});
