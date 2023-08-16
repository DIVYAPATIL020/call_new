const Call_report = () => {
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
        Department &nbsp;
        <select className="table-filter" onchange="filter_rows()">
          <option value="all">All</option>
          <option value="all">Medical</option>
          <option value="all">Garden</option>
          <option value="all">Electrical</option>
          <option value="all">Fire</option>
          <option value="all">Town Planning</option>
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
    <div className="outer-wrapper">
      <div className="table-wrapper">
        <table id="emp-table">
          <thead>
            <tr><th>
              Phone no
              {/* <select class="table-filter" onchange="filter_rows()">
                <option value="all">All</option> */}
            </th>
              <th>
                Call Type
                {/* <select class="table-filter" onchange="filter_rows()">
                <option value="all">All</option>
              </select> */}
              </th>
              <th>
                Call Duration
                {/* <select class="table-filter" onchange="filter_rows()">
                <option value="all">All</option>
              </select> */}
              </th>
              <th>
                Description
                {/* <select class="table-filter" onchange="filter_rows()">
                  <option value="all">All</option>
                </select> */}
              </th>
              <th>
                User
                {/* <select class="table-filter" onchange="filter_rows()">
                  <option value="all">All</option>
                </select> */}
              </th>
              <th>
                Date
                {/* <select class="table-filter" onchange="filter_rows()">
                  <option value="all">All</option>
                </select> */}
              </th>
              <th>
                Time
                {/* <select class="table-filter" onchange="filter_rows()">
                  <option value="all">All</option>
                </select> */}
              </th>
            </tr></thead>
          <tbody><tr>
            <td>12334</td>
            <td>a</td>
            <td>12 min</td>
            <td>medical related</td>
            <td>riya</td>
            <td>12/1/23</td>
            <td>1:00 pm</td>
          </tr>
          </tbody></table>

        {/*  */}
      </div>
    </div>
  </div>;
};

export default Call_report; 