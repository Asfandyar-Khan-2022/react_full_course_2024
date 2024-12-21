import globe from '../assets/globe.png';

export default function Joke(props) {
  console.log(props);
  return (
    <>
      <div className='setup'>
        <h1>{props.setup ? `Setup: ${props.setup}` : ""}</h1>
        <p>Punchline: {props.punchline}</p>
      </div>
    </>
  );
}