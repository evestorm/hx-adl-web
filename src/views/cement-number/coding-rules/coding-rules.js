// 组件
import selectCols from "@/components/select-cols.vue";

export default {
  name: "coding-rules",
  data() {
    return {
      tableData: [], //列表数据
      title: "编码规则 - 添加",
      total: 0,
      checkedCols: ["rStock", "rName", "rZytype", "rPrefix", "rIdlen", "rBase", "rDate", "rCreate", "rCman", "rModify", "rMman"],
      search: {
        search: "",
        offset: 0,
        limit: 10,
        order: "",
      },
      colsNameLists: [
        {
          id: "rStock",
          name: "物料编号",
        },
        {
          id: "rName",
          name: "物料名称",
        },
        {
          id: "rZytype",
          name: "装运类型",
        },
        {
          id: "rPrefix",
          name: "编号前缀",
        },
        {
          id: "rIdlen",
          name: "编号长度",
        },
        {
          id: "rBase",
          name: "编号基准",
        },
        {
          id: "rDate",
          name: "参考日期",
        },
        {
          id: "rCreate",
          name: "创建时间",
        },
        {
          id: "rCman",
          name: "创建人",
        },
        {
          id: "rModify",
          name: "修改时间",
        },
        {
          id: "rMman",
          name: "修改人",
        },
      ],
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
  },
};
