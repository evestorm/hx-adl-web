<template>
  <div>
    <el-form ref="form" :inline="true" :model="dataItem" label-width="80px">
      <el-form-item label="品种编号:">
        <el-input v-model="dataItem.idInfo" size="small" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="名称:">
        <el-input v-model="dataItem.name" size="small" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="包散类型:">
        <el-select v-model="dataItem.packagingType" size="small" placeholder="请选择" value="S">
          <el-option label="S、散装" value="S"></el-option>
          <el-option label="D、袋装" value="D"></el-option>
          <el-option label="T、托盘" value="T"></el-option>
          <el-option label="Z、砖类" value="Z"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label>
        <el-button size="small" plain round @click="addItem('lineStock')">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table
      border
      :row-class-name="tableRowClassName"
      :data="needSaveInfo"
      tooltip-effect="dark"
      highlight-current-row
      style="width: 100%; margin-bottom: 20px"
      :default-sort="{ prop: 'date', order: 'descending' }"
      max-height="600px"
    >
      <!-- prop不写排序会失效 -->
      <el-table-column label="编号" prop="idInfo" min-width="120px"></el-table-column>
      <el-table-column label="名称" prop="name" min-width="120px"></el-table-column>
      <el-table-column label="包散类型" prop="packagingType" :formatter="formatterType" width="220"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="delete" @click="deleteData(scope.row.idSyn, 'lineStock')">删除</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import commonApi from "./common/index";
export default {
  mixins: [commonApi],
  data() {
    return {
      dataItem: { idInfo: "", name: "", typeInfo: "lineStock" },
    };
  },
  methods: {
    formatterType(row, column, cellValue) {
      switch (cellValue) {
        case "D":
          return "D、袋装";
        case "S":
          return "S、散装";
        case "T":
          return "T、托盘";
        case "Z":
          return "Z、砖类";
        default:
          break;
      }
      return cellValue;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./common/index";
</style>
