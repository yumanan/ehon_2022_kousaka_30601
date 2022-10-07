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
  // to-top限定 to-top消して#だけにすると全体強制的になる
  $('a[href^="#to-top"]').click(function() { 

    var speed = 2100; 

    var href= $(this).attr('href'); 

    var target = $(href == "#" || href == "" ? 'html' : href); 

    var position = target.offset().top; 

    $('body,html').animate({scrollTop: position}, speed, 'swing');
    return false; 
    });

    $('a[href^="#to-top"]').click(function() {
      $('a').removeClass('click-off');
      
      setTimeout(function(){
        $('a.fly').addClass('click-off');
      },3000);
      // 3秒ぐらい飛んでる状態
      return false; 
    });

    // キャラ紹介左右ボタン
    // 左
    $('a[href^="#left1"]').click(function() {
      $('div.cha-01').addClass('cha-none');
      $('div.cha-03').removeClass('cha-none');
      return false; 
    });
    $('a[href^="#left2"]').click(function() {
      $('div.cha-02').addClass('cha-none');
      $('div.cha-01').removeClass('cha-none');
      return false; 
    });
    $('a[href^="#left3"]').click(function() {
      $('div.cha-03').addClass('cha-none');
      $('div.cha-02').removeClass('cha-none');
      return false; 
    });
    //右
    $('a[href^="#right1"]').click(function() {
      $('div.cha-01').addClass('cha-none');
      $('div.cha-02').removeClass('cha-none');
      return false; 
    });
    $('a[href^="#right2"]').click(function() {
      $('div.cha-02').addClass('cha-none');
      $('div.cha-03').removeClass('cha-none');
      return false; 
    });
    $('a[href^="#right3"]').click(function() {
      $('div.cha-03').addClass('cha-none');
      $('div.cha-01').removeClass('cha-none');
      return false; 
    });


    // 紹介3点ボタン
    $('a[href^="#button1"]').click(function() {
      $('div.cha-01').removeClass('cha-none');
      $('div.cha-02').addClass('cha-none');
      $('div.cha-03').addClass('cha-none');
      return false; 
    });
    $('a[href^="#button2"]').click(function() {
      $('div.cha-02').removeClass('cha-none');
      $('div.cha-01').addClass('cha-none');
      $('div.cha-03').addClass('cha-none');
      return false; 
    });
    $('a[href^="#button3"]').click(function() {
      $('div.cha-03').removeClass('cha-none');
      $('div.cha-01').addClass('cha-none');
      $('div.cha-02').addClass('cha-none');
      return false; 
    });
});