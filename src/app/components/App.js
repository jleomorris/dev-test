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
            <div class='form-container'>
              <div class='detail'>
                <p>First Name</p>
                <input></input>
              </div>
              <div class='detail'>
                <p>Surname</p>
                <input></input>
              </div>
              <div class='detail'>
                <p>Email address</p>
                <input></input>
              </div>
            </div>
            <button class='next__button'>Next ></button>"
          />
          <Accordion
            title="Step 2: More comments"
            content=" 
            <div class='form-container'>
              <div class='detail'>
                <p>Telephone number</p>
                <input></input>
              </div>  
              <div class='detail'>
                <p>Gender</p>
                <select>
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>  
              <div class='detail'>
                <p>Date of birth</p>
                <input class='date__of__birth__input'></input>
                <input class='date__of__birth__input'></input>
                <input class='date__of__birth__input'></input>
              </div>  
            </div>
            <button class='next__button'>Next ></button>"
          />
          <Accordion
            title="Step 3: Final comments"
            content=" 
            <div class='form-container'>
              <div class='detail'>
                <p>Comments</p>
                <input class='comments__input'></input>
              </div>
            </div>
            <button class='next__button'>Next ></button>"
          />
        </div>
      </>
    );
  }
}
