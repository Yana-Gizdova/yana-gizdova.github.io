import imgUrl from '../assets/Rocket3.gif';

// Cambiar en esta carpeta, podeis anyadir los componentes que hagan falta
export default function AboutUs() {
  document.title = "About Us";
  return <>
    <h1>About Us</h1>
    <div style={{ position: 'absolute', top: 170, left: 30, textAlign: "justify", flex: '0.75', fontSize: '1.2em' }}>
      <p>This page was developed by 4 students from the Polytechnic University of Madrid.</p>
      <p>For more information about the project, you can contact us at the following linkedIn addresses: </p>
      <p>Carlos Nieto Petinal: <a href="https://www.linkedin.com/in/carlosnietopetinal/">https://www.linkedin.com/in/carlosnietopetinal/</a></p>
      <p>César Agulló Quirós: <a href="https://www.linkedin.com/in/c%C3%A9sar-agull%C3%B3-a299a622b/">https://www.linkedin.com/in/c%C3%A9sar-agull%C3%B3-a299a622b/</a></p>
      <p>Sara Rodríguez Rojo: <a href="https://www.linkedin.com/in/sara-rodriguez-rojo/">https://www.linkedin.com/in/sara-rodriguez-rojo/</a></p>
      <p>Yana Nikolaeva Gizdova: <a href="https://www.linkedin.com/in/yana-nikolaeva-gizdova/">https://www.linkedin.com/in/yana-nikolaeva-gizdova/</a></p>
      <div>
        <img style={{ position: 'absolute', top: 270, left: -15, width: 300, height: 150 }} src={imgUrl} />
      </div>
    </div>
  </>
}
