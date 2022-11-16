import  { Route, Switch } from 'react-router-dom';
import './App.css';
import { Books } from './components/Books';
import {Main} from './components/Main'

const App = () => {
  return (
    <>
    <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/books' component={Books} />
        </Switch>
    </div>
    </>
  );
}

export default App;
