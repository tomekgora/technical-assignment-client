const jokeApiUrl =
  "https://official-joke-api.appspot.com/jokes/programming/random";

class JokeService {
  get = async jokeApiUrl => {
    const request = new Request(jokeApiUrl);
    const response = await fetch(request);
    return response.json();
  };
}

export default JokeService;
