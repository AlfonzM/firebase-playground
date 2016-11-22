var $text = $('#text');
var $logout = $('#logout');
var $login = $('#login');
var user = {};

(function(){
	var config = {
		apiKey: "AIzaSyBFf4Z7f3DtOyrcKjhAJ90C4GRHCeUdKgk",
		authDomain: "quickstart-dc72e.firebaseapp.com",
		storageBucket: "quickstart-dc72e.appspot.com",
		messagingSenderId: "7133175860"
	};
	firebase.initializeApp(config);

	$logout.hide();
	$login.hide();

	$logout.on('click', function(){
		firebase.auth().signOut().then(function() {
			$text.html('Logged out.');
			loggedOut();
		}, function(error) {
			console.log(error);
		});
	});

	$login.on('click', function(){
		loginFacebook();
	});

	firebase.auth().onAuthStateChanged(function(firebaseUser){
		if(firebaseUser){
			user = firebaseUser;
			loggedIn();
		} else {
			loggedOut();
		}
	});
})();

function loggedIn() {
	$text.html('yey!');
	$logout.show();
	$login.hide();

	console.log(user.providerData[0].uid);

	FB.api(
		'/10202173011682447/picture',
		'GET',
		{"height":"1200","access_token":""},
		function(response) {
			console.log(response);
		}
	);

	// user.providerData.forEach(function(profile){
	// 	console.log(profile.providerId);
	// 	console.log(profile.uid);
	// 	console.log(profile.displayName);
	// 	console.log(profile.email);
	// });
}

function loggedOut() {
	$text.html('Hello');
	$logout.hide();
	$login.show();
}

function loginFacebook() {
	var provider = new firebase.auth.FacebookAuthProvider();
	provider.addScope('user_friends');
	provider.addScope('user_likes');

	firebase.auth().signInWithPopup(provider).then(function(result) {
		var token = result.credential.accessToken;
		console.log(token);
		user = result.user;
	}).catch(function(error) {
		console.log(error);
		var errorCode = error.code;
		var errorMessage = error.message;
		var email = error.email;
		var credential = error.credential;
	});	
}