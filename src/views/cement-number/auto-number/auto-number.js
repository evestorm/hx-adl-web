// 组件
import selectCols from "@/components/select-cols.vue";

export default {
  name: "auto-number",
  data() {
    return {
      tableData: [], //列表数据
      title: "标题",
      total: 0,
      search: {
        bName: "",
        offset: 0,
        limit: 10,
        order: "",
      },
      colsNameLists: [
        {
          id: "bStock",
          name: "物料编号",
        },
        {
          id: "bName",
          name: "物料名称",
        },
        {
          id: "bZytype",
          name: "装运类型",
        },
        {
          id: "bPrefix",
          name: "编号前缀",
        },
        {
          id: "bBase",
          name: "编号基数",
        },
        {
          id: "bIncement",
          name: "编号增量",
        },
        {
          id: "bLength",
          name: "编号长度",
        },
        {
          id: "bValue",
          name: "检测量(吨)",
        },
        {
          id: "bInterval",
          name: "编号周期(天)",
        },
        {
          id: "bBatcode",
          name: "当前批次",
        },
        {
          id: "bHasuse",
          name: "已用量",
        },
        {
          id: "bCusid",
          name: "客户编号(专用)",
        },
        {
          id: "bCusname",
          name: "客户名称(专用)",
        },
      ],
      checkedCols: ["bStock", "bName", "bZytype", "bPrefix", "bBase", "bIncement", "bLength", "bValue", "bInterval", "bBatcode", "bHasuse", "bCusid", "bCusname"],
      changeCheckedCols: [],
    };
  },
  // 组件
  components: {
    selectCols,
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created() {
    console.log("create");
  },
  // 方法
  methods: {
    //查询
    searchByKey() {},
    //重置
    resetBtn() {},
    //新增弹窗
    openDialog() {},
    handleSizeChange() {},
    handleCurrentChange() {},
    validateDateTime() {},
    validateN() {},
    sortByCol(column, prop, order) {
      console.log(column, prop, order);
    },
  },
  // 监听
  watch: {},
};
