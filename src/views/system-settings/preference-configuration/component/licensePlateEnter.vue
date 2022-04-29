<template>
  <div>
    <el-form ref="form" :inline="true" :model="dataItem" label-width="80px">
      <el-form-item label="车牌号:">
        <el-input v-model="dataItem.tTruck" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label>
        <el-button size="small" plain round @click="addItem('truckHei')">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table
      ref
      border
      :row-class-name="tableRowClassName"
      :data="needSaveInfo"
      tooltip-effect="dark"
      highlight-current-row
      style="width: 100%; margin-bottom: 20px"
      :default-sort="{ prop: 'date', order: 'descending' }"
      max-height="600px"
    >
      <el-table-column label="车牌号" prop="tTruck" min-width="120px"></el-table-column>
      <el-table-column label="创建人" prop="tCMan" min-width="“220px"></el-table-column>
      <el-table-column label="创建时间" prop="tCreate" :formatter="formatter" min-width="220px"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="delete" @click="deleteData(scope.row.idSyn, 'truckHei')">删除</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import commonApi from "./common/index";
import { validateTime } from "@/utils/index";
export default {
  mixins: [commonApi],
  data() {
    return {
      dataItem: {
        tTruck: "",
        typeInfo: "truckHei",
      },
    };
  },
  methods: {
    // 数据格式化
    formatter(row, column, cellValue) {
      return cellValue ? validateTime(cellValue) : "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./common/index";
</style>
