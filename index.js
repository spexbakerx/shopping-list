
// Single state object
var state = {
    items: []
};

var addItem = function(state, item) {
    state.items.push(item);
};

// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>' +
    '<span class="shopping-item js-shopping-item">' + item + '</span>' +
    '<div class="shopping-item-controls">' +
      '<button class="js-shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' +
      '<button class="js-shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>';

    });
    element.html(itemsHTML);
};


// Event listener for adding items to list
$('#js-shopping-list-form').submit(function(event) {

    event.preventDefault();

    addItem(state, $('shopping-list-entry').val());

    renderList(state, $('.shopping-list'));
});


// Event listener for toggling checked items
$( ".shopping-item-toggle" ).click(function() {
  $( this ).closest('li').find('.shopping-item').toggleClass( "shopping-item__checked" );
});

// Event listener for removing items from list
$( ".shopping-item-delete" ).click(function() {
  $(this).closest('li').remove();
});










// var newItem = $('shopping-list-entry').val();


// function newListTemplate(newItem) {

//     var listItemTemplate = (
//       '<li>' +
//         '<span class="shopping-item js-shopping-item"> newItem </span>' +
//         '<div class="shopping-item-controls">' +
//           '<button class="js-shopping-item-toggle">' +
//             '<span class="button-label">check</span>' +
//           '</button>' +
//           '<button class="js-shopping-item-delete">' +
//             '<span class="button-label">delete</span>' +
//           '</button>' +
//         '</div>' +
//       '</li>'
//     );

//     return listItemTemplate;
// };


// $("submit").click(function () {  

//   var myListItem = newListTemplate(newItem);
//   $('ul').append('myListItem');

// }); 


