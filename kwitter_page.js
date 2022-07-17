//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA29EmRm8anZ6f8wSFS2EeQ7A7cVCXlO5Q",
      authDomain: "project-6850292987556684958.firebaseapp.com",
      databaseURL: "https://project-6850292987556684958-default-rtdb.firebaseio.com",
      projectId: "project-6850292987556684958",
      storageBucket: "project-6850292987556684958.appspot.com",
      messagingSenderId: "669670983298",
      appId: "1:669670983298:web:174074298562f17561969b"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}


