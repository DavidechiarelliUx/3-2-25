
import './App.css';
import ButtonComponents from "./components/button/ButtonComponents";
import ImageComponents from './components/imageComponents/ImageComponents';

function App() {
  return (
    <>
      <ButtonComponents description="sono il bottone" bgColor="green" padding="30px" />
      <ImageComponents
        src="https://images.pexels.com/photos/29580987/pexels-photo-29580987/free-photo-of-uomo-anziano-che-cammina-nel-quartiere-di-tokyo.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        alt="img di prova"
      />
    </>
  );
}

export default App
