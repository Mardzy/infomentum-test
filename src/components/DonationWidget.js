import React, {Component} from 'react';
import DonationSelect from './DonationSelect';

class DonationWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: null,
      giraffe: null,
      rhino: null,
      tiger: null,
      numberInput: null,
      total: 0,
      monthlyDonation: false,
      error: '',
      selectedAnimal: ''
    };

    this.handleClick =  this.handleClick.bind(this);
    this.handleChange =  this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
  }

  handleClick = (e) => {
    const sum =  Number(e.target.id);
    this.setState({ subtotal: sum },()=>console.log('subtotal', sum));
  }

  handleChange = e => {
    const animal = e.target.value;
    this.setState({
      selectedAnimal: animal,
      subtotal: null
    });
    console.log('change', e.target.value);
    console.log('handleChange subtotal',this.state.subtotal);
  }

  handleSubmit = (e, err) => {
    e.preventDefault();
    const{ subtotal, selectedAnimal } = this.state;
    const sum = Number(subtotal);
    this.setState({
      total: sum,
      subtotal: 0,
      error: err
    },()=> alert('Thank you for donating ' + sum + ' to the ' + selectedAnimal ));
  }

  render(){
    const giraffe = 'giraffe';
    const{numberInput, selectedAnimal, subtotal, total} = this.state;
    // console.log('widget', handleSubmit);
    return (
      <div id="donation" className="row no-gutters">
        <div className="col-sm-9">
          <div className="container donation-left">
            <h2>MAKE A DONATION</h2>
            <form
              method="POST"
              action=""
              onSubmit={this.handleSubmit}>
              <DonationSelect
                handleChange={this.handleChange}
                selectedAnimal={selectedAnimal}
              />
              <input type="hidden" value={total} required />
              <div className="row">
                <p className="donate-sub-heading">I want to donate:</p>
              </div>
              <div className="donation-buttons row">
                <div
                  className="donation-button"
                  id="3"
                  onClick={this.handleClick}
                >£3</div>
                <div
                  className="donation-button"
                  id="5"
                  onClick={this.handleClick}
                >£5</div>
                <div
                  className="donation-button"
                  id="10"
                  onClick={this.handleClick}
                >£10</div>
                <p>or</p>
                <div className="pound-input">
                  <i className="fa fa-gbp" aria-hidden="true"></i>
                  <input
                    className="pound"
                    type="number"
                    min="11"
                    max="9999999999"
                    onChange={e=> {
                      const num = Number(e.target.value) + Number(numberInput);
                      this.setState({subtotal: num
                      },()=>{
                        console.log('subtotal', subtotal);
                      });
                    }}
                  />
                </div>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox" className="form-check-input"
                    value="true"
                    onChange={(e)=>{
                      const truthy = e.target.value;
                      console.log(truthy);
                    }}
                  />
                  I want to do a monthly donation
                </label>
              </div>
              <button className="green row" type="submit">DONATE NOW</button>
            </form>
          </div>
        </div>
        <div className="col-sm-3">
          <img src={`src/assets/${selectedAnimal||giraffe}-image.jpg`} alt={selectedAnimal}/>
        </div>
      </div>
    );
  }
}

export default DonationWidget;
