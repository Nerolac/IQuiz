import firebase from 'firebase';

const firebaseConfig = {
	// apiKey: process.env.REACT_APP_API_KEY,
	// authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	// projectId: process.env.REACT_APP_PROJECT_ID,
	// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	// messagingSenderId: process.env.REACT_APP_SENDER_ID,
	// appId: process.env.REACT_APP_APP_ID
	apiKey: "AIzaSyDDpgR4-E1UZhna2a08cxpsLQnwM5yZknY",
	authDomain: "quizit-a30ff.firebaseapp.com",
	projectId: "quizit-a30ff",
	storageBucket: "quizit-a30ff.appspot.com",
	messagingSenderId: "766222508687",
	appId: "1:766222508687:web:9df5ff80e3513d5a6cc6fa",
	measurementId: "G-YMFK6LPQ3L"
};
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()

export default firebase;