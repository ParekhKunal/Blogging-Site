let firebaseConfig = {
  apiKey: "AIzaSyBLr7ex16Y4JfBDlCciXRifWkcOm2mKw0g",
  authDomain: "blogging-site-2b632.firebaseapp.com",
  projectId: "blogging-site-2b632",
  storageBucket: "blogging-site-2b632.appspot.com",
  messagingSenderId: "483445567928",
  appId: "1:483445567928:web:3424b7c418562d5c2edf4d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
