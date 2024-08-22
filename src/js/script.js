jQuery(function ($) {

  // ページトップボタンの設定
  setupPageTopButton();

  // ドロワーメニューのリサイズイベント
  $(window).resize(handleResize);

  // ナビゲーションリンクのクリックイベント
  $(".nav-list__item-title a, .nav-list__item a").click(handleNavClick);

  // モーダルの設定
  setupModal();

  // タブの設定
  setupTabs();
});

// ページトップボタン

function setupPageTopButton() {
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
    $("body,html").animate({ scrollTop: 0 }, 500);
    return false;
  });
  handleFooterPosition(pageTop);
}

function handleFooterPosition(pageTop) {
  $(window).on("scroll", function () {
    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    const footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      pageTop.css({ position: "absolute", bottom: footHeight + 20 + "px" });
    } else {
      pageTop.css({ position: "fixed", bottom: "1.25rem" });
    }
  });
}

// ハンバーガーメニュー

function handleResize() {
  var windowWidth = $(window).width();
  if (windowWidth >= 767) {
    $(".js-sp-nav").fadeOut(300);
    $(".js-hamburger, .js-header").removeClass('is-active is-color');
  }
}

function handleNavClick() {
  $(".js-hamburger").removeClass('is-active');
  $(".js-sp-nav").fadeOut(300);
  $(".js-header").removeClass('is-color');
  var targetId = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(targetId).offset().top }, 300);
}

function setupModal() {
  $('.js-openModal, #closeModal, #modalBg').on('click', function () {
    $('#modalArea').toggleClass('is-show');
  });
}

function setupTabs() {
  $('.js-tab-trigger').on('click', function () {
    $('.js-tab-trigger').removeClass('is-active');
    $('.js-tab-target').removeClass('is-active');
    $(this).addClass('is-active');
    let id = $(this).data("id");
    $('#' + id).addClass('is-active');
  });
}

  
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

  // スワイパー

    const mySwiper = new Swiper(".js-mySwiper", {
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

  const campaignSwiper = new Swiper('.js-campaignSwiper', {
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

// 下層ページ　ブログサイドバー

// .s_07 .accordion_one
$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.side-accordion .side-accordion__one .side-accordion__header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.side-accordion__inner').slideToggle();
    $(this).toggleClass("open");
  });
});


  // FAQアコーディオン
$(function () {
  // タイトルをクリックすると
  $(".js-accordion-title").on("click", function () {
    // クリックした次の要素を開閉
    $(this).next().slideToggle(300);
    // タイトルにopenクラスを付け外しして矢印の向きを変更
    $(this).toggleClass("open", 300);
    })
  });

  

//カラーボックス 

// 要素の取得とスピードの設定
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

    // ページネーション

    document.querySelectorAll('.pagination a').forEach(function(pageLink) {
      pageLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Remove the 'current' class from all pagination items
        document.querySelectorAll('.pagination li').forEach(function(pageItem) {
          pageItem.classList.remove('current');
        });
        
        // Add the 'current' class to the clicked pagination item
        this.parentElement.classList.add('current');
      });
    });
  });


//   // モーダル（ギャラリー）

  $(document).ready(function() {
    const open = $(".js-openModal");
    const modal = $(".js-modal");
    const close = $(".closeModal");
  
    open.on("click", function() {
      var imgSrc = $(this).find('img').attr('src');
      modal.find('.modal__content').attr('src', imgSrc);
      modal.addClass('is-show');
      $("html, body").css("overflow", "hidden");
    });
  
    close.on("click", function() {
      modal.removeClass('is-show');
      $("html, body").css("overflow", "auto");
    });
  
    // モーダルコンテンツ外をクリックした場合、モーダルを閉じる
    $(document).on('click', function(event) {
      if (!$(event.target).closest('.modalContents').length && !$(event.target).closest('.js-openModal').length) {
        modal.removeClass('is-show');
        $("html, body").css("overflow", "auto");
      }
      });
    });
  

  // タブ（information）]

//   $(function () {
//     $('.js-tab-trigger').on('click', function () {
//         $('.js-tab-trigger').removeClass('is-active');
//         $('.js-tab-target').removeClass('is-active');
//         $(this).addClass('is-active');
//         let id = $(this).data("id");
//         $('#' + id).addClass('is-active')
//     });
// });



// $(document).ready(function() {
//   $('.pagination-1 li a').on('click', function(event) {
//     event.preventDefault();

//     // 元のボタンの反転を解除
//     $('.pagination-1 li').removeClass('active');

//     // クリックされたボタンを反転
//     $(this).parent().addClass('active');
//   });
// });





