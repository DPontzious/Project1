$(document).ready(function () {
    $(".songButton").click(function () {
        var userInput = $("#songName").val().trim();
        // console.log(userInput);
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
            // $("#songList").append("Artist Name: " + data.tracks.items[0].artists[0].name);
            // var artistName = $("<h4>").text("Artist Name: " + data.tracks.items[0].artists[0].name);
            // data.tracks.items[0].artists[0].name
            // var button = $("<button id= btn0>").text("THIS ONE");
            // $("#songList").append(artistName, artistImage, button);

            // var artistName = $("<h4>").text("Artist Name: " + data.tracks.items[1].artists[0].name);
            // var artistImage = $("<img>").attr("src", data.tracks.items[1].album.images[2].url);
            // var button = $("<button id= bt1n>").text("THIS ONE");
            // $("#songList").append(artistName, artistImage, button);

            // var artistName = $("<h4>").text("Artist Name: " + data.tracks.items[2].artists[0].name);
            // var artistImage = $("<img>").attr("src", data.tracks.items[2].album.images[2].url);
            // var button = $("<button id=btn2>").text("THIS ONE");
            // $("#songList").append(artistName, artistImage, button);

            // var artistName = $("<h4>").text("Artist Name: " + data.tracks.items[3].artists[0].name);
            // var artistImage = $("<img>").attr("src", data.tracks.items[3].album.images[2].url).html("<br/>");
            // var button3 = $("<button id= btn3>").text("THIS ONE");
            // var button3TEST = (data.tracks.items[3].id);
            // console.log("Button 3 test", button3TEST)
            // var button3URI = $("#btn3").attr(data.tracks.items[0]);
            // console.log("#btn3", button3);
            // $("#songList").append(artistName, artistImage, button3);


            // $("#btn3").click(function () {
            //     // event.preventDefault();
            //     var button3URI = button3TEST;
            //     console.log(button3URI);
            //     // $(this).event(data.tracks.items[0].uri);
            //     console.log(button3URI);
            //     $("#songList").empty();
            // })

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

        // console.log(data.tracks.items);
    })
    setTimeout(refresh, 30000);
});
function refresh() {
    location.reload();
}