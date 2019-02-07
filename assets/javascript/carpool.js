var config = {
    apiKey: "AIzaSyCLJ1TcATI9jE9sB3Mr6ILX-F-LBWW8EB4",
    authDomain: "project1map.firebaseapp.com",
    databaseURL: "https://project1map.firebaseio.com",
    projectId: "project1map",
    storageBucket: "project1map.appspot.com",
    messagingSenderId: "645092384209"
};
firebase.initializeApp(config);
function initMap() {
    // The location of Uluru
    var uluru = { lat: 33.464206, lng: -111.481962 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 10, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}