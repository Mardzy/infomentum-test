import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './common/Navbar';
import Donate from './components/Donate';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';
import 'fontawesome';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      error: ''
    };
    this.handleClick =  this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      condition: !this.state.condition
      // error: console.log(err)
    });
  }

  render(){
    // console.log(this.state);
    return (

      <main>
        {this.state && <Navbar
          handleClick={this.handleClick}
          condition= {this.state.condition}
        />}
        <Donate/>
      </main>

    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
