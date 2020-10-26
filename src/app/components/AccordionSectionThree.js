import React, { useState, useRef } from "react";

function AccordionSectionThree(props) {
  const [comments, setComments] = useState("");

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
            <form method="post" action="{{url('user')}}">
              <div className='detail'>
                <p>Comments</p>
                <input type="text" name="comments" className='comments__input' onChange={handleCommentsChange}></input>
              </div>
            </form>
          </div>
        </div>
        <button type="submit" ref={props.content} className='next__button' onClick={handleNextClick}>Next ></button>
      </div>
    </div>
  )
}

export default AccordionSectionThree;