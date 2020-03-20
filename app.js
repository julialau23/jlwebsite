// 'use strict'

/* <script type="text/javascript"></script> */
/* <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script src="/lib/jquery.min.js"></script>
    <script src="/lib/jquery.plugin.js"></script> */

    // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

// $(window).scroll(function() {
//     var scrollTop = $(window).scrollTop();
//     var imgPos = scrollTop / 2 + 'px';
//     $('.main-head-img').css('transform', 'translateY(' + imgPos + ')');
// });

// function openNav() {
//     document.getElementById("topNav").style.width = "25%";
//   }
  
//   function closeNav() {
//     document.getElementById("topNav").style.width = "100%";
//   }


function openNav() {
    var x = document.getElementById("nav");
    if (x.className === "stroke") {
      x.className += " responsive";
    } else {
      x.className = "stroke";
    }
  }

var myVar;

function loadWrapper() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("preloader-wrapper").style.display = "none";
    document.getElementById("loader-wrapper").style.display = "block";
}


$(window).on("load",function(){
  
  // $(".preloader-wrapper").fadeOut("slow");
  // $(".loader-wrapper").fadeIn("slow");
  /*<==================== UNCOMMENT LATER ==================================*/ 
  $(".preloader-wrapper").delay(2000).fadeOut("slow");
  $(".loader-wrapper").delay(1000).fadeIn("slow");
});

$(function(){  // $(document).ready shorthand
    $(".header-container").fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */

          $(".main-container").children().each( function(i){
            
            var middle_of_object = $(this).position().top + $(this).outerHeight()/4;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            // console.log($(this).outerHeight());
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > middle_of_object ){
                
                $(this).animate({'opacity':'1'},1300);
                    
            }
            
        }); 
            
    });
        });

            



      
//     //   });
      
//   });