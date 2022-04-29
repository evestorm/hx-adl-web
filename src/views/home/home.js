import $home from "@/api/home";
import HomeTitle from "./component/HomeTitle.vue";

export default {
  name: "Home",
  data() {
    return {
      currentDate: "", // 当前日期
      companyName: "", // 公司名称
      takeGoodsArr: [
        {
          name: "待进厂",
          color: "#316CE6",
          key: "dInFactory",
        },
        {
          name: "已进厂",
          color: "#999999",
          key: "yInFactory",
        },
        {
          name: "放灰处",
          color: "#FFA827",
          key: "cementPlace",
        },
        {
          name: "栈台",
          color: "#FFA827",
          key: "stackPlatform",
        },
        {
          name: "待出厂",
          color: "#999999",
          key: "dOutFactory",
        },
      ], // 提货车辆信息下的数组
      materialArr: [
        {
          name: "待进厂",
          color: "#999999",
          key: "dInFactory",
        },
        {
          name: "已进厂",
          color: "#999999",
          key: "yInFactory",
        },
        {
          name: "卸货处",
          color: "#999999",
          key: "disburdenPlace",
        },
        {
          name: "待出厂",
          color: "#316CE6",
          key: "dOutFactory",
        },
      ], // 物料信息下的数组
      takeGoodsInfo: {}, // 提货车辆信息对象
      materialInfo: {}, // 物流车辆信息对象
      analysisInfo: {}, // 包装分析数据
      packingArr: [
        {
          name: "返包率",
          color: "#FFA827",
          key: "returnPackageRatio",
        },
        {
          name: "平均包装待装时间",
          color: "#FFA827",
          key: "avgPackageWaitTime",
          unit: "分钟",
        },
        {
          name: "袋装车辆总数",
          color: "#316CE6",
          key: "baggedTruckNum",
        },
        {
          name: "总包装车辆",
          color: "#316CE6",
          key: "allPackageTruckNum",
        },
        {
          name: "返厂点包车辆数",
          color: "#316CE6",
          key: "returnFactoryTruckNum",
        },
        {
          name: "总待装时长",
          color: "#316CE6",
          key: "allWaitTime1",
          unit: "分钟",
        },
      ], // 包装分析数据数组
      bulkingArr: [
        {
          name: "返包率",
          color: "#999999",
          key: "supplyPackageRatio",
        },
        {
          name: "平均散装待装时间",
          color: "#FFA827",
          key: "avgBulkPackageTime",
          unit: "分钟",
        },
        {
          name: "总发货袋数",
          color: "#316CE6",
          key: "allSendPackageNum",
        },
        {
          name: "总散装车辆",
          color: "#316CE6",
          key: "allBulkTruckNum",
        },
        {
          name: "补包袋数",
          color: "#316CE6",
          key: "supplyPackageNum",
        },
        {
          name: "总待装时长",
          color: "#316CE6",
          key: "allWaitTime2",
          unit: "分钟",
        },
      ], // 包装分析数据数组
      theDaySendStatistics: [], // 当日发货品种小计
      option: {
        grid: {
          left: "0",
          right: "0",
          bottom: "2%",
          top: "20%",
          containLabel: true,
        },
        xAxis: {
          name: "品种名称",
          nameTextStyle: {
            fontSize: 16,
            color: "#999999",
            padding: [40, 0, 0, -80],
          },
          axisLabel: {
            fontSize: 16,
          },
          axisTick: {
            show: false,
          },
          type: "category",
          data: [],
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          name: "数量",
          nameTextStyle: {
            fontSize: 16,
            color: "#999999",
            padding: [0, 0, 10, -50],
          },
          axisLabel: {
            fontSize: 16,
          },
          type: "value",
        },
        series: [],
        legend: {
          top: 0,
          right: 0,
        },
      }, // ECharts配置对象
    };
  },
  components: {
    HomeTitle,
  },
  created() {
    // 先初始化
    this.handleInit();
  },
  methods: {
    // 监听普通div宽度变化的方法
    observerNormalDiv(className, myChart) {
      // 选择需要观察变动的节点
      const targetNode = document.querySelector(className);
      // 当观察到变动时执行的回调函数
      const callback = () => {
        myChart.resize();
      };
      // 创建一个观察器实例并传入回调函数
      const observer = new ResizeObserver(callback);
      // 以上述配置开始观察目标节点
      observer.observe(targetNode);
    },
    // 初始化时间
    handleInit() {
      this.currentDate = this.$moment(Date.now()).format("YYYY-MM-DD dddd");
      this.getHomeInfo();
    },
    // 请求首页信息
    async getHomeInfo() {
      let params = { company: 1 };
      const homeData = await $home.getHomeInfo(params);
      const [err, data] = homeData;
      if (err) {
        return Promise.resolve([err, undefined]);
      }
      const { rows } = data;
      this.companyName = rows[0]["company"];
      this.takeGoodsInfo = rows[1];
      this.materialInfo = rows[2];
      this.theDaySendStatistics = rows[3]["TheDaySendStatistics"];
      this.analysisInfo = rows[4];
      // 请求完接口后初始化图表
      this.initEChart();
    },
    initEChart() {
      this.option.series = [];
      const myChart = this.$echarts.init(document.getElementById("eChart"));
      this.observerNormalDiv("#eChart", myChart);
      // x轴代表品种名称
      const xAxisData = [];
      // 库存
      const stock = [];
      // 发货
      const deliverGood = [];
      this.theDaySendStatistics.forEach(item => {
        xAxisData.push(item.varietyName);
        stock.push(item.stockNum1);
        deliverGood.push(item.stockNum2 == "-" ? 0 : item.stockNum2);
      });
      this.option.xAxis.data = xAxisData;
      this.option.series.push({
        name: "库存量(吨)",
        data: stock,
        type: "bar",
        barWidth: 20,
        itemStyle: this.createItemStyle("#316CE6", "#76A0F8"),
      });
      this.option.series.push({
        name: "发货量(吨)",
        data: deliverGood,
        type: "bar",
        barWidth: 20,
        itemStyle: this.createItemStyle("#F59913", "#FFCB7F"),
      });
      myChart.setOption(this.option);
    },
    // 创建EChart对象
    createItemStyle(color1, color2) {
      const itemStyle = {
        normal: {
          barBorderRadius: [10, 10, 0, 0],
          color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: color1,
            },
            {
              offset: 1,
              color: color2,
            },
          ]),
        },
      };
      return itemStyle;
    },
  },
};
