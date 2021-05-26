export function validateEmail(email) {
	if (!email) return "Please enter your email";
	let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!regex.test(email)) return "Please enter valid email";
	return "";
  }
  
  export function validatePassword(password) {
	if (password.length < 8) return false;
	return true;
  }