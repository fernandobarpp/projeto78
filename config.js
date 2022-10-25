import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB0qsHoIt-xA6VksDO53_SKLjUpW27XhWY",
  authDomain: "ciclista-9f638.firebaseapp.com",
  projectId: "ciclista-9f638",
  storageBucket: "ciclista-9f638.appspot.com",
  messagingSenderId: "913986814347",
  appId: "1:913986814347:web:949060ad4976e7434d2f8e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
