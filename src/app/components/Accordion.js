import React, { useState, useRef, useEffect } from "react";
import "./Accordion.scss";
// import "./Accordion.sass";
import AccordionSectionOne from "./AccordionSectionOne";
import AccordionSectionTwo from "./AccordionSectionTwo";
import AccordionSectionThree from "./AccordionSectionThree";

function Accordion(props) {
  const [sectionOneactive, setSectionOne] = useState("");
  const [sectionOneHeight, setSectionOneHeight] = useState("0px");
  const [sectionTwoactive, setSectionTwo] = useState("");
  const [sectionTwoHeight, setSectionTwoHeight] = useState("0px");
  const [sectionThreeactive, setSectionThree] = useState("");
  const [sectionThreeHeight, setSectionThreeHeight] = useState("0px");
  const content = useRef(null);

  useEffect(() => {
    setSectionOne("active");
    setSectionOneHeight(`${content.current.scrollHeight}px`);
  }, [])

  function toggleAccordion(i) {
    if(i==0) {
      setSectionOne(sectionOneactive === "" ? "active" : "");
      setSectionTwo(sectionOneactive === "" ? "active" : "");
      setSectionOneHeight(sectionOneactive === "active" ? "0px" : `${content.current.scrollHeight}px`);
      setSectionTwoHeight(sectionOneactive === "" ? "0px" : `${content.current.scrollHeight}px`);
      setSectionTwo(sectionTwoactive === "" ? "active" : "");
    }else if(i==1) {
      setSectionThree(sectionTwoactive === "" ? "active" : "");
      setSectionTwoHeight(sectionTwoactive === "active" ? "0px" : `${content.current.scrollHeight}px`);
      setSectionThreeHeight(sectionTwoactive === "" ? "0px" : `${content.current.scrollHeight}px`);
      setSectionThree(sectionThreeactive === "" ? "active" : "");
    } else if(i==2) {
      setSectionThree(sectionThreeactive === "" ? "active" : "");
      setSectionThreeHeight(sectionThreeactive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    }  
  }
  
  return (
    <>
      <AccordionSectionOne active={sectionOneactive} setActive={setSectionOne} setHeight={sectionOneHeight} setHeightState={setSectionOneHeight} content={content} toggleAccordion={toggleAccordion} title="Step 1: Your details" id="0" />
      <AccordionSectionTwo active={sectionTwoactive} setActive={setSectionTwo} setHeight={sectionTwoHeight} setHeightState={setSectionTwoHeight} content={content} toggleAccordion={toggleAccordion} title="Step 2: More comments" id="1" />
      <AccordionSectionThree active={sectionThreeactive} setActive={setSectionThree} setHeight={sectionThreeHeight} setHeightState={setSectionThreeHeight} content={content} toggleAccordion={toggleAccordion} title="Step 3: Final comments" id="2"/>
    </>
  )
}

export default Accordion;