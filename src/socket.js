import {io} from "socket.io-client";
const SOCKETIO_URL = import.meta.env.VITE_SOCKET_IO_SERVER || "https://socketio-server-pzqt.onrender.com";
const socket = io(SOCKETIO_URL);
console.log(import.meta.env.VITE_SOCKET_IO_SERVER);
export default socket;
