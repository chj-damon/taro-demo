import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

/**
 * https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
 * 页面事件处理函数:
 *  onPullDownRefresh	监听用户下拉动作
 *  onReachBottom	    页面上拉触底事件的处理函数
 *  onShareAppMessage	用户点击右上角转发
 *  onPageScrol	      页面滚动触发事件的处理函数
 *  onTabItemTap	    当前是 tab 页时，点击 tab 时触发
 */
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };

  render() {
    return <View className='home-page'>首页</View>;
  }
}
