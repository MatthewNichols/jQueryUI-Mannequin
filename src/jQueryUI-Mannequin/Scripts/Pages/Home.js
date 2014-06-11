$(function() {

    $('#accordion').accordion();


    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];

    $("#autocomplete").autocomplete({
        source: availableTags
    });


    $(".button")
        .button()
        .click(function (event) {
            event.preventDefault();
        });

    $("#datepicker").datepicker();

    var dialogHeader$ = $('#dialogHeader');
    $("#dialog").dialog({
        position: {
            of: dialogHeader$,
            my: "left top+40px",
            at: "left bottom"

        }
    });

    $("#menu").menu();

    $("#progressbar").progressbar({
        value: 37
    });

    $("#slider").slider();

    $("#spinner").spinner();
});