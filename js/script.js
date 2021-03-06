$('select').on('change', function () {


    let section = $('select').val();
    let url = "https://api.nytimes.com/svc/topstories/v2/" + section + ".json";
    url += '?' + $.param({
        'api-key': "82f12f3e4189492f86578cb2d4e6add0"
    });

    $('.logo').addClass("reduce");
    $('.selection').addClass("slide");
    $('body').addClass("shift");
    $(".article_section").append('<img id="loader-img" alt="" src="./assets/images/ajax-loader.gif" class="gif"/>');

    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (data) {
        $('.article_section').empty();
        for (let i = 0; i < 12; i++) {
            let abstract = data.results[i].abstract;
            let image = data.results[i].multimedia[4].url;
            let url = data.results[i].url;

            $('.article_section').append('<a target="_blank" href="' + url + '"><section class="articleone"><h2 class="description">' + abstract + '</h2></section></a>');
            $('.articleone').last().css("background-image", 'url(' + image + ')');

        }

    }).fail(function (err) {
        throw err;
    });


});

