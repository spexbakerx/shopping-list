
// Single state object
var state = {
    items: []
};

var addItem = function(state, item) {
    state.items.push(item);
};

var deleteItem = function (state, itemIndex) {
  state.items.splice(itemIndex, 1);
}


// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' +
    '<span class="shopping-item js-shopping-item">' + item + '</span>' +
    '<div class="shopping-item-controls">' +
      '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' + ' ' +
      '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>';

    });
    element.html(itemsHTML);
};



// Event listener for toggling checked items
$("ul").on('click', 'li', '.shopping-item-toggle', function(event)  {
	$( this ).closest('li').find('.shopping-item').toggleClass( "shopping-item__checked" );
});


// Event listener for removing items from list
$( "ul" ).on('click', '.shopping-item-delete', function(event)  {

	// Gets index of item 
    var itemIndex = ($( this ).closest('li').val());
    // Deletes item from state managment
    deleteItem(state, itemIndex);
    // Deletes item from visible list
    $( this ).closest('li').remove();

});



// Event listener for adding items to list
$('#js-shopping-list-form').submit(function(event) {

    event.preventDefault();

    addItem(state, $('#shopping-list-entry').val());

    renderList(state, $('.shopping-list'));
});













