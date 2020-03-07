export const getComputerInput = () => {
  const attackOptions = ["strike", "push", "jump"];
  return attackOptions[Math.floor(Math.random() * attackOptions.length)];
};

export const playOutTheBattle = (playerChoice, enemyChoice) => {
  if (enemyChoice === playerChoice) {
    return "tie";
  } else if (didPlayerWinBattle(playerChoice, enemyChoice)) {
    return "player";
  } else {
    return "enemy";
  }
};

const didPlayerWinBattle = (playerChoice, enemyChoice) => {
  if (
    (playerChoice === "strike" && enemyChoice === "push") ||
    (playerChoice === "push" && enemyChoice === "jump") ||
    (playerChoice === "jump" && enemyChoice === "strike")
  ) {
    return true;
  }
  return false;
};
