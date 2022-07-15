
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDNxoME0pEVBxS_KOT7-1dVhhgr1h3DBkI",
      authDomain: "letschatwebapp-dbc4d.firebaseapp.com",
      databaseURL: "https://letschatwebapp-dbc4d-default-rtdb.firebaseio.com",
      projectId: "letschatwebapp-dbc4d",
      storageBucket: "letschatwebapp-dbc4d.appspot.com",
      messagingSenderId: "173959192046",
      appId: "1:173959192046:web:3cdf57e255fccbb5a442ff",
      measurementId: "G-1GCV2GZTEY"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
      //Start code


      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
           //Start code
           console.log("Room Name - " + Room_names);
            row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
             document.getElementById("output").innerHTML += row;
           //End code
           });});}
     getData();
     
     function Addroom(){
           room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
           purpose:"adding room name"
     });
     localStorage.setItem("room_name",room_name);
     window.localStorage="kwitter_page.html";
     }
     
     function redirectToRoomName(name)
     {
           console.log(name);
           localStorage.setItem("room_name", name);
           window.location="kwitter_page.html";
     }
     

