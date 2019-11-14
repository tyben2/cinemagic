// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  



$(document).ready(function(){
    $('.spinner-master2 label').on('click', function () {
        if ($(".main-nav").hasClass('active-display')) {
            
            $(".main-nav").slideUp("slow");
            $(".main-nav").removeClass('active-display');
        } else {
            
            $(".main-nav").slideDown("slow");
            $(".main-nav").addClass('active-display');
        }
    });
});  










// End of Your Code . Don't delete that line below!!
});