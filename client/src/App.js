import React from "react";
import "./App.css";

import axios from "axios";

const playersApi = "http://localhost:5000/api/players";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(playersApi)
      .then(res => {
        this.setState(res.data)
      })
      .catch(error => {
        debugger;
      });
  }

  render() {
    return <div className="App">hello</div>;
  }
}

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
