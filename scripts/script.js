// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  



    $('.spinner-master2 label').on('click', function () {
        if ($(".main-nav").hasClass('active-display')) {
            
            $(".main-nav").slideUp("slow");
            $(".main-nav").removeClass('active-display');
        } else {
            
            $(".main-nav").slideDown("slow");
            $(".main-nav").addClass('active-display');
        }
    });


// Toggle Collapse
$('.faq li .question').click(function () {
  $(this).find('.plus-minus-toggle').toggleClass('collapsed');
  $(this).parent().toggleClass('active');
});













// End of Your Code . Don't delete that line below!!
});