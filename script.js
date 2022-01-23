// HOMEWORK EVENT LISTENERS

// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :)

let tableHolder = document.getElementById("tableHold");
let createTbl = document.getElementById("createTableButton");

function createTable() {
var body = document.getElementsByTagName("body")[0];
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");
tbl.setAttribute("id","myTable");
tbl.setAttribute("border", "1");
tblBody.setAttribute("id","myRows");
tbl.appendChild(tblBody);
body.appendChild(tbl);
}

function addRowsandColumns () {
rn = document.getElementById("inputRows").value;
cn = document.getElementById("inputColumns").value;
   for(var r = 0;r < parseInt(rn);r++) {
        var x = document.getElementById('myTable').insertRow(r);
   for(var c = 0;c < parseInt(cn);c++) {
        var y = x.insertCell(c);
        y.innerHTML = "Row - "+ (r + 1) +" Column - " + (c + 1); 
    }
   }
}

createTbl.addEventListener("click", () => {
    createTable();
    addRowsandColumns();
})


