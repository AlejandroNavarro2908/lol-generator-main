import React from 'react';
import { Button } from './Button';
import { LolGif } from './LolGif';
import type { Joke } from '../services/jokeApi';

interface JokeDisplayProps {
  joke: Joke | null;
  showPunchline: boolean;
  onRevealPunchline: () => void;
}

export const JokeDisplay: React.FC<JokeDisplayProps> = ({
  joke,
  showPunchline,
  onRevealPunchline
}) => {
  if (!joke) return null;

  return (
    <div id="result">
      <p id="setup-container">{joke.setup}</p>
      <Button onClick={onRevealPunchline}>
        Reveal Punchline
      </Button>
      <LolGif show={showPunchline} punchline={showPunchline ? joke.punchline : undefined} />
    </div>
  );
};