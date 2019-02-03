var config = {
    apiKey: "AIzaSyCY5LFhmYiFOWKV7SAwuRkQe2nXMSrPg4w",
    authDomain: "rsvp-86623.firebaseapp.com",
    databaseURL: "https://rsvp-86623.firebaseio.com",
    projectId: "rsvp-86623",
    storageBucket: "rsvp-86623.appspot.com",
    messagingSenderId: "784466437764"
};
firebase.initializeApp(config);


var database = firebase.database();

var totalGuest = 0;

$("#submit-button").on("click", function (event) {

    event.preventDefault();

    var guestEmail = $("#guest-email").val().trim();
    var guestName = $("#guest-name").val().trim();
    var groupSize = $("#group-size").val();
    var guestMessage = $("#guest-message").val().trim();





    if (validateEmail(guestEmail) && guestName.length > 2 && groupSize > 0) {

        database.ref().push({

            email: guestEmail,
            name: guestName,
            size: groupSize,
            message: guestMessage
        });

        $("#guest-email").val("");
        $("#guest-name").val("");
        $("#group-size").val("");
        $("#guest-message").val("");


        $("#rsvp-form").empty();
        $("#rsvp-form").append($("<h5>").text("Successfully Submitted.").addClass("text-success"));


    } else {
        $("#email-warning").text("");
        $("#name-warning").text("");
        $("#size-warning").text("");



        if (!validateEmail(guestEmail)) {
            $("#email-warning").text("Invalid Email.");

        }

        if (guestName.length < 3) {
            $("#name-warning").text("Should be more than 2 characters.");
        }

        if (groupSize < 1) {
            $("#size-warning").text("Should be at least 1.");

        }


    }

});



database.ref().on("child_added", function (childSnapshot) {



    totalGuest = totalGuest + parseInt(childSnapshot.val().size);




    var newTableItem = $("<tr>");
    var tableGuestEmail = $("<td>");
    tableGuestEmail.text(childSnapshot.val().email);
    var tableGuestName = $("<td>");
    tableGuestName.text(childSnapshot.val().name);
    var tableNumberAttendees = $("<td>");
    tableNumberAttendees.text(childSnapshot.val().size);
    var tableMessage = $("<td>");
    tableMessage.text(childSnapshot.val().message);


    newTableItem.append(tableGuestName);
    newTableItem.append(tableGuestEmail);
    newTableItem.append(tableNumberAttendees);
    newTableItem.append(tableMessage);


    $("#table-body").append(newTableItem);

    $("#totalGuest").text("Total Number of Guests: " + totalGuest);

}, function (errorObject) {

    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
})












function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
