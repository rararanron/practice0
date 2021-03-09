$(function(){
  //drawer js
  $('.drawer' ).drawer()
  
  
  //スクロール

    $('a[href^="#"]').click(function() {
      let header = $(".header").innerHeight();
      //移動速度を指定（ミリ秒）
      let speed = 300;
      //hrefで指定されたidを取得
      let id = $(this).attr("href");
      //isの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
      let target = $("#" == id ? "html" : id);
      //ページのトップを基準にターゲットの位置を取得
      let position = $(target).offset().top;
      //ターゲットの位置までspeedの速度で移動
      $("html, body").animate(
        {
          scrollTop: position - $( '#js-header' ).outerHeight()  //ヘッダー分の高さを引いている
        },
        speed
        );
        return false;
      });
  
      
      
      //wow-js
      new WOW().init()
    })
      
      
 
      
  