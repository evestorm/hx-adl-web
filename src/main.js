import Vue from "vue";

import Cookies from "js-cookie";

import "normalize.css/normalize.css"; // 重置css默认样式

import Element from "element-ui";
import "./styles/element-variables.scss"; // 覆盖一些element-ui样式风格
// import enLang from "element-ui/lib/locale/lang/en"; // 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import "@/styles/index.scss"; // 全局css样式

import App from "./App";
import store from "./store";
import router from "./router";

import "./icons"; // 加载 icons（svg）
import "./permission"; // 权限控制
import "./utils/error-log"; // 错误日志

import * as filters from "./filters"; // 全局过滤器

// 后期加入的库
import moment from "moment";
import * as utils from "@/utils/index";
import create from "@/utils/create.js";
import storage from "@/utils/storage/index";
import enums from "@/utils/enum/index";
import echarts from "echarts";

Vue.use(Element, {
  size: Cookies.get("size") || "medium", // set element-ui default size
  // locale: enLang, // 如果使用中文，无需设置，请删除
});

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

// 扩展Vue原型
function prototypeEx(Vue) {
  // vue prototype 扩展
  moment.locale("zh-CN");
  Vue.prototype.$moment = moment; // 加入 moment使用
  Vue.prototype.$storage = storage; // 用于存储
  Vue.prototype.$store = store; // vuex
  Vue.prototype.$utils = utils; // 帮助类
  Vue.prototype.$create = create; // js调用组件
  Vue.prototype.$enums = enums; // 枚举工具类
  Vue.prototype.$echarts = echarts; // echarts
}

// 扩展vue原型属性
prototypeEx(Vue);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
});
