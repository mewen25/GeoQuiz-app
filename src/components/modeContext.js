import React from "react";
const ModeContext = React.createContext();

class ModeContextProvider extends React.Component {
  state = {
    mode: "quiz"
  };

  setModeState = (setting = null) => {
    this.setState(prevState => {
      return {
        mode: setting ? setting : prevState.mode === "quiz" ? "learn" : "quiz"
      };
    });
  };

  render() {
    return (
      <ModeContext.Provider
        value={{ mode: this.state.mode, setModeState: this.setModeState }}
      >
        {this.props.children}
      </ModeContext.Provider>
    );
  }
}

export { ModeContextProvider, ModeContext };
