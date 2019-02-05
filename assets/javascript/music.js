$(document).ready(function () {
    $(".songButton").click(function () {
        var userInput = $("#songName").val().trim();
        
        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + userInput + "&type=track&limit=5",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQCXQMniR0dYQEq7GtNqEvsupVKnYwL97RC634-etQisjuARoWzSUosbHhyyF1Ryd27IaSz2H0TLWBWUVegMUfJJSZCzmXdebCXRYP89nB7J0kFtwW0OA4dtvS0pK1Kdyn6p5QsGM7juWP0JYznrMjK2BVBKZd9jVGgITkY03okdPrfibWP0PPeRSvl6yJGDc846NSxaaXhgMMOd83rz6K6k8LBxpW9giqiYq28nG_Fjnho",

            },
            "expires_in": 999999999999999999999999999999999999999,
        }).then(function (data) {
            $("#songList").empty();
            for (var i = 0; i < 5; i++) {

                var frameSong = $("<div>").addClass("col-4");

                var artistName = $("<h5>").text(data.tracks.items[i].artists[0].name);
                var songName = $("<h6>").text("Song: " + data.tracks.items[i].name);
                var artistImage = $("<img>").attr("src", data.tracks.items[i].album.images[2].url);
                var button = $("<button id= btn>").attr("data-id", data.tracks.items[i].uri).text("Add to Playlist");
                button.addClass("btn rounded");
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
            "Authorization": "Bearer BQCXQMniR0dYQEq7GtNqEvsupVKnYwL97RC634-etQisjuARoWzSUosbHhyyF1Ryd27IaSz2H0TLWBWUVegMUfJJSZCzmXdebCXRYP89nB7J0kFtwW0OA4dtvS0pK1Kdyn6p5QsGM7juWP0JYznrMjK2BVBKZd9jVGgITkY03okdPrfibWP0PPeRSvl6yJGDc846NSxaaXhgMMOd83rz6K6k8LBxpW9giqiYq28nG_Fjnho",
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