import { useEffect, useState } from 'react';
import socket from '../socket.js';

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

export default function StartDynamic() {

  document.title = 'Start Dynamic';
  const [room, setRoom] = useState('');
  const [time, setTime] = useState(10 * 60);
  const [activeTimer, setActiveTimer] = useState(false);
  const [interval_id, setIntervalId] = useState(null);
  const [users, setUsers] = useState([]);
  const [refresh_interval_id, setRefreshIntervalId] = useState(null);

  const onStartTimer = () => {
    socket.emit('startTimer', room, time);
    setActiveTimer(true);
    setIntervalId(setInterval(() => {
      setTime(time => time - 1);
    }, 1000));
  };

  const onStopTimer = () => {
    socket.emit('stopTimer', room);
    clearInterval(interval_id);
    setActiveTimer(false);
    setTime(10 * 60);
  };

  useEffect(() => {
    socket.emit('create', roomId => {
      setRoom(roomId);
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      socket.emit('refresh', room, users => {
        setUsers(users);
      });
    }, 1000);
  });

  useEffect(() => {
    socket.on('userJoined', (users) => {
      console.log('user joined: ', users);
      setUsers(users);
    });
    socket.on('userLeft', (users) => {
      console.log('user left: ', users);
      setUsers(users);
    });
  }, []);

  useEffect(() => {
    if (time === 0) {
      onStopTimer();
    }
  }, [time, onStopTimer]);

  return (
    <>
      <h1>Start Dynamic</h1>
      <h3>Create a room to play the dynamic. You will need to supply this code to allow other players to join the room.</h3>
      <div style={{ alignItems: 'center', gap: '1em', display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ fontSize: '2em' }}>Room code: {room}</div>
        <div style={{ display: activeTimer ? 'none' : 'block', fontSize: '1.5em' }}>
          <input placeholder='10.0' type='number' value={time / 60} onChange={t => setTime(Math.round(t.target.value * 60))} /> minutes
        </div>
        <button style={{ display: activeTimer ? 'none' : 'block' }} onClick={onStartTimer}> Start Timer</button>
        <button style={{ display: activeTimer ? 'block' : 'none' }} onClick={onStopTimer}> Stop Timer</button>
        <div style={{ fontSize: '4em' }}>{pad(getMinutes(time))}:{pad(getSeconds(time))}</div>
        <ul>
          {users.map((user, i) => (
            <li
              onClick={() => {
                socket.emit('kick', room, user.id);
                setUsers(users.filter(u => u.id !== user.id));
              }}
              style={{ display:'inline-block' , margin:'0.8em',fontSize: '2em' }} key={i}>{user.name}</li>))}
        </ul>
      </div>
    </>
  );
}
