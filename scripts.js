// display first textbody block
$("#one").css({ 'display': "block" });

// show/hide relevant textbody on link click
$(document).ready(function () {
  $('a.links').click(function (e) {
    e.preventDefault();
    var showDiv = $('a.links').index($(this))
    $('.divs').hide().eq(showDiv).show();
  });
});

//show email and edit href for email on div hover
$(".contact-button").hover(function() {
  $(".addContact").html('cfgw@protonmail.com').prop("href","mailto:cfgw@protonmail.com");
}, function() {
  $(".addContact").html('Lets work together').prop("href","#");
});
