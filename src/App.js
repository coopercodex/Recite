import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './components/Home';
import { Books } from './Books';

const App = () => {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Navbar />
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/books' render={() => <Books />} />
        </Switch>
      {/* </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
