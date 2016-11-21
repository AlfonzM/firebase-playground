import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBFf4Z7f3DtOyrcKjhAJ90C4GRHCeUdKgk",
	authDomain: "quickstart-dc72e.firebaseapp.com",
	databaseURL: "https://quickstart-dc72e.firebaseio.com",
	storageBucket: "quickstart-dc72e.appspot.com",
	messagingSenderId: "7133175860"
};
firebase.initializeApp(config);

ReactDOM.render(
	<App />,
	document.getElementById('root')
);