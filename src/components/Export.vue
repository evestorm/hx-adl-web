<template>
  <el-button icon="el-icon-upload2" @click="exportTable">导出</el-button>
</template>

<script>
import { exportExcel } from "@/utils/index";

export default {
  components: {},
  props: ["methodUrl", "search", "strs", "colsNameLists"],
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    exportTable() {
      var keyMap = {};
      if (this.colsNameLists.length > 0) {
        for (const item of this.colsNameLists) {
          keyMap[item.id] = item.name;
        }
      }
      let obj = {
        method: "POST",
        url: this.methodUrl,
        params: {
          ...this.search,
          strs: this.strs,
          keyMap: keyMap,
        },
      };
      exportExcel(obj);
    },
  },
};
</script>
<style lang="scss" scoped></style>
