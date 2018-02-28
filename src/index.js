(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'Object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('whetherDisableScroll', function () {
    return {
        // 阻止冒泡
        stopPropagation: function (ev) {
            ev.stopPropagation();
        },
        // 阻止默认事件
        preventDefault: function (ev) {
            ev.preventDefault();
        },
        // 阻止冒泡,阻止默认事件
        returnFalse: function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        },
        // 禁止滚动
        noScroll: function () {
            document.addEventListener('touchmove', this.preventDefault, false);
            document.documentElement.style.overflow = 'hidden';
        },
        // 解除禁止浏览器滚动
        yesScroll: function () {
            document.removeEventListener('touchmove', this.preventDefault, false);
            document.documentElement.style.overflow = 'auto';
        },
    };
});
