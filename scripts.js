function displayItems() {
    $.ajax({
        url: 'https://api.example.com/items', 
        type: 'GET',
        success: function(data) {
            const itemsList = $('#items-list');
            itemsList.empty(); 

            data.forEach(function(item) {
                itemsList.append(`<li>${item.name}: ${item.description}</li>`);
            });
        },
        error: function(error) {
            console.error('Error fetching items:', error);
        }
    });
}

$('#create-form').on('submit', function(event) {
    event.preventDefault();
    const name = $('#create-name').val();
    const description = $('#create-description').val();
    $.ajax({
        url: 'https://api.example.com/items', 
        type: 'POST',
        data: { name, description },
        success: function(data) {
            console.log('Item created:', data);
            displayItems();
        },
        error: function(error) {
            console.error('Error creating item:', error);
        }
    });
});

$('#update-form').on('submit', function(event) {
    event.preventDefault();
    const id = $('#update-id').val();
    const name = $('#update-name').val();
    const description = $('#update-description').val();
    $.ajax({
        url: `https://api.example.com/items/${id}`,
        type: 'PUT', 
        data: { name, description },
        success: function(data) {
            console.log('Item updated:', data);
            displayItems();
        },
        error: function(error) {
            console.error('Error updating item:', error);
        }
    });
});

$('#delete-form').on('submit', function(event) {
    event.preventDefault();
    const id = $('#delete-id').val();
    $.ajax({
        url: `https://api.example.com/items/${id}`, // Replace with your API URL
        type: 'DELETE',
        success: function() {
            console.log('Item deleted');
            displayItems();
        },
        error: function(error) {
            console.error('Error deleting item:', error);
        }
    });
});

displayItems();
