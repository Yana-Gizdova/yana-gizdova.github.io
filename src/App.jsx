import { Route, Routes } from "react-router-dom";
import MainView from './MainView.jsx';
import NavBar from './NavBar.jsx';
import LocalDynamic from './LocalDynamic/LocalDynamic.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';

function App() {
  document.title = "Survival on the Moon";
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<MainView />} />
        <Route path="/local_dynamic" element={<LocalDynamic />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
      <div className="background-container"/>
      <div className="stars"/>
      <div className="twinkling"/>
      <div className="clouds"/>
      <img style={{position:'absolute', top:'10%', right:'-10%', height:'50%', width:'auto', zIndex:-1}} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt=""/>
    </>
  );
}

export default App;