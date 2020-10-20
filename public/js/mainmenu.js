$(document).ready(function(){
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) window.location.replace('/game');
	});
	
	$('#login').submit(function(e) {
		e.preventDefault();
        $('#status').show().text('Sedang login...');
		
		firebase.auth().signInWithEmailAndPassword($('#email').val(), $('#password').val()).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			$('#status').text(errorCode + ' - ' + errorMessage);
		});
	});
}