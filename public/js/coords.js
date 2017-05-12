var tooltip = $( '<div id="tooltip">' ).appendTo( 'body' )[0];

$( '.coords' ).
  each(function () {
    var pos = $( this ).position(),
      top = pos.top,
      left = pos.left,
      width = $( this ).width(),
      height = $( this ).height();

    $( this ).
      mousemove(function ( e ) {
        var x, y;

        x = e.clientX;
        y = e.clientY;

        $( tooltip ).text( x + ', ' + y ).css({
          left: e.clientX ,
          top: e.clientY 
        }).show();
      }).
      mouseleave(function () {
        $( tooltip ).show();
      }); 
  });
  
  var $someElement = $("#tooltip");
  $(document).mousemove(function (e) {
      $someElement.offset({ top: e.pageY, left: e.pageX });
  }).click(function () {
    $(this).unbind("mousemove");
  });