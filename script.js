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
      return false; 
    });
    // topが上に行くとflyが消えて、fallが表示される
    $(window).on('scroll', function(){
      if ($(window).scrollTop() < 30) {
        $('a.fly').addClass('click-off');
        $('a.fall').removeClass('click-off');
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
      var scroll = scroll_p + window_ht;
      if(scroll_y > scroll-350){
        $('.to-top_mid').fadeOut(100);
      }
      else if(scroll_y < scroll){
        $('.to-top_mid').fadeIn();
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


    $('#send-csv-btn').click(function() {
      var val = $('#coment-form [name=your-message]').val();
      var val2 = $('#coment-form [name=your-name]').val();
    });

    // csv反映
    function parseCsv(data) {
      // CSVを配列で読み込む
      var csv = $.csv.toArrays(data);
  
      var insert = '';
      $(csv).each(function(i) {
        if (this.length > 0) {
          if( i % 2 == 0 ){
            insert += '<div class="com-txt-right white">';
            $(this).each(function(i) {
              if(i === 0){
                insert += '<h3>' + this + '</h3>';
              }else{
                insert += '<p class="hide-01">' + this + '</p>';
              }
            });
            insert += '<div class="wh-01"></div>';
            insert += '</div>';
          }else{
            insert += '<div class="com-txt-left">';
            $(this).each(function(i) {
              if(i === 0){
                insert += '<h3>' + this + '</h3>';
              }else{
                insert += '<p class="hide-02">' + this + '</p>';
              }
            });
            insert += '<div class="wh-02"></div>';
            insert += '</div>';
          }
        }
        $("#result ").append(insert);
        insert = "";
      });
    }
    // CSVの読み込み
    $.get('/coment.csv', parseCsv, 'text');
  

});