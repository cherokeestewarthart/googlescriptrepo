function setValue(cellName, value) {
    SpreadsheetApp.getActiveSpreadsheet().getRange(cellName).setValue(value);
}

function timeNow() {
    var d = new Date();
    return d.getDate() + "-" + (d.getMonth() + 1) +
        "-" + d.getFullYear() + " " + d.getHours() + ":" +
        d.getMinutes() + ":" + d.getSeconds();
}

function addRecord(note) {
    var row = SpreadsheetApp.getActiveSpreadsheet().getLastRow() + 1;
    setValue('A' + row, Session.getActiveUser().getEmail());
    setValue('B' + row, timeNow());
    setValue('C' + row, note);
}

function punchIn() {
    addRecord('In');
}

function punchOut() {
    addRecord('Out');
}