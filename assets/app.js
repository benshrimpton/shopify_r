var MobileDetect = new MobileDetect(window.navigator.userAgent);


$(document).ready(function() {
    

//body opacity 0~1 
    $('body').imagesLoaded( function() {
        $('body').css('opacity','1');
    });





// collection page ajax load more

    $(document).on('click', '.pagination-load-more a', function(event) {
        event.preventDefault();
        /* Act on the event */

        var ajaxURL = $(this).attr('href');

            $.ajax({
                url: ajaxURL,
                dataType: "html"
            })
            .done(function(data) {

                var productRow = $(data).find('#ajax-target >');

                var pagination = $(data).find('.pagination-load-more a');


                $('#ajax-target').append(productRow);
                $('.pagination-load-more').html(pagination);

                var ajaxURLNext = $('.pagination-load-more a').attr('href');

                if(!ajaxURLNext){
                    $('.pagination-load-more').remove();
                }

            });
       
    });


//mega menu hover open


    var addOpenClass = function (e) {
        $(this).addClass('open');
    }

    var removeOpenClass = function (e) {

        $(this).removeClass('open');
    }

    $('#main-navbar li.yamm-fw').hover(addOpenClass, removeOpenClass);

// click event

    $(document).on('click', '#product-variants-target .option-title', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('open');

    }); 


    $(document).on('click', '#product-variants-target .option-select-wrapper a', function(e) {
        e.preventDefault();

        $('.option-title').text($(this).data('option-value'));
        $('#product-variants-target .product-option').removeClass('open');

    });

    


    $(document).on('click', '.bag-trigger', function(e) {
        e.preventDefault();

        $('body').toggleClass('mini-cart-open');

    }); 

    $(document).on('click', '#mini-cart-close', function(e) {
        e.preventDefault();

        $('body').removeClass('mini-cart-open');

    }); 


    $(document).on('click', '.search-trigger', function(e) {
        e.preventDefault();

        $('body').addClass('search-open');
        $('.search-overlay').fadeIn(200, 'linear');
    }); 

    $(document).on('click', '.search-overlay .close-icon', function(e) {
        e.preventDefault();

        $('body').removeClass('search-open');
        $('.search-overlay').fadeOut(200, 'linear');
        $('.input--hoshi').removeClass('input--filled');
        $('.search-input').val('');

    });


    $(document).on('click', '.subscribe-trigger', function(e) {
        e.preventDefault();

        $('body').addClass('subscribe-open');
        $('.subscribe-overlay').fadeIn(400);
    });


    $(document).on('click', '.subscribe-overlay .close-icon', function(e) {
        e.preventDefault();

        $('body').removeClass('subscribe-open');
        $('.subscribe-overlay').fadeOut(400);
        $('.input--hoshi').removeClass('input--filled');
        $('.search-input').val('');

    });


    $(document).on('click', '.search-input', function(e) {
        e.preventDefault();

        $('.input--hoshi').addClass('input--filled');

    }); 

    $(document).on('click', '.product-desc-title', function(e) {
        e.preventDefault();

        $(this).next().toggleClass('open');

    }); 

    $(document).on('click', '.mobile-collection-filter-trigger', function() {

        var collectionFilterWrapper = $('.collection-filter-wrapper');

        collectionFilterWrapper.toggleClass('open');

        if(collectionFilterWrapper.hasClass('open')){
            collectionFilterWrapper.slideDown(300);
        }
        else{
            collectionFilterWrapper.slideUp(200);
        }

    }); 



// smooth scroll


    // var $window = $(window);
    // var scrollTime = 0.5;
    // var scrollDistance = 100;

    // $window.on("mousewheel DOMMouseScroll", function(event){

    //     event.preventDefault(); 

    //     var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    //     var scrollTop = $window.scrollTop();
    //     var finalScroll = scrollTop - parseInt(delta*scrollDistance);

    //     TweenMax.to($window, scrollTime, {
    //         scrollTo : { y: finalScroll, autoKill:true },
    //             ease: Power1.easeOut,
    //             overwrite: 5                            
    //         });

    // });

// product page option box scroll to fix

if($(window).width()>=991){
    $('#product-details-wrapper').scrollToFixed({ 

        marginTop: $('#rv-nav').outerHeight() + 20,
        limit: function() {
            var limit = $('.main-footer').offset().top - 900;
            return limit;
        },

    });    
}






//product page mobile gallery

    $('#mobile-product-gallery-wrapper').royalSlider({
        arrowsNav:false,
        loop:true,
        autoHeight: true
    }); 









    
});