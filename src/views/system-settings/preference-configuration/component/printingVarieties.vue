<template>
  <div>
    <el-form ref="form" :inline="true" :model="dataItem" label-width="80px">
      <el-form-item label="品种编号:">
        <el-input v-model="dataItem.idInfo" size="small" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="名称:">
        <el-input v-model="dataItem.name" size="small" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label>
        <el-button size="small" plain round @click="addItem('printStockBill')">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table :row-class-name="tableRowClassName" border :data="needSaveInfo" tooltip-effect="dark" highlight-current-row style="width: 100%">
      <el-table-column label="编号" prop="idInfo" min-width="120px"></el-table-column>
      <el-table-column label="名称" prop="name" min-width="220px"></el-table-column>
      <el-table-column label="操作" min-width="120px">
        <template slot-scope="scope">
          <div class="delete" @click="deleteData(scope.row.idSyn, 'printStockBill')">删除</div>
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
      dataItem: {
        idInfo: "",
        name: "",
        typeInfo: "printStockBill",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./common/index";
</style>
