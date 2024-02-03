// app.js
// Initialize Firebase with your project config
const firebaseConfig = {
    apiKey: "AIzaSyA4_psvUt9lfzFct01-qySIuG_QPdzSyvQ",
    authDomain: "dr-test-eb49e.firebaseapp.com",
    projectId: "dr-test-eb49e",
    storageBucket: "dr-test-eb49e.appspot.com",
    messagingSenderId: "289728415170",
    appId: "1:289728415170:web:840207a144471ef3a9c25b"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase database
  var database = firebase.database();
  
  // Handle form submission
  document.getElementById('blogForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get input values
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
  
    // Save to Firebase
    var newPostRef = database.ref('blogPosts').push();
    newPostRef.set({
      title: title,
      content: content
    });
  
    // Redirect to the new blog post page
    window.location.href = 'blog/' + newPostRef.key + '.html';
  });
  