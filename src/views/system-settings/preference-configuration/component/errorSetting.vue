<template>
  <div>
    <el-table border :data="needSaveInfo" tooltip-effect="dark" highlight-current-row style="width: 100%; margin-bottom: 20px" max-height="600px">
      <el-table-column label="起始吨位(吨)" prop="startingTonnage" min-width="120px"></el-table-column>
      <el-table-column label="结束吨位(吨)" prop="endTonnage" min-width="150"></el-table-column>
      <el-table-column label="正误差" prop="positiveError" min-width="150"></el-table-column>
      <el-table-column label="负误差" prop="negativeError" min-width="160"></el-table-column>
      <el-table-column label="是否按比例计算" prop="inProportion" min-width="130"></el-table-column>
      <el-table-column label="磅站编号" prop="poundStationNumber" min-width="210"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div class="delete" @click="deleteData(scope.row.idSyn, 'daiWuChaFConfig')">删除</div>
        </template>
      </el-table-column>
    </el-table>
    <el-form ref="form" :inline="true" :model="dataItem" label-width="80px">
      <el-form-item label="起始吨位:">
        <el-input v-model="dataItem.startingTonnage" size="small" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="结束吨位:">
        <el-input v-model="dataItem.endTonnage" size="small" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="正误差:">
        <el-input v-model="dataItem.poundDaiWuChaZ" size="small" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label="负误差:">
        <el-input v-model="dataItem.poundDaiWuChaF" size="small" placeholder="请输入" clearable></el-input>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-checkbox v-model="dataItem.inProportion" size="small" true-label="Y" false-label="N">按比例计算</el-checkbox>
        <span>(注:按比例计算时，0.01表示1%；否则,以kg为单位)</span>
      </el-form-item>
      <el-form-item>
        <el-button size="small" plain round @click="addItem('daiWuChaFConfig')">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import commonApi from "./common/index";
export default {
  mixins: [commonApi],
  data() {
    return {
      dataItem: {
        startingTonnage: "",
        endTonnage: "",
        poundDaiWuChaZ: "",
        poundDaiWuChaF: "",
        inProportion: "N",
        typeInfo: "daiWuChaFConfig",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./common/index";
</style>
