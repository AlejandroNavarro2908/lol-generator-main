import React, { useState } from 'react';
import { Button, JokeDisplay, ErrorDisplay } from './components';
import { JokeApiService } from './services/jokeApi';
import type { Joke } from './services/jokeApi';
import './App.css';

const App: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [showPunchline, setShowPunchline] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleNewJoke = async (): Promise<void> => {
    setIsLoading(true);
    setError(false);
    setShowPunchline(false);

    try {
      const newJoke = await JokeApiService.fetchRandomJoke();
      setJoke(newJoke);
      console.log(newJoke);
    } catch (err) {
      console.error('Error fetching joke:', err);
      setError(true);
      setJoke(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRevealPunchline = (): void => {
    setShowPunchline(true);
  };

  return (
    <div className="app">
      <h1>LOL Generator</h1>
      <Button onClick={handleNewJoke} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get Joke'}
      </Button>

      <JokeDisplay
        joke={joke}
        showPunchline={showPunchline}
        onRevealPunchline={handleRevealPunchline}
      />

      <ErrorDisplay show={error} />
    </div>
  );
};

export default App;
