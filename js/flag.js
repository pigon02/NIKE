$(document).ready(function(){
    
    const flag_slider = $('.flag_slider>li');
    const flag_btm_list = $('.flag_btm_wrap>li');
    const fl_left = $('.flag_side.left')
    const fl_right = $('.flag_side.right')





    first();
    function first(){
        flag_slider.eq(0).addClass('On')
        flag_btm_list.eq(0).addClass('Act')
    }
    
    fl_right.click(function(e){
        e.preventDefault();
        const idx = $('.flag_slider>li.On').index();

        flag_slider.removeClass('On')
        flag_btm_list.removeClass('Act')


        if(idx < 4){
            flag_slider.eq(idx+1).addClass('On')
            flag_btm_list.eq(idx+1).addClass('Act')
        }

        if(idx == 4){
            flag_slider.eq(0).addClass('On')
            flag_btm_list.eq(0).addClass('Act')
        }
    })

    fl_left.click(function(e){
        e.preventDefault();
        const idx = $('.flag_slider>li.On').index();

        flag_slider.removeClass('On')
        flag_btm_list.removeClass('Act')

        if(idx > 0){
            flag_slider.eq(idx-1).addClass('On')
            flag_btm_list.eq(idx-1).addClass('Act')
        }

        if(idx == 0){
            flag_slider.eq(4).addClass('On')
            flag_btm_list.eq(4).addClass('Act')
        }
    })

    flag_btm_list.click(function(e){
        e.preventDefault();
        const idx = $(this).index();

        flag_slider.removeClass('On')
        flag_btm_list.removeClass('Act')
        
        
        flag_slider.eq(idx).addClass('On')
        flag_btm_list.eq(idx).addClass('Act')
        
        

    })

})