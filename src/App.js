import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Books } from './components/Books';
import { Main } from './components/Main'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './components/Home';


const App = () => {

  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/books' component={Home} books={books} />
          <Footer />
        </Switch>
      </div>
    </>
  );
}

export default App;
