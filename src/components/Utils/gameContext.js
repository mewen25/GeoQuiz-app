import React from "react";
const GameContext = React.createContext();

class GameContextProvider extends React.Component {
  state = {
    game: false,
    header: true,
  };

  setGameState = (setting) => {
    this.setState({ game: setting });
  };

  setHeaderState = (setting) => {
    console.log("header state", setting);
    this.setState({ header: setting });
  };

  render() {
    return (
      <GameContext.Provider
        value={{
          game: this.state.game,
          setGameState: this.setGameState,
          header: this.state.header,
          setHeaderState: this.setHeaderState,
        }}
      >
        {this.props.children}
      </GameContext.Provider>
    );
  }
}

export { GameContextProvider, GameContext };
