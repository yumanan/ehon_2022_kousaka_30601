$(function(){
    var $win = $(window),
        $head = $('.nav'),
        headPos = $head.offset().top,
        fixedClass = 'fixed';

    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ( value > headPos ) {
        $head.addClass(fixedClass);
      } else {
        $head.removeClass(fixedClass);
      }
    });

    // メニューバー・ホバー
    $(".y-01").hover(
        //マウスオーバー時の処理
        function() {
          $(this).toggleClass("y-01-active");
        },
        //マウスアウト時の処理
        function() {
          $(this).toggleClass("y-01-active");
        }
    );
    $(".y-02").hover(
        function() {
          $(this).toggleClass("y-02-active");
        },
        function() {
          $(this).toggleClass("y-02-active");
        }
    );
    $(".blue").hover(
        function() {
          $(this).toggleClass("blue-active");
        },
        function() {
          $(this).toggleClass("blue-active");
        }
    );


    $(".nav_logo h1").hover(
      function() {
        $(this).toggleClass("move");
      },
      function() {
        $(this).toggleClass("move");
      }
  );




    


});