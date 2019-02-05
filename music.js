$(document).ready(function () {
    $(".songButton").click(function () {
        var userInput = $("#songName").val().trim();
        console.log(userInput);
        // $("#songList").empty();
        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + userInput + "&type=track&limit=5",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer BQBgeYDzwy69A8N_uTaLYo68YpmHmZ6KnDZG_JvwB2cSy2aqdTa6GlAwsC8v0gjl9xpWdS7srz4-cMp6C9mZkyNnmQl39QZkdhulbGn7yH0drH7_wA6na6k-PxT1woA8kxrJc6H5Tj0T205xgXegMZtjQMFMhloxoosY-GnQ2kIILz2oYOaVbyAPh77BR8m2M7-6IAvyAzIkYO9Pqy4D7P9EVZ99nInpnIXTntLxJsJ9luQ",
            },
            "expires_in": 999999999999999999999999999999999999999,
        }).then(function (data) {
            console.log(data);
            // $("#songList").append("Artist Name: " + data.tracks.items[0].artists[0].name);


            for(var i=0; i<3; i++){

                var artistName = $("<h4>").text(data.tracks.items[i].artists[0].name);
                var songName = $("<h5>").text("Song: " + data.tracks.items[i].name);
                var artistImage = $("<img>").attr("src", data.tracks.items[i].album.images[2].url);
                var button = $("<button id= btn>").attr("data-id", data.tracks.items[i].id).text("THIS ONE");
                
                
               
                $("#songList").append(artistName, songName, artistImage, button);

            }
            // var artistName = $("<h4>").text("Artist Name: " + data.tracks.items[0].artists[0].name);
            // var artistImage = $("<img>").attr("src", data.tracks.items[0].album.images[2].url);
            // var button = $("<button id= btn>").text("THIS ONE");
           
            // $("#songList").append(artistName, artistImage, button);

            // var artistName = $("<h4>").text("Artist Name: " + data.tracks.items[1].artists[0].name);
            // var artistImage = $("<img>").attr("src", data.tracks.items[1].album.images[2].url);
            // var button = $("<button id= btn>").text("THIS ONE");
            // button.attr("songId", data.tracks.items[1].id);
            // $("#songList").append(artistName, artistImage, button);

            // var artistName = $("<h4>").text("Artist Name: " + data.tracks.items[2].artists[0].name);
            // var artistImage = $("<img>").attr("src", data.tracks.items[2].album.images[2].url);
            // var button = $("<button id= btn>").text("THIS ONE");
           
            // $("#songList").append(artistName, artistImage, button);
            

        });
    });

    $(document).on("click", "#btn", function () {
        console.log($(this).attr("data-id"));
    })
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
