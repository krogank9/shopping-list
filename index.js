// Add a shopping list element customized with the given name
function addItem(name) {
	$(".shopping-list").append(`
	<li>
        <span class="shopping-item">${name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
    </li>
	`);
}

// When form is submitted, preventDefault to block submission to the server
// and add the an item to the shopping list with the value of the shopping-list-entry input
$("#js-shopping-list-form").submit(function(e) {
	e.preventDefault();
	let entry = $("#shopping-list-entry").val();
	if(entry)
		addItem(entry);
})

// Employ event delegation for these next two shopping item events, as items will be removed & added:

// Upon clicking the check button, toggle the strike through styling w/ toggleClass
$(".shopping-list").on("click", ".shopping-item-toggle", function(){
	$(this).closest("li").children().first().toggleClass("shopping-item__checked");
});

// Remove the parent li when the delete button inside of it is pressed
$(".shopping-list").on("click", ".shopping-item-delete", function(){
	$(this).closest("li").remove();
});

