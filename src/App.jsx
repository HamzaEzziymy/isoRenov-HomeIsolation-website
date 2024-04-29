import "./App.css";
import Protege from "./components/Protege/Protege";
import Apropos from "./components/Apropos/Apropos";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Acceuil from "./components/Acceuil/Acceuil";
import Services from "./components/Services/Services";
import Avantages from "./components/Avantages/Avantages";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Acceuil />
      </div>
      <Protege />
      <Services/>
      <Avantages/>
      <Apropos/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
