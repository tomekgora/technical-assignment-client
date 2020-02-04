import * as React from "react";
import { observer, inject } from "mobx-react";
import styled from "styled-components";
import Delay from "react-delay";

class Joke extends React.Component {
  componentDidMount() {
    this.props.JokeStore.getJokeAsync();
  }

  render() {
    const JokeSetup = styled.a`
      display: block;
      color: green;
      margin: 0.5rem 1rem;
    `;

    const JokePunchline = styled.a`
      display: block;
      color: yellow;
      margin: 0.5rem 1rem;
    `;

    const RefreshButton = styled.button`
      color: yellow;
      width: 10rem;
      height: 2rem;
      background-color: black;
      font: bold;
      border: 0;
      &:hover {
        background-color: grey;
      }
    `;

    console.log("The Joke is rendering");
    console.log("JokeStore", this.props.JokeStore.jokeData);

    if (!this.props.JokeStore.jokeData) {
      return "Your programming joke is loading...";
    }
    return (
      <div>
        {this.props.JokeStore.jokeData.map(joke => (
          <div key={joke.id}>
            <JokeSetup>{joke.setup}</JokeSetup>
            <Delay wait={4000}>
              <JokePunchline>{joke.punchline}</JokePunchline>
              <RefreshButton
                onClick={() => this.props.JokeStore.getJokeAsync()}
              >
                Fetch Next Joke!
              </RefreshButton>
            </Delay>
          </div>
        ))}
      </div>
    );
  }
}

export default inject("JokeStore")(observer(Joke));
