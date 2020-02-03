import * as React from "react";
import { observer, inject } from "mobx-react";
import styled from "styled-components";

class Joke extends React.Component {
  componentDidMount() {
    this.props.JokeStore.getJokeAsync();
  }

  render() {
    const JokeSetup = styled.a`
      display: inline-block;
      color: green;
    `;

    const JokePunchline = styled.a`
      display: inline-block;
      color: yellow;
    `;

    console.log("The Joke is rendering");
    console.log("JokeStore", this.props.JokeStore.jokeData);

    if (!this.props.JokeStore.jokeData) {
      return "Joke is loading...";
    }
    return (
      <div>
        {this.props.JokeStore.jokeData.map(joke => (
          <div key={joke.id}>
            <JokeSetup>{joke.setup}</JokeSetup>
            <JokePunchline>{joke.punchline}</JokePunchline>
          </div>
        ))}
      </div>
    );
  }
}

export default inject("JokeStore")(observer(Joke));
