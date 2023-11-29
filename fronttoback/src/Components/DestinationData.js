import { Component } from "react";
import Mountain1 from "../Assets/5.jpg";
import Mountain2 from "../Assets/6.jpg";

import "./DestinationStyle.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
        <h2>{this.props.heading}</h2>
        <p>
          {this.props.text}
        </p>
        </div>
        <div className="image">
          <img alt="img" src={Mountain1}/>
          <img alt="img" src={Mountain2}/>
        </div>
        </div>
    )
  }
}

export default DestinationData