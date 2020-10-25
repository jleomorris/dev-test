import React, { useState, useRef } from "react";
// import "./Accordion.scss";

function AccordionSectionTwo(props) {
  // const [active, setActive] = useState("");
  // const [setHeight, setHeightState] = useState("0px");
  // const content = useRef(null);

  // function toggleAccordion() {
  //   setActive(active === "" ? "active" : "");
    
  //   console.log(content.current.scrollHeight);

  //   setHeightState(active === "active" ? "0px" : `${content.current.scrollHeight}px`);
  // }
  
  return (
    <div className="accordion__section">
      <button className={`accordion ${props.active}`} onClick={() => { props.toggleAccordion(props.id) }}>
        <p className="accordion__title">{props.title}</p>
      </button>
      <div ref={props.content} style={{ maxHeight: `${props.setHeight}` }} className="accordion__content">
        <div className="accordion__text"> 
        <div className='form-container'>
              <div className='detail'>
                <p>Telephone number</p>
                <input></input>
              </div>  
              <div className='detail'>
                <p>Gender</p>
                <select>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                </select>
              </div>  
              <div className='detail'>
                <p>Date of birth</p>
                <input className='date__of__birth__input'></input>
                <input className='date__of__birth__input'></input>
                <input className='date__of__birth__input'></input>
              </div>  
            </div>
        </div>
        <button ref={props.content} className='next__button' onClick={() => { props.toggleAccordion(props.id) }}>Next ></button>
      </div>
    </div>
  )
}

export default AccordionSectionTwo;