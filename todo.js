// check off todo by click
// adding li to click listens to all past or future li

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete 	
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation(); // does not extend past the span
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new todo text from input
		var text = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='far fa-minus-square'></i>></i></span>" + text + "</li>");
	}
});

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
});