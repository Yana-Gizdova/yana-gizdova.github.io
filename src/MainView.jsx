import { Link } from "react-router-dom";

const MainView = () => {
  document.title = "Dynamic";
  return (
    <>
      <h1>Survival on the Moon</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex:'0.75', fontSize: '1.6em', textAlign: 'justify', margin: '0.6em' }}>
          You are a member of a space crew originally scheduled to rendezvous with a mother ship on the lighted surface of the moon.
          However, due to mechanical difficulties, your ship was forced to land at a spot some 200 miles from the rendezvous point. During reentry and landing, much of the equipment aboard was damaged and, since survival depends on reaching the mother ship, the most critical items available must be chosen for the 200-mile trip.
          <br/><br/>Below are listed the 15 items left intact and undamaged after landing. Your task is to rank order them in terms of their importance for your crew in allowing them to reach the rendezvous point. Place the number 1 by the most important item, the number 2 by the second most important, and so on through number 15 for the least important.
        </div>
      </div>
      <Link to="/local_dynamic">
        <button style={{margin: '0.7em', fontSize:'2.5em', color: 'white'}}>
          Start Locally<br />
          and Individually
        </button>
      </Link>
      <Link to="/start_dynamic">
        <button style={{ margin: '0.7em', fontSize: '2.5em', color: 'white' }}>
          Create Room (WIP)
        </button>
      </Link>
      <Link to="/join_dynamic">
        <button style={{ margin: '0.7em', fontSize: '2.5em', color: 'white' }}>
          Join Room (WIP)
        </button>
      </Link>
    </>
  );
};

export default MainView;
