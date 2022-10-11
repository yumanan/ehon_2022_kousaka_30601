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

    // ボタンをクリックすると、fallが消えて、flyが表示する処理
    $('a[href^="#to-top"]').click(function() {
      $('a.fly').removeClass('click-off');
      $('a.fall').addClass('click-off');
      $('a.top-btn').addClass('click-off');
      return false; 
    });
    // topが上に行くとflyが消えて、fallが表示される
    $(window).on('scroll', function(){
      if ($(window).scrollTop() < 30) {
        $('a.fly').addClass('click-off');
        $('a.fall').removeClass('click-off');
        $('a.top-btn').removeClass('click-off');
      }
    });

    // topへボタンの位置をto-topをfotterの下に入れて
    // to-top-midを表示させる処理
    var scroll_y = $("body").get(0).scrollHeight;
    $(document).scroll(function(){
      //ウィンドウの高さを取得
      window_ht = $(window).height();

      //スクロール量を取得
      var scroll_p = $(document).scrollTop();
      var scroll = scroll_p + window_ht + 500;
      if(scroll_y > scroll){
        $('.to-top_mid').fadeOut(100);
        $('.to-top').fadeIn();
        console.log("scroll_y",scroll_y);
        console.log("scroll",scroll);
      }
      else if(scroll_y < scroll){
        $('.to-top_mid').fadeIn();
        $('.to-top').fadeOut();

      }
    });

    // slickのオプションの拡張
    $(document).on('ready', function() {
      $(".regular").slick({
        arrows: true,
        dots: true,
        prevArrow: '<p class="slide-arrow prev-arrow left"></p>',
        nextArrow: '<p class="slide-arrow next-arrow right"></p>',

      });
    });

    // ここでmodel後に処理slick.jsの表示崩れを防止する為に再処理している
    $(document).on('opening', '.remodal', function () {
      console.log('Modal is opening');
      $('.regular_tamesiyomi').slick('setPosition');
    });

    // モーダル内のslick処理
    $(".regular_tamesiyomi").slick({
      dots: true,
    });

});