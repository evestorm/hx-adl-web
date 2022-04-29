import BasicConfidence from "./component/basicConfidence";
import PoundsSet from "./component/poundsSet";
import PrintingVarieties from "./component/printingVarieties";
import NoPrintingVarieties from "./component/noPrintingVarieties";
import VarietiesShipment from "./component/varietiesShipment";
import ErrorSetting from "./component/errorSetting";
import LicensePlateEnter from "./component/licensePlateEnter";
import LicensePlateRecognition from "./component/licensePlateRecognition";
import ManySetMWeight from "./component/manySetMWeight";
import api from "@/api/system-set";

export default {
  name: "preference-configuration",
  data() {
    return {
      activeName: "BasicConfidence",
      needSaveInfo: null,
      loadingFlag: false,
      tabPaneArr: [
        {
          label: "基本信息",
          name: "BasicConfidence",
        },
        {
          label: "磅站设置",
          name: "PoundsSet",
        },
        {
          label: "需打印品种",
          name: "PrintingVarieties",
        },
        {
          label: "无需发货品种",
          name: "NoPrintingVarieties",
        },
        {
          label: "发货通道品种",
          name: "VarietiesShipment",
        },
        {
          label: "袋装误差设置",
          name: "ErrorSetting",
        },
        {
          label: "车辆黑名单",
          name: "LicensePlateEnter",
        },
        {
          label: "磅房车牌识别",
          name: "LicensePlateRecognition",
        },
        {
          label: "多次过毛重品种",
          name: "ManySetMWeight",
        },
      ],
    };
  },
  components: {
    BasicConfidence,
    PoundsSet,
    PrintingVarieties,
    NoPrintingVarieties,
    VarietiesShipment,
    ErrorSetting,
    LicensePlateEnter,
    LicensePlateRecognition,
    ManySetMWeight,
  },
  watch: {
    activeName: {
      handler: async function () {
        this.loadingFlag = false;
        let status = "";
        switch (this.activeName) {
          case "BasicConfidence":
          case "PoundsSet":
            status = "baseInfo";
            break;
          case "PrintingVarieties":
            status = "printStockBill";
            break;
          case "NoPrintingVarieties":
            status = "noFaHuoStock";
            break;
          case "VarietiesShipment":
            status = "lineStock";
            break;
          case "ErrorSetting":
            status = "daiWuChaFConfig";
            break;
          case "LicensePlateEnter":
            status = "truckHei";
            break;
          case "ManySetMWeight":
            status = "poundMultiM";
            break;
        }

        if (status) {
          const res = await api.queryOptionInfo({ typeInfo: status });
          const [err, data] = res;
          if (err) {
            return Promise.resolve(err);
          }
          this.needSaveInfo = data.info;
        } else {
          const res = await api.getPoundConfig();
          const [err, data] = res;
          if (err) {
            return Promise.resolve(err);
          }
          this.needSaveInfo = data.data;
        }
        this.loadingFlag = true;
      },
      immediate: true, // 刷新加载 立马触发一次handler
      // deep: true  // 可以深度检测到 person 对象的属性值的变化
    },
  },
  methods: {
    submitForm() {
      if (this.activeName !== "LicensePlateRecognition") {
        if (Number(this.needSaveInfo.netWeightErrorLow) > Number(this.needSaveInfo.netWeightErrorHigh)) {
          this.$message.error("磅站设置空车误差范围最小值不能大于最大值");
          return false;
        }
        api.setOption(this.needSaveInfo);
      } else {
        api.savePoundSet(this.needSaveInfo).then(res => {
          this.$message.success(res.data.msg || "保存成功");
        });
      }
    },
    async getTableData() {
      let status = "";
      switch (this.activeName) {
        case "PrintingVarieties":
          status = "printStockBill";
          break;
        case "NoPrintingVarieties":
          status = "noFaHuoStock";
          break;
        case "VarietiesShipment":
          status = "lineStock";
          break;
        case "ErrorSetting":
          status = "daiWuChaFConfig";
          break;
        case "LicensePlateEnter":
          status = "truckHei";
          break;
        case "ManySetMWeight":
          status = "poundMultiM";
          break;
      }
      const res = await api.queryOptionInfo({ typeInfo: status });
      const [err, data] = res;
      if (err) {
        return Promise.resolve(err);
      }
      this.needSaveInfo = data.info;
      this.loadingFlag = true;
    },
  },
};
