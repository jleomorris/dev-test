import React, { useState, useRef } from "react";
// import "./Accordion.scss";

function AccordionSectionThree(props) {
  const [comments, setComments] = useState("");
  // const [active, setActive] = useState("");
  // const [setHeight, setHeightState] = useState("0px");
  // const content = useRef(null);

  // function toggleAccordion() {
  //   setActive(active === "" ? "active" : "");
    
  //   console.log(content.current.scrollHeight);

  //   setHeightState(active === "active" ? "0px" : `${content.current.scrollHeight}px`);
  // }

  function handleCommentsChange(e) {
    setComments(e.target.value);
  }

  function handleNextClick(e) {
    props.toggleAccordion(props.id)
    console.log(`Comments accepted (${comments})`)
  }
  
  return (
    <div className="accordion__section">
      <button className={`accordion ${props.active}`} onClick={() => { props.toggleAccordion(props.id) }}>
        <p className="accordion__title">{props.title}</p>
      </button>
      <div ref={props.content} style={{ maxHeight: `${props.setHeight}` }} className="accordion__content">
        <div className="accordion__text"> 
          <div className='form-container'>
              <div className='detail'>
                <p>Comments</p>
                <input className='comments__input' onChange={handleCommentsChange}></input>
              </div>
          </div>
        </div>
        <button ref={props.content} className='next__button' onClick={handleNextClick}>Next ></button>
      </div>
    </div>
  )
}

export default AccordionSectionThree;