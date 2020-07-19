ScrollReveal().reveal(".portfolio-item")
ScrollReveal().reveal(".row")

//jquery//
$(document).ready(function() {
    
    $(window).scroll(function() {
      
      if($(this).scrollTop() >= 10) { 
          $('#nav').addClass("nav2");
      } else {
          $('#nav').removeClass("nav2");
      }
    });

      
});



$('#datepicker').datepicker({
    weekStart: 1,
    format: 'dd/mm/yyyy',
    autoclose:true,
    locale: 'es',
  });


//jquery end//

window.addEventListener("scroll", ()=>{
    console.log(window.pageYOffset);
    
})





//cookies//