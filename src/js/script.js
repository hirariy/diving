
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
    slidesPerView: "auto",    
    spaceBetween: 24,
    centeredSlides: true,
    breakpoints: {      
      768: {        
        spaceBetween: 40,
      }
    },  
        speed: 6000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },
   }); 
  

//.color boxの付いた全ての要素に対して下記の処理を行う
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
})