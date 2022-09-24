import data from "../gameData/data";

export const rollPigs = (state) => {
  let newState;

  newState = {
    ...state,
    pigOne: data[Math.floor(Math.random() * 7)],
    pigTwo: data[Math.floor(Math.random() * 7)],
    turns: state.turns > 0 ? state.turns - 1 : 0,
  };

  newState = calculateScore(newState);

  return newState;
};

const calculateScore = (state) => {
  let newState = { ...state };

  if (
    newState.pigOne.name === "Sider" &&
    newState.pigTwo.name === "Sider Dot"
  ) {
    newState = {
      ...newState,
      title: "Pig Out",
      score: (newState.score += 0),
    };
  }

  if (
    newState.pigOne.name === "Sider Dot" &&
    newState.pigTwo.name === "Sider"
  ) {
    newState = {
      ...newState,
      title: "Pig Out",
      score: (newState.score += 0),
    };
  }

  if (newState.pigOne.name === "Sider" && newState.pigTwo.name === "Sider") {
    newState = {
      ...newState,
      title: "Sider",
      score: (newState.score += 1),
    };
  }
  if (
    newState.pigOne.name === "Sider Dot" &&
    newState.pigTwo.name === "Sider Dot"
  ) {
    newState = {
      ...newState,
      title: "Sider",
      score: (newState.score += 1),
    };
  }
  if (
    newState.pigOne.name === "Trotter" &&
    newState.pigTwo.name === "Trotter"
  ) {
    newState = {
      ...newState,
      title: "Double Trotter",
      score: (newState.score += 20),
    };
  }
  if (
    newState.pigOne.name === "Razorback" &&
    newState.pigTwo.name === "Razorback"
  ) {
    newState = {
      ...newState,
      title: "Double Razorback",
      score: (newState.score += 20),
    };
  }
  if (
    newState.pigOne.name === "Snouter" &&
    newState.pigTwo.name === "Snouter"
  ) {
    newState = {
      ...newState,
      title: "Double Snouter",
      score: (newState.score += 40),
    };
  }
  if (
    newState.pigOne.name === "Leaning Jowler" &&
    newState.pigTwo.name === "Leaning Jowler"
  ) {
    newState = {
      ...newState,
      title: "Double Leaning Jowler",
      score: (newState.score += 60),
    };
  }
  if (newState.pigOne.name === "Sider" && newState.pigTwo.name === "Trotter") {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 5),
    };
  }
  if (
    newState.pigOne.name === "Sider" &&
    newState.pigTwo.name === "Razorback"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 5),
    };
  }
  if (newState.pigOne.name === "Sider" && newState.pigTwo.name === "Snouter") {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 10),
    };
  }
  if (
    newState.pigOne.name === "Sider" &&
    newState.pigTwo.name === "Leaning Jowler"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 15),
    };
  }
  if (newState.pigOne.name === "Trotter" && newState.pigTwo.name === "Sider") {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 5),
    };
  }
  if (
    newState.pigOne.name === "Razorback" &&
    newState.pigTwo.name === "Sider"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 5),
    };
  }
  if (newState.pigOne.name === "Snouter" && newState.pigTwo.name === "Sider") {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 10),
    };
  }
  if (
    newState.pigOne.name === "Leaning Jowler" &&
    newState.pigTwo.name === "Sider"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 15),
    };
  }
  if (
    newState.pigOne.name === "Sider Dot" &&
    newState.pigTwo.name === "Trotter"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 5),
    };
  }
  if (
    newState.pigOne.name === "Sider Dot" &&
    newState.pigTwo.name === "Razorback"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 5),
    };
  }
  if (
    newState.pigOne.name === "Sider Dot" &&
    newState.pigTwo.name === "Snouter"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 10),
    };
  }
  if (
    newState.pigOne.name === "Sider Dot" &&
    newState.pigTwo.name === "Leaning Jowler"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 15),
    };
  }
  if (
    newState.pigOne.name === "Trotter" &&
    newState.pigTwo.name === "Sider Dot"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 5),
    };
  }
  if (
    newState.pigOne.name === "Razorback" &&
    newState.pigTwo.name === "Sider Dot"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 5),
    };
  }
  if (
    newState.pigOne.name === "Snouter" &&
    newState.pigTwo.name === "Sider Dot"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 10),
    };
  }
  if (
    newState.pigOne.name === "Leaning Jowler" &&
    newState.pigTwo.name === "Sider Dot"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 15),
    };
  }
  if (
    newState.pigOne.name === "Trotter" &&
    newState.pigTwo.name === "Razorback"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 10),
    };
  }
  if (
    newState.pigOne.name === "Trotter" &&
    newState.pigTwo.name === "Snouter"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 15),
    };
  }
  if (
    newState.pigOne.name === "Trotter" &&
    newState.pigTwo.name === "Leaning Jowler"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 20),
    };
  }
  if (
    newState.pigOne.name === "Razorback" &&
    newState.pigTwo.name === "Trotter"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 10),
    };
  }
  if (
    newState.pigOne.name === "Snouter" &&
    newState.pigTwo.name === "Trotter"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 15),
    };
  }
  if (
    newState.pigOne.name === "Leaning Jowler" &&
    newState.pigTwo.name === "Trotter"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 20),
    };
  }
  if (
    newState.pigOne.name === "Razorback" &&
    newState.pigTwo.name === "Snouter"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 15),
    };
  }
  if (
    newState.pigOne.name === "Razorback" &&
    newState.pigTwo.name === "Leaning Jowler"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 20),
    };
  }
  if (
    newState.pigOne.name === "Snouter" &&
    newState.pigTwo.name === "Razorback"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 15),
    };
  }
  if (
    newState.pigOne.name === "Leaning Jowler" &&
    newState.pigTwo.name === "Razorback"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 20),
    };
  }
  if (
    newState.pigOne.name === "Snouter" &&
    newState.pigTwo.name === "Leaning Jowler"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 25),
    };
  }
  if (
    newState.pigOne.name === "Leaning Jowler" &&
    newState.pigTwo.name === "Snouter"
  ) {
    newState = {
      ...newState,
      title: "Mixed Combo",
      score: (newState.score += 25),
    };
  }
  if (newState.pigOne.name === "Oinker" && newState.pigTwo.name === "Oinker") {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (newState.pigOne.name === "Oinker" && newState.pigTwo.name === "Sider") {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (
    newState.pigOne.name === "Oinker" &&
    newState.pigTwo.name === "Sider Dot"
  ) {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (newState.pigOne.name === "Oinker" && newState.pigTwo.name === "Trotter") {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (
    newState.pigOne.name === "Oinker" &&
    newState.pigTwo.name === "Razorback"
  ) {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (newState.pigOne.name === "Oinker" && newState.pigTwo.name === "Snouter") {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (
    newState.pigOne.name === "Oinker" &&
    newState.pigTwo.name === "Leaning Jowler"
  ) {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (newState.pigOne.name === "Sider" && newState.pigTwo.name === "Oinker") {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (
    newState.pigOne.name === "Sider Dot" &&
    newState.pigTwo.name === "Oinker"
  ) {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (newState.pigOne.name === "Trotter" && newState.pigTwo.name === "Oinker") {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (
    newState.pigOne.name === "Razorback" &&
    newState.pigTwo.name === "Oinker"
  ) {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (newState.pigOne.name === "Snouter" && newState.pigTwo.name === "Oinker") {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }
  if (
    newState.pigOne.name === "Leaning Jowler" &&
    newState.pigTwo.name === "Oinker"
  ) {
    newState = {
      ...newState,
      title: "Oinker",
      score: 0,
    };
  }

  return newState;
};
