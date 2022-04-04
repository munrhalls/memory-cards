import React from "react";
import { Line } from "./Line";

export class Lines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      history: [{ lines: [] }],
      timePoint: 0,
    };
  }

  handleAdd() {
    const history = this.state.history.slice(0, this.state.timePoint + 1);
    const current = history[history.length - 1];
    const lines = current.lines.slice();

    lines[lines.length] = {
      id: lines.length,
      text: this.state.text,
    };
    console.log(history);
    this.setState({
      text: "",
      history: history.concat([{ lines: lines }]),
      timePoint: history.length,
    });
  }
  jumpToTime(index) {
    this.setState({
      timePoint: index,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.timePoint];
    const lines = current.lines;

    const timePoints = history.map((lineAdded, index) => {
      const desc = index
        ? "Go to time of adding line #" + index
        : "Go to first line.";
      return (
        <li key={index}>
          <button onClick={() => this.jumpToTime(index)}>{desc}</button>
        </li>
      );
    });
    return (
      <div className="lines">
        <input
          type="text"
          className="lines-add-input"
          onChange={(e) => this.setState({ text: e.target.value })}
          value={this.state.text}
        />
        <button className="lines-add-btn" onClick={() => this.handleAdd()}>
          ADD
        </button>
        {lines.length
          ? lines.map((line) => {
              return <Line key={line.id} {...line} />;
            })
          : ""}
        <ol>{timePoints}</ol>
      </div>
    );
  }
}
