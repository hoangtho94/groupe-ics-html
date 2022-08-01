//dang_tho
//email:danghoangtho1132@gmail.com
jQuery(document).ready(function($) {
  // function escapeHtml(str) {
  //   return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  // }

  if($(".c-slider1-js").length > 0) {
    var elms = document.getElementsByClassName('c-slider1-js');

    for ( var i = 0; i < elms.length; i++ ) {
      new Splide(elms[i],{
        perPage: 1,
        arrows: false,
        type:"loop",
        pagination: true,
        // lazyLoad: false,
        lazyLoad: 'nearby',
        // height: '80vh',
        // cover   : true,
        speed: 1000,
        // autoplay:true,
      }).mount();
    }
  }

  //use in block home-product
  if($(".c-splide1-js").length > 0) {
    var elms = document.getElementsByClassName('c-splide1-js');

    for ( var i = 0; i < elms.length; i++ ) {
      new Splide(elms[i],{
        pagination: false,
        perPage: 3,
        gap: 24,
        // drag: false,
        // arrows: false,
        // type:"loop",
        // pagination: true,
        // lazyLoad: 'nearby',
        // speed: 1000,
        // autoplay:true,
        breakpoints: {
          1199: {
            perPage: 2,
          },
          767: {
            perPage: 2,
            gap: 10,
          },
          575: {
            perPage: 1,
            gap: 10,
          },
        }
      }).mount();
    }
  }
  //use in block home-product
  if($(".c-splide2-js").length > 0) {
    var elms = document.getElementsByClassName('c-splide2-js');

    for ( var i = 0; i < elms.length; i++ ) {
      new Splide(elms[i],{
        pagination: true,
        perPage: 3,
        // gap: 24,
        // drag: false,
        arrows: false,
        // type:"loop",
        // pagination: true,
        // lazyLoad: 'nearby',
        // speed: 1000,
        // autoplay:true,
        breakpoints: {
          1199: {
            perPage: 2,
          },
          767: {
            perPage: 2,
            // gap: 10,
          },
          575: {
            perPage: 1,
            // gap: 10,
          },
        }
      }).mount();
    }
  }

  //use for block about-partner
  if($(".p-about_splide1-js").length > 0) {
    var elms = document.getElementsByClassName('p-about_splide1-js');
    for ( var i = 0; i < elms.length; i++ ) {
      new Splide(elms[i],{
        type: 'loop',
        pagination: false,
        perPage: 4,
        gap: 48,
        autoplay: true,
        speed: 1000,
        interval: 3000,
        perMove: 1,
        breakpoints: {
          1199: {
            perPage: 3,
            gap: 30,
          },
          767: {
            perPage: 2,
            gap: 20,
          },
          575: {
            perPage: 2,
            gap: 10,
          },
          350: {
            perPage: 1,
            gap: 0,
          },
        }
      }).mount();
    }
  }

  /**
    *action: set equal height for all title/content in the list
  */
  const setEqualBoxHeight = (listItem, nameCard='.card1', titleName='.card1_title1') => {
    var listItem = listItem;
    var titleHeight = null;
    var title = null;
    var max = 0;
    var cards = null;
    var that = null; 

    listItem.each(function (i) {
      that = $(this);
      cards = that.find(nameCard);

      cards.each(function (i) {
        titleHeight = cards.eq(i).find(titleName).height();

        if(titleHeight && max < titleHeight) {
          max = titleHeight;
        }
      });

      title = cards.find(titleName);
      title.css({'height': max + 'px'});
      max = 0;
    });
  };
  if($(window).width()>576) {
    //equal height page product
    if($('.c-equal-height-card-js').length) {
      var listItem = $('.c-equal-height-card-js');
      setEqualBoxHeight(listItem, '.card-js', '.card_text-js');
      // setEqualBoxHeight(listItem, '.card-js', '.card_title-js');
    }
  }
});

