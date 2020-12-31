/**
 * 微信js-sdk
 * 参考文档：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html
 * 所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用,目前Android微信客户端不支持pushState的H5新特性，所以使用pushState来实现web app的页面会导致签名失败，此问题会在Android6.2中修复）。
 */
import wx from 'weixin-js-sdk'
import cookie from './cookie.js'
import store from '@/store'


//分享成功回调
function successCallback(mark) {
  cookie.setCookie('isShare','1',30);//存储cookie
  store.dispatch('other/getIsShare');//是否分享
  store.dispatch('other/getIsClickShare',false);//是否点击分享
  //排名页面分享后发送记录
  if(mark == 'rank') {
    store.dispatch('record/sendRecord',{
      clickType: 2,
      phone: cookie.getCookie('isPermissions')
    });
  }
}

/**
 * @param wxdata 微信签名信息
 * @param friendCircle 分享朋友圈信息
 * @param friend 分享朋友信息
 * @param successCallback 分享成功回调
 * @param failCallback 分享失败回调
 */
export default function wxShare(wxdata, friendCircle, friend, mark) {
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: wxdata.appId, // 必填，公众号的唯一标识
    timestamp: wxdata.timestamp, // 必填，生成签名的时间戳
    nonceStr: wxdata.nonceStr, // 必填，生成签名的随机串
    signature: wxdata.signature, // 必填，签名，见附录1
    jsApiList: [// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      'checkJsApi',//判断当前客户端版本是否支持指定JS接口
      'onMenuShareTimeline',//分享到朋友圈
      'onMenuShareAppMessage',//分享给朋友
    ],
    openTagList: ['wx-open-launch-weapp'] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
  })
  wx.ready(function () {
    //config信息验证完成-成功、失败都会调用
    //config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    //分享到朋友圈
    wx.onMenuShareTimeline({
      title: friendCircle.title, // 分享标题
      link: 'http://h5.cbi360.net/2020jqcjd/?referrer=Timeline', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'https://img.cbi360.net/2020/12/28/18c6dcf3-35ca-4b3b-bd00-421277306c0f.png', // 分享图标
      success(res) {
        // 成功
        // alert('分享朋友圈-成功');
        //分享成功回调
        successCallback(mark);
      },
      fail(res) {
        // 失败
        // alert(JSON.stringify(res));
      }
    });
    //分享给朋友
    wx.onMenuShareAppMessage({
      title: friend.title, // 分享标题
      desc: friend.desc, // 分享描述
      link: 'http://h5.cbi360.net/2020jqcjd/?referrer=AppMessage', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'https://img.cbi360.net/2020/12/28/18c6dcf3-35ca-4b3b-bd00-421277306c0f.png', // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success(res) {
        // 成功
        // alert('分享朋友-成功');
        //分享成功回调
        successCallback(mark);
      },
      fail(res) {
        // 失败
        // alert(JSON.stringify(res));
      }
    })

  })
  wx.error(function (res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    // alert(JSON.stringify(res));
  });
}
