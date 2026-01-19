# LOL Generator - React TypeScript Version

A React TypeScript application that generates jokes and displays them with LOL GIFs.

## Features

- Fetches random jokes from the Official Joke API
- Displays joke setup first, then reveals punchline on button click
- Shows random LOL GIF when punchline is revealed
- Error handling for API failures
- Fully typed with TypeScript
- Modular component architecture

## Project Structure

```
src/
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── ErrorDisplay.tsx    # Error message display component
│   ├── JokeDisplay.tsx     # Joke display with punchline reveal
│   ├── LolGif.tsx          # LOL GIF display component
│   └── index.ts            # Component exports
├── services/
│   └── jokeApi.ts          # API service for fetching jokes
├── App.tsx                 # Main application component
├── App.css                 # Application styles
└── main.tsx                # Application entry point
```

## Components

### Button
A reusable button component with customizable styling and click handlers.

### JokeDisplay
Displays the joke setup and handles punchline revelation with LOL GIF.

### ErrorDisplay
Shows error messages when API calls fail.

### LolGif
Displays random LOL GIFs with optional punchline text.

## Services

### JokeApiService
Handles all API interactions for fetching jokes from the Official Joke API.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## API

The application uses the [Official Joke API](https://official-joke-api.appspot.com/random_joke) to fetch random jokes.

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS3
