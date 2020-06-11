import React from "react";
import "./style.css";



function Wrapper(props) {

  const style = {
    font: 'Arial',
    color: 'teal',
    display: 'block'
  }


  return (
    <div className="wrapper">{props.children}
        <h1 style={style}>Get Ya Coffee</h1>
    </div>
  )
}

export default Wrapper;