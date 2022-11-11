import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './components/Home';
import { Books } from './components/Books';

const App = () => {
  return (
    <>
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/books' render={() => <Books />} />
        </Switch>
      <Footer />
    </div>
    </>
  );
}

export default App;
