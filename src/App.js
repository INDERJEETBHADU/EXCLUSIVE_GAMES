
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header'
import Aviator from './components/Aviator'
import Slots from './components/Slots'
import Jackpot from './components/Jackpot'
import Casino from './components/Casino'
import Numberbar from './components/Numberbar'
import Silverlayer from './components/Silverlayer'
import Lanza from './components/Lanza'
import Footer from './components/Footer'
function App() {
  return (
    <div >
      <Header />
      <Aviator />
      <Slots />
      <Jackpot />
      <Casino />
      <Numberbar />
      <Silverlayer />
      <Lanza />
      <Footer />
    </div>
  );
}

export default App;
