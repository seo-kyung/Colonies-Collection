// window.onload = function() {
//         // Expose to window namespase for testing purposes
//         window.zoomTiger = svgPanZoom('.geomap', {
//           zoomEnabled: true,
//           controlIconsEnabled: true,
//           fit: true,
//           center: true,
//           // viewportSelector: document.getElementById('demo-tiger').querySelector('#g4') // this option will make library to misbehave. Viewport should have no transform attribute
//         });

//         document.getElementById('enable').addEventListener('click', function() {
//           window.zoomTiger.enableControlIcons();
//         })
//         document.getElementById('disable').addEventListener('click', function() {
//           window.zoomTiger.disableControlIcons();
//         })
//       };



$(document).ready(function() {

 
// hover and click at the same time 
    // $(".colony_button").hover(
    // function() {
    //   //mouse over
    //   $(this).css('color', '#b8aa85');
    //   $(".colony_element").css('fill', '#b8aa85');
    // },
    // function() {
    //   //mouse out
    //   $(".colony_element").css('fill', "");
    //   $(this).css('color', "");

    // }).click(function() {
    //   $(".colony_element").toggleClass('active');
    //   $(".colony_button").toggleClass('clicked');
      
      
    // });



  $('[data-toggle="tooltip"]').tooltip();



  $(".colony_button").hover(
    function() {
      //mouse over
      $(this).css('color', '#b8aa85');
      
    },
    function() {
      //mouse out
      $(this).css('color', "");

    }).click(function() {
      $(".colony_element").toggleClass('active');
      $(".colony_button").toggleClass('clicked');      
    });

  $(".prison_button").hover(
    function() {
      //mouse over
      $(this).css('color', '#3268bf');
    },
    function() {
      //mouse out
      $(this).css('color', "");
     
    }).click(function() {
      $(".prison_element").toggleClass('active');
      $(".prison_button").toggleClass('clicked');
    });


  $(".open_button").hover(
    function() {
      //mouse over
      $(this).css('color', '#e4cb3e');  
    },
    function() {
      //mouse out
      $(this).css('color', "");
    }).click(function() {
      $(".open_element").toggleClass('active');
      $(".open_button").toggleClass('clicked');
    });
 

 $("#yo").click(function(){
 	$("#overlay_project").slideToggle();
 });



$("#close_project").click(function(){
	$("#overlay_project").slideToggle();
});

$("#info_button").click(function(){
	$("#overlay_info").slideToggle();
});

$("#close_info").click(function(){
	$("#overlay_info").slideToggle();
});











// pan zoom
window.zoomTiger = svgPanZoom('.geomap', {
          zoomEnabled: true,
          controlIconsEnabled: false,
          fit: true,
          center: true,
          // viewportSelector: document.getElementById('demo-tiger').querySelector('#g4') // this option will make library to misbehave. Viewport should have no transform attribute
        });

        document.getElementById('enable').addEventListener('click', function() {
          window.zoomTiger.enableControlIcons();
        })
        document.getElementById('disable').addEventListener('click', function() {
          window.zoomTiger.disableControlIcons();
        })
     

});





