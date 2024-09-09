jQuery(document).ready(function($){
    var $windowheight = $(window).height();
    var $header = $("header");
    var $header_height = $header.height();
    var $contentcover = $(".bs-content");
    var $footer = $("footer");
    var $footerheight = $footer.height();
    var nh = $header_height + $footerheight;
    var nh2 = $windowheight - nh;
    $contentcover.css('min-height', nh2);
    // $headertop.css('padding-top', $header_height);
    var lastScrollTop = 0;
    $(window).on("scroll", function () {
      // Get the current scroll position
      var st = $(this).scrollTop();

      // Determine the scroll direction and update the navbar classes accordingly
      if (st < lastScrollTop) {
        $header.removeClass("navbar-hide");
        $header.addClass("navbar-show");
      } else {
        $header.addClass("navbar-hide");
        $header.removeClass("navbar-show");
      }
      lastScrollTop = st;
      if ($(this).scrollTop() < $header_height) {
        $header.removeClass("navbar-show");
      }
    });    
});
jQuery('#spinner button').on('click', function(){
    let input = jQuery(this).closest('#spinner').find('input[name=qty]');

    if(jQuery(this).data('action') === 'increment') {
        if(input.attr('max') === undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
            input.val(parseInt(input.val(), 10) + 1);
        }
    } else if(jQuery(this).data('action') === 'decrement') {
        if(input.attr('min') === undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
            input.val(parseInt(input.val(), 10) - 1);
        }
    }
});

