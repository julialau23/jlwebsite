// 'use strict'

/* <script type="text/javascript"></script> */
/* <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script src="/lib/jquery.min.js"></script>
    <script src="/lib/jquery.plugin.js"></script> */

    // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var imgPos = scrollTop / 2 + 'px';
    $('.main-head-img').css('transform', 'translateY(' + imgPos + ')');
});


// $(function(){  // $(document).ready shorthand
//     $('.main-head').fadeIn('slow');
//   });
  
//   $(document).ready(function() {
      
//       /* Every time the window is scrolled ... */
//       $(window).scroll( function(){
      
//           /* Check the location of each desired element */

              
//             var bottom_of_object = $('.item2').position().top + $('.item2').outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
                
//                 $('.item2').animate({'opacity':'1'},1500);
             
//             }
//             });
            


//         //   $('item2').each( function(){
              
//         //       var bottom_of_object = $(this).position().top + $(this).outerHeight();
//         //       var bottom_of_window = $(window).scrollTop() + $(window).height();
              
//         //       /* If the object is completely visible in the window, fade it it */
//         //       if( bottom_of_window > bottom_of_object ){
                  
//         //           $(this).animate({'opacity':'1'},1500);
                      
//         //       }
              
//         //   }); 
      
//     //   });
      
//   });