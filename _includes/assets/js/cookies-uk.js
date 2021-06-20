var manager = klaro.getManager();
if (!manager.confirmed) {
    $('#cookie-notice').show();
}

$('#cookie-accept').click(function() {
    $('#cookie-notice').hide();
    $('#cookie-notice-accept').show();
});
$('#cookie-reject').click(function() {
    $('#cookie-notice').hide();
    $('#cookie-notice-reject').show();
});
$('.hide-accept').click(function() {
    $('#cookie-notice-accept').hide();
});
$('.hide-reject').click(function() {
    $('#cookie-notice-reject').hide();
});
//var consents = manager.loadConsents();
//console.log(consents);
