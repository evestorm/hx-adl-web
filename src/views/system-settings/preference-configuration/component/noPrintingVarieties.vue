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
        <el-button size="small" plain round @click="addItem('noFaHuoStock')">添加</el-button>
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
      <el-table-column label="编号" prop="idInfo" min-width="120" clearable></el-table-column>
      <el-table-column label="名称" prop="name" min-width="220" clearable></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="delete" @click="deleteData(scope.row.idSyn, 'noFaHuoStock')">删除</div>
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
        typeInfo: "noFaHuoStock",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./common/index";
</style>
