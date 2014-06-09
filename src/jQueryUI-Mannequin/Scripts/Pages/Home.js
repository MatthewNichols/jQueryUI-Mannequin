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

    $("#dialog").dialog();

    $("#menu").menu();

    $("#progressbar").progressbar({
        value: 37
    });

    $("#slider").slider();

    $("#spinner").spinner();
});