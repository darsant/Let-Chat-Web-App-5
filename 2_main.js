function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "index.html";
  }


  const firebaseConfig = {
    apiKey: "AIzaSyAKyLTVBN4orb3Ct8gnDDmNVTTzydLMrjw",
    authDomain: "class-test-f282f.firebaseapp.com",
    databaseURL: "https://class-test-f282f-default-rtdb.firebaseio.com",
    projectId: "class-test-f282f",
    storageBucket: "class-test-f282f.appspot.com",
    messagingSenderId: "835513226625",
    appId: "1:835513226625:web:2df349d85272dfa1b0c480",
    measurementId: "G-EK02V9SW3S"
  };
  