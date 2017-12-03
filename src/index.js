import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './common/Navbar';
import Donate from './components/Donate';
import WhatWeDo from './components/WhatWeDo';
import Footer from './common/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';
import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();

class App extends React.Component {

  render(){
    return (
      <main>
        <Navbar/>
        <Donate/>
        <WhatWeDo/>
        <Footer/>
      </main>

    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
