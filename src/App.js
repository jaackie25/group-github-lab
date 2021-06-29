import logo from './logo.svg';
import './App.css';
import About from './components/About'
import AboutData from './AboutData'

import {
  BrowserRouter as Router, // alias BrowserRouter as Router
  Route,

} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Hello, this is our team</h1>
      <Router>
        <Route exact 
        path='/'
        render={() => <About AboutData={AboutData}/>}
        />
      </Router>
    </div>
  );
}

export default App;
