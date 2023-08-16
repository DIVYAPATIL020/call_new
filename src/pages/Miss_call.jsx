import React from "react";
import "../pages/Miss_call.css";

const Button = ({ onClick }) => (
    <button onClick={onClick}>Print </button>
  );

const Miss_call = () => {
    const handleButtonClick = () => {
        console.log("Print Go");
    };
    const handlePrint = () => {
        const tableToPrint = document.getElementById('typewisedata');
        if (tableToPrint) {
          const originalDisplay = tableToPrint.style.display;
          tableToPrint.style.display = 'table';
          window.print();
          tableToPrint.style.display = originalDisplay;
        }
      };
    return <div className="title">
    <br/>
    <table >
      <tbody ><tr><th style={{position:"absolute", left: '7%', top: "7%",fontWeight:"bold",borderRadius:"4px"}}>
      Missed Call Report &nbsp;
        
        
        </th>
      
      <td style={{border:"none",height:"40px"}}><button style={{ position:"absolute",cursor: "pointer",width: "100px",height:"40px", left:"66%",top:"7%"}} id="btn2" onClick={handlePrint}>Print</button></td>
      </tr></tbody></table>
    <div className="outer-wrap">
      <div className="table-wrap">

        <h3 className="table-heading" style={{ margin: 0}}>
            Call Report
          </h3>
        <table id="typewisedata">
          <thead>
            <tr><th>Phone no</th>
              <th>Call Time</th>
              
            </tr></thead>
          <tbody><tr>
            <td>365-374-434</td>
            <td>14/07/2016 08:46:11</td>
          </tr>
          <tr>
            <td>142-434-435</td>
            <td>01/12/2016 18:46:11</td>
            
          </tr>
          </tbody></table>
      </div>
    </div>
    </div>;
  };
  
  export default Miss_call; 