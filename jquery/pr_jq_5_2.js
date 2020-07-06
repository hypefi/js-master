$(document).ready( function() { 
 $('.clicky').click( function() {
 $(this).addClass('clicked');
 setTimeout( function() { $(this).removeClass('clicked');
}, 1000 ); });
});

$(document).ready( function() { $('.clicky').click( function() {
var element = this; $(element).addClass('clicked');
 setTimeout( function() {
$(element).removeClass('clicked'); }, 1000 );
}); });


$(document).ready( function() { $('.clicky').click( function() {
var $element = $(this); 

$element.addClass('clicked'); 
setTimeout( function() {
$element.removeClass('clicked'); }, 1000 );
}); });