import { runInAction, decorate, observable } from "mobx";
import JokeService from "./JokeService";

class JokeStore {
  constructor() {
    this.jokeService = new JokeService();
  }
  jokeData = null;
  status = "initial";

  getJokeAsync = async () => {
    try {
      const data = await this.jokeService.get();
      console.log("data", data);
      runInAction(() => {
        this.jokeData = data;
        console.log("this is the jokeData:", this.jokeData);
      });
    } catch (error) {
      runInAction(() => {
        this.status = "error";
      });
    }
  };
}

decorate(JokeStore, {
  jokeData: observable,
  status: observable
});

export default new JokeStore();
