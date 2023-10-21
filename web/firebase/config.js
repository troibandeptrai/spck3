import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";//xem so ng truy cap
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeJm1wS0KAQmd-O-F1T4tKPVDMPX_OYbc",
  authDomain: "jsi04-6.firebaseapp.com",
  databaseURL: "https://jsi04-6-default-rtdb.firebaseio.com",
  projectId: "jsi04-6",
  storageBucket: "jsi04-6.appspot.com",
  messagingSenderId: "934195010589",
  appId: "1:934195010589:web:2993742ed270ca8caabaf4",
  measurementId: "G-RPQHVXNTCJ"
};


const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);