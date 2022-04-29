<template>
  <el-popover placement="bottom" width="310" trigger="click">
    <el-checkbox-group v-model="checkedCols2" @change="checkboxGroupChange">
      <el-checkbox v-for="item in colsNameLists" :key="item.id" :label="item.id">{{ item.name }}</el-checkbox>
    </el-checkbox-group>
    <el-button slot="reference">
      筛选显示列表
      <i class="el-icon-caret-bottom"></i>
    </el-button>
  </el-popover>
</template>

<script>
export default {
  components: {},
  props: {
    checkedCols: {
      type: Array,
      default: () => [],
    },
    colsNameLists: {
      type: Array,
      default: () => [],
    },
    changeCheckedCols: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      checkedCols2: this.checkedCols,
    };
  },
  computed: {
    changeCheckedCols2() {
      var array = this.colsNameLists.map(item => {
        return this.checkedCols2.some(item2 => {
          return item.id === item2;
        });
      });
      return array;
    },
  },
  created() {
    this.$emit("update:changeCheckedCols", this.changeCheckedCols2);
  },
  mounted() {},
  methods: {
    checkboxGroupChange(val) {
      this.checkedCols2 = val;
      this.$emit("update:checkedCols", val);
      this.$emit("update:changeCheckedCols", this.changeCheckedCols2);
    },
  },
};
</script>
<style lang="scss" scoped></style>
