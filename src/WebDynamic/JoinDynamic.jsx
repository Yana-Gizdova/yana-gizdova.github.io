import { useEffect, useState } from 'react';
import socket from '../socket.js';
import DraggableList from '../LocalDynamic/DraggableList.jsx';


const itemsObject = {
  matches: "Box of matches",
  food: "Food concentrate",
  rope: "50 feet of nylon rope",
  parachute: "Parachute silk",
  heater: "Portable heating unit",
  pistols: "Two .45 caliber pistols",
  milk: "One case of dehydrated milk",
  oxygenTanks: "Two 100 lb. tanks of oxygen",
  map: "Stellar map",
  lifeRaft: "Self-inflating life raft",
  compass: "Magnetic compass",
  water: "20 liters of water",
  flares: "Signal flares",
  firstAidKit: "First aid kit, including injection needle",
  radio: "Solar-powered FM receiver-transmitter"
};



const pad = (n) => {
  return n < 10 ? '0' + n : n;
};

const getSeconds = (seconds) => {
  const secondsLeft = seconds % 60;
  return secondsLeft;
};

const getMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  return minutes;
};


export default function JoinDynamic (){
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');
  const [joined_room, setJoinedRoom] = useState("");
  const [timer, setTimer] = useState(0);
  const [timer_interval_id, setTimerIntervalId] = useState(null);

  document.title = 'Join Dynamic';

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timer_interval_id);
    }
  }, [timer, timer_interval_id]);


  if(timer>0){
    document.title = `(${timer}) Join Dynamic`;

    return(<>
             <span style={{ fontSize: '4em' }}>{pad(getMinutes(timer))}:{pad(getSeconds(timer))}</span>
             <DraggableList items={itemsObject}/>
           </>);
  }


  return (
    <>
      <h1>Join Dynamic</h1>
      <h3>Join any created room. You need to provide a name and the room id to join</h3>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '1em' }}>
        <input
          onChange={e => {
            setName(e.target.value);
          }}
          value={name}
          placeholder="User Name"
          style={{ fontSize: '1em' }}
          disabled={joined_room !== ""}
        />
        <input
          onChange={e => {
            setRoom(e.target.value);
          }}
          value={room}
          placeholder="Room Id"
          style={{fontSize:'1em'}}
          disabled={joined_room !== ""}
        />
        <button onClick={() => {
          socket.emit('join', room, name, (joined) => {
            if (joined) {
              console.log('Joined room');
              setJoinedRoom(room);
              socket.on('startTimer', (time) => {
                console.log('Timer started');
                alert(`Timer started for ${time} seconds`);
                setTimer(time);
                setTimerIntervalId(setInterval(() => {
                  setTimer(t => t - 1);
                }, 1000));
              });
            } else {
              console.log('Failed to join room');
              setJoinedRoom("");
              alert('Failed to join room');
            }
          });
        }}
          disabled={joined_room !== ""}
        >Join Room</button>
      </div>
      <div style={{margin:'1em', fontSize:'1.5em'}}>Current room: {joined_room || "none"}</div>
      <button
        onClick={() => {
          socket.emit('leave', joined_room, name, (left) => {
            if (left) {
              console.log('Left room');
              setJoinedRoom("");
            } else {
              setJoinedRoom("");
            }
          });
        }}
        disabled={joined_room === ""}
      >Leave Room</button>
    </>
  );
}
