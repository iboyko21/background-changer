import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Color(props) {
  return (
    <div className="child">
      <div>{props.name}</div>
      <div>{props.value}</div>
      <div>
        <button onClick={props.onPlus}>+1</button>
        <button onClick={props.onMinus}>-1</button>
      </div>
      <div>
        <button onClick={props.onPlusTen}>+10</button>
        <button onClick={props.onMinusTen}>-10</button>
      </div>
    </div>
  )
}

class RGB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
  }

  componentDidUpdate() {
    let r = this.state.red;
    let g = this.state.green;
    let b = this.state.blue;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

  onPlus(i) {
    this.setState( prevState => { return {[i]: prevState[i] + 1} });
  }
  onMinus(i) {
    this.setState( prevState => { return {[i]: prevState[i] - 1} });
  }

  onPlusTen(i) {
    this.setState( prevState => { return {[i]: prevState[i] + 10} });
  }
  onMinusTen(i) {
    this.setState( prevState => { return {[i]: prevState[i] - 10} });
  }

  render() {
    return (
      <div className="container">
        <Color name={"Red"} value={this.state.red} 
        onPlus={() => this.onPlus("red")} onMinus={() => this.onMinus("red")}
        onPlusTen={() => this.onPlusTen("red")} onMinusTen={() => this.onMinusTen("red")} />
        
        <Color name={"Green"} value={this.state.green} 
        onPlus={() => this.onPlus("green")} onMinus={() => this.onMinus("green")}
        onPlusTen={() => this.onPlusTen("green")} onMinusTen={() => this.onMinusTen("green")} />

        <Color name={"Blue"} value={this.state.blue}
        onPlus={() => this.onPlus("blue")} onMinus={() => this.onMinus("blue")}
        onPlusTen={() => this.onPlusTen("blue")} onMinusTen={() => this.onMinusTen("blue")} />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RGB />
);