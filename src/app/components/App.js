import React, {Component} from "react";
import Accordion from "../components/Accordion";
// import "../style/index.scss";
// import "../../style/index.scss";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="accordion__container">
          <Accordion
            title="Step 1: Your details"
            content="
            <div className='form-container'>
              <p>First Name</p>
              <input></input>
              <p>Surname</p>
              <input></input>
              <p>Email address</p>
              <input></input>
            </div>
            <button>Next ></button>"
          />
          <Accordion
            title="Step 2: More comments"
            content=" 
            <div className='form-container'>
              <p>Telephone number</p>
              <input></input>
              <p>Gender</p>
              <select>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <p>Date of birth</p>
              <input></input>
              <input></input>
              <input></input>
            </div>
            <button>Next ></button>"
          />
          <Accordion
            title="Step 3: Final comments"
            content=" 
            <div className='form-container'>
              <p>Comments</p>
              <input></input>
            </div>
            <button>Next ></button>"
          />
        </div>
      </>
    );
  }
}
