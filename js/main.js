const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkValues();
});

function checkValues() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const confirmPasswordValue = confirmPassword.value.trim();
	
	if(emailValue === '') {
		setErrorFor(email, 'Email is required');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password is required');
	} else {
		setSuccessFor(password);
	}
	
	if(confirmPasswordValue === '') {
		setErrorFor(confirmPassword, 'Please confirm your password');
	} 
    
    else if(passwordValue !== confirmPasswordValue) {
		setErrorFor(confirmPassword, 'Password does not match');
	} else{
        setSuccessFor(confirmPassword);
		window.location.assign("registration.html");
    } 
}

// 2
const lname = document.getElementById('lname');
const fname = document.getElementById('fname');
const bdate = document.getElementById('bdate');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	inputs();
});

function inputs(){
    const lnameValue = lname.value.trim();
    const fnameValue = fname.value.trim();
    const bdateValue = bdate.value.trim();


    if(lnameValue === ''){
        setErrorFor(lname, 'Last Name is required');
    }else{
        setSuccessFor(lname)
    }
    if(fnameValue  === ''){
        setErrorFor(fname, 'First Name is required');
    }else{
        setSuccessFor(fname)
    }
    if(bdateValue === ''){
        setErrorFor(bdate, 'Birthdate is required');
    }else{
        setSuccessFor(bdate)
        window.location.assign("welcome.html");
        alert("Register Successfully");
    }

}


// For Set Errors and Set Success

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}







