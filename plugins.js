
$(document).ready(function () {
 	// Get the form &  the submit button.
    const myForm = $("#myForm"),
    	btn    = myForm.children().last().children(),
    	grid   = $("#grid"); // get the table.




    // listening to the submit button.
    
    btn.click(function (evt) {
        evt.preventDefault(); 	// stop the page from reload.

        mackGrid();				// call the makeGrid function.
        Actions();
    });




    // Creat a makeGrid function.
    function mackGrid() {

    	// clear the old canvas if the user try to make a new one.
		grid.children().remove(); 

    	let	gridHeight = $("#gridHeight").val(),// get the height that assigned by the user.
    		gridWidth = $("#gridWidth").val();	// get the width that assigned by the user.

    	// define a loop that create the grid
    	for(let i = 0; i < gridHeight; i++){
    		grid.append("<tr></tr>");  // Create the table rows.

    		for(let x = 0; x < gridWidth; x++){
    			grid.children().last().append("<td></td>"); // Create the table colums.
    		}
    	}
    };

    let td = grid.children().last();
	/*	set an event listner to the user actions with the canvas.
		TO DO: on click color = the user color & on dbl click delete the color */
	grid.on("click dblclick", "td", function (event) {
		// Get the color from color paicker.
		let color = $("#colorPaicker").val();

		event.type == "click" ? $(this).css("background", color) : $(this).css("background", "#ffffff5c");
	});

    let x = 0;

  function Actions() {
    $( ".num-group" ).toggle( "slide" );
    $( ".color" ).toggle( "slide", { direction: "right" });
    
    x += 1;
    if (x % 2 == 0){
      btn.text("Let's Drawing");
    }
    else if (x % 2 != 0){
      btn.text("Start Over");
    }
  };
});