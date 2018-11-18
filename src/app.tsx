import Taro, { Component, Config } from '@tarojs/taro';
import Home from './pages/home';

import './app.scss';

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ['pages/home/index', 'pages/cart/index', 'pages/user/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '时装衣橱',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/home/index',
          text: '首页',
          iconPath: './images/tab/home.png',
          selectedIconPath: './images/tab/home-active.png'
        },
        {
          pagePath: 'pages/cart/index',
          text: '衣袋',
          iconPath: './images/tab/cart.png',
          selectedIconPath: './images/tab/cart-active.png'
        },
        {
          pagePath: 'pages/user/index',
          text: '我的',
          iconPath: './images/tab/user.png',
          selectedIconPath: './images/tab/user-active.png'
        }
      ],
      color: '#333',
      selectedColor: '#333',
      backgroundColor: '#fff'
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <Home />;
  }
}

Taro.render(<App />, document.getElementById('app'));
