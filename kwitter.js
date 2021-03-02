var firebaseConfig = {
    apiKey: "AIzaSyDn4q0kP3R9ougETr5i1o6ePJjTgFTAT-0",
    authDomain: "kwitter-32f5d.firebaseapp.com",
    databaseURL: "https://kwitter-32f5d-default-rtdb.firebaseio.com",
    projectId: "kwitter-32f5d",
    storageBucket: "kwitter-32f5d.appspot.com",
    messagingSenderId: "1051953730253",
    appId: "1:1051953730253:web:5cef2f557a6ebd06710f84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
function addUser() {
    user_name = document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    email= document.getElementById("email").value;

    localStorage.setItem("email", email);

    Password= document.getElementById("Password").value;

    localStorage.setItem("Password", Password);
    
    window.location= "kwitter_room.html";
}