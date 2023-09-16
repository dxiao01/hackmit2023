


import React from "react";

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  const sendText = _ => {
    fetch(`http://127.0.0.1:4000/send-text?recipient=8179959430&textmessage=You_Have_Bad_Posture!`)
    .catch(err => console.error(err))
  }
  return (
    <div>
      <h3>Classification Confidence: {label}</h3>  
      {confidence*100}%
      {label === "Bad Posture" && sendText}
    </div>
  );
};
export default Chart;