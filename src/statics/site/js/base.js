$(function() {
    var qmsc = new QMSC();
    //返回顶部
    qmsc.topScroll();
});

//创建一个QMSC构造函数
var QMSC = function() {

};

QMSC.prototype = {
    //返回顶部按钮
    topScroll: function() {
        var obox = document.getElementById("top"),
         scroll = 0,
         begin = 0;
         end = 0;
         timer = null;
        window.onscroll = function() {
            scroll = document.documentElement.scrollTop;
            if (scroll > 200) {
                obox.style.display = "block";
                begin = scroll;
            } else {
                obox.style.display = "none"
            }
            obox.onclick = function() {
                clearInterval(timer);
                timer = setInterval(function() {
                    begin = begin + (end - begin) / 8;
                    window.scrollTo(0, begin);
                    if (Math.floor(begin) === end) { clearInterval(timer); }
                }, 50)
            }
        }
    },
}
