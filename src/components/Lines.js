import React from "react";
import { Line } from "./Line";

export class Lines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      lines: [],
    };
  }

  handleAdd() {
    const text = this.state.text;
    const lines = this.state.lines;

    this.setState({
      text: "",
      lines: lines.concat([
        {
          id: lines.length,
          text: text,
        },
      ]),
    });
  }

  render() {
    const lines = this.state.lines;

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
              return <Line key={line.id} text={line.text} />;
            })
          : ""}
      </div>
    );
  }
}
