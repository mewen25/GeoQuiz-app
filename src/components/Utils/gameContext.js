import React from "react";
const GameContext = React.createContext();

class GameContextProvider extends React.Component {
  state = {
    game: false
  };

  setGameState = setting => {
    this.setState({ game: setting });
  };

  render() {
    return (
      <GameContext.Provider
        value={{ game: this.state.game, setGameState: this.setGameState }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export { GameContextProvider, GameContext };
