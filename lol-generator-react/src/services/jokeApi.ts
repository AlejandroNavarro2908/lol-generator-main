export interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

export class JokeApiService {
  private static readonly API_URL = 'https://official-joke-api.appspot.com/random_joke';

  static async fetchRandomJoke(): Promise<Joke> {
    try {
      const response = await fetch(this.API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const joke: Joke = await response.json();
      return joke;
    } catch (error) {
      console.error('Error fetching joke:', error);
      throw new Error('Failed to fetch joke from API');
    }
  }
}