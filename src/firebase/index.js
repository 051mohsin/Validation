import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAVzYCUyqTICo8na9UEQoU-I8o35dYL_nk",
    authDomain: "login-with--facebook.firebaseapp.com",
    projectId: "login-with--facebook",
    storageBucket: "login-with--facebook.appspot.com",
    messagingSenderId: "312999437474",
    appId: "1:312999437474:web:06484856e66d5aa273a3fb",
    measurementId: "G-952GHGMT1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getStorage } from "firebase/storage";
const storage = getStorage(app);

export { storage }
