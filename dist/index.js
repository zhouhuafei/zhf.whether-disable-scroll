'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('whetherDisableScroll', function () {
    return {
        // 阻止冒泡
        stopPropagation: function stopPropagation(ev) {
            ev.stopPropagation();
        },
        // 阻止默认事件
        preventDefault: function preventDefault(ev) {
            ev.preventDefault();
        },
        // 阻止冒泡,阻止默认事件
        returnFalse: function returnFalse(ev) {
            ev.preventDefault();
            ev.stopPropagation();
        },
        // 禁止滚动
        noScroll: function noScroll() {
            document.addEventListener('touchmove', this.preventDefault, false);
            document.documentElement.style.overflow = 'hidden';
        },
        // 解除禁止浏览器滚动
        yesScroll: function yesScroll() {
            document.removeEventListener('touchmove', this.preventDefault, false);
            document.documentElement.style.overflow = 'auto';
        }
    };
});