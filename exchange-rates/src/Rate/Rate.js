import React from 'react';
import './Rate.css';

class Rate extends React.Component {

  render() {
    return (
      <div>
        <h3 className="text-center mb-4">Курс валют на {this.props.date}</h3>
        <div className="flex-container">
        <div className="card-deck">

          {Object.keys(this.props.rate).map(el => {
            return (
              <div className="card" key={el}>
                <div className="card-body">
                  <h5 className="card-title">{el}</h5>
                  <p className="card-text">{this.props.rate[el].toFixed(2)} *</p>
                </div>
              </div>
            )
          })}
        </div>
        </div>
        <p className="my-4 small text-center">* Можно купить за 1 {this.props.base} </p>
      </div>
    )
  }
}

export default Rate;
