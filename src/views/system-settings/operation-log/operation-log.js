import DatePicker from "@/components/DatePicker.vue";
import Export from "@/components/Export.vue";
import api from "@/api/system-set";
import { validateTime } from "@/utils/index";

export default {
  name: "operation-log",
  data() {
    return {
      tableData: [],
      checkedDate: [],
      search: {
        lMan: "",
        lItemid: "",
        startTime: "",
        endTime: "",
        offset: 0,
        limit: 10,
      },
      total: 0,
      colsNameLists: [
        { id: "lMan", name: "操作人" },
        { id: "lItemid", name: "事件对象" },
        { id: "lEvent", name: "事件内容" },
        { id: "lDate", name: "操作时间" },
      ],
      tableRenderArr: [
        {
          label: "操作人",
          prop: "lMan",
          minWidth: "160px",
        },
        {
          label: "事件对象",
          prop: "lItemid",
          minWidth: "220px",
        },
        {
          label: "事件内容",
          prop: "lEvent",
          minWidth: "320px",
        },
      ],
    };
  },
  components: {
    DatePicker,
    Export,
  },
  computed: {
    setPageSize: {
      get() {
        var pageSize = parseInt(this.search.offset) / this.search.limit + 1;
        return pageSize;
      },
      set() {},
    },
  },
  created() {
    var endTime = validateTime(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
    var startTime = validateTime(new Date(new Date().toLocaleDateString()).getTime());
    this.checkedDate = [startTime, endTime];
    this.handleLists();
  },
  methods: {
    // 数据格式化
    formatter(row, column, cellValue) {
      return cellValue ? validateTime(cellValue) : "";
    },
    // 分页查询
    handleLists() {
      this.search.startTime = this.checkedDate[0];
      this.search.endTime = this.checkedDate[1];
      this.requestData();
    }, // 分页——条数变化
    handleSizeChange(val) {
      this.search.limit = val;
      this.handleLists();
    },
    // 分页——页数变化
    handleCurrentChange(val) {
      this.search.offset = (val - 1) * this.search.limit;
      this.handleLists();
    },
    clickRow(row) {
      this.$refs.moviesTable.toggleRowSelection(row);
    },
    refresh() {
      this.search.lMan = "";
      this.search.lItemid = "";
      this.search.startTime = "";
      this.search.endTime = "";
      this.search.endTime = "";
      this.search.offset = 0;
      this.search.limit = 10;
    },
    // 条件搜索
    searchByKeys() {
      this.search.offset = 0;
      this.search.startTime = this.checkedDate[0];
      this.search.endTime = this.checkedDate[1];
      this.requestData();
    },
    async requestData() {
      const res = await api.query(this.search);
      const [err, data] = res;
      if (err) {
        return Promise.resolve(err);
      }
      this.tableData = data.rows;
      this.total = data.total;
    },
  },
};
