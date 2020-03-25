/**
 * @param {Function} callback 回调函数
 *
 */
function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge) }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback) }
    window.WVJBCallbacks = [callback]
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'xxxx://__bridge_loaded__' // 和安卓和ios定义的协议
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}

/**
 * 启用webview动桥接设置
 * @param {String} cbName 注册的函数名
 * @param {Function} fn 回调函数
 */
function wbBridgeSetup(cbName, fn) {
    setupWebViewJavascriptBridge(function(bridge) {
        // console.log('设置成功')
        if (cbName && fn) {
            // console.log('注册函数', cbName, fn)
            bridge.registerHandler(cbName, fn)
        }
    })
}

/**
 * APP功能暴露接口
 * @param {String} type 调用那个功能 setTitle | getCity | toast | enableRefresh | showProgress
 * | getUserInfo | tel | contacts | share | isLogin | wxpay | alipay
 * @param params 各个功能需要的参数
 * @param {*} cfn 设置成功后的回调函数
 *
 */
function apwbBridge(type, params, cfn = function() {}) {
    // console.log('调用类型: ', type, params, cfn)
    let wbB = window.WebViewJavascriptBridge
    if (!wbB) {
        setTimeout(() => {
            wbB = window.WebViewJavascriptBridge
                // alert(wbB)
                // if (!wbB) console.error('任然无法使用window.WebViewJavascriptBridge对象')
            wbB && wbB.callHandler(type, params, cfn)
        }, 0)
    } else {
        wbB.callHandler(type, params, cfn)
    }
}

/**
 * 设置webview的标题
 * @param {String} content  标题名
 * @param {*} cnf 回调函数
 *
 */
function apSetTitle(content) {
    apwbBridge('setTitle', { title: content })
}

/**
 * 设置手机状态栏颜色
 * @param target  状态栏的dom元素
 */
function setPhysical(target) {
    var ua = navigator.userAgent
    let version = null
    if (ua.indexOf('ndroid') > 0) {
        let reg = /android [\d._]+/gi
        let info = ua.match(reg)
        version = (info + '').replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.') // 得到版本号x.x.x
        version = parseInt(version.split('.')[0]) // 得到版本号第一位
    }
    var style = ''
    if (version < 6 && ua.indexOf('ndroid') > 0) {
        // 黑色背景
        style = 1
        target.className = 'black'
    } else {
        // 白色背景
        style = 2
    }
    apwbBridge('setStatusBarStyle', { style: style }, (res) => {})
}

export {
    wbBridgeSetup,
    apwbBridge,
    apSetTitle,
    setPhysical
}