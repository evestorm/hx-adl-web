import request from "@/utils/request";

// http api
const urlLists = {
  /**
   * ! ---------------------- 水泥编号 ----------------------
   */
  getNumberLists: "/outnumInfo/pageList.do", //获取出厂编号列表
};

const getNumberLists = params => {
  return request.post(urlLists.getNumberLists, params);
};

export default {
  getNumberLists,
};
