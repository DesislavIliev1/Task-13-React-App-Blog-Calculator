import './App.css';
import Home from './components/Home';
import Blog from './components/Blog';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Binfo from './components/Binfo';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/blog" Component={Blog}></Route>
          <Route path="/blog/:id" Component={Binfo}></Route>
          <Route path="/contacts" Component={Contacts}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
