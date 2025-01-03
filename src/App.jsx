import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css'

function App() {
  return (
    <Router>
      <div className=''>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
