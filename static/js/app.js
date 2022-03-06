// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((SpaceVisit) => {
    var row = tbody.append("tr");
    Object.entries(SpaceVisit).forEach(([key, value]) => {
        var thing = row.append("td");
        thing.text(value);
    });
});

var form = d3.select("form");

form.on("submit", pressEnter);

function tableCreate(data){
    tbody.html("");
    data.forEach((item) => {
        var nextRow = tbody.append('tr');
        Object.values(item).forEach((value) => {
            nextRow.append('td').text(value)
        });
    });
};

function pressEnter() {
    d3.event.preventDefault();
    var inputitem = d3.select("#datetime");
    var inputvalue = inputitem.property('value');
    var filtered = tableData.filter((data) => data.datetime === inputvalue);
    filtered.forEach((SpaceVisit) => {
        var row = tbody.append("tr");
        Object.entries(SpaceVisit).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
    console.log(filtered);
    tableCreate(filtered);
};