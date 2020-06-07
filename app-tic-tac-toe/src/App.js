import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares : Array(9).fill(null),
      count : 0,
      finished : false,
      title : '✖ против 🞅',
      x: 0,
      o: 0
    }
  }

  isFinish = (s) => {
    let finishLine = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]
    finishLine.forEach( (line) => {
        if (this.state.squares[line[0]] === s && this.state.squares[line[1]] === s && this.state.squares[line[2]] === s) {
          let xo = s === '🞅' ? 'o' : 'x';
          this.setState({
            finished : true,
            title : `Победили: ${s}`,
            [xo] : this.state[xo] + 1
          })
        }
      }
    );
    setTimeout(()=>{
      if (this.state.finished === false && this.state.count >= 8) {
        this.setState({
          finished : true,
          title : `Ничья`
        })
      } 
    },0)
  }

  reset = () => {
    this.setState({
      squares : Array(9).fill(null),
      count : 0,
      finished : false,
      title : '✖ против 🞅'
    })
  } 
 
  clickHandler = e => {
    if (!this.state.finished) {
      let numberCurrentSquare = e.target.getAttribute('data');
      let newSquares = this.state.squares;
      if(!newSquares[numberCurrentSquare]) {
        newSquares[numberCurrentSquare] = (this.state.count % 2) ? '🞅' : '✖';
        this.setState({
          squares: newSquares,
          count: this.state.count + 1
        })
        this.isFinish(newSquares[numberCurrentSquare]);
      }
    }
  }

  render(){
    return (
      <div className="container text-center">
        <div className="alert alert-success" role="alert">
          <strong>Глобальный счет:</strong>
          <p>
            <small>Крестики:</small> <strong>{this.state.x}</strong> | <small>Нолики:</small> <strong>{this.state.o}</strong>
          </p>
        </div>
        <h2>{this.state.title}</h2>
        <div className="tic-tac-toe">
          <div className="square" data="0" onClick={this.clickHandler}>{this.state.squares[0]}</div>
          <div className="square" data="1" onClick={this.clickHandler}>{this.state.squares[1]}</div>
          <div className="square" data="2" onClick={this.clickHandler}>{this.state.squares[2]}</div>
          <div className="square" data="3" onClick={this.clickHandler}>{this.state.squares[3]}</div>
          <div className="square" data="4" onClick={this.clickHandler}>{this.state.squares[4]}</div>
          <div className="square" data="5" onClick={this.clickHandler}>{this.state.squares[5]}</div>
          <div className="square" data="6" onClick={this.clickHandler}>{this.state.squares[6]}</div>
          <div className="square" data="7" onClick={this.clickHandler}>{this.state.squares[7]}</div>
          <div className="square" data="8" onClick={this.clickHandler}>{this.state.squares[8]}</div>
        </div>
        <input type="button" className="btn btn-warning" value="Начать заново" onClick={this.reset} />
      </div>
    );
  }
}

export default App;
