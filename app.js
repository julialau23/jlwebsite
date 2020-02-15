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



// (function(window, document, undefined)
// {

//     window.App = (function()
//     {

//         var _init = false, app = { };

//         app.init = function()
//         {
//             if (_init) {
//                 return;
//             }
//             _init = true;

//             var nav_open = false,
//                 $main = $('.main-head');

//             $('#nav-open-btn').on('click', function()
//             {
//                 if (!nav_open) {
//                     $main.animate({ left: '70%' }, 500);
//                     nav_open = true;
//                     return false;
//                 }
//             });

//             $('#nav-close-btn').on('click', function()
//             {
//                 if (nav_open) {
//                     $main.animate({ left: '0' }, 500);
//                     nav_open = false;
//                     return false;
//                 }
//             });

//             $(document.documentElement).addClass('js-ready');
//         };

//         return app;

//     })();

//     $.fn.ready(function()
//     {
//         window.App.init();
//     });

// })(window, window.document);



$(function(){  // $(document).ready shorthand
    $(".header-container").fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */

          $(".main-container").children().each( function(i){
            
            var middle_of_object = $(this).position().top + $(this).outerHeight()/3;
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