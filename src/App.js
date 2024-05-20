import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar/>
      <div className='content'>
       <Switch>
         <Route exact path="/">
          <Home/>
         </Route>
         <Route path="/Create">
          <Create/>
         </Route>
       </Switch>
      </div>
      </div>
    </Router>
      
  );
}

export default App;
