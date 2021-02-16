
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDh-kGYxpVtqhvWndn1lbLUFmFQanURtNc",
      authDomain: "c---93-white-hat.firebaseapp.com",
      projectId: "c---93-white-hat",
      storageBucket: "c---93-white-hat.appspot.com",
      messagingSenderId: "1092947935402",
      appId: "1:1092947935402:web:b9e0eb5daf6777108c50d3"
    };
    // Initialize Firebase
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
      window.location = "kwitter_page.html";
    }


    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      }); }); }
      getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_login.html";
}