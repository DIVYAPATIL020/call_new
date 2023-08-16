const Miss_call = () => {
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  const handleButtonClick = () => {
    console.log("GO Button clicked!");
  };

  const handlePrint = () => {
    console.log("Print clicked!");
    const tableToPrint = document.getElementById("emp-table");

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


  

  return <div className="title">
    <div className="heading">

      {/* <button id="get-unique-values" onclick="getUniqueValuesFromColumn()">Get unique column values</button> */}
    </div>
    <br />
    {/* <label for="selectOption">Deapartment</label> */}

    <table>

      <tbody ><tr><th >
        Missed Call Report &nbsp;
        
      </th>
        
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
    <div className="outer-wrapper">
      <div className="table-wrapper">
        <table id="emp-table">
          <thead>
            <tr><th>
              Phone No.
              {/* <select class="table-filter" onchange="filter_rows()">
                <option value="all">All</option> */}
            </th>
              <th>
                Call Type
                {/* <select class="table-filter" onchange="filter_rows()">
                <option value="all">All</option>
              </select> */}
              </th>
              
              
              
            </tr></thead>
          <tbody><tr>
            <td>9345189654</td>
            <td>01/07/2016 08:06:11</td>
            
          </tr>
          <tr>
            <td>9345189654</td>
            <td>11/17/2016 10:06:12</td>
            
          </tr>
          </tbody></table>

        {/*  */}
      </div>
    </div>
  </div>;
};

export default Miss_call; 