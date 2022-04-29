import request from "@/utils/request";

// http api
const urlLists = {
  /**
   * ! ---------------------- 运行总览 ----------------------
   */
  getHomeInfo: "/toIndex.do", // 获取首页信息
};

const getHomeInfo = params => {
  return request.post(urlLists.getHomeInfo, params);
};

export default {
  getHomeInfo,
};
