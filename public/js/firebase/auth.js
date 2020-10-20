$(document).ready(function(){

	$('.register').click(function() {
		$('.status').text('Registering...');
		
		firebase.auth().createUserWithEmailAndPassword($('.username').val(), $('.password').val()).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			$('.status').text(errorCode + ' - ' + errorMessage);
		});
	});
	
	$('.login').click(function() {
		$('.status').text('Login...');
		
		firebase.auth().signInWithEmailAndPassword($('.username').val(), $('.password').val()).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			$('.status').text(errorCode + ' - ' + errorMessage);
		});
	});
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			$('.status').text('logged as ' + user.email);
			
			firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
				axios.defaults.headers.common['Authorization'] = idToken;
			});

		} else {
			$('.status').text('please login');
   	 }
	});
	
	$('.logout').click(function () {
		firebase.auth().signOut().then(function() {
			$('.status').text('Success');
		}, function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			$('.status').text(errorCode + ' - ' + errorMessage);
		});
	});

});