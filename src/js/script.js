$(document).ready(function() {
    var animElements = $('.invisible')
        $(document).scroll(function() {
        for(var i = 0; i < animElements.length; i++) {
            var offsetY = window.pageYOffset
            var reqOffset = animElements.eq(i)[0].offsetTop-250
            if(offsetY > reqOffset) {
                animElements.eq(i).removeClass('invisible')
                animElements.eq(i).addClass('fadeUp')
            }
        }
    })
})