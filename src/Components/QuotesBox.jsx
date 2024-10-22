import { useEffect } from "react";
import { useState } from "react"

const QuotesBox = () => {

const [quote,setQuote]=useState("");

async function getAdvice() {
  const res =await fetch('https://api.adviceslip.com/advice')
  const data =await res.json();
  console.log(data.slip.advice);
  setQuote(data.slip.advice)
  
  
}
useEffect(() => {
  getAdvice();

}, [])

    
  return (
    <>
    
      <div className="card position-absolute top-50 start-50 translate-middle saad"  >
      <center>
  <div className="card-header header ">
    Advice of the Day
  </div>
  </center>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{quote}</p>

      <div className="d-flex justify-content-end">
      <button type="button" className="btn btn-primary " onClick={getAdvice}>Get Another</button>
      </div>

    </blockquote>
  </div>
</div>
    
    </>
  )
}

export default QuotesBox
