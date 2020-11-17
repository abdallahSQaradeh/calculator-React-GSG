import React from "react";
import "./controls.style.css";
import Divide from "../../assets/divide.png"
export default function controls(props) {
  let {controlHandler} = props;
  return (
    <div className="controls">
      <div className="row-one">
        <div className="AC" onClick={controlHandler}><small>AC</small></div>
        <div className="plus-minus" onClick={controlHandler}><small>+/-</small></div>
        <div className="percent" onClick={controlHandler}>&#37;</div>
        <div className="division" onClick={controlHandler}>
        &#247;
        </div>
      </div>
      <div className="row-two">
        <div className="seven" onClick={controlHandler}>7</div>
        <div className="eight"onClick={controlHandler}>8</div>
        <div className="nine"onClick={controlHandler}>9</div>
        <div className="multiply"onClick={controlHandler}>&#215;</div>
      </div>
      <div className="row-three">
        <div className="four"onClick={controlHandler}>4</div>
        <div className="five"onClick={controlHandler}>5</div>
        <div className="six"onClick={controlHandler}>6</div>
        <div className="minus"onClick={controlHandler}>&#8722;</div>
      </div>
      <div className="row-four">
          <div className="one"onClick={controlHandler}>1 </div>
          <div className="two"onClick={controlHandler}> 2</div>
          <div className="three"onClick={controlHandler}>3 </div>
          <div className="plus"onClick={controlHandler}>&#43; </div>
      </div>
      <div className="row-five">
        <div className="zero-container" onClick={controlHandler}>
          <div className="zero">0</div>
        <div className="zero"></div>
        </div>
        
        <div className="dot"onClick={controlHandler}>.</div>
        <div className="equal" onClick={controlHandler}>&#61;</div>
      </div>
    </div>
  );
}
