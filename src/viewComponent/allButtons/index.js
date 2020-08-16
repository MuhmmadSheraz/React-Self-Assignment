import React, { useState } from "react";
import "./style.css";
function Form(props) {
  const [renderData, setrenderData] = useState("");
  const { click } = props;
  const { showData } = props;
  let show = () => {
      console.log("propData***",showData)
      setrenderData(showData);
      console.log("renderData***",renderData)
  };
  return (
    <>
      <h1>
        {renderData.uName} {renderData.PhoneNo}
      </h1>

      <input
        className="inp"
        onChange={click}
        name="userName"
        placeholder="Enter User Name"
      />
      <br />
      <input
        className="inp"
        onChange={click}
        name="phoneNumber"
        placeholder="Enter Phone Number"
      />
      <br />
      <button className="btn" onClick={() => show()}>
        Submit
      </button>
    </>
  );
}
export default Form;
