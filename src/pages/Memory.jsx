import Game from "../components/Memory-Game/Game";

function Memory() {
  return (
    <>
      <Game />
      <div className="container">
        <div id='statistics' className="card-container">
          <div className='card'>STATS</div>
          <div className='card'>
            <h1>About the test</h1>
            <p>
              Every level, a number of tiles will flash white. Memorize them, and pick them again after the tiles are reset!
            </p>
            <p>
              Levels get progressively more difficult, to challenge your skills.
            </p>
            <p>
              If you miss 3 tiles on a level, you lose one life.
            </p>
            <p>
              You have three lives.
            </p>
            <p>
              Make it as far as you can!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Memory;
