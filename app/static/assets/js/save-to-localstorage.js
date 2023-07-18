function updateItemCounter(items) {
    const counter = document.getElementById("selectedItemCount");
    console.log(counter, items.length);
    if(counter) {
        counter.innerText = items.length;
    }
}

function saveToLocalStorage(event) {
    // Get the clicked button from the event
    var button = event.target;

    // Find the table row related to the clicked 'Detail' button
    var row = button.parentNode.parentNode;

    // Get the item's details from the row's cells
    var item = {
        req_id: row.cells[0].innerText,
        req_description: row.cells[1].innerText,
        levels: row.cells[2].innerText
    };

    // Get the stored items from LocalStorage
    var storedItems = localStorage.getItem('items');
    var items = storedItems ? JSON.parse(storedItems) : [];

    // Find the index of the item in the array
    var itemIndex = items.findIndex(i => i.req_id === item.req_id);

    if (itemIndex !== -1) {
        // The item is in the array. Remove it and change the button color back to the original color
        items.splice(itemIndex, 1);
        button.style.backgroundColor = ""; // Remove the background color style to return to the original color
    } else {
        // The item is not in the array. Add it and change the button color to green
        items.push(item);
        button.style.backgroundColor = "green";
    }

    // Save the items to LocalStorage
    localStorage.setItem('items', JSON.stringify(items));

    updateItemCounter(items);
}


document.addEventListener('DOMContentLoaded', (event) => {
    // Get the stored items from LocalStorage
    var storedItems = localStorage.getItem('items');
    var items = storedItems ? JSON.parse(storedItems) : [];

    updateItemCounter(items);

    // Get all rows in the table, assuming your table has an id of 'myTable'
    var rows = document.getElementById('myTable').rows;

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];

        // Get the item's details from the row's cells
        var item = {
            req_id: row.cells[0].innerText,
            req_description: row.cells[1].innerText,
            levels: row.cells[2].innerText
        };

        // Find the index of the item in the array
        var itemIndex = items.findIndex(i => i.req_id === item.req_id);

        if (itemIndex !== -1) {
            // The item is in the array. Change the button color to green
            // Assuming the button is the last cell in the row
            var button = row.cells[row.cells.length - 1].firstElementChild;
            button.style.backgroundColor = "green";
        }
    }
});

