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

	var preObject = $('#object');

	// ref() -> root of database
	var dbRefObject = firebase.database().ref().child('object');

	dbRefObject.on('value', function(snap){
		preObject.html(JSON.stringify(snap.val(), null, 4));
	});
})();
