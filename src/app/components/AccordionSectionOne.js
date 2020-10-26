import React, { useState, useRef } from "react";

function AccordionSectionOne(props) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  
  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }
  
  function handlEmailChange(e) {
    setEmail(e.target.value);  
  }
  
  function handleNextClick() {
    if(validateData() === false) return;
    props.toggleAccordion(props.id)
  }

  function validateData() {
    firstName.length > 0 ? console.info(`First name accepted (${firstName})`) : (alert("Please enter a first name"), console.info(`First name not accepted (${firstName})`));
    surname.length > 0 ? console.info(`Surname accepted (${surname})`) : (alert("Please enter a surname"), console.info(`Surname not accepted (${surname})`));
    email.length > 0 && validateEmail(email) ? console.info(`Email accepted (${email})`) : (alert("Please enter a valid email address"), console.info(`Email not accepted (${email})`));

    if(!(firstName.length > 0 && surname.length > 0 && email.length > 0 && validateEmail(email))) {
      return false;
    }
  }

  function validateEmail(email) {
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const passedValidation = validEmailRegex.test(email) ? true : false;

    return passedValidation;
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
                <p>First Name</p>
                <input type="text" name="first_name" onChange={handleFirstNameChange}></input>
              </div>
              <div className='detail'>
                <p>Surname</p>
                <input type="text" name="surname" onChange={handleSurnameChange}></input>
              </div>
              <div className='detail'>
                <p>Email address</p>
                <input type="text" name="email" onChange={handlEmailChange}></input>
              </div>
            </form> 
          </div>
        </div>
        <button type="submit" ref={props.content} className='next__button' onClick={handleNextClick}>Next ></button>
      </div>
    </div>
  )
}

export default AccordionSectionOne;