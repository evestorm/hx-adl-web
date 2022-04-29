import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * 子菜单 sub-menu 只出现在 children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 *                                当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                若你想不管路由下面的 children 声明的个数都显示你的根路由
 * redirect: noRedirect           当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:"router-name"             设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    roles: ["admin","editor"]    设置该路由进入的权限，支持多个权限叠加
    title: "title"               设置该路由在侧边栏和面包屑中展示的名字
    icon: "svg-name"/"el-icon-x" 设置该路由的图标，支持 svg-class，也支持 el-icon-x element-ui 的 icon
    noCache: true                如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    affix: true                  如果设置为true，它则会固定在tags-view中(默认 false)
    breadcrumb: false            如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
    activeMenu: "/example/list"  当路由设置了该属性，则会高亮相对应的侧边栏。
                                 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
                                 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
                                  activeMenu: "/article/list"
  }
 */

/**
 * constantRoutes
 * 不需要权限就能访问的基本路由
 * 所有的角色都可以访问
 */
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true,
  },
  {
    path: "/401",
    component: () => import("@/views/error-page/401"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    code: "home",
    children: [
      {
        path: "home",
        component: () => import("@/views/home/home.vue"),
        name: "Home",
        meta: { title: "运行总览", icon: "dashboard", affix: true, noCache: true },
      },
    ],
  },
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: "/system-settings",
    component: Layout,
    redirect: "/system-settings/company-information",
    alwaysShow: false, // will always show the root menu
    name: "system-settings",
    code: "systemSetting",
    meta: {
      title: "系统设置",
      icon: "lock",
      roles: ["admin", "editor"], // you can set roles in root nav
    },
    children: [
      {
        path: "company-information",
        component: () => import("@/views/system-settings/company-information/company-information.vue"),
        name: "company-information",
        code: "companyInformation",
        meta: {
          title: "公司信息",
          icon: "company-info",
          roles: ["admin"], // 或者你可以只在子导航设置角色
        },
      },
      {
        path: "operation-log",
        code: "operationLog",
        component: () => import("@/views/system-settings/operation-log/operation-log.vue"),
        name: "operation-log",
        meta: {
          title: "操作日志",
          icon: "operation-log",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "preference-configuration",
        code: "preferenceConfiguration",
        component: () => import("@/views/system-settings/preference-configuration/preference-configuration.vue"),
        name: "preference-configuration",
        meta: {
          title: "首选项配置",
          icon: "preference-configuration",
        },
      },
    ],
  },
  {
    path: "/debug",
    component: Layout,
    code: "",
    name: "debug",
    meta: {
      name: "调试功能",
    },
    children: [
      {
        path: "enter-factory",
        code: "enterFactory",
        name: "enter-factory",
        meta: {
          title: "进厂检验",
        },
      },
      {
        path: "leave-factory",
        code: "leaveFactory",
        name: "leave-factory",
        meta: {
          title: "出厂检验",
        },
      },
      {
        path: "bulk-delivery",
        code: "bulkDelivery",
        name: "bulk-delivery",
        meta: {
          title: "散装提货",
        },
      },
      {
        path: "bagged-delivery",
        code: "baggedDelivery",
        name: "bagged-delivery",
        meta: {
          title: "袋装提货",
        },
      },
    ],
  },

  {
    path: "/ashplace",
    component: Layout,
    name: "ashplace",
    code: "ashplace",
    alwaysShow: false,
    meta: {
      title: "放灰处",
      icon: "lock",
      roles: ["admin", "editor"],
    },
    children: [
      {
        path: "bulk-goods",
        name: "bulk-goods",
        component: () => import("@/views/ashplace/bulk-goods/bulk-goods.vue"),
        code: "bulkGoods",
        meta: {
          title: "散装提货",
          icon: "",
          roles: ["admin"], // 或者你可以只在子导航设置角色
        },
      },
      // {
      //   path: "/debug",
      //   code: "",
      //   name: "debug",
      //   meta: {
      //     title: "散装提货",
      //     // icon: "lock",
      //     roles: ["admin", "editor"],
      //   },
      // },
    ],
  },
  {
    path: "/cement-number",
    component: Layout,
    redirect: "/cement-number/outFactory-number",
    alwaysShow: false,
    name: "cement-numbers",
    code: "cementNumber",
    meta: {
      title: "水泥编号",
      icon: "编号",
      roles: ["admin", "editor"],
    },
    children: [
      {
        path: "outFactory-number",
        component: () => import("@/views/cement-number/outFactory-number/outFactory-number.vue"),
        name: "outFactory-number",
        code: "factoryNumber",
        meta: {
          title: "出厂编号",
          icon: "出厂编号",
          roles: ["admin"], // 或者你可以只在子导航设置角色
        },
      },
      {
        path: "coding-rules",
        code: "encodingRule",
        component: () => import("@/views/cement-number/coding-rules/coding-rules.vue"),
        name: "coding-rules",
        meta: {
          title: "编码规则",
          icon: "编码规则",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "materiel-control",
        code: "materielControl",
        component: () => import("@/views/cement-number/materiel-control/materiel-control.vue"),
        name: "materiel-control",
        meta: {
          title: "物料对照",
          icon: "物料",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "auto-number",
        code: "autoNumber",
        component: () => import("@/views/cement-number/auto-number/auto-number.vue"),
        name: "auto-number",
        meta: {
          title: "自动编号",
          icon: "自动编号",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "check-query",
        code: "checkQuery",
        component: () => import("@/views/cement-number/check-query/check-query.vue"),
        name: "check-query",
        meta: {
          title: "对照查询",
          icon: "对照查询",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
    ],
  },
  {
    path: "/pound-house",
    component: Layout,
    redirect: "/cement-number/outFactory-number",
    alwaysShow: false,
    name: "pound-house",
    code: "poundHouse",
    meta: {
      title: "磅房",
      icon: "磅房",
      roles: ["admin", "editor"],
    },
    children: [
      {
        path: "customer-edit",
        component: () => import("@/views/cement-number/check-query/check-query.vue"),
        name: "customer-edit",
        code: "customerEdit",
        meta: {
          title: "客户编辑",
          icon: "客户编辑",
          roles: ["admin"], // 或者你可以只在子导航设置角色
        },
      },
      {
        path: "pound-lists",
        code: "poundLists",
        component: () => import("@/views/cement-number/check-query/check-query.vue"),
        name: "pound-lists",
        meta: {
          title: "磅房查询",
          icon: "磅房查询",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "set-pound-weight",
        code: "setPoundWeight",
        component: () => import("@/views/cement-number/check-query/check-query.vue"),
        name: "set-pound-weight",
        meta: {
          title: "预置皮重",
          icon: "预置皮重",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "materiel-editing",
        code: "materielEditing",
        component: () => import("@/views/cement-number/check-query/check-query.vue"),
        name: "materiel-editing",
        meta: {
          title: "物料编辑",
          icon: "客户编辑",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "weighing-collection",
        code: "weighingCollection",
        component: () => import("@/views/cement-number/check-query/check-query.vue"),
        name: "weighing-collection",
        meta: {
          title: "称重补录",
          icon: "对照查询",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "manual-weighing",
        code: "manualWeighing",
        component: () => import("@/views/cement-number/check-query/check-query.vue"),
        name: "manual-weighing",
        meta: {
          title: "手动称重",
          icon: "手动称重",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "automatic-weighing",
        code: "automaticWeighing",
        component: () => import("@/views/cement-number/check-query/check-query.vue"),
        name: "automatic-weighing",
        meta: {
          title: "自动称重",
          icon: "自动称重",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "other-pound-receipt",
        code: "otherPoundReceipt",
        component: () => import("@/views/cement-number/check-query/check-query.vue"),
        name: "other-pound-receipt",
        meta: {
          title: "其他车辆磅单",
          icon: "其他磅单",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
    ],
  },
  {
    path: "/report-query",
    component: Layout,
    redirect: "/",
    alwaysShow: false, // will always show the root menu
    name: "report-query",
    code: "reportQuery",
    meta: {
      title: "报表查询",
      icon: "报表查询",
      roles: ["admin", "editor"], // you can set roles in root nav
    },
    children: [
      {
        path: "delivery-detail",
        component: () => import("@/views/cement-number/check-query/check-query.vue"),
        name: "delivery-detail",
        code: "deliveryDetail",
        meta: {
          title: "发货明细",
          icon: "发货明细",
          roles: ["admin"], // 或者你可以只在子导航设置角色
        },
      },
      {
        path: "vehicle-query",
        code: "vehicleQuery",
        component: () => import("@/views/cement-number/check-query/check-query.vue"),
        name: "vehicle-query",
        meta: {
          title: "车辆查询",
          icon: "车辆查询",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "dispatch-query",
        code: "dispatchQuery",
        component: () => import("@/views/system-settings/operation-log/operation-log.vue"),
        name: "dispatch-query",
        meta: {
          title: "调度查询",
          icon: "磅房查询",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
      {
        path: "dcsPicking-record",
        code: "dcsPickingRecord",
        component: () => import("@/views/system-settings/operation-log/operation-log.vue"),
        name: "dcsPicking-record",
        meta: {
          title: "DCS拣配明细查询",
          icon: "其他查询",
          // 如果不设置角色,意思是:这个页面不需要许可
        },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: "history", // 需要服务端支持
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
