// 1.
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








/*// 2.
 window.onload=function  () {
 // 常量
 const designWidth=750;
 const fontSize=100;
 // 设计屏幕尺寸，只需改变750 ; 1rem=100px; rem主要用于手机端;等比缩放;
 // rem用于css中，不能用于html行内样式中;
 // 定义rem之后，1rem=html中字体大小的一倍;
 // 用rem时必须给body设置默认字体大小，font-size=16px；
 // document.querySelector("html").style.fontSize=fontSize+"px";
 function resizeFont(){
 let CW = document.documentElement.clientWidth;
 // console.log(CW);
 let radio =CW/designWidth;
 let newFontSize=fontSize*radio;
 document.querySelector("html").style.fontSize=newFontSize+"px";
 }
 resizeFont();
 window.onresize=resizeFont;
 }*/


// 3.
/*let gaowi=750;
 function rems(){
 let keshi=document.documentElement.clientWidth;
 let fonts=keshi/gaowi*100;
 // console.log(fonts)
 document.documentElement.style.fontSize=fonts+'px'
 }
 rems();
 window.onresize=rems;*/


// 4.
/*
 let dw = 750;
 function resize(){
 let cw = window.innerWidth;
 let bi = cw/dw;
 document.documentElement.style.fontSize = bi * 100 +"px";
 }
 resize();
 window.onresize=function(){
 resize();
 };
 */



