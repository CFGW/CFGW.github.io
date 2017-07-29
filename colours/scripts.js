//listen for input, and return background-color if valid
$(document).ready(function() {
  $('#activate-hex').on('keyup', function() {
    $('.wrap').css('background', '#' + $(this).val());
});
$('#activate-rgb').on('keyup', function() {
  $('.wrap').css('background', 'rgba(' + $(this).val() + ')');

});

//pull random background-color from array
var bgs = ['245,123,100,1', '255,122,01,1', '123,222,222,1',
            '20,222,111,1', '120,50,255,1', '50,100,250,1',
            '50,200,100,1' ,'24,156,200,1', '190,200,90,1', '224,156,200,1', '224,60,30,1', '255,205,210,1',
            '175,113,100,1', '242,200,10,1', '242,200,210,1',
            '32,230,180,1',  '62,130,200,1', '202,130,200,1',
            '130,120,200,1', '200,40,80,1', '180,220,10,1'
          ];
$('.wrap').css('background', 'rgba('+bgs[Math.floor(Math.random() * bgs.length)]+')');
//display background color value as a string
var currentcolor = $('.wrap').css("background-color");
$('.test').text(currentcolor);

//remove the onload rgb string when inputs are clicked
$('input').on('click', function() {
  $('.test').fadeOut('slow');
});

});
