const jokeApiUrl =
  "https://official-joke-api.appspot.com/jokes/programming/random";

class JokeService {
  get = async () => {
    const response = await fetch(jokeApiUrl);
    console.log("this is the response", response);
    return response.json();
  };
}

export default JokeService;
