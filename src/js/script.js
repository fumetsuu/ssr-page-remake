$(document).ready(function() {
    var animElements = $('.invisible')
    if(window.pageYOffset > 200) {
        window.scrollBy(0, 1)
    }
        $(document).scroll(function() {
        for(var i = 0; i < animElements.length; i++) {
            var offsetY = window.pageYOffset
            var reqOffset = animElements.eq(i)[0].offsetTop-(window.innerHeight-50)
            if(offsetY > reqOffset) {
                animElements.eq(i).removeClass('invisible')
                animElements.eq(i).addClass(animElements.eq(i).attr('anim'))
            }
        }
    })
    $('.shousai-button').click(function() {
        $('html, body').animate({
            scrollTop: $('.info-wrapper')[0].offsetTop-50
        }, 1000)
    })
    $('.back-up').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000, function() {
            for(var i = 0; i < animElements.length; i++) {
                animElements.eq(i).removeClass(animElements.eq(i).attr('anim'))
                animElements.eq(i).addClass('invisible')
            }
        })
    })
    $('.long-scroll').click(function() {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 2000)
    })
})