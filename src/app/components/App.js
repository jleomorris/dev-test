import React, {Component} from "react";
import Accordion from "../components/Accordion";
// import "../style/index.scss";
// import "../../style/index.scss";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="accordion__container">
          <Accordion />
        </div>
      </>
    );
  }
}
