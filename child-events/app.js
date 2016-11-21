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
	var ulList = $('#list');

	// ref() -> root of database
	var dbRefObject = firebase.database().ref().child('object');
	var dbRefList = dbRefObject.child('hobbies');

	dbRefObject.on('value', function(snap){
		preObject.html(JSON.stringify(snap.val(), null, 4));
	});

	dbRefList.on('child_added', function(snap){
		const li = document.createElement('li');
		li.innerText = snap.val();
		li.id = snap.key;
		ulList.append(li);
	});

	dbRefList.on('child_changed', function(snap){
		var liChanged = $('#' + snap.key);
		liChanged.html(snap.val());
	});

	dbRefList.on('child_removed', function(snap){
		var liRemoved = $('#' + snap.key);
		liRemoved.remove();
	});

})();
