<template>
  <div class="poundLists">
    <div class="line2"></div>
    <div class="searchToolBar">
      <el-form ref="formSearch" :inline="true" :model="search" label-width="80px">
        <el-form-item label="车牌号码:">
          <el-input v-model="search.lTruck" placeholder="请输入车牌号码" clearable></el-input>
        </el-form-item>
        <el-form-item label="磁卡编号:">
          <el-input v-model="search.lCard" placeholder="请输入磁卡编号" clearable></el-input>
        </el-form-item>
        <el-form-item label="日期筛选:">
          <date-picker v-model="checkedDate"></date-picker>
        </el-form-item>
        <el-form-item label="">
          <el-checkbox v-model="search.queryType" :true-label="'Y'" :false-label="''">已出厂查询</el-checkbox>
        </el-form-item>
        <el-form-item label>
          <el-button type="danger" icon="el-icon-search" :disabled="hasBtnPermission('bulkSearch')" @click="searchByKeys">查询</el-button>
          <el-button type="danger" @click="reSet">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="line2"></div>
    <div class="optionsBtns">
      <div class="buttons">
        <!-- <div class="btnsToolBar">
                    <el-button @click="exportBtn" type="default" icon="el-icon-upload2">导出</el-button>
                </div> -->
        <!-- <div>
                    <el-popover placement="bottom" width="310" trigger="click">
                        <el-checkbox-group v-model="checkedCols" @change="checkboxGroupChange">
                            <el-checkbox
                                v-for="item in colsNameLists"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                            ></el-checkbox>
                        </el-checkbox-group>
                        <el-button slot="reference">筛选显示列表</el-button>
                    </el-popover>
                </div> -->
      </div>
    </div>
    <!-- 表格 -->
    <el-table
      ref="poundListsTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      fit
      highlight-current-row
      :default-sort="{ prop: 'pOrder' }"
      border
      max-height="600px"
    >
      <el-table-column v-if="changeCheckedCols[0]" label="订单号" min-width="180px" sortable prop="lOrderid"></el-table-column>
      <el-table-column v-if="changeCheckedCols[1]" label="装运通道" prop="lLine" min-width="100px"></el-table-column>
      <el-table-column v-if="changeCheckedCols[2]" label="提货单号" min-width="150px" prop="lId"></el-table-column>
      <el-table-column v-if="changeCheckedCols[3]" label="磁卡号" prop="lCard" min-width="200px"></el-table-column>
      <el-table-column v-if="changeCheckedCols[4]" label="车船号" prop="lTruck" min-width="120px"></el-table-column>
      <el-table-column v-if="changeCheckedCols[5]" label="客户名称" prop="lCusname" show-overflow-tooltip min-width="300px"></el-table-column>
      <el-table-column v-if="changeCheckedCols[6]" label="客户编号" prop="lCusId" show-overflow-tooltip min-width="300px"></el-table-column>
      <el-table-column v-if="changeCheckedCols[7]" label="物料编码" prop="lStockno" min-width="250px"></el-table-column>
      <el-table-column v-if="changeCheckedCols[8]" label="物料描述" show-overflow-tooltip prop="lStock" min-width="220px"></el-table-column>
      <el-table-column v-if="changeCheckedCols[9]" label="交货量" prop="lValue" min-width="100px"></el-table-column>
      <el-table-column v-if="changeCheckedCols[10]" label="放灰时间" :formatter="formatter" prop="tFHSTime" min-width="200px"></el-table-column>
    </el-table>
    <el-pagination
      :current-page.sync="setPageSize"
      :page-sizes="[10, 50, 100, 200]"
      :page-size="search.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script src="./bulk-goods.js">
// 引入当前文件夹下js
</script>

<style lang="scss" scoped>
//  引入当前文件夹下scss
@import "./bulk-goods.scss";
</style>
