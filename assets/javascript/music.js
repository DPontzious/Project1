$(document).ready(function () {
    $(".songButton").click(function () {
        var userInput = $("#songName").val().trim();
        console.log(userInput);
        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + userInput + "&type=track&limit=5",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQBBFhkrITvA8e-M1rDtcDMbenI3DFYVz7D4oGLNMJi6owFo2ZRHa3qVdl7lHKyXQeDTwfyhZUujXyTZ_P-znf3FgNT9VSCP4NUEg7YhiCR6vcYkriyKkXSttYlWqwbb2EMfj3kCCvuIBNCQ2s1Sn7JT3vdWq-3jhsp4dLWimjLac9t_B6Ohobj5sWA41ttIJKkoVF7NIUCsT0EYRXxMiBfj62Xtn6SOUI1w5gI7hWS_GZQ",
            },
            "expires_in": 36000,
        }).then(function (data) {
            console.log(data.tracks);
            // $("#songList").append("Artist Name: " + data.tracks.items[0].artists[0].name);
            var artistName = $("<h4>").text("Artist Name: " + data.tracks.items[0].artists[0].name);
            var artistImage = $("<img>").attr("src", data.tracks.items[0].album.images[2].url);
            var button = $("<button id= btn>").text("THIS ONE");
            $("#songList").append(artistName, artistImage, button);

            var artistName = $("<h4>").text("Artist Name: " + data.tracks.items[1].artists[0].name);
            var artistImage = $("<img>").attr("src", data.tracks.items[1].album.images[2].url);
            var button = $("<button id= btn>").text("THIS ONE");
            $("#songList").append(artistName, artistImage, button);

            var artistName = $("<h4>").text("Artist Name: " + data.tracks.items[2].artists[0].name);
            var artistImage = $("<img>").attr("src", data.tracks.items[2].album.images[2].url);
            var button = $("<button id= btn>").text("THIS ONE");
            $("#songList").append(artistName, artistImage, button);
            $("#btn").click(function () {
                var songID = (data.tracks.items[0].uri);
                $("#songList").empty();
            })

        });
    });
});
        // $("button").click(function () {
        //     var userSong = $(this).attr("#songName");
        //     $.ajax({
        //         url: "https://api.spotify.com/v1/playlists/7lj8pK87kMYQ6t7VgTle2h/tracks?uris=spotify" + userSong,
        //         headers: {
        //             "Accept": "application/json",
        //             "Content-Type": "application/json",
        //             "Authorization": "Bearer BQBBFhkrITvA8e-M1rDtcDMbenI3DFYVz7D4oGLNMJi6owFo2ZRHa3qVdl7lHKyXQeDTwfyhZUujXyTZ_P-znf3FgNT9VSCP4NUEg7YhiCR6vcYkriyKkXSttYlWqwbb2EMfj3kCCvuIBNCQ2s1Sn7JT3vdWq-3jhsp4dLWimjLac9t_B6Ohobj5sWA41ttIJKkoVF7NIUCsT0EYRXxMiBfj62Xtn6SOUI1w5gI7hWS_GZQ",
        //         },
        //         method: "POST",
        //     }).then(function (data) {
        //         // console.log(data.tracks.items);

        //     })
        // });