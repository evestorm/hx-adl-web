// api 网络请求
import $factoryNumber from "@/api/cement-number/factoryNumber";
// 组件
import FactoryNumberList from "@/components/CementNumber/FactoryNumberList.vue";
import selectCols from "@/components/select-cols.vue";

export default {
  name: "",
  data() {
    return {
      factoryNumberList: [], //列表数据
      total: 0,
      search: {
        //查询条件
        nStock: "",
        nOutnum: "",
        nFlag: "Y",
        offset: 1,
        limit: 10,
      },
      colsNameLists: [
        {
          id: "nStock",
          name: "物料编号",
        },
        {
          id: "nName",
          name: "物料名称",
        },
        {
          id: "nOutnum",
          name: "出厂编号",
        },
        {
          id: "nCusid",
          name: "客户编号",
        },
        {
          id: "nCusname",
          name: "客户名称",
        },
        {
          id: "nZytype",
          name: "装运类型",
        },
        {
          id: "nActive",
          name: "是否启用",
        },
        {
          id: "nValue",
          name: "编号额度",
        },
        {
          id: "nUsed",
          name: "已用额度",
        },
        {
          id: "createTime",
          name: "创建时间",
        },
        {
          id: "createBy",
          name: "创建人",
        },
        {
          id: "updateTime",
          name: "修改时间",
        },
        {
          id: "updateBy",
          name: "修改人",
        },
        {
          id: "nFactory",
          name: "工厂代码",
        },
        {
          id: "nFlag",
          name: "是否上传",
        },
      ],
      checkedCols: [
        "nStock",
        "nName",
        "nOutnum",
        "nCusid",
        "nCusname",
        "nZytype",
        "nActive",
        "nValue",
        "nUsed",
        "createTime",
        "createBy",
        "updateTime",
        "updateBy",
        "nFactory",
        "nFlag",
      ],
      formObj: {
        nStock: "",
        nName: "",
        nCusid: "",
        nCusname: "",
        nValue: "",
        nZytype: "",
        nActive: "",
      },
      title: "出厂编号 - 添加",
      dialogVisible: false,
      materielLists: [],
      customerLists: [],
      shipmentTypeLists: [],
      rules: {
        nValue: [
          {
            required: true,
            message: "编号额度必填",
            trigger: "blur",
          },
          {
            pattern: /^([1-9][0-9]*)+(.[0-9]{1,2})?$/,
            message: "请输入正数",
            trigger: "blur",
          },
        ],
      },
      changeCheckedCols: [],
      //hasBtnPermission: false,
    };
  },
  created() {
    this.getFactoryNumberList();
  },
  methods: {
    // 获取列表
    async getFactoryNumberList() {
      //debugger;
      const res = await $factoryNumber.getNumberLists(this.search);
      const [err, data] = res;
      console.log(data.rows);
      if (err) {
        console.log(err);
      }
      this.factoryNumberList = data.rows;
      this.total = data.total;
    },
    // 分页——条数变化
    handleSizeChange(val) {
      this.search.limit = val;
      this.search.offset = 0;
      this.getFactoryNumberList();
    },
    // 分页——页数变化
    handleCurrentChange(val) {
      this.search.offset = (val - 1) * this.search.limit;
      this.getFactoryNumberList();
    },
    openDialog(val) {
      if (val == 1) {
        //新增
        console.log("1111:");
        this.dialogVisible = true;
      }
      this.dialogVisible = true;
      this.title = "出厂编号 - 修改";
    },
    hanleCheckBoxChange() {},
    //查询按钮
    searchByKey() {},
    //重置
    resetBtn() {},

    handleDelete() {
      console.log();
    },
    validateDateTime() {},
    submitForm() {},
    materielChange() {},
    customerChange() {},
  },
  // 组件
  components: {
    FactoryNumberList,
    selectCols,
  },
};
