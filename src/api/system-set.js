import request from "@/utils/request";

// http api
const urlLists = {
  /**
   * ! ---------------------- 系统设置 ----------------------
   */
  getCompanyInfo: "/company/info.do",
  query: "/eventLog/query.do",
  queryOptionInfo: "/sysOptions/queryOptionInfo.do",
  setOption: "/sysOptions/setOption.do",
  insertOptionInfo: "/sysOptions/insertOptionInfo.do",
  deleteOptionInfo: "/sysOptions/deleteOptionInfo.do",
  getPoundConfig: "/pound/config/find",
  savePoundSet: "/pound/config/saveall",
  deletePoundSet: "/pound/config/",
};

const getCompanyInfo = () => {
  return request.get(urlLists.getCompanyInfo);
};

const query = params => {
  return request.post(urlLists.query, params);
};

// 配置页数据显示
const queryOptionInfo = params => {
  return request.post(urlLists.queryOptionInfo, params);
};

// 基本信息磅站保存
const setOption = params => {
  return request.post(urlLists.setOption, params);
};

const insertOptionInfo = params => {
  return request.post(urlLists.insertOptionInfo, params);
};

const deleteOptionInfo = params => {
  return request.post(urlLists.deleteOptionInfo, params);
};

const getPoundConfig = params => {
  return request.get(urlLists.getPoundConfig, params);
};

const savePoundSet = params => {
  return request.post(urlLists.savePoundSet, params);
};

const deletePoundSet = params => {
  return request.delete(urlLists.deletePoundSet + params);
};

export default {
  getCompanyInfo,
  query,
  queryOptionInfo,
  setOption,
  insertOptionInfo,
  deleteOptionInfo,
  getPoundConfig,
  savePoundSet,
  deletePoundSet,
};
