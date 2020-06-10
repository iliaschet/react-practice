import React from 'react';
import Rate from './Rate/Rate';
import Calc from './Calc/Calc';

class CZK extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      rate: {},
      base: 'CZK',
      currency: ['RUB', 'EUR', 'USD', 'CAD', 'CHF']
    }
  }

  getCource = (currency) => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
    .then((data) => data.json())
    .then((data) => {
        let result = {}
        currency.map(el => result[el] = data.rates[el]);
        this.setState({
          date: data.date,
          rate: result,
        })
      }
    )
  }

  componentDidMount() {
    this.getCource(this.state.currency);
  }

  render() {
    return (
      <div className="rate">
        <Rate date={this.state.date} rate={this.state.rate} base={this.state.base} />
        <Calc rate={this.state.rate} base={this.state.base} />
      </div>
    )
  }
}

export default CZK;