import React from "react";
import "./App.css";
import ListPlayers from "./components/Listplayers";
import DarkMode from "./components/Darkmodetoggle";

import axios from "axios";

const playersApi = "http://localhost:5000/api/players";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      darkMode: false
    };
  }

  componentDidMount() {
    axios
      .get(playersApi)
      .then(res => {
        this.setState({
          players: res.data
        });
      })
      .catch(error => {
        debugger;
      });
  }

  render() {
    return (
      <div className="App">
        <DarkMode />
        <ListPlayers players={this.state.players} />
      </div>
    );
  }
}
