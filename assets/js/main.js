$(function() {
    $('.header-navbtn').click( function (){
        $('.header-right').toggle('slow');
    });
    $(window).on('beforeunload', function(e) {
        $('.header-right').hide();
      });
})