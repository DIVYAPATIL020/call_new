import React from "react";
import "../pages/Call_typewise.css";

const Button = ({ onClick }) => (
    <button onClick={onClick}>Print </button>
  );

const Call_typewise = () => {
    const handleButtonClick = () => {
        console.log("Print Go");
  };
    const handlePrint = () => {
      console.log("Print clicked!");
      const tableToPrint = document.getElementById("typewisedata");
      
      if (tableToPrint) {
        const newWin = window.open("",);
        newWin.document.write(`
        <html>
          <head>
            <title>Print Table</title>
            <style>
            
              table {
                border-collapse: collapse;
                width: 100%;
              }
              th, td {
                border: 1px solid black;
                padding: 8px;
                text-align: left;
              }
            </style>
          </head>
          <body>
            ${tableToPrint.outerHTML}
          </body>
        </html>
      `);
        newWin.document.close();
        newWin.print();
      } else {
        console.log("Table not found!");
      }
    };


    return <div className="title">
    <br/>
    <table>

      <tbody ><tr><th >
        Call Type &nbsp;
        <select className="table-filter" onchange="filter_rows()">
          <option value="all">All</option>
          <option value="all">Help</option>
          <option value="all">Suggestion</option>
          <option value="all">Complaint</option>
          
        </select>
      </th>
        <td>
          <button
            onClick={handleButtonClick}
            style={{
              width: "100px",
              height: "25px",
              cursor: "pointer",
              backgroundColor: "skyblue",
            }}
          >
            GO
          </button>
        </td>
        {/* <td style={{ textAlign: 'left'}}>
                <span onClick={handlePrint}>Print</span>
              </td> */}
        <td style={{ textAlign: "left" }}>
          <a
            href="#"
            onClick={handlePrint}
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Print
          </a>
        </td>

      </tr></tbody></table>
    <div className="outer-wrap">
      <div className="table-wrap">
        <table id="typewisedata">
          <thead>
            <tr><th>Phone no</th>
              <th>Call Type</th>
              <th>Call Duration</th>
              <th>Description </th>
              <th>Satisfied(Yes/No)</th>
              <th>User</th>
              <th>DateTime</th>
            </tr></thead>
          <tbody><tr>
            <td>365-374-434</td>
            <td>AA</td>
            <td>10 min</td>
            <td>Complaint Call</td>
            <td>Yes</td>
            <td>Lorem</td>
            <td>14/07/23 11:00am</td>
          </tr>
          <tr>
            <td>142-434-435</td>
            <td>BB</td>
            <td>20 min</td>
            <td>Help Call</td>
            <td>Yes</td>
            <td>ipsum</td>
            <td>22/08/22 3:00pm</td>
          </tr>
          </tbody></table>
      </div>
    </div>
    </div>;
  };
  
  export default Call_typewise; 