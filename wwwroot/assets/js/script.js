
$(document).ready(function() {
    // Initialize the carousel
    $('#myCarousel').carousel();

    // Click event handler for thumbnail anchors
    $('.custom-carousel-indicators .indicator-item').click(function(e) {
        e.preventDefault(); // Prevent the default behavior of anchor tags
        var slideId = $(this).attr('href'); // Get the href attribute value
        $('#myCarousel').carousel($(slideId).index()); // Switch to the clicked slide
        $('.custom-carousel-indicators .indicator-item').removeClass('active'); // Remove active class from all indicators
        $(this).addClass('active'); // Add active class to the clicked indicator
    });

    // Automatic slide change interval
    setInterval(function() {
        $('#myCarousel').carousel('next');
        updateActiveIndicator(); // Update active indicator
    }, 3000); // Change slides every 3 seconds (adjust as needed)

    // Function to update active indicator
    function updateActiveIndicator() {
        var activeSlideIndex = $('.carousel-item.active').index(); // Get the index of the active slide
        $('.custom-carousel-indicators .indicator-item').removeClass('active'); // Remove active class from all indicators
        $('.custom-carousel-indicators .indicator-item').eq(activeSlideIndex).addClass('active'); // Add active class to corresponding indicator
    }
});
    document.addEventListener("DOMContentLoaded", function() {
        AOS.init({
            offset: 100, // Adjust this offset as needed
            delay: 100, // Optional delay
            once: true // Only animate elements once
        });
    });

$(document).ready(function(){

   $(".filter-button").click(function(){
       var value = $(this).attr('data-filter');
       
       if(value == "all")
       {
           $('.filter').show('1020');
       }
       else
       {
           $(".filter").not('.'+value).hide('3600');
           $('.filter').filter('.'+value).show('3600');
           
       }
   });
   
   if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});