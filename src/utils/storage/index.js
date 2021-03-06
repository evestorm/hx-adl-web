import Storage from "./Storage.js";

const prefix = "HX.";

const storage = {
  // 设置token缓存
  setToken(token, timeout) {
    Storage.set(prefix + "Token", token, timeout);
  },
  // 获取token
  getToken() {
    return Storage.get(prefix + "Token");
  },
  // 移除token
  removeToken() {
    Storage.remove(prefix + "Token");
  },

  // 设置用户信息
  setUserInfo(userInfo) {
    // 设置全局用户信息
    // getApp().globalData.userInfo = userInfo;
    // getApp().globalData.LoginUserId = userInfo.id;
    return Storage.set(prefix + "UserInfo", userInfo);
  },
  // 获取用户信息
  getUserInfo() {
    return Storage.get(prefix + "UserInfo");
  },
  // 移除用户信息
  removeUserInfo() {
    Storage.remove(prefix + "UserInfo");
  },

  // 设置用户菜单
  setMenu(menu) {
    return Storage.set(prefix + "Menu", menu);
  },
  // 获取用户菜单
  getMenu() {
    return Storage.get(prefix + "Menu");
  },
  // 移除用户菜单
  removeMenu() {
    Storage.remove(prefix + "Menu");
  },
  // 设置用户菜单(flat)
  setFlatMenu(menu) {
    return Storage.set(prefix + "FlatMenu", menu);
  },
  // 获取用户菜单(flat)
  getFlatMenu() {
    return Storage.get(prefix + "FlatMenu");
  },
  // 移除用户菜单(flat)
  removeFlatMenu() {
    Storage.remove(prefix + "FlatMenu");
  },
  // 保存用户公司信息
  setComponyInfo(info) {
    Storage.set(prefix + "componyInfo", info);
  },
};

export default storage;
