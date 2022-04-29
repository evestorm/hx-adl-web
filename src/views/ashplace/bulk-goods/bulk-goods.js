// import { valiedateTime } from "@/utils/util";
// import { pageList, pageListExport } from "@/api/ashPlace/ashplace";
// import DatePicker from "@/components/datePicker.vue";
export default {
  name: "ashplace",
  components: {
    // DatePicker,
  },
  data() {
    return {
      tableData: [],
      search: {
        lId: "",
        lTruck: "",
        queryType: "",
        firstDate: "",
        endDate: "",
        offset: 0,
        limit: 10,
      },
      addNodeObj: {},
      checkedDate: ["", ""],
      colsNameLists: [
        { id: "lOrderid", name: "订单号" },
        { id: "lLine", name: "装运通道" },
        { id: "lId", name: "提货单号" },
        { id: "lCard", name: "磁卡号" },
        { id: "lTruck", name: "车船号" },
        { id: "lCusname", name: "客户名称" },
        { id: "lCusId", name: "客户编号" },
        { id: "lStockno", name: "物料编码" },
        { id: "lStock", name: "物料描述" },
        { id: "lValue", name: "交货量" },
        { id: "tFHSTime", name: "放灰时间" },
      ],
      total: 0,
      formObj: {},
      showPopover: true,
      checkedCols: ["订单号", "装运通道", "提货单号", "磁卡号", "车船号", "客户名称", "客户编号", "物料编码", "物料描述", "交货量", "放灰时间"],
    };
  },
  computed: {
    setPageSize: {
      get() {
        var pageSize = parseInt(this.search.offset) / this.search.limit + 1;
        return pageSize;
      },
      // set(val) {},
    },
    changeCheckedCols() {
      var array = [];
      for (let j = 0; j < this.colsNameLists.length; j++) {
        for (let i = 0; i < this.checkedCols.length; i++) {
          if (this.checkedCols[i] === this.colsNameLists[j].name) {
            array.push(true);
            break;
          } else {
            if (i === this.checkedCols.length - 1) {
              array.push(false);
            }
          }
        }
      }
      // console.log(array)
      return array;
    },
  },
  mounted() {
    // var endTime = valiedateTime(
    //     new Date(new Date().toLocaleDateString()).getTime() +
    //         24 * 60 * 60 * 1000 -
    //         1
    // )

    // var startTime = valiedateTime(
    //     new Date(new Date().toLocaleDateString()).getTime()
    // )

    // this.checkedDate = [startTime, endTime]
    this.handleLists();
  },
  methods: {
    reSet() {
      this.search.lId = "";
      this.search.lTruck = "";
      this.search.queryType = "";
      this.search.offset = 0;
      this.search.limit = 10;
    },
    exportBtn() {
      let keyMap = {};
      for (const item of this.colsNameLists) {
        keyMap[item.id] = item.name;
      }
      // pageListExport({ ...this.search, keyMap: keyMap }).then(res => {
      //   const blob = new Blob([res.data], {
      //     type: "application/vnd.ms-excel;charset=utf-8",
      //   });
      //   const contentDisposition = res.headers["content-disposition"];
      //   let fileName = "unknown";
      //   if (contentDisposition) {
      //     fileName = window.decodeURI(res.headers["content-disposition"].split("=")[1]);
      //   }
      //   if ("download" in document.createElement("a")) {
      //     // 非IE下载
      //     const elink = document.createElement("a");
      //     elink.download = fileName;
      //     elink.style.display = "none";
      //     elink.href = URL.createObjectURL(blob);
      //     document.body.appendChild(elink);
      //     elink.click();
      //     URL.revokeObjectURL(elink.href); // 释放URL 对象
      //     document.body.removeChild(elink);
      //   } else {
      //     // IE10+下载
      //     navigator.msSaveBlob(blob, fileName);
      //   }
      // });
    },
    searchData() {
      this.search.offset = 0;
      this.search.limit = 10;
      this.handleLists();
    },
    // 数据格式化
    // formatter(row, column, cellValue, index) {
    //   return cellValue ? valiedateTime(cellValue) : "";
    // },
    searchByKeys() {
      this.search.offset = 0;
      this.handleLists();
    },
    // 查询
    // handleLists() {
    //   this.search.firstDate = this.checkedDate && this.checkedDate[0] ? this.checkedDate[0] : "";
    //   this.search.endDate = this.checkedDate && this.checkedDate[1] ? this.checkedDate[1] : "";
    //   pageList(this.search).then(res => {
    //     this.tableData = res.data.rows;
    //     this.total = res.data.total;
    //   });
    // },
    // 分页——条数变化
    handleSizeChange(val) {
      this.search.limit = val;
      this.search.offset = 0;
      this.handleLists();
    },
    // 分页——页数变化
    handleCurrentChange(val) {
      this.search.offset = (val - 1) * this.search.limit;
      this.handleLists();
    },
    checkboxGroupChange(val) {
      this.checkedCols = val;
    },
  },
};
