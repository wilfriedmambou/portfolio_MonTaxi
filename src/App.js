import logo from './logo.svg';
import './App.css';
import Nav1 from './components/Nav';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{width:'100vw',overflow:'hidden',padding:'-10'}}>
    <Nav1/>
    <Header/>
    <Section1 />
    <Section2/>
    <Section3/>
    <Section4/>
    <Footer/>
    </div>

  );
}

export default App;
