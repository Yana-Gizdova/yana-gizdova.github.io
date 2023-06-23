import {io} from "socket.io-client";
const SOCKETIO_URL = "https://socketio-server-pzqt.onrender.com" || "localhost:4001";
const socket = io(SOCKETIO_URL);
export default socket;
