const addRecord = () => {
    const moving = document.getElementById("moving").value;
    const timestamp = document.getElementById("timestamp").value;
    const sightingTime = document.getElementById("sightingTime").value;
    const herdSize = document.getElementById("herdSize").value;
    const male = document.getElementById("male").value;
    const female = document.getElementById("female").value;
    const calf = document.getElementById("calf").value;
    const location = document.getElementById("location").value;
    const user = document.getElementById("user").value;
    const status = document.getElementById("status").value;
    const action = document.getElementById("action").value;

    const newRow = document.createElement("tr");

    const movingCell = document.createElement("td");
    movingCell.textContent = moving;

    const timestampCell = document.createElement("td");
    timestampCell.textContent = timestamp;

    const sightingTimeCell = document.createElement("td");
    sightingTimeCell.textContent = sightingTime;

    const herdSizeCell = document.createElement("td");
    herdSizeCell.textContent = herdSize;

    const maleCell = document.createElement("td");
    maleCell.textContent = male;

    const femaleCell = document.createElement("td");
    femaleCell.textContent = female;

    const calfCell = document.createElement("td");
    calfCell.textContent = calf;

    const locationCell = document.createElement("td");
    locationCell.textContent = location;

    const userCell = document.createElement("td");
    userCell.textContent = user;

    const statusCell = document.createElement("td");
    statusCell.textContent = status;

    const actionCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn", "btn-success", "edit-btn");
    editButton.setAttribute("onclick", "edit(this)");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-danger", "dlt-btn");
    deleteButton.setAttribute("onclick", "dlt(this)");
    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);

    newRow.appendChild(movingCell);
    newRow.appendChild(timestampCell);
    newRow.appendChild(sightingTimeCell);
    newRow.appendChild(herdSizeCell);
    newRow.appendChild(maleCell);
    newRow.appendChild(femaleCell);
    newRow.appendChild(calfCell);
    newRow.appendChild(locationCell);
    newRow.appendChild(userCell);
    newRow.appendChild(statusCell);
    newRow.appendChild(actionCell);

    const tableBody = document.getElementById("tableBody");
    tableBody.appendChild(newRow);

    // Clear input fields
    document.getElementById("moving").value = "";
    document.getElementById("timestamp").value = "";
    document.getElementById("sightingTime").value = "";
    document.getElementById("herdSize").value = "";
    document.getElementById("male").value = "";
    document.getElementById("female").value = "";
    document.getElementById("calf").value = "";
    document.getElementById("location").value = "";
    document.getElementById("user").value = "";
    document.getElementById("status").value = "";
    document.getElementById("action").value = "";
}

const dlt = (button) => {
    var row = button.closest("tr")
    row.remove()
    alert("Record Deleted!")
}

const edit = (button) => {
    var row = button.closest("tr");
    var cells = row.querySelectorAll("td");
    var moving = cells[1].innerText;
    var timestamp = cells[2].innerText;
    var sightingTime = cells[3].innerText;
    var herdSize = cells[4].innerText;
    var male = cells[5].innerText;
    var female = cells[6].innerText;
    var calf = cells[7].innerText;
    var location = cells[8].innerText;
    var user = cells[9].innerText;
    var status = cells[10].innerText;

    document.getElementById("moving").value = moving;
    document.getElementById("timestamp").value = timestamp;
    document.getElementById("sightingTime").value = sightingTime;
    document.getElementById("herdSize").value = herdSize;
    document.getElementById("male").value = male;
    document.getElementById("female").value = female;
    document.getElementById("calf").value = calf;
    document.getElementById("location").value = location;
    document.getElementById("user").value = user;
    document.getElementById("status").value = status;
}