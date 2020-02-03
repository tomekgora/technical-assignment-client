import React from "react";
import "./App.css";
import Joke from "./modules/joke/components/Joke";
import { Provider } from "mobx-react";
import JokeStore from "./modules/joke/JokeStore";
import styled from "styled-components";

function App() {
  console.log("The App is rendering");
  return (
    <div className="App">
      <div>
        <Provider JokeStore={JokeStore}>
          <Joke />
        </Provider>
      </div>
    </div>
  );
}

export default App;
