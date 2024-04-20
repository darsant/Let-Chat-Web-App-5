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

firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "index.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_send.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "2_index.html";
}


