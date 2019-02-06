$(document).ready(function () {
    $(".songButton").click(function (event) {
        event.preventDefault();

        var userInput = $("#songName").val().trim();

        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + userInput + "&type=track&limit=6",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
<<<<<<< HEAD
                "Authorization": "Bearer BQD1ird5pqsaNKe1tIWR5acRhpYaVA18jFP1riVg_y8EvW7_3_ORX24AoXrmMFqx5VXEKlTaVMf9yAAYuJpyWuRxVptPNbaPIsGfoFGFNUBCDrifICSpLAfO72CY2OBmuz4rWrN5HuwT_sv7qwaqh1T8o2p9zO_XY1lIIjMwo9fHvORckczQNVCjgvR-tdp20xs_BlQfcI-Ku-E4TVS-NZgdURxy2xutcZtQ4TP8pHfvmD0",
=======
                "Authorization": "Bearer BQDUzY_-lEHakMTH7KHSaC5aNnxI1um5uZL7y9ZCs5xb6xIW_nVqFtoF3-HxDiyXu2gpQA6Ou4mDiupJLxD_CESYbtxRbQnBGVpTXl9-i575A4TLGsUKWge7oCCnSMLe3KGgaH0LeLqtpesHqPWut7M62R3rKr0wKaTGS0cObxrr8U2Bin2cL0zL7FL62SSP-7zJjYfIG3dnc2a--imWBsM7nM4WJIN6ynvxEupj9W97DHw",
>>>>>>> ff8523331c45b35b4ec009df80c1cfd325bacfca

            },
            "expires_in": 999999999999999999999999999999999999999,
        }).then(function (data) {
            $("#songList").empty();
            for (var i = 0; i < 6; i++) {

                var frameSong = $("<div>").addClass("col-4");

                var artistName = $("<h5>").text(data.tracks.items[i].artists[0].name);
                artistName.addClass("align-self-start");
                var songName = $("<h6>").text("Song: " + data.tracks.items[i].name);

                var artistImage = $("<img>").attr("src", data.tracks.items[i].album.images[2].url);
                artistImage.addClass("align-self-center");
                var button = $("<button id= btn>").attr("data-id", data.tracks.items[i].uri).text("Add to Playlist");
                button.addClass("btn mt-3 ml-0 rounded align-self-end");
                button.attr("style", "background-color: #aabf94");

                frameSong.append(artistName, songName, artistImage, button);


                $("#songList").append(frameSong);
            }
            console.log(data.tracks);
        });
    });

$(document).on("click", "#btn", function () {
    var userSong = $(this).attr("data-id");
    console.log($(this).attr("data-id"))
    $.ajax({
        url: "https://api.spotify.com/v1/playlists/7lj8pK87kMYQ6t7VgTle2h/tracks?uris=" + userSong,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
<<<<<<< HEAD
            "Authorization": "Bearer BQD1ird5pqsaNKe1tIWR5acRhpYaVA18jFP1riVg_y8EvW7_3_ORX24AoXrmMFqx5VXEKlTaVMf9yAAYuJpyWuRxVptPNbaPIsGfoFGFNUBCDrifICSpLAfO72CY2OBmuz4rWrN5HuwT_sv7qwaqh1T8o2p9zO_XY1lIIjMwo9fHvORckczQNVCjgvR-tdp20xs_BlQfcI-Ku-E4TVS-NZgdURxy2xutcZtQ4TP8pHfvmD0",
=======
            "Authorization": "Bearer BQDUzY_-lEHakMTH7KHSaC5aNnxI1um5uZL7y9ZCs5xb6xIW_nVqFtoF3-HxDiyXu2gpQA6Ou4mDiupJLxD_CESYbtxRbQnBGVpTXl9-i575A4TLGsUKWge7oCCnSMLe3KGgaH0LeLqtpesHqPWut7M62R3rKr0wKaTGS0cObxrr8U2Bin2cL0zL7FL62SSP-7zJjYfIG3dnc2a--imWBsM7nM4WJIN6ynvxEupj9W97DHw",
>>>>>>> ff8523331c45b35b4ec009df80c1cfd325bacfca
        },
        "expires_in": 999999999999999999999999999999999999999,
        method: "POST",
    }).then(function (data) {


    })

    
   
});

$("#refreshBtn").on("click", refresh);

function refresh() {
    
    $("#spotifyPlaylist").attr("src", "");
    $("#spotifyPlaylist").attr("src", "https://open.spotify.com/embed/user/hgy7b48qtv7hbervxygyg3c48/playlist/7lj8pK87kMYQ6t7VgTle2h");


}






});