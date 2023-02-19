
var ast_type; // the type of assessment selected by the user
var selected_assessment; // the mapped assessment json
var letters_to_display;
var userAnswers = {}; //"A": {"answers":[0,0,0], "totalSum": 0}
var topAnswers = []; //"A": 0, "letter": sum

$(document).ready(function(){
	var trigger_value = window.localStorage.getItem('trigger_value');
	ast_type = assessments[trigger_value];
	selected_assessment = eval(ast_type["mapped_assessment_json"]);
	
	extractData();
	sumAnswers = calculateSum(topAnswers);
	topAnswers = getTopAnswers(sumAnswers);
	displayResults(topAnswers);
  	/* Data to test on console
	$("select").each(function(){
	    $(this).val(2);
	});

	$("input[type='radio'").each(function(){
	    $(this).attr("checked", true);
	});
	*/
});

function extractData() {
	let urlString = window.location.href;
	let paramString = urlString.split('?')[1];
	let queryString = new URLSearchParams(paramString);

	for (let pair of queryString.entries()) {
		//pass parameters (name, value)
		gatherUserAnswers(pair[0], pair[1])
	}

	return true;
};

/* Method that displays results. */
function displayResults(arr) {

	// display top results
	for (var i=0; i < arr.length; i++){
		$("#top_results").append("<h2>"+arr[i]["definition_name"]+"</h2>");
		$("#top_results").append("<p class='bold'>Your score: "+arr[i]["totalSum"]+"</p>");
		$("#top_results").append("<p>"+arr[i]["definition"]+"</p>");
	}

	var result_row = "";
	if (letters_to_display == "all"){
		result_row = "<tr><th>Letter</th><th>Definition</th><th>Your Score</th></tr>";
		Object.keys(userAnswers).forEach((objName, objIndex, obj) => {
			result_row += "<tr><td>"+objName+"</td><td><h3>"+userAnswers[objName]["definition_name"]+"</h3><p>"+userAnswers[objName]["definition"]+"</p></td><td>"+userAnswers[objName]["totalSum"]+"</td></tr>";
		});
		$("#results_container > table").append(result_row);
	}	
	else {
		result_row = "<tr><th>Letter</th><th>Definition</th></tr>";
		Object.keys(selected_assessment).forEach((objName, objIndex, obj) => {
			result_row += "<tr><td>"+selected_assessment[objName]["letter"]+"</td><td><p>"+selected_assessment[objName]["definition"]+"</p></td></tr>";
		});
		$("#results_container > table").append(result_row);
	}

	return true;
};

/* Method to get submitted data and store in userAnswers */
var input_id;
function gatherUserAnswers(name, value) {
    input_id = name;
    mapped_letter = input_id.substring(0, input_id.indexOf("_"));
    user_input_rating = value;

    console.log ("Gathering user answers for "+mapped_letter+". . .");
    //check if key for letter doesn't exist in userAnswers, and if not, then create it
    if (mapped_letter in userAnswers == false){
    	userAnswers[mapped_letter] = {"answers":[], "totalSum": 0};
	}
    	
    // at this point it should always exist, and we want to push each answer that the user inputted	
    userAnswers[mapped_letter]["answers"].push(user_input_rating);	

    return true;
};

/* Method to calculate the sum for each letter. */
function calculateSum(arr) {
	console.log("Calculating sum. . .");

	Object.keys(userAnswers).forEach((objName, objIndex, obj) => {
		    
		    //calculate sum per letter and store
		    letter_sum = (userAnswers[objName]["answers"]).reduce((a, b) => (parseInt(a) + parseInt(b)), 0);

		    userAnswers[objName]["totalSum"] = letter_sum;
		    userAnswers[objName]["definition_name"] = selected_assessment[objIndex].definition_name;
		    userAnswers[objName]["definition"] = selected_assessment[objIndex].definition;

		    //place all answers in array to sort later and get highest
		    arr.push({"letter": objName, "totalSum": letter_sum, "definition_name": selected_assessment[objIndex].definition_name, "definition": selected_assessment[objIndex].definition});

	});

	return arr;
};

/* Method to calculate the top answers */
function getTopAnswers(arr){
	console.log("Calculating top answers. . .");

	// sort answers highest to lowest
	arr.sort(function(a, b) { 
	    return b.totalSum - a.totalSum;
	})
	
	// if letters to display is all, choose top 3, otherwise display only those letters in top results
	letters_to_display = ast_type["letters_to_display"];
	if (letters_to_display == "all")
		arr.splice(3);
	else
		arr.splice(letters_to_display);

	return arr;
};


function sendMail() {
	console.log("Sending mail...");

	user_full_name = $("#user_name").val();
	user_email = $("#email").val();
	church_email = "secretary@victoryupc.com";

	var html_email = "Hi, \nName: " + user_full_name +"\n\n";
	if (letters_to_display == "all"){
		Object.keys(userAnswers).forEach((objName, objIndex, obj) => {
			html_email += objName+" - Score: "+userAnswers[objName]["totalSum"]+", "+userAnswers[objName]["definition_name"]+": "+userAnswers[objName]["definition"]+"\n";
		});
	}	
	else {
		// send top answers only
		Object.keys(topAnswers).forEach((objName, objIndex, obj) => {
			html_email += topAnswers[objName]["letter"]+" - Score: "+topAnswers[objName]["totalSum"]+", "+topAnswers[objName]["definition_name"]+": "+topAnswers[objName]["definition"]+"\n\n";
		});
	}
	html_email += "\nThanks,\n"+user_full_name;

    /*var link = "mailto:"+encodeURIComponent(church_email)+
             + "?cc="+encodeURIComponent(user_email)+
             + "&subject=" + encodeURIComponent("Victory Church Connect | "+ast_type["title"])
             + "&body=" + encodeURIComponent(html_email);*/

     var link = "mailto:"+encodeURIComponent(church_email)
             + "?cc="+encodeURIComponent(user_email)
             + "&subject=" + encodeURIComponent("Victory Church Connect | "+ast_type["title"])
             + "&body=" + encodeURIComponent(html_email);
    
    window.location.href = link;
}

function emailResults(){
	//get value of email address
		//if empty, return and throw error
		//else email results
	//get value of checkbox
		//if checked, email to church

	//note: need to create the email
	sendMail();
	return true;

};





