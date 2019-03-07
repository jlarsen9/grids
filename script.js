/*
Cretes a row of buttons
@params: numButtons (number) - the number of buttons to create
*/
function createButtonRow(numButtons) {
    var row = ""
    for (var i = 1; i <= numButtons; i++) {
        button = "<button>" + i + "</button>"
        row = row + button
    }
    var contentDiv = document.getElementById("content")
    contentDiv.innerHTML += row + "<br></br>"
}


var numRows = 4
var numColumns = 3

for (var p = 1; p <= numRows; p++) {
    createButtonRow(numColumns)
}


//--------------

//make a row of 4 buttons and 3 columns

var row = ""

