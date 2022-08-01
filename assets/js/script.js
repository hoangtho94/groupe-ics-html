// JavaScript Document
(function($){
    $(document).ready(function(){
        // var $window = $(window);
        var wh = $(window).outerHeight();

        // FIXED HEADER
        /*-----------------------------------------------------------------*/
        // header = $('#header');
        // // if ($('#panel').length >0){ hPanel = $('#panel').height(); }else{ hPanel = 0; }
        // hPanel = 80;
        // if(header.hasClass('sticky')){
        //   h = header.height();
        //   // p = 0;
        //   afterHeader = $('<div class="afterHeader"> ');
        //   header.after(afterHeader.height(h));

        //   $(window).scroll(function() {
        //     if ($(window).scrollTop() > hPanel) $('#header').addClass('zoom-out');
        //     else $('#header').removeClass('zoom-out');
        //   });
        // }

        // MENU MOBILE 
        /*-----------------------------------------------------------------*/
            $('.menu-btn').click(function(){
                $('body').toggleClass('showMenu'); 
            }); 

            $('.menu-top-header li[class*="children"]').each(function(){
                $(this).children('ul').wrap('<div class="wrapul"></div>');
            })

						$('.wrap-menu-header.mobile li[class*="children"]').each(function(){
								$(this).children('ul').wrap('<div class="wrapul"></div>');
								var p = $(this),
								btn = $('<span>',{'class':'showsubmenu icon-2 ib', text : '' }),
								wrapul = p.children('.wrapul');
							btn.click(function(){
								if(p.hasClass('parent-showsub')){
										wrapul.slideUp(300,function(){
												p.removeClass('parent-showsub');
										});                           
								}else{
										wrapul.slideDown(300,function(){
												p.addClass('parent-showsub');
										});                           
								}  
								}); p.prepend(btn);
						});
            // append - prepend - after - before

            //myModal
            $(".btnModal").each(function () {
                $(this).click(function(e){
                    e.preventDefault();
                    var id = $(this).data('modal');
                    var pr = $(this).parents('.myModal');
                    $('body').toggleClass('showModal');
                    if(pr.length>0) {
                        pr.removeClass('active');
                    }else {
                        $('div#'+id).toggleClass('active');
                    }
                }); 
            }); 
            $(".myModal").each(function () {
                var c = $(this).children('.container '),
                    hc = c.children('.contentModal').outerHeight() + 80;
                if(wh>hc){
                    c.addClass('middle');
                }
            });

        // CLICK SCROLL
        /*-----------------------------------------------------------------*/
        $('#back-top').click(function() {
          $('body,html').animate({
            scrollTop: 0
          }, 800);
          return false;
        });

        
    });

})(jQuery);
