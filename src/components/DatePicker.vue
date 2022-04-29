<template>
  <div class="el-date-editor-wrapper-w140">
    <el-date-picker
      v-model="incomingValue[0]"
      type="date"
      value-format="yyyy-MM-dd 00:00:00"
      placeholder="选择日期"
      clearable
      :picker-options="pickerOptionStart"
      @change="changeStartTime"
    ></el-date-picker>
    <span class="separator">至</span>
    <el-date-picker
      v-model="incomingValue[1]"
      type="date"
      value-format="yyyy-MM-dd 23:59:59"
      placeholder="选择日期"
      clearable
      :picker-options="pickerOptionEnd"
      @change="changeEndTime"
    ></el-date-picker>
  </div>
</template>

<script>
import { validate } from "@/utils/index";
export default {
  model: {
    prop: "incomingValue",
    event: "changeFather",
  },
  props: {
    incomingValue: Array,
  },
  data() {
    return {
      checkedDate: this.incomingValue,
      // 日期搜索校验
      pickerOptionStart: {
        disabledDate: time => {
          if (this.incomingValue[1]) {
            return time.getTime() > new Date(this.incomingValue[1]).getTime();
          }
        },
      },
      pickerOptionEnd: {
        disabledDate: time => {
          if (this.incomingValue[0]) {
            return time.getTime() < new Date(this.incomingValue[0]).getTime() - 1 * 24 * 60 * 60 * 1000 + 1;
          }
        },
      },
    };
  },
  mounted() {
    this.checkedDate = this.initializationDate();
    this.$emit("changeFather", this.checkedDate);
  },
  methods: {
    // 初始化日期范围
    initializationDate() {
      var now = validate();
      return [now + " 00:00:00", now + " 23:59:59"];
    },
    changeStartTime(val) {
      this.incomingValue[0] = val;
      this.$emit("changeFather", this.incomingValue);
    },
    changeEndTime(val) {
      this.incomingValue[1] = val;
      this.$emit("changeFather", this.incomingValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-date-editor-wrapper-w140 {
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 140px !important;
  }
}

.separator {
  padding: 0 5px;
  font-size: 14 px;
}
</style>
