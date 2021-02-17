$('h1').addClass('big-title');
$("a").attr('href', 'https://yahoo.com')
$('button').addClass('btn-danger');
$("button").html('<b>Dont Click Me</b>')

$(document).keydown(function(event) {
    $("h1").text(event.key);
})
$("h1").on('click', function() {
    $("h1").css('color', "purple");
})

$('button').on('click', function() {
    $('h1').css('color', "red");
    $('button').html('<b>I said dont click me</b>');
    $('h1').slideToggle();
})
$('button').on('click', function() {
    $('h1').slideToggle().animate({ opacity: 0.5 });
})
