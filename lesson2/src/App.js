import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {FeaturesSection} from './components/FeaturesSection';
import {ContactsSection} from './components/ContactsSection';
import {Footer} from './components/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <FeaturesSection />
      <ContactsSection />
      <Footer madeByName={'Alina'} link={'https://github.com/alinakassym'} />
    </div>
  );
}