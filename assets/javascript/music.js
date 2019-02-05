$(document).ready(function () {
    $(".songButton").click(function () {
        var userInput = $("#songName").val().trim();
        
        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + userInput + "&type=track&limit=5",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQAyJ8iwmAox0oZCzZxnd_NFaZKQM6_jW-dxzKK48NGsaEmzeuUEaT1vbii3NgSgXZNBrKnLcOLM3Y4Xwdek5BZpq056z5TADriLiFys0r7RvbdscwOOcGY0ieyG-wshhbwvyyi9-nXJDJ4-CN0KbcO6-LDMs1d8_VW4iaMnIbuD_vRh1p2R9-NU9vIedReIOjg5keGjfYmWbms49mADR6M5XF8YIrpWsA6sEQwICB8m6NE",

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
            "Authorization": "Bearer BQAyJ8iwmAox0oZCzZxnd_NFaZKQM6_jW-dxzKK48NGsaEmzeuUEaT1vbii3NgSgXZNBrKnLcOLM3Y4Xwdek5BZpq056z5TADriLiFys0r7RvbdscwOOcGY0ieyG-wshhbwvyyi9-nXJDJ4-CN0KbcO6-LDMs1d8_VW4iaMnIbuD_vRh1p2R9-NU9vIedReIOjg5keGjfYmWbms49mADR6M5XF8YIrpWsA6sEQwICB8m6NE",
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