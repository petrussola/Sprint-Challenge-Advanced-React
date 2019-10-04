import React from "react";
import "./App.css";
import ListPlayers from './components/Listplayers';

import axios from "axios";

const playersApi = "http://localhost:5000/api/players";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get(playersApi)
      .then(res => {
        this.setState({
          players: res.data
        })
      })
      .catch(error => {
        debugger;
      });
  }

  render() {
    return (
    <div className="App">
      <ListPlayers players={this.state.players} /> 
    </div>
    )
  }
}
