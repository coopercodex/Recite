import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './components/Home';
import { Books } from './components/Books';
import { useHistory } from 'react-router-dom';
import {Main} from './components/Main'

const App = () => {
  return (
    <>
    <div className="App">
      {/* <Navbar /> */}
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/books' component={Books} />
        </Switch>
      {/* <Footer /> */}
    </div>
    </>
  );
}

export default App;
