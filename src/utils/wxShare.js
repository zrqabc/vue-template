/**
 * 微信js-sdk
 * 参考文档：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html
 * 所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用,目前Android微信客户端不支持pushState的H5新特性，所以使用pushState来实现web app的页面会导致签名失败，此问题会在Android6.2中修复）。
 */
import wx from 'weixin-js-sdk'
import cookie from './cookie.js'
import store from '@/store'

/**
 * @param wxdata 微信签名信息
 * @param option 分享配置内容
 */
export default function wxShare(wxdata, friendCircle, friend, successCallback, failCallback) {
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: wxdata.appId, // 必填，公众号的唯一标识
    timestamp: wxdata.timestamp, // 必填，生成签名的时间戳
    nonceStr: wxdata.nonceStr, // 必填，生成签名的随机串
    signature: wxdata.signature, // 必填，签名，见附录1
    jsApiList: [// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      'checkJsApi',//判断当前客户端版本是否支持指定JS接口
      'onMenuShareTimeline',//“分享到朋友圈”及“分享到QQ空间”
      'onMenuShareAppMessage',//“分享给朋友”及“分享到QQ”
    ]
  })
  wx.ready(function () {
    //config信息验证完成-成功、失败都会调用
    //config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    //“分享到朋友圈”及“分享到QQ空间”
    wx.onMenuShareTimeline({
      title: friendCircle.title, // 分享标题
      link: friendCircle.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: friendCircle.imgUrl, // 分享图标
      success(res) {
        // 成功
        alert('分享朋友圈-成功');
        cookie.setCookie('isShare','1',30);
        store.dispatch('other/getIsShare');//是否分享
        store.dispatch('other/getIsClickShare',false);//是否点击分享
      },
      fail(res) {
        // 失败
        // alert(JSON.stringify(res));
      }
    });
    //“分享给朋友”及“分享到QQ”
    wx.onMenuShareAppMessage({
      title: friend.title, // 分享标题
      desc: friend.desc, // 分享描述
      link: friend.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: friend.imgUrl, // 分享图标
      success(res) {
        // 成功
        alert('分享朋友-成功');
        cookie.setCookie('isShare','1',30);
        store.dispatch('other/getIsShare');//是否分享
        store.dispatch('other/getIsClickShare',false);//是否点击分享
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
