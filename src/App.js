import "./App.css";
import NumberField from "./components/number-field/number-field.component";
import Controls from "./components/controls/controls.component";
import { Component } from "react";
class App extends Component {
  state = {
    firstNumber: 0,
    secondNumber: 0,
    operation: "",
  };

  changeHandler = (e) => {
    this.setState({ firstNumber: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <NumberField
          number={this.state.firstNumber}
          changeHandler={this.changeHandler}
        />
        <Controls controlHandler={this.controlHandler} />
      </div>
    );
  }
  controlHandler = (e) => {
    let number = this.state.firstNumber;
    let op = false,
      num = false;
    switch (e.target.className) {
      case "dot":
        num = ".";

        break;
      case "AC":
        op = "cl";

        break;

      case "plus-minus":
        op = "+-";
        break;
      case "percent":
        op = "%";
        break;
      case "division":
        op = "/";
        break;
      case "nine":
        num = 9;
        break;
      case "eight":
        num = 8;
        break;
      case "seven":
        num = 7;
        break;
      case "six":
        num = 6;
        break;
      case "five":
        num = 5;
        break;
      case "four":
        num = 4;
        break;
      case "three":
        num = 3;
        break;
      case "two":
        num = 2;
        break;
      case "one":
        num = 1;
        break;
      case "plus":
        op = "+";
        break;

      case "minus":
        op = "-";
        break;
      case "multiply":
        op = "*";
        break;

      case "equal":
        op = "=";
        break;
      case "zero" || "zero-container":
        num = 0;
        break;
      default:
    }
    if (num !== false) {
      if (num === "." && number.toString().includes(".")) {
        console.log("cannot add another dot");
      } else
        this.setState((prevState) => {
          return { ...prevState, firstNumber: number.toString() + num };
        });
    } else if (op !== false) {
      if (op !== "+-") this.setState({ operation: op });
      if (op === "cl") this.setState({ firstNumber: 0 });
      else if (op === "+-") {
        this.setState({ firstNumber: number * -1 });
      } else if (op === "%") {
        this.setState({ firstNumber: parseFloat(number) / 100 });
      } else if (op === "=") {
        let n = 0;
        let _op = this.state.operation;
        let first = parseFloat(this.state.firstNumber);
        let second = parseFloat(this.state.secondNumber);
        switch (_op) {
          case "+":
            n = first + second;
            break;
          case "-":
            console.log({ first: first, second: second, n: n });
            n = second - first;
            break;
          case "*":
            n = first * second;
            break;
          case "/":
            if (second === 0) {
              console.log("diviosn on zero");
            } else {
              n = first / second;
            }
            break;
          default:
            break;
        }
        this.setState((prevState) => {
          return { ...prevState, firstNumber: n, secondNumber: 0 };
        });
      } else {
        this.setState((prevState) => {
          return {
            ...prevState,
            firstNumber: 0,
            secondNumber: prevState.firstNumber,
          };
        });
      }
    }
  };
}

export default App;
