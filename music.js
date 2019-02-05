$(document).ready(function () {
    $(".songButton").click(function () {
        var userInput = $("#songName").val().trim();
        console.log(userInput);
        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + userInput + "&type=track&limit=5",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQAbBvV0XHgDGc6KNTw-gW6XYKiqUhyWqE4oZjrmVy7GAC9lYDxZZNnrb6bzYRTfx1ppBQdbszQMz8gd7WgxGFuP7AzsiYtTOqGmiND53JmFUubPNlQeuFSkAjxcBG_qqa_rO0WURW4YYkxb6NXmV1UEosu_a2jL-on5_UKtqDFClgDKdm-AT-t4ocg07jeJqA303jvZVUJcLsaS6TLkWRkuaUeFmd_eb1-aexUn6GuAjfU",
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
        //             "Authorization": "Bearer BQAbBvV0XHgDGc6KNTw-gW6XYKiqUhyWqE4oZjrmVy7GAC9lYDxZZNnrb6bzYRTfx1ppBQdbszQMz8gd7WgxGFuP7AzsiYtTOqGmiND53JmFUubPNlQeuFSkAjxcBG_qqa_rO0WURW4YYkxb6NXmV1UEosu_a2jL-on5_UKtqDFClgDKdm-AT-t4ocg07jeJqA303jvZVUJcLsaS6TLkWRkuaUeFmd_eb1-aexUn6GuAjfU",
        //         },
        //         method: "POST",
        //     }).then(function (data) {
        //         // console.log(data.tracks.items);

        //     })
        // });
