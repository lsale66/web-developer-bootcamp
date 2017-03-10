
//Strike through when clicked
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed")
});


//Click on Trash to delete the ToDo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove()
		});
	event.stopPropagation();
});

//Enter new Todos with the input text field
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//grab the new todo text
		var todoText = $(this).val();
		$(this).val("");
		//create a new li with this text
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
	}
});

//Toggle Fade when Plus icon is selected
$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();

});