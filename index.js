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

$("#js-shopping-list-form").submit(function(e) {
	e.preventDefault();
	let entry = $("#shopping-list-entry").val();
	if(entry)
		addItem(entry);
})

$(".shopping-list").on("click", ".shopping-item-toggle", function(){
	$(this).closest("li").children().first().toggleClass("shopping-item__checked");
});

$(".shopping-list").on("click", ".shopping-item-delete", function(){
	$(this).closest("li").remove();
});

