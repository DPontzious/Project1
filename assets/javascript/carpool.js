
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
// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         // center: { lat: 0, lng: 0 },
//         // zoom: 3,
//         styles: [{
//             featureType: 'poi',
//             stylers: [{ visibility: 'off' }]  // Turn off points of interest.
//         }, {
//             featureType: 'transit.station',
//             stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
//         }],
//         disableDoubleClickZoom: true
//     });
// }
// function makeInfoBox(controlDiv, map) {
//     // Set CSS for the control border.
//     var controlUI = document.createElement('div');
//     controlUI.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
//     controlUI.style.backgroundColor = '#fff';
//     controlUI.style.border = '2px solid #fff';
//     controlUI.style.borderRadius = '2px';
//     controlUI.style.marginBottom = '22px';
//     controlUI.style.marginTop = '10px';
//     controlUI.style.textAlign = 'center';
//     controlDiv.appendChild(controlUI);

//     // Set CSS for the control interior.
//     var controlText = document.createElement('div');
//     controlText.style.color = 'rgb(25,25,25)';
//     controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
//     controlText.style.fontSize = '100%';
//     controlText.style.padding = '6px';
//     controlText.textContent = 'The map shows all clicks made in the last 10 minutes.';
//     controlUI.appendChild(controlText);
// }
// var infoBoxDiv = document.createElement('div');
// var infoBox = new makeInfoBox(infoBoxDiv, map);
// infoBoxDiv.index = 1;
// map.controls[google.maps.ControlPosition.TOP_CENTER].push(infoBoxDiv);

// map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8
// })
// var firebase = new Firebase("<https://project1map.firebaseIO.co>");

// AIzaSyDo9w8kB-aLCuz-cAdYLqHnGs75UF4Rc1k