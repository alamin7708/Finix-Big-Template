
// Counter UP Plugin Java Script
jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});


// Owl-Carosual Plugin Java Script
$('.owl-carousel-1').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  smartSpeed:700,
  responsive:{
      0:{
          items:1
      },
      700:{
          items:2
      },
      992:{
          items:3
      },
      1200:{
          items:4
      }
  }
})

$('.owl-carousel-2').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  smartSpeed:2000,
  responsive:{
       0:{
          items:1
      },
       576:{
          items:2
      },
      768:{
          items:3
      },
      992:{
          items:4
      },
      1200:{
          items:5
      }
  }
})

$('.owl-carousel-3').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:true,
  smartSpeed:2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})



// Form Validation Plugin Java Script

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  // Responsive (Index-1.html First Page) Script

