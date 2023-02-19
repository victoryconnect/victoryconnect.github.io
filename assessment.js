
var ast_type; // the type of assessment selected by the user
var selected_assessment; // the mapped assessment json
var question_type;

/* Method that loads content in the assessment according to user selection. */
function loadContent(ast_type) {
	let counter = 0;
	let html_display = "";
	//let ast_type = assessments[trigger_value];
	// selected_assessment = eval(ast_type["mapped_assessment_json"]);
	question_type = ast_type["question_type"];
	//total letters will vary, if assessment only belongs to certain letters and not all
	let total_letters = ast_type["letters_to_display"] == "all" ? Object.keys(selected_assessment).length : ast_type["letters_to_display"];


	// TODO: need a key in the assessments that ask format of display (e.g. all related questions together, or one related question at a time)
	if (question_type == "select"){
		//for each object (letter), display the first related question
		for (var i = counter; i < ast_type["related_questions_per_letter"]; i++){
			for (var letter_index = 0; letter_index < total_letters; letter_index++){
			
				Object.keys(selected_assessment[letter_index]).forEach((objName) => {
			
				    if (objName == "related_questions"){
				    	html_display += "<li><div class='flex space-between'><label for='"+selected_assessment[letter_index].letter+"_q"+(parseInt(counter)+ 1)+"'>" + selected_assessment[letter_index].related_questions[i] + "</label>";
				    	error_container = "<div><p id='"+selected_assessment[letter_index].letter+"_q"+(parseInt(counter)+ 1)+"_error'>Error: This field is required.</p></div>";
				    	html_display += "<select id='"+selected_assessment[letter_index].letter+"_q"+(parseInt(counter)+ 1)+"' name='"+selected_assessment[letter_index].letter+"_q"+(parseInt(counter)+ 1)+"'><option disabled selected value> ---------------------- </option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select></div>"+error_container+"</li>";
					}
				});
			}

		// increase counter
		counter++;

		// repeat to list all questions	- note the order is from question 1-72, not in order by letter
		}
	} else if (question_type == "radio"){

		// repeat to list all questions - note the order is all related questions at once, then move on to the next.
		for (var letter_index = 0; letter_index < total_letters; letter_index++){
			
			Object.keys(selected_assessment[letter_index]).forEach((objName) => {
		
			    if (objName == "related_questions"){

			    	for (var i = counter; i < ast_type["related_questions_per_letter"]; i++) {

			    		radio_group_name = selected_assessment[letter_index].letter+"_q"+(i+1); //The id is letter + q group + option num (e.g. D_q1_1)
				    	html_display += "<li> <fieldset><legend>"+ selected_assessment[letter_index].related_questions[i] + "</legend>";
				    	error_container = "<div><p id='"+selected_assessment[letter_index].letter+"_q"+(i+1)+"_error'>Error: This field is required.</p></div>";
				    	html_display += "<div class='flex space-between'><div class='flex radio-input'><input type='radio' id='"+radio_group_name+"_1' name='"+radio_group_name+"' value='1'><label for='"+radio_group_name+"_1'>Never</label></div><div class='flex radio-input'><input type='radio' id='"+radio_group_name+"_2' name='"+radio_group_name+"' value='2'><label for='"+radio_group_name+"_2'>Rarely</label></div><div class='flex radio-input'><input type='radio' id='"+radio_group_name+"_3' name='"+radio_group_name+"' value='3'><label for='"+radio_group_name+"_3'>Sometimes</label></div><div class='flex radio-input'><input type='radio' id='"+radio_group_name+"_4' name='"+radio_group_name+"' value='4'><label for='"+radio_group_name+"_4'>Often</label></div><div class='flex radio-input'><input type='radio' id='"+radio_group_name+"_5' name='"+radio_group_name+"' value='5'><label for='"+radio_group_name+"_5'>Always</label></div></div>"+error_container+"</fieldset></li>";
					}
				}
			});
		}

	}

	//insert as HTML to document
	$("#assessment").html("<ol>" + html_display + "</ol>");
};

/* Method to validate form. */
function validateForm(e){
	//e.preventDefault();

	// clean form errors from previous responses
	$("p[id$='_error']").css("visibility", "hidden");

	console.log("Validating form. . .");
	var emptyValue = false;
	var input_id;


	if (question_type == "select"){
		// check if any select fields are empty
		$("form select").each(function(){
			input_id = $(this).attr('id');
		    if(!$(this).val()){
				// get question #
				var q_num = $(this).closest('li').index() + 1;
				// display error
				$("#"+input_id+"_error").html("<i class='fa-solid fa-circle-exclamation'></i> Error: Question "+q_num+ " is required.");
				$("#"+input_id+"_error").css("visibility", "visible");

				if(emptyValue == false) emptyValue = true;
		    }
	   	});
	} else if (question_type == "radio"){

		// check if any radio fields are empty
		$("form input[type='radio']").each(function(){
			input_id = $(this).attr('id');
			input_name = $(this).attr('name');

			// verifying that there's at least one option checked per group name
		    if(!$(':radio[name="' + input_name + '"]:checked').length){

				// get question #
				var q_num = $(this).closest('fieldset').closest('li').index() + 1;

				// display error
				$("#"+input_name+"_error").html("<i class='fa-solid fa-circle-exclamation'></i> Error: Question "+q_num+ " is required.");
				$("#"+input_name+"_error").css("visibility", "visible");

				if(emptyValue == false) emptyValue = true;
		    } 
	   	});
	}


	// if no fields were empty, proceed to calculate the sum
	if (emptyValue == false){
		// Submit the form if all fields have an answer (user input)
		return true;
	}

	//else if none are empty calculate the sum
	console.log($("#assessment_form").serialize());
	return false;
}

/* Method to determine the assessment that we need to load */
function loadAssessment(trigger_value){
	// set local storage for type of assessment
	window.localStorage.setItem('trigger_value', trigger_value);
	ast_type = assessments[trigger_value];
	selected_assessment = eval(ast_type["mapped_assessment_json"]);

	$("#landing_container").hide();
	$("#assessment_container").show();
	$("#title").html(ast_type["title"]);
	$("#instructions").html(ast_type["instructions"]);
	loadContent(ast_type);
};


$(document).ready(function(){
	window.localStorage.clear();
});