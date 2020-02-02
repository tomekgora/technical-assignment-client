import * as React from "react";
import { observer, inject } from "mobx-react";

class Joke extends React.Component {
  componentDidMount() {
    this.props.JokeStore.getJokeAsync();
  }
  render() {
    return <div>{this.props.JokeStore.joke}</div>;
  }
}

export default inject("JokeStore")(observer(Joke));
