//header notice
$(document).ready(function (){
    var btn = $('.notice-btn'),
        list = $('.notice-list')

    btn.click(function (){
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            list.show()
        } else {
            list.hide()
        }
    })

    $(document).mouseup(function(e) {
        if (!list.is(e.target) && list.has(e.target).length === 0 && btn.has(e.target).length === 0) {
            list.hide();
            btn.removeClass('active')
        }
    });
})


//header sticky
$(window).scroll(function(){
    if ($(window).width() > 767 && $(window).scrollTop() >= 24 && !$('header').hasClass('not-scroll')) {
        $('header').addClass('sticky');
    } else if ($(window).width() > 767 && $(window).scrollTop() <= 24 && !$('.main-article').hasClass('searching')
        && !$('header').hasClass('not-scroll')) {
        $('header').removeClass('sticky');
    }
});
$(document).ready(function (){
    if($(window).width() < 767) {
        $('header').addClass('sticky')
    }
})


//search window
$('.search-btn').click(function (){
    $(this).toggleClass('active');
    $('.main-article').toggleClass('searching');
    if($('.main-article').hasClass('searching')){
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
})

$('.close-search').click(function (){
    if($(window).width() > 767) {
        $('.search-btn').removeClass('active');
        $('.main-article').removeClass('searching');
        $('header').removeClass('sticky');
    } else if($(window).width() < 767 && $('.search-form input').val() != 0) {
        $('.search-form input').val('');
        $(this).hide();
        $('.main-article').removeClass('searching');
    }
})

$('.search-form input').keyup(function (){
    if($(this).val() != 0) {
        $('.search-form').addClass('active');
    } else {
        $('.search-form').removeClass('active')
    }
    if(($(window).width() < 767) && ($(this).val() != 0)) {
        $('.close-search').show();
        $('.main-article').addClass('searching');
    } else if(($(window).width() < 767) && ($(this).val() == '')) {
        $('.close-search').hide();
        $('.main-article').removeClass('searching');
    }
})

$('.clear-search').click(function (){
    $('.search-form input').val('');
    $('.search-form').removeClass('active')
})


//modal close
$('.modal-close').click(function (){
    $('.modal-box').modal('hide');
})


//mobile-menu
$('.call-menu').click(function (){
    if($(window).width() > 767) {
        $('.main-aside').addClass('open');
    } else if ($(window).width() < 767) {
        $(this).toggleClass('active');
        $('.main-aside').toggleClass('show');
        $('body').toggleClass('scroll-locked');
    }
})
$('.aside-close').click(function (){
    $('.main-aside').removeClass('open');
    if($(window).width() < 767) {
        $('body').removeClass('scroll-locked')
    }
})

//change mode
$('.switch-dark input').change(function (){
    if($(this).is(':checked')){
        $('body').addClass('dark-mode');
    } else {
        $('body').removeClass('dark-mode');
    }
})

//nprogress
NProgress.start();
$('body').show();
$(window).on('load', function() {
    setTimeout(function() {
        NProgress.done();
        $('.fade').removeClass('out');
    }, 1000);
});
NProgress.configure({ showSpinner: false });