import React, {Component} from "react";
import Accordion from "../components/Accordion";

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
