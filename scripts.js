$(document).ready(function () {
  $('a.links').click(function (e) {
    e.preventDefault();
    var three = $('a.links').index($(this))
    $('.divs').hide().eq(three).show();
  })
});
