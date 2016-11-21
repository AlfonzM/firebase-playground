(function(){
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyBFf4Z7f3DtOyrcKjhAJ90C4GRHCeUdKgk",
		authDomain: "quickstart-dc72e.firebaseapp.com",
		databaseURL: "https://quickstart-dc72e.firebaseio.com",
		storageBucket: "quickstart-dc72e.appspot.com",
		messagingSenderId: "7133175860"
	};
	firebase.initializeApp(config);

	// get elements
	var $email = $('#email');
	var $password = $('#password');
	var $login = $('#login');
	var $signup = $('#signup');
	var $logout = $('#logout');
	var $title = $('#title');

	$login.on('click', function(e){
		var email = $email.val();
		var pass = $password.val();
		var auth = firebase.auth();

		// sign in
		var promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(function(e){
			console.log(e.message);
		});
	});

	$signup.on('click', function(e){
		var email = $email.val();
		var pass = $password.val();
		var auth = firebase.auth();

		// sign in
		var promise = auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(function(e){
			console.log(e.message);
		});
	});

	$logout.on('click', function(e){
		firebase.auth().signOut();
	});

	firebase.auth().onAuthStateChanged(function(firebaseUser){
		if(firebaseUser){
			console.log(firebaseUser);
			$signup.hide();
			$login.hide();
			$logout.show();
			$title.html('Hello ' + firebaseUser.email);
		} else {
			$title.html('Login');
			$signup.show();
			$login.show();
			$logout.hide();
		}
	});
})();
