/*
rem单位的使用：
根据设计稿尺寸，只需改变750 ;
用rem时必须给body设置默认字体大小，font-size=16px;
浏览器本身 1rem = html字体大小的一倍;
此方法中 1rem = 100px;
*/

(function () {
  let designwidth = 750;
  let fontsize = 100;

  function resize() {
    let width = document.documentElement.clientWidth;
    let size = width / designwidth * fontsize;
    let html = document.querySelector('html');
    html.style.fontSize = size + "px";
  }

  resize();
  window.onresize = resize;
})(window, document);






