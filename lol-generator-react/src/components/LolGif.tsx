import React from 'react';

interface LolGifProps {
  show: boolean;
  punchline?: string;
}

const lolGifs = [
  '/img/lol0.gif',
  '/img/lol1.gif',
  '/img/lol2.gif',
  '/img/lol3.gif',
  '/img/lol4.gif',
  '/img/lol5.gif',
  '/img/lol6.gif',
];

export const LolGif: React.FC<LolGifProps> = ({ show, punchline }) => {
  if (!show) return null;

  const randomNum = Math.floor(Math.random() * lolGifs.length);
  const gifUrl = lolGifs[randomNum];

  return (
    <div className="punch-container">
      {punchline && <p>{punchline}</p>}
      <img src={gifUrl} alt="LOL GIF" />
    </div>
  );
};