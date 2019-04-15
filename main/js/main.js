// document Objects

// Homepage objects

let homepage = {
	emailInput: document.querySelector(".signup__text-input"),
	emailInputText: document.querySelector(".signup__text-input").value,
	emailClick: false,
	emailInputTwo: document.querySelector(".signup__text-input-2"),
	emailInputTextTwo: document.querySelector(".signup__text-input-2").value,
	emailClickTwo: false,
	signUp: document.querySelector("#signup-submit"),
	signUpTwo: document.querySelector("#signup-submit-2"),
	signUpValid:  false,
	signUpTwoValid:  false


}

// Functions

// Functions that get rid of placeholders
// The first one restores the placeholder if the default value is not changed
function fillField(input,val) {
      if(input.value == "")
         input.value=val;
};

// The second one removes the placeholder when the input box is on focus
function clearField(input,val) {
      if(input.value == val)
         input.value="";
};

function validateSignUp() {
	if(homepage.emailInput.matches(':invalid')) {
		homepage.signUp.classList.add("deny");

	}
	else if(homepage.emailInput.matches(':valid')) {
		homepage.signUp.classList.remove("deny");

	}

}

function validateSignUpTwo() {
	if(homepage.emailInputTwo.matches(':invalid')) {
		homepage.signUpTwo.classList.add("deny");

	}
	else if(homepage.emailInputTwo.matches(':valid')) {
		homepage.signUpTwo.classList.remove("deny");

	}

}

validateSignUp();
validateSignUpTwo();

homepage.emailInput.addEventListener("focus", function(){
	validateSignUp();
});

homepage.emailInput.addEventListener("blur", function(){
	validateSignUp();
});

homepage.signUp.addEventListener("mouseover", function(){
	validateSignUp();
});


homepage.emailInputTwo.addEventListener("focus", function(){
	validateSignUpTwo();
});

homepage.emailInputTwo.addEventListener("blur", function(){
	validateSignUpTwo();
});

homepage.signUpTwo.addEventListener("mouseover", function(){
	validateSignUpTwo();
});
