import React, { Component } from "react";
import Board from "../board/board";
import WinningPage from "../winningPage/winningPage";
import "./app.css";
import { connect } from "react-redux";
import { generateRundomNums } from "../redux/platform/paltform.action";

class App extends Component {
  state = {
    victory: false,
  };

  componentDidUpdate() {
    if (this.state.victory === false) {
      this.setVictory();
    }
  }
  boardRestart = () => {
    this.props.generateRundomNums();
    this.setState({ victory: false });
  };

  setVictory = () => {
    const arr = [];
    let table = [...this.props.platformData];
    for (let i = 1; i <= 16; i++) {
      if (i < 16) {
        arr.push({ num: i });
      } else if (i === 16) {
        arr.push({ num: null });
      }
    }
    const newArr = [];
    for (let i = 0; i < arr.length / 4; i += 1) {
      const miniArr = arr.slice(i * 4, (i + 1) * 4);
      newArr.push(miniArr);
    }

    let data = JSON.stringify(newArr);
    let setData = JSON.stringify(table);

    if (setData === data) {
      this.setState({ victory: true });
    }
  };

  render() {
    const { generateRundomNums, counter } = this.props;
    const { victory } = this.state;

    return (
      <div className="game-bg">
        <div className="game">
          <Board />
          <div className="footer">
            <button onClick={generateRundomNums}>Start again</button>
            <div className="board-Input">{counter}</div>
          </div>
        </div>
        {victory === true ? <WinningPage restart={this.boardRestart} /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  generateRundomNums: () => dispatch(generateRundomNums()),
});
const mapStateToProps = (state) => ({
  platformData: state.platform.platformData,
  counter: state.platform.counter,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
