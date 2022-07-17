var firebaseConfig = {
    apiKey: "AIzaSyAF7-SxnMb7Cfn7tEwMZyUTfkDdKPOGf4g",
    authDomain: "kwitter-not-for-class.firebaseapp.com",
    databaseURL: "https://project-6850292987556684958-default-rtdb.firebaseio.com",
    projectId: "kwitter-not-for-class",
    storageBucket: "kwitter-not-for-class.appspot.com",
    messagingSenderId: "525030068551",
    appId: "1:525030068551:web:8ef1ccb02594175fa77c62"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
    window.location = "index.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData()
{
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
//End code
});});}
getData();
}

