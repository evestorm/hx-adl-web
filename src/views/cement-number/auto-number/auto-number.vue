<!-- 页面名：auto-number -->
<template>
  <div class="app-container">
    <el-form ref="form" :inline="true" :model="search" label-width="80px">
      <el-form-item label="物料编号:">
        <el-input v-model="search.search" placeholder="请输入物料编号" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" icon="el-icon-search" @click="searchByKey">查询</el-button>
        <el-button @click="resetBtn">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="list-wrapper">
      <!-- 工具栏 -->
      <div class="tools">
        <div>
          <el-button type="danger" icon="el-icon-plus" @click="openDialog(1)"> 添加 </el-button>
        </div>
        <div>
          <select-cols :checked-cols.sync="checkedCols" :cols-name-lists="colsNameLists" :change-checked-cols.sync="changeCheckedCols"></select-cols>
        </div>
      </div>
      <div>
        <el-table :data="tableData" style="width: 100%" highlight-current-row border max-height="600px" @sort-change="sortByCol">
          <el-table-column width="40">
            <template slot="header">
              <i class="el-icon-menu"></i>
            </template>
            <template>
              <i class="el-icon-caret-right"></i>
            </template>
          </el-table-column>
          <el-table-column v-if="changeCheckedCols[0]" prop="bStock" label="物料编号" width="220" show-overflow-tooltip sortable="custom"></el-table-column>
          <el-table-column v-if="changeCheckedCols[1]" prop="bName" label="物料名称" width="220" show-overflow-tooltip></el-table-column>
          <el-table-column v-if="changeCheckedCols[2]" prop="bZytype" label="装运类型" width="110"></el-table-column>
          <el-table-column v-if="changeCheckedCols[3]" prop="bPrefix" label="编号前缀" width="140" show-overflow-tooltip></el-table-column>
          <el-table-column v-if="changeCheckedCols[4]" prop="bBase" label="编号基数" width="110"></el-table-column>
          <el-table-column v-if="changeCheckedCols[5]" prop="bIncement" label="编号增量" width="110"></el-table-column>
          <el-table-column v-if="changeCheckedCols[6]" prop="bLength" label="编号长度" width="110"></el-table-column>
          <el-table-column v-if="changeCheckedCols[7]" prop="bValue" label="检测量(吨)" width="110"></el-table-column>
          <el-table-column v-if="changeCheckedCols[8]" prop="bInterval" label="编号周期(天)" width="110"></el-table-column>
          <el-table-column v-if="changeCheckedCols[9]" prop="bBatcode" label="当前批次" width="220" show-overflow-tooltip></el-table-column>
          <el-table-column v-if="changeCheckedCols[10]" prop="bHasuse" label="已用量" width="110"></el-table-column>
          <el-table-column v-if="changeCheckedCols[11]" prop="bCusid" label="客户编号(专用)" width="220" show-overflow-tooltip></el-table-column>
          <el-table-column v-if="changeCheckedCols[12]" prop="bCusname" label="客户名称(专用)" width="220" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" width="200" fixed="right">
            <template slot-scope="scope">
              <el-button type="danger" @click="openDialog(scope.row)">修改</el-button>
              <el-button type="danger" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
        <el-pagination
          :current-page.sync="search.offset"
          :page-sizes="[10, 50, 100, 200]"
          :page-size="search.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script src="./auto-number.js"></script>
<style lang="scss" scoped>
@import "./auto-number.scss"; // 引入scss类
</style>
