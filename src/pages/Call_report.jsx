const Call_report = () => {
  return <div className="title">
    <div className="heading">

      {/* <button id="get-unique-values" onclick="getUniqueValuesFromColumn()">Get unique column values</button> */}
    </div>
    <br />
    {/* <label for="selectOption">Deapartment</label> */}
    <table>
      <tbody><tr><th>
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