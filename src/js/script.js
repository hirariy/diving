
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  let topBtn = $('.to-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ヘッダークラスの付与
  let header = $('.p-header');
  let headerHeight = $('.p-header').height();
  let height = $('.p-mv').height();  
  $(window).scroll(function() {
    if($(this).scrollTop() > height - headerHeight) {
      header.addClass('is-color');      
    } else {
      header.removeClass('is-color');
    }  
  });
  
  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    if($(".js-hamburger").hasClass('is-active')) {
      $(".js-hamburger").removeClass('is-active');
      $(".js-sp-nav").fadeOut(300);
    } else {
      $(".js-hamburger").addClass('is-active');
      $(".js-sp-nav").fadeIn(300); 
    };
  });
  
  // swiper

  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: true,
    breakpoints: {
      767: {   
        slidesPerView: 3,
      },
      1137: {
        slidesPerView: 5,
      }
    },
    // speed: 6000,
    // allowTouchMove: false,
    // autoplay: {
    //   delay: 0,
    // },
   });
  

})
