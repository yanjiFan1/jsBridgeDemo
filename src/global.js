import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import {
    Swipe,
    SwipeItem,
    Toast,
    Loading,
    Lazyload,
    List,
    Tab,
    Tabs,
    NavBar,
    Icon,
    CouponCell,
    CouponList,
    Row,
    Cell,
    GoodsAction,
    GoodsActionBigBtn,
    GoodsActionMiniBtn,
    Popup,
    Sku,
    Dialog,
    Progress
} from 'vant'
// 祖册eventBus
global.vbus = new Vue()
    // 注册组件
Vue.use(Toast)
    .use(Loading)
    .use(List)
    .use(Tab)
    .use(Tabs)
    .use(NavBar)
    .use(Icon)
    .use(Swipe)
    .use(SwipeItem)
    .use(CouponCell)
    .use(CouponList)
    .use(Row)
    .use(Cell)
    .use(GoodsAction)
    .use(GoodsActionBigBtn)
    .use(GoodsActionMiniBtn)
    .use(Popup)
    .use(Sku)
    .use(VueAwesomeSwiper)
    .use(Dialog)
    .use(Progress)
    .use(Lazyload, {
        filter: {
            progressive(listener, options) {

            }
        },
        adapter: {
            loaded({
                bindType,
                el,
                naturalHeight,
                naturalWidth,
                $parent,
                src,
                loading,
                error,
                Init
            }) {
                // console.log('el', el)
                // el.src = dyCreateSvg()
            },
            error(listender, Init) {
                let src = listender.src
                if (src && src.indexOf('//') === 0) {
                    src = 'https:' + src
                }
                listender.el.src = ''
                listender.el.onerror = function() {}
            }
        }
    })