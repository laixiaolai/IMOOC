//整屏滚动函数
function hc_scrollify(class_name)
{
    var set_time_id = null;
    var win_heigth = $(window).height();
    $('.'+class_name).css({height: win_heigth});
    $('<input type="hidden" value="0" id="sc_top_hidden_no_rename" /><input type="hidden" value="2" id="sc_is_hidden_no_rename" />').appendTo('body');
    $(window).scroll(function()
    {
        var sc_top    = $(window).scrollTop();
        if(sc_top == $('#sc_top_hidden_no_rename').val()) return false;
        if(sc_top <= 0) return false;
        if($('#sc_is_hidden_no_rename').val() == 3) return false;
        if(set_time_id != null) clearTimeout(set_time_id);
        $('html,body').stop();
        set_time_id = setTimeout(function()
        {
            var number    = parseInt(sc_top / win_heigth);
            var old_sctop = Number($('#sc_top_hidden_no_rename').val());
            if(old_sctop == 0)
            {
                number += 1;
            }
            else
            {
                if(sc_top > old_sctop)
                {
                    number += 1;
                }
            }
            if(number < 0) number = 0;
            var sc_top_val = number * win_heigth;
            $('#sc_is_hidden_no_rename').val(3);
            $('#sc_top_hidden_no_rename').val(sc_top_val);
            $('html,body').animate(
            {
                'scrollTop' : sc_top_val
            },800,function(){$('#sc_is_hidden_no_rename').val(2);});
            $('#sc_top_hidden_no_rename').val(sc_top_val);
        },100);
    });
}