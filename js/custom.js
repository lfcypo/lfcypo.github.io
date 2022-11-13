
$(document).ready(function () {
    //banner
    $("#slider3").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 500,
        timeout: 8000,
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
        }
    });

    //微信二维码
    var weixin = '.weixin';
    var qr = '.qrcode';
    $(weixin).hover(function (e) {
        $(qr).show();
    }, function () {
        $(qr).hide();
    });

    var plat_btn = '.play-btn';
    $(plat_btn).hover(function (e) {
        $(plat_btn).attr('src', 'images/deep-play-btn.png');
    }, function () {
        $(plat_btn).attr('src', 'images/play-btn.png');
    });

    var play_btn_index = '.play-btn-index';
    $(play_btn_index).hover(function (e) {
        $(play_btn_index).attr('src', 'images/deep-play-btn.png');
    }, function () {
        $(play_btn_index).attr('src', 'images/play-btn.png');
    });

    var video_left = '.video-left';
    $(video_left).hover(function (e) {
        $(video_left).attr('src', 'images/video-left-deep.png');
    }, function () {
        $(video_left).attr('src', 'images/video-left.png');
    });

    var video_cancel = '.video-cancel';
    $(video_cancel).hover(function (e) {
        $(video_cancel).attr('src', 'images/cancel-deep.png');
    }, function () {
        $(video_cancel).attr('src', 'images/cancel.png');
    });

    $('.video-cancel-moco').hover(function (e) {
        $('.video-cancel-moco').attr('src', 'images/cancel-deep.png');
    }, function () {
        $('.video-cancel-moco').attr('src', 'images/cancel.png');
    });

    var video_index = 0;  //现在的视频下标
    var video_next_index;  //下一个视频下标
    var video_index_max = document.getElementsByClassName('moco-item-index').length  - 1;
    var class_name = '.moco-item-index';

    //视频左
    $(video_left).click(function () {
        if(video_index == 0){
            video_next_index  = video_index_max; //最后一个视频
        }else{
            video_next_index  = video_index - 1; //上一个视频
        }
        var now_video_obj = $(class_name+video_index.toString());
        var next_video_obj = $(class_name+video_next_index.toString());

        //设置视频信息
        $('#video').attr('src', next_video_obj.attr('data-video'));
        $('#aifay-box-text').text(next_video_obj.attr('data-text'));
        //图片隐藏渐出
        now_video_obj.hide();
        next_video_obj.fadeIn();
        video_index = video_next_index; //设置点击后的video_index
    });

    //视频右
    var video_right = '.video-right';

    $(video_right).hover(function (e) {
        $(video_right).attr('src', 'images/video-right-deep.png');
    }, function () {
        $(video_right).attr('src', 'images/video-right.png');
    });

    $(video_right).click(function () {
        if(video_index == video_index_max){
            video_next_index  = 0; //第一个视频
        }else{
            video_next_index  = video_index + 1; //下一个视频
        }
        var now_video_obj = $(class_name+video_index.toString());
        var next_video_obj = $(class_name+video_next_index.toString());

        //设置视频信息
        $('#video').attr('src', next_video_obj.attr('data-video'));
        $('#aifay-box-text').text(next_video_obj.attr('data-text'));
        //图片隐藏渐出
        now_video_obj.hide();
        next_video_obj.fadeIn();
        video_index = video_next_index; //设置点击后的video_index
    });

    function loop_video() {
        if($('#videoModal').css("display") === 'none'){
            $(video_right).click();
        }
        setTimeout(function(){
            loop_video();
        },8000);
    }
    setTimeout(function(){
        loop_video();
    },8000);

    var _video = $('#video')[0];
    $(plat_btn).click(function () {
       $('.moco-tem').fadeOut();
       $('.secret-tem').fadeOut();
       $(plat_btn).hide();
       $('#yummy-img-text').hide();
       $('.videoContent').css('visibility', 'visible');
        $(video_cancel).show();
        $('.video-cancel-moco').show();
        _video.play();
    });

    // $('.play-btn-index').click(function () {
    //     _video.play();
    // });

    //关闭
    // $(video_cancel).click(function () {
    //     _video.pause();
    //     $('#moco-item-main').show();
    //     $('.play-btn-index').show();
    //     $('.video-left, .video-right').show();
    //     $(video_cancel).hide();
    //     $('.videoContent').css('display', 'none');
    // });

    //moco.html 关闭
    $('.video-cancel-moco').click(function () {
        _video.pause();
        $('#moco-item-main').show();
        $('.play-btn').show();
        $('.img-text').show();
        $('.video-cancel-moco').hide();
        $('.videoContent').css('visibility', 'hidden');
    });

    $('#videoModal').on('show.bs.modal', function () {
        var $this = $(this);
        var $modal_dialog = $this.find('.modal-dialog');
        // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
        $this.css('display', 'block');
        $modal_dialog.css({'margin-top': Math.max(0, ($(window).height() - $modal_dialog.height()) / 2) });
        _video.play();
    });
    $('#videoModal').on('hidden.bs.modal', function () {
        _video.pause();
    });

    //监听视频暂停
    // setInterval(function () {
    //     if ( _video.paused) {
    //         //暂停
    //         $('.play-btn-index').show();
    //         $('.play-btn').show();
    //     } else {
    //         $('.play-btn-index').hide();
    //         $('.play-btn').hide();
    //     }
    // }, 500);

});


