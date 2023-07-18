// script.js

function updateLocalStorageData() {
    // Get the stored items from LocalStorage
    var storedItems = localStorage.getItem('items');
  
    // Parse it into a JavaScript object/array
    var items = storedItems ? JSON.parse(storedItems) : [];
  
    // Get the tbody element where we want to display the data
    var tbody = document.getElementById('localStorageData');
  
    // Check if tbody element exists
    if (!tbody) {
        console.error("Unable to find tbody element with ID 'localStorageData'.");
        return;
      }
  
    // Create the HTML content
    var htmlContent = '';
  
    for (var i = 0; i < items.length; i++) {
      htmlContent += '<tr>';
      htmlContent += '<td><a href="#">' + items[i].req_id + '</a></td>';
      htmlContent += '<td>' + items[i].req_description + '</td>';
      htmlContent += '<td><span class="badge badge-success">' + items[i].levels + '</span></td>';
      htmlContent += '<td><button class="btn btn-sm btn-danger" onclick="removeFromLocalStorage(' + i + ');">Delete</button></td>';
      htmlContent += '</tr>';
    }

    // Set the HTML content of the tbody
    tbody.innerHTML = htmlContent;
}   


function removeFromLocalStorage(index) {
    // Get the stored items from LocalStorage
    var storedItems = localStorage.getItem('items');
    var items = storedItems ? JSON.parse(storedItems) : [];

    // Remove the item from the items array
    var removedItem = items.splice(index, 1)[0];

    // Update the LocalStorage with the modified items array
    localStorage.setItem('items', JSON.stringify(items));

    updateItemCounter(items);


    // Update the displayed table by re-rendering the HTML content
    var htmlContent = '';
    var tbody = document.querySelector("#localStorageData");
    for (var i = 0; i < items.length; i++) {
        htmlContent += '<tr>';
        htmlContent += '<td><a href="#">' + items[i].req_id + '</a></td>';
        htmlContent += '<td>' + items[i].req_description + '</td>';
        htmlContent += '<td><span class="badge badge-success">' + items[i].levels + '</span></td>';
        htmlContent += '<td><button class="btn btn-sm btn-danger delete-button" data-index="' + i + '">Delete</button></td>';
        htmlContent += '</tr>';
    }
    tbody.innerHTML = htmlContent;

    // Add event listeners to delete buttons
    var deleteButtons = document.querySelectorAll(".delete-button");
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function() {
            removeFromLocalStorage(this.dataset.index);
        });
    }
}

