import Joke from './components/Joke';

export default function App() {
  return (
    <div className="joke-container">
      <div className="joke">
        <Joke 
          setup="Why did the scarecrow win an award?"
          punchline="Because he was outstanding in his field."
        />
      </div>
      <div className="joke">
        <Joke 
          setup="What do you call a belt made out of watches?"
          punchline="A waist of time."
        />
      </div>
      <div className="joke">
        <Joke 
          setup="Why don't skeletons fight each other?"
          punchline="They don't have the guts."
        />
      </div>
      <div className="joke">
        <Joke 
          setup="Why did the math book look sad?"
          punchline="Because it had too many problems."
        />
      </div>
    </div>
  );
}