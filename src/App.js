import React, { useState } from "react";
import Form from "./viewComponent/allButtons";
import "./App.css";

function App() {
  const [data, setData] = useState({
    uName: "",
    PhoneNo: "",
  });
 
  const saveData = (e) => {
    let nameAttribute = e.target.name;
    let value = e.target.value;

    setData((preValue) => {
      if (nameAttribute === "userName") {
        return { uName: value, PhoneNo: preValue.PhoneNo };
      }
      else if (nameAttribute === "phoneNumber") {
        return { uName: preValue.uName, PhoneNo: value };
      }
    });
    console.log(data)
  };

  return (
    <div
      style={{ textAlign: "center", background: "#A3579F", height: "100vh" }}
    >
      <Form click={saveData} showData={data}/>
    </div>
  );
}

export default App;
