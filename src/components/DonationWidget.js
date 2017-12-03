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
      total: null,
      monthlyDonation: false,
      selectedAnimal: ''
    };

    this.handleClick =  this.handleClick.bind(this);
    this.handleChange =  this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
  }

  handleClick = (e) => {
    const sum = Number(this.state.subtotal) +  Number(e.target.id);
    this.setState({ subtotal: sum },()=>console.log('subtotal', sum));
  }

  handleChange = e => {
    const animal = e.target.value;
    this.setState({
      selectedAnimal: animal,
      subtotal: 0
    });
    console.log('change', e.target.value);
    console.log('handleChange subtotal',this.state.subtotal);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    // const sum = Number(this.state.subtotal) + this.state.total;
    // this.setState({
    //   total: sum,
    //   subtotal: 0
    // },()=>console.log('total', this.state.total));
  }

  render(){
    const giraffe = 'giraffe';
    const{numberInput, selectedAnimal, subtotal} = this.state;
    // console.log('widget', handleSubmit);
    return (
      <div id="donation" className="row no-gutters">
        <div className="col-sm-9">
          <div className="container donation-left">
            <h2>MAKE A DONATION</h2>
            <form
              method="get"
              action=""
              onSubmit={this.handleSubmit}>
              <DonationSelect
                handleChange={this.handleChange}
                selectedAnimal={selectedAnimal}
              />
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
                      this.setState({numberInput: num
                      });
                      console.log('subtotal', subtotal);

                    }}
                  />
                </div>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    type="checkbox" className="form-check-input"
                    value="monthly"
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
