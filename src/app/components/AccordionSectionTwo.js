import React, { useState, useRef } from "react";
// import "./Accordion.scss";

function AccordionSectionTwo(props) {
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dateOfBirth, setDateofBirth]  = useState("");

  // const [active, setActive] = useState("");
  // const [setHeight, setHeightState] = useState("0px");
  // const content = useRef(null);

  // function toggleAccordion() {
  //   setActive(active === "" ? "active" : "");
    
  //   console.log(content.current.scrollHeight);

  //   setHeightState(active === "active" ? "0px" : `${content.current.scrollHeight}px`);
  // }

  function handleTelephoneChange(e) {
    // console.log(e.target.value);
    setTelephoneNumber(e.target.value);
  }
  
  function handleGenderChange(e) {
    // console.log(e.target.value);
    setGender(e.target.value);
  }

  function handleDateDayChange(e) {
    // console.log(e.target.value);
    setDay(e.target.value);
  }

  function handleDateMonthChange(e) {
    // console.log(e.target.value);
    setMonth(e.target.value);
  }

  function handleDateYearChange(e) {
    // console.log(e.target.value);
    setYear(e.target.value);
  }
  
  function handleNextClick() {
    if(validateData() === false) return;
    
    props.toggleAccordion(props.id)
  }
  
  function validateData() {
    const concatDateofBirth = (`${day}/${month}/${year}`);
    console.log("data to validate: ", telephoneNumber, gender, concatDateofBirth);

    telephoneNumber.length > 0 && validateTelephoneNumber(telephoneNumber) ? console.info(`Telephone number accepted  (${telephoneNumber})`) : (alert("Please enter a valid UK telephone number (11 digits, beginning with 07)", console.info(`Telephone number not accepted (${telephoneNumber})`)));
    gender.length > 0 ? console.info(`Gender accepted (${gender})`) : (alert("Please select a gender"), console.info(`Gender not accepted (${gender})`));
    day.length > 0 && validateDay(day) && month.length > 0 && validateMonth(month) && year.length > 0 && validateYear(year) ? console.info(`Date of birth accepted (${concatDateofBirth})`) : (alert("Please enter a date of birth in the format dd/mm/yyy"), console.info(`Date of birth not accepted (${concatDateofBirth})`));
  
    if(!(telephoneNumber.length > 0 && validateTelephoneNumber(telephoneNumber) && gender.length > 0 && day.length > 0 && validateDay(day))) {
      return false;
    }
  }

  function validateTelephoneNumber(telephoneNumber) {
    const telephonePrefix = telephoneNumber.slice(0, 2);
    const passedPrefixCheck = telephonePrefix === "07";
    const passedLengthCheck = telephoneNumber.length === 11;
    const passedValidation = passedPrefixCheck && passedLengthCheck;
    // debugger;
    return passedValidation;
  }

  function validateDay(day) {
    const passedValidation = day <= 31;
    return passedValidation;
  }

  function validateMonth(month) {
    const passedValidation = month <= 12;
    return passedValidation;
  }

  function validateYear(year) {
    const passedValidation = year < 2021
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
              <p>Telephone number</p>
              <input type="number" name="telephone" onChange={handleTelephoneChange}></input>
            </div>  
            <div className='detail'>
              <p>Gender</p>
              <select onChange={handleGenderChange}>
                <option disabled selected hidden>Select Gender</option>
                <option type="text" value="male">Male</option>
                <option type="text" value="female">Female</option>
                <option type="text" value="other">Other</option>
              </select>
            </div>  
            <div className='detail'>
              <p>Date of birth</p>
              <input type="text" name="date_of_birth_day" className='date__of__birth__input' onChange={handleDateDayChange}></input>
              <input type="text" name="date_of_birth_month" className='date__of__birth__input' onChange={handleDateMonthChange}></input>
              <input type="text" name="date_of_birth_year" className='date__of__birth__input' onChange={handleDateYearChange}></input>
            </div>  
          </form>   
        </div>
        </div>
        <button type="submit" ref={props.content} className='next__button' onClick={handleNextClick}>Next ></button>
      </div>
    </div>
  )
}

export default AccordionSectionTwo;