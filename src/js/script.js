
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

//トップへ戻るボタン
  // const topBtn = $('.to-top');
  // topBtn.hide();

  // //ボタンの表示設定
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 70) {
  //     // 指定px以上のスクロールでボタンを表示
  //     topBtn.fadeIn();
  //   } else {
  //     // 画面が指定pxより上ならボタンを非表示
  //     topBtn.fadeOut();
  //   }
  // });
 // ページトップボタン
$(function () {
  const pageTop = $(".to-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
  // フッター手前でストップ
  $(".to-top").hide();
  $(window).on("scroll", function () {
    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    const footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
   // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
      $(".to-top").css({
        position: "absolute",        
        bottom: footHeight + 20 + "px",
      });
    } else {
      $(".to-top").css({
        position: "fixed",
        bottom: "1.25rem",
      });
    }
  });
}); 

});


  
   //ドロワーメニュー

  // ウィンドウがロードされたときとリサイズされたときに実行される関数
$(window).resize(function () {
  var windowWidth = $(window).width(); // 現在のウィンドウの幅を取得

  if (windowWidth >= 767) {
    $(".js-sp-nav").fadeOut(300); // 768px以上なら非表示にする
    $(".js-hamburger").removeClass('is-active'); // ハンバーガーアイコンからis-activeクラスを削除する
    $(".js-header").removeClass('is-color');// ハンバーガーアイコンからis-colorクラスを削除する
  }
});

  // ナビゲーションリンクのクリックを処理
  $(".sp-nav__item a").click(function () {
    $(".js-hamburger").removeClass('is-active');
    $(".js-sp-nav").fadeOut(300);
    $(".js-header").removeClass('is-color');// ハンバーガーアイコンからis-colorクラスを削除する
    
    var targetId = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(targetId).offset().top
    }, 300);
  });

  
   // ハンバーガーアイコンがクリックされたときの処理 ドロワーメニュー
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass('is-active')) {
      $(".js-hamburger").removeClass('is-active');
      $(".js-sp-nav").fadeOut(300);
    } else {
      $(".js-hamburger").addClass('is-active');
      $(".js-sp-nav").fadeIn(300);
    }
  });


    // ハンバーガーアイコンがクリックされたときの処理 ヘッダーカラー
 $(".js-hamburger").click(function () {
  if ($(".js-header").hasClass('is-color')) {
    $(".js-header").removeClass('is-color');   
  } else {
    $(".js-header").addClass('is-color');  
  }
}); 

  // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
  $(".js-hamburger").click(function () {
    // 現在のbodyタグのoverflowスタイルを確認
    if ($("body").css("overflow") === "hidden") {
      // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
      $("body").css({ height: "", overflow: "" });
    } else {
      // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
      $("body").css({ height: "100%", overflow: "hidden" });
    }
  });
 // メニューが閉じられた後にスクロールを再び許可する
$(".js-sp-nav").click(function () {
  $("body").css({ height: "", overflow: "" });
});

  // swiper
    const mySwiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: "auto", 
      spaceBetween: 0,
      effect: "fade",
      speed: 6000,
      allowTouchMove: false,     
      autoplay: {
        delay: 0, 
      },      
    });

  const campaignSwiper = new Swiper('.campaignSwiper', {
    loop: true,
    slidesPerView: "auto",    
    spaceBetween: 24,
    // centeredSlides: true,
    initialSlide: 0,     
    breakpoints: {      
      768: { 
        speed: 1000,       
        spaceBetween: 40,
        autoplay: false, // 768px以上ではautoplayを無効に
      },
    },     
    speed: 6000,
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 0, // 767px以下の画面幅でautoplayの遅延時間
    },
    on: {
      slideChange: function () {
        const activeCard = this.slides[this.activeIndex].querySelector('.campaign__card');
  
        if (activeCard) {
          const containerWidth = this.width;
          const cardWidth = activeCard.offsetWidth;
          const margin = (containerWidth - cardWidth) / 2;
  
          activeCard.style.marginLeft = margin + 'px';
          activeCard.style.marginRight = margin + 'px';
        }
      }
    }
  });
  

//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;  
//.colorBoxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    //inViewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
    $(this).delay(200).animate({'width':'100%'},speed,function(){
                  image.css('opacity','1');
                  $(this).css({'left':'0' , 'right':'auto'});
                  $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
    });
  })
