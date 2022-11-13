/**
 * Created by Administrator on 2020/1/27 0027.
 */
var script=document.createElement("script");
script.type="text/javascript";
script.src="jquery.js";
document.getElementsByTagName('head')[0].appendChild(script);
$(function () {
    var mobile_flag = isMobile();
    if(mobile_flag){
        var name = window.location.pathname;
        var match_name = name.match(/\/+?([^\.]*)\.html/);
        if(match_name == null){
            window.location.href = '/m/index.html';
        }else{
            window.location.href = '/m/' + match_name[1] + '.html';
        }
    }
});
function isMobile() {
    var userAgentInfo = navigator.userAgent;

    var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];

    var mobile_flag = false;

    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }
    var screen_width = window.screen.width;
    var screen_height = window.screen.height;

    //根据屏幕分辨率判断是否是手机
    if(screen_width < 500 && screen_height < 800){
        mobile_flag = true;
    }

    return mobile_flag;
}
