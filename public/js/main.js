$(document).ready(function(){
	
	function isLogged() {
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) return true;
			else return false;
		});
	}
	
	

}