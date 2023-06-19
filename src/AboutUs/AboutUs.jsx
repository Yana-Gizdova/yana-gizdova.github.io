import imgUrl from '../assets/UPM_logo4.png';

// Cambiar en esta carpeta, podeis anyadir los componentes que hagan falta
export default function AboutUs() {
  document.title = "About Us";
  return <>
    <h1>About Us</h1>
    <div style={{ display: 'flex' }}>
      <div style={{ flex:'0.75', fontSize: '1.6em', textAlign: 'justify', margin: '0.8em' }}>
        This page was developed by 4 students from the Polytechnic University of Madrid.
        For more information about the project, you can contact us at the following linkedIn addresses:
        <p>Carlos Nieto Petinal: <a href="https://www.linkedin.com/in/carlosnietopetinal/">https://www.linkedin.com/in/carlosnietopetinal/</a></p>
        <p>César Agulló Quirós: <a href="https://www.linkedin.com/in/cesar-agullo/">https://www.linkedin.com/in/cesar-agullo/</a></p>
        <p>Sara Rodríguez Rojo: <a href="https://www.linkedin.com/in/sara-rodriguez-rojo/">https://www.linkedin.com/in/sara-rodriguez-rojo/</a></p>
        <p>Yana Nikolaeva Gizdova: <a href="https://www.linkedin.com/in/yana-nikolaeva-gizdova/">https://www.linkedin.com/in/yana-nikolaeva-gizdova/</a></p>

      </div>
    </div>
    <div style={{ display: 'flex', alignContent: 'flex-start'}}>
      <img style={{ width: 300, height: 150 }} src={imgUrl} />
    </div>
  </>
}
