$("a").click(function() {
    toggleClass(".active-color");
});

$(document).ready(function() {
    $('.slick_gallery').slick({
        arrows : true,
        dots: true, // 슬라이드로 가는 동그라미
        autoplay: true, // 자동으로 슬라이드를 넘겨줌
        infinite: true, // 무한 반복
        slidesToScroll: 1, // 넘겨질 슬라이드 수
    });
});

/* 스크롤 하면 나타나는 */

$(document).ready(function() {
    $(window).scroll( function(){
			
        $('#drama1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},50);
            }
            
        }); 
        
        $('#drama2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},100);
            }
            
        }); 

        $('#drama3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},150);
            }
            
        }); 

    }
    );  
});

/* 창 */

function btn(){
    alert('삐삐가 안전하게 전송되었습니다.');
}

/* 탭 메뉴 */

$(function(){
    $('#song_section > article');
    $('.tabNav a').click(function () {
        $('#song_section  > article').hide().filter(this.hash).fadeIn();
        $('.tabNav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});


