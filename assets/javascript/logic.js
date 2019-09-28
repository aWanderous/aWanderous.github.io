$(document).on('click', '.scroll', function() {
    switch ($(this).attr('id')) {
        case 'about':
            $('html, body').animate({
                scrollTop: $("#aboutMe").offset().top
            }, 1000)
            break;

        case 'projects':
            $("#projectsDone").show();
            $('html, body').animate({
                scrollTop: $("#projectsDone").offset().top
            }, 1000)
            break;

        case 'contact':
                $("#contactDetails").show();
            $('html, body').animate({
                scrollTop: $("#contactDetails").offset().top
            }, 1000)
            console.log("clicked")
            break;

         case 'top':
            $('html, body').animate({
                scrollTop: $("html").offset().top
            }, 1000)
            break;
    }
});

$