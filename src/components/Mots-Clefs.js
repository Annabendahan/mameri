import React from "react"

const MotsClefs = props => (
  <div className="motsclefs">
    <p className="desc-s">
      <p className="desc-s"> NOTIONS CLEFS </p>
      <span className="bold"> {props.link1} </span> <br />
      <span className="bold"> {props.link2}</span>
      <br />
      <span className="bold"> {props.link3}</span>
      <br />
      <span className="bold"> {props.link4} </span>
      <br />
      <span className="bold"> {props.link5} </span>
    </p>
  </div>
)

export default MotsClefs
