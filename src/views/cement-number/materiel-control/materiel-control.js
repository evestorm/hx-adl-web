// 组件
import selectCols from "@/components/select-cols.vue";

export default {
  name: "materiel-control",
  data() {
    return {
      tableData: [], //列表数据
      title: "物料对照 - 添加",
      checkedCols: ["mSubid", "mSubname", "mSubzy", "mPrtid", "mPrtname", "mPrtzy", "mCreate", "mCman", "wValid", "mDman", "mDelete"],
      total: 0,
      search: {
        search: "",
        offset: 0,
        limit: 10,
        order: "",
      },
      colsNameLists: [
        {
          id: "mSubid",
          name: "物料编号(子)",
        },
        {
          id: "mSubname",
          name: "物料名称(子)",
        },
        {
          id: "mSubzy",
          name: "装运类型(子)",
        },
        {
          id: "mPrtid",
          name: "物料编号(父)",
        },
        {
          id: "mPrtname",
          name: "物料名称(父)",
        },
        {
          id: "mPrtzy",
          name: "装运类型(父)",
        },
        {
          id: "mCreate",
          name: "创建时间",
        },
        {
          id: "mCman",
          name: "创建人",
        },
        {
          id: "wValid",
          name: "删除标记",
        },
        {
          id: "mDman",
          name: "删除人",
        },
        {
          id: "mDelete",
          name: "删除时间",
        },
      ],
      changeCheckedCols: [],
      //hasBtnPermission: [],
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
