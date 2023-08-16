import React from "react";
import "../pages/Userwisee_call.css";
const Userwise_call = () => {
  const handleButtonClick = () => {
    console.log("GO Button clicked!");
  };

  const handlePrint = () => {
    console.log("Print clicked!");
    const tableToPrint = document.getElementById("Userdata");

    if (tableToPrint) {
      const newWin = window.open("", "_blank");
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

  return (
    <div className="title">
      <>
        <div className="container">
          <table className="drop" id="drop">
            <thead>
              <tr>
                <th>
                  Select User &nbsp;
                  <select className="table-filter" onChange={handleButtonClick}>
                    <option value="all">User 1</option>
                    <option value="all">User 2</option>
                    <option value="all">User 3</option>
                    <option value="all">User 4</option>
                    <option value="all">User 5</option>
                    <option value="all">User 6</option>
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
              </tr>
            </thead>
          </table>

          <h2 className="table-heading" style={{ margin: 0 }}>
            Userwise Call Report
          </h2>
          <table
            className="responsive-table table-hover table-bordered table"
            id="Userdata"
          >
            <thead>
              <tr>
                <th scope="col">Phone No</th>
                <th scope="col">Call Type</th>
                <th scope="col">Call Duration</th>
                <th scope="col">Description</th>
                <th scope="col">Satisfied</th>
                <th scope="col">Department</th>
                <th scope="col">User</th>
                <th scope="col">Call Date/Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Lorem, ipsum</td>
                <td>00:00:50</td>
                <td>Description 1</td>
                <td>Yes</td>
                <td>Medical</td>
                <td>User 1</td>
                <td>2023-07-31 12:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default Userwise_call;
