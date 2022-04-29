<!-- 页面名：FactoryNumberList -->
<template>
  <div class="factoryNumber-table">
    <el-table ref="factoryNumber" :data="factoryNumberList" style="width: 100%" highlight-current-row border stripe max-height="600px">
      <el-table-column width="40">
        <template slot="header">
          <i class="el-icon-menu"></i>
        </template>
        <template>
          <i class="el-icon-caret-right"></i>
        </template>
      </el-table-column>
      <el-table-column v-if="changeCheckedCols[0]" prop="nStock" label="物料编号" width="220"></el-table-column>
      <el-table-column v-if="changeCheckedCols[1]" prop="nName" label="物料名称" width="220" show-overflow-tooltip></el-table-column>
      <el-table-column v-if="changeCheckedCols[2]" prop="nOutnum" label="出厂编号" width="220" show-overflow-tooltip></el-table-column>
      <el-table-column v-if="changeCheckedCols[3]" prop="nCusid" label="客户编号" width="220"></el-table-column>
      <el-table-column v-if="changeCheckedCols[4]" prop="nCusname" label="客户名称" width="220"></el-table-column>
      <el-table-column v-if="changeCheckedCols[5]" prop="nZytype" label="装运类型" width="110"></el-table-column>
      <el-table-column v-if="changeCheckedCols[6]" prop="nActive" label="是否启用" width="100">
        <template slot-scope="scope">
          <span v-if="scope.row.nActive == 'N'">否</span>
          <span v-else>是</span>
        </template>
      </el-table-column>
      <el-table-column v-if="changeCheckedCols[7]" prop="nValue" label="编号额度" width="110"></el-table-column>
      <el-table-column v-if="changeCheckedCols[8]" prop="nUsed" label="已用额度" width="110"></el-table-column>
      <el-table-column v-if="changeCheckedCols[9]" prop="createTime" label="创建时间" width="200"> </el-table-column>
      <el-table-column v-if="changeCheckedCols[10]" prop="createBy" label="创建人" width="100"></el-table-column>
      <el-table-column v-if="changeCheckedCols[11]" prop="updateTime" label="修改时间" width="200"></el-table-column>
      <el-table-column v-if="changeCheckedCols[12]" prop="updateBy" label="修改人" width="100"></el-table-column>
      <el-table-column v-if="changeCheckedCols[13]" prop="nFactory" label="工厂代码" width="110"></el-table-column>
      <el-table-column v-if="changeCheckedCols[14]" prop="nFlag" label="是否上传" width="100" :resizable="false">
        <template slot-scope="scope">
          <span v-if="scope.row.nFlag == 'N'">否</span>
          <span v-else>是</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" fixed="right">
        <template slot-scope="scope">
          <el-button type="danger" @click="openDialog(scope.row)">修改</el-button>
          <el-button type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "FactoryNumberList",
  props: {
    factoryNumberList: {
      type: Array,
      default: () => [],
    },
    changeCheckedCols: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  // 方法
  methods: {
    openDialog(row) {
      this.$emit("openDialog", row);
    },
    handleDelete(index, row) {
      this.$emit("handleDelete", index, row);
    },
    validateDateTime() {},
  },
};
</script>
<style lang="scss" scoped></style>
