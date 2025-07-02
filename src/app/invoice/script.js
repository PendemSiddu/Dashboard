data = [
    {
      key: "IPT",
      value1: "green",
      value2: "green",
      value3: "green",
      value4: "green",
      value5: "green",
      value6: "green",
      value7: "green",
      value8: "green",
      value9: "green",
      value10: "yellow",
      value11: "yellow",
      value12: "yellow",
      value13: "yellow",
      value14: "yellow",
      value15: "yellow",
      value16: "yellow",
      value17: "yellow",
      value18: "yellow",
      value19: "grey",
      value20: "grey",
      value21: "grey",
      value22: "grey",
      value23: "grey",
      value24: "grey",
      value25: "grey",
      value26: "grey",
      value27: "grey",
      value28: "blue",
      value29: "blue",
      value30: "blue",
      value31: "blue",
      value32: "blue",
      value33: "blue",
      value34: "blue",
      value35: "blue",
      value36: "blue",
    },
    {
      key: "PPP",
      value1: "green",
      value2: "green",
      value3: "green",
      value4: "green",
      value5: "green",
      value6: "green",
      value7: "green",
      value8: "green",
      value9: "green",
      value10: "yellow",
      value11: "yellow",
      value12: "yellow",
      value13: "yellow",
      value14: "yellow",
      value15: "yellow",
      value16: "yellow",
      value17: "yellow",
      value18: "yellow",
      value19: "grey",
      value20: "grey",
      value21: "grey",
      value22: "grey",
      value23: "grey",
      value24: "grey",
      value25: "grey",
      value26: "grey",
      value27: "grey",
      value28: "blue",
      value29: "blue",
      value30: "blue",
      value31: "blue",
      value32: "blue",
      value33: "blue",
      value34: "blue",
      value35: "blue",
      value36: "blue",
    },
  ];
  
  let propertyNamesArray = [];
  let tableData = [];
  let quarter = 1;
  const dropdown = document.querySelector(".myDropdown");
  
  function createQuarters(start, end) {
    for (let i = start; i <= end; i++) {
      propertyNamesArray.push(`value${i}`);
    }
  }
  
  dropdown.addEventListener("change", function () {
    // Log the selected value to the console
    changeQuarter(dropdown.value);
  });
  
  function changeQuarter(val = 1) {
    quarter = +val;
    propertyNamesArray = [];
    if (quarter === 1) createQuarters(1, 9);
    if (quarter === 2) createQuarters(10, 18);
    if (quarter === 3) createQuarters(19, 27);
    if (quarter === 4) createQuarters(28, 36);
    createProperty();
    htmlContent();
  }
  
  function createProperty() {
    tableData = [];
    data.forEach((d) => tableData.push({ project: d.key }));
    for (let i = 0; i < data.length; i++) {
      for (let j = 1; j <= propertyNamesArray.length; j++) {
        //creating value properties and set table data from data
        tableData[i][`value${j}`] = data[i][propertyNamesArray[j - 1]];
      }
    }
  }
  
  function htmlContent() {
    const html = ` <table>
                          <thead>
                          <tr>
                              <th>Column 1</th>
                              <th>Column 2</th>
                              <th>Column 3</th>
                              <th>Column 4</th>
                              <th>Column 5</th>
                              <th>Column 6</th>
                              <th>Column 7</th>
                              <th>Column 8</th>
                              <th>Column 9</th>
                              <th>Column 10</th>
                          </tr>
                          </thead>
                          <tbody>
                          <!-- Add your data rows here -->
                          ${tableData
                            .map((tData) => {
                              return `<tr>
                              <td>${tData.project}</td>
                              <td>${tData.value1}</td>
                              <td>${tData.value2}</td>
                              <td>${tData.value3}</td>
                              <td>${tData.value4}</td>
                              <td>${tData.value5}</td>
                              <td>${tData.value6}</td>
                              <td>${tData.value7}</td>
                              <td>${tData.value8}</td>
                              <td>${tData.value9}</td>
                                      </tr>`;
                            })
                            .join("")}
                          <!-- Add more rows as needed -->
                          </tbody>
                      </table>`;
  
    document.querySelector(".container").insertAdjacentHTML("afterbegin", html);
  }
  
  createProperty();
  changeQuarter();
  