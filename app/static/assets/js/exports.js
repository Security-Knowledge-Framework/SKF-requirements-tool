function exportToMarkdownAndCopy() {
    // Get the stored items from LocalStorage
    var storedItems = localStorage.getItem('items');
    var items = storedItems ? JSON.parse(storedItems) : [];

    // Start the markdown text with table headers
    var markdownText = "| Req ID | Req Description | Levels |\n|--------|-----------------|--------|\n";

    // Iterate over each item
    items.forEach(item => {
        // For each item, add a row in the table
        markdownText += `| ${item.req_id} | ${item.req_description} | ${item.levels} |\n`;
    });

    // Copy the markdown text to the clipboard
    navigator.clipboard.writeText(markdownText).then(function() {
        console.log('Copying to clipboard was successful!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}


function exportToCSVAndCopy() {
    // Get the stored items from LocalStorage
    var storedItems = localStorage.getItem('items');
    var items = storedItems ? JSON.parse(storedItems) : [];

    // Start the CSV text with headers
    var csvText = "Req ID,Req Description,Levels\n";

    // Iterate over each item
    items.forEach(item => {
        // For each item, add a row in the CSV, making sure to escape any commas in the data
        csvText += `"${item.req_id.replace(/"/g, '""')}","${item.req_description.replace(/"/g, '""')}","${item.levels.replace(/"/g, '""')}"\n`;
    });

    // Copy the CSV text to the clipboard
    navigator.clipboard.writeText(csvText).then(function() {
        console.log('Copying to clipboard was successful!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}


function exportToPlainTextAndCopy() {
    // Get the stored items from LocalStorage
    var storedItems = localStorage.getItem('items');
    var items = storedItems ? JSON.parse(storedItems) : [];

    // Start the plain text string with headers
    var plainText = "Req ID\tReq Description\tLevels\n";

    // Iterate over each item
    items.forEach(item => {
        // For each item, add a row in the plain text string, separating fields by tabs
        plainText += `${item.req_id}\t${item.req_description}\t${item.levels}\n`;
    });

    // Copy the plain text to the clipboard
    navigator.clipboard.writeText(plainText).then(function() {
        console.log('Copying to clipboard was successful!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
