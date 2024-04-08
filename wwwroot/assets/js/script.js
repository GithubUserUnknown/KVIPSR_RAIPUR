

$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
       loop:true,
       nav:true,
       dots: true,
       margin:0,
       autoplay: true,
       autoplayTimeout: 4500,
       navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
       responsive:{
           0:{
               items:1
           },
           607:{
               items:1
           },
           1020:{
               items:1
           }
       }
   })


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