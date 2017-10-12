import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable()
export class WechatService {
  jsApiList = ['checkJsApi',
    'onMenuShareTimeline', //分享到朋友圈
    'onMenuShareAppMessage', //分享给朋友
    /*
    'onMenuShareQQ', //分享到QQ
    'onMenuShareWeibo', //分享到腾讯微博
    'onMenuShareQZone', //分享到QQ空间
    'hideMenuItems',
    'showMenuItems',
    'hideAllNonBaseMenuItem',
    'showAllNonBaseMenuItem',
    'translateVoice',
    'startRecord',
    'stopRecord',
    'onVoiceRecordEnd',
    'playVoice',
    'onVoicePlayEnd',
    'pauseVoice',
    'stopVoice',
    'uploadVoice',
    'downloadVoice',
    'chooseImage',
    'previewImage',
    'uploadImage',
    'downloadImage',
    'getNetworkType',
    'openLocation',
    'getLocation',
    'hideOptionMenu',
    'showOptionMenu',
    'closeWindow',
    'scanQRCode',
    'chooseWXPay',
    'openProductSpecificView',
    'addCard',
    'chooseCard',
    'openCard'
    */
  ];
  async shareTimeline(opt: { title: string, desc: string, link?: string, imageUrl: string }) {
    opt.link = opt.link ? opt.link : location.href;
    wx.onMenuShareTimeline({
      title: opt.title, // 分享标题
      desc: opt.desc, // 分享描述
      link: opt.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: opt.imageUrl, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        alert('分享朋友圈成功')
        window['myFrame'].playVideo();
        // 用户确认分享后执行的回调函数
        // resolve(true)
      },
      cancel: function () {
        //分享失败
        alert('分享朋友圈失败');
        // 用户取消分享后执行的回调函数
      }
    });
  }

  payMoney(payargs) {
    return new Promise(resolve => {
      WeixinJSBridge.invoke('getBrandWCPayRequest', payargs, function (res) {
        if (res.err_msg == "get_brand_wcpay_request:ok") {
          resolve(true)
          // 这里可以跳转到订单完成页面向用户展示
        } else {
          resolve(false);
        }
      });

    })

  };

  whiteList = [
    /iPhone; CPU iPhone OS 10/g,
    // /iPhone; CPU iPhone OS 10_1/g
  ];

  checkIOSWhiteList(useragent: string) {
    let inWhiteList = false;
    this.whiteList.forEach(regex => {
      if (regex.test(useragent)) {
        inWhiteList = true
      }
    });
    // alert('inWhiteList:' + inWhiteList);
    return inWhiteList;
  }

  async getJSSDKConfig(url) {
    // alert(navigator.userAgent);
    let config;
    if (/iPhone; CPU iPhone OS 10_/.test(navigator.userAgent)) {
      // alert('not support iphpne')
      config = await this.api.Post('/wechat.jssdk.go', { url });
    } else {
      config = await this.api.Post('/wechat.jssdk.go', { url });
    }

    // console.log(config);
    config.debug = false;
    config.jsApiList = this.jsApiList;
    return config;
  }

  async shareAppMessage(opt: { title: string, desc: string, link?: string, imageUrl: string }) {
    opt.link = opt.link ? opt.link : location.href;

    wx.onMenuShareAppMessage({
      title: opt.title, // 分享标题
      desc: opt.desc, // 分享描述
      link: opt.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: opt.imageUrl, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        alert('分享朋友成功')
        window['myFrame'].playVideo();
      },
      cancel: function () {
        alert(' app error')
      }
    });



  }
  constructor(public api: ApiService) { }

}
