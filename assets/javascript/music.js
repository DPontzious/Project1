$(document).ready(function () {
    $(".songButton").click(function () {
        var userInput = $("#songName").val().trim();

        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + userInput + "&type=track&limit=5",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQD1ird5pqsaNKe1tIWR5acRhpYaVA18jFP1riVg_y8EvW7_3_ORX24AoXrmMFqx5VXEKlTaVMf9yAAYuJpyWuRxVptPNbaPIsGfoFGFNUBCDrifICSpLAfO72CY2OBmuz4rWrN5HuwT_sv7qwaqh1T8o2p9zO_XY1lIIjMwo9fHvORckczQNVCjgvR-tdp20xs_BlQfcI-Ku-E4TVS-NZgdURxy2xutcZtQ4TP8pHfvmD0",

            },
            "expires_in": 999999999999999999999999999999999999999,
        }).then(function (data) {
            $("#songList").empty();
            for (var i = 0; i < 5; i++) {

                var artistName = $("<h4>").text(data.tracks.items[i].artists[0].name);
                var songName = $("<h5>").text("Song: " + data.tracks.items[i].name);
                var artistImage = $("<img>").attr("src", data.tracks.items[i].album.images[2].url);
                var button = $("<button id= btn>").attr("data-id", data.tracks.items[i].uri).text("THIS ONE");


                $("#songList").append(artistName, songName, artistImage, button);
            }
            console.log(data.tracks);
        });
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
            "Authorization": "Bearer BQD1ird5pqsaNKe1tIWR5acRhpYaVA18jFP1riVg_y8EvW7_3_ORX24AoXrmMFqx5VXEKlTaVMf9yAAYuJpyWuRxVptPNbaPIsGfoFGFNUBCDrifICSpLAfO72CY2OBmuz4rWrN5HuwT_sv7qwaqh1T8o2p9zO_XY1lIIjMwo9fHvORckczQNVCjgvR-tdp20xs_BlQfcI-Ku-E4TVS-NZgdURxy2xutcZtQ4TP8pHfvmD0",
        },
        "expires_in": 999999999999999999999999999999999999999,
        method: "POST",
    }).then(function (data) {


    })
    setTimeout(refresh, 30000);
});

function refresh() {
    location.reload();
}