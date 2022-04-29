import api from "@/api/system-set";

export default {
  props: ["needSaveInfo"],
  methods: {
    getData() {
      this.$emit("getData", true);
    },
    deleteData(data, type) {
      api
        .deleteOptionInfo({
          typeInfo: type,
          idSyn: data,
        })
        .then(() => {
          this.getData(type);
        });
    },
    addItem(type) {
      api.insertOptionInfo(this.dataItem).then(() => {
        this.getData(type);
      });
    },
    tableRowClassName({ rowIndex }) {
      if (!(rowIndex % 2)) {
        return "warning-row";
      }
      return "success-row";
    },
  },
};
