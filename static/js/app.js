// import the data from the data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select('tbody');

// Table function build out
function buildTable(data) {
    tbody.html("");

    data.forEach((datarow) => {
        let row = tbody.append("tr");
        Object.values(datarow).forEach((val) =>{
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}