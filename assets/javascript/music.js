$(document).ready(function () {
    $(".songButton").on("click", function (event) {
        event.preventDefault();
        var userInput = $("#songName").val().trim();
        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + userInput + "&type=track&limit=6",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQD_caSeM5WZeMcwoFqm6wXAgFgUvYXvBBZgDVEUkkLUDijyyzc8qFFGjp_AKFvf--Dc7ogUnsQO9wjmFCQRa4I-gcL9rp0X7OwbA8v0KwqdK3dWHNQOYtQjojHghSViLGf3HSkOOdv_7qk5P9wU7hvH7jl0JQOAy5xJHpKcsj_XIxIEYuyKgphrOJBTMj6bzf0Hv0ozDHX1PSFMWY9HYOFn3oiHz-3C3fCRJntivsg5SVM",
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
    $("#songName").on("keyup", function (event) {
        if (event.keyCode === 13) {
            $(".songButton").click();
        }
    });
    $("#songName").bind('keypress', function (e) {
        if (e.keyCode == 13) {
            return false;
        }
    });
    $(document).on("click", "#btn", function () {
        var userSong = $(this).attr("data-id");
        console.log($(this).attr("data-id"))
        $.ajax({
            url: "https://api.spotify.com/v1/playlists/7lj8pK87kMYQ6t7VgTle2h/tracks?uris=" + userSong,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQD_caSeM5WZeMcwoFqm6wXAgFgUvYXvBBZgDVEUkkLUDijyyzc8qFFGjp_AKFvf--Dc7ogUnsQO9wjmFCQRa4I-gcL9rp0X7OwbA8v0KwqdK3dWHNQOYtQjojHghSViLGf3HSkOOdv_7qk5P9wU7hvH7jl0JQOAy5xJHpKcsj_XIxIEYuyKgphrOJBTMj6bzf0Hv0ozDHX1PSFMWY9HYOFn3oiHz-3C3fCRJntivsg5SVM",
            },
            "expires_in": 999999999999999999999999999999999999999,
            method: "POST",
            // data:{
            //   "access_token":
            //   "refresh_token":
        }
        ).then(function (data) {
        })
    });
    $("#refreshBtn").on("click", refresh);
    function refresh() {
        $("#spotifyPlaylist").attr("src", "");
        $("#spotifyPlaylist").attr("src", "https://open.spotify.com/embed/user/hgy7b48qtv7hbervxygyg3c48/playlist/7lj8pK87kMYQ6t7VgTle2h");
    }
});