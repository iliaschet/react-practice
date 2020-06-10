import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rate: {},
      result: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate }
  }

  getCalc = (e) => {
    e.preventDefault();
    this.setState({
      result: +(e.target.elements['calc-sum'].value / this.state.rate[e.target.elements['calc-rate'].value]).toFixed(2)
    })
  }

  render() {
    return (
      <div className="calculator">
        <h3 className="text-center mb-4">Калькулятор обмена</h3>
        <div className="block">
          <form onSubmit={this.getCalc}>
            <div className="form-row align-items-center">
              <div className="col-sm-3 my-1">
                <input type="number" className="form-control" defaultValue="0" name="calc-sum" />
              </div>
              <div className="col-sm-2 my-1">
                <select name="calc-rate" className="custom-select mr-sm-2">
                  {Object.keys(this.props.rate).map(el => <option value={el} key={el}>{el}</option>)}
                </select>
              </div>
              <div className="col-sm-2 my-1">
                <input className="btn btn-success" type="submit" value="Посчитать" />
              </div>
            </div>
          </form>
          <h4>Результат в {this.props.base} : <mark>{this.state.result}</mark> </h4>
        </div>
      </div>
    )
  }
}

export default Calc;