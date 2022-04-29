<!-- 页面名：materiel-control -->
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
          <el-table-column v-if="changeCheckedCols[0]" prop="mSubid" label="物料编号(子)" sortable="custom" width="220"></el-table-column>
          <el-table-column v-if="changeCheckedCols[1]" prop="mSubname" label="物料名称(子)" width="220" show-overflow-tooltip></el-table-column>
          <el-table-column v-if="changeCheckedCols[2]" prop="mSubzy" label="装运类型(子)" width="120"></el-table-column>
          <el-table-column v-if="changeCheckedCols[3]" prop="mPrtid" label="物料编号(父)" width="220"></el-table-column>
          <el-table-column v-if="changeCheckedCols[4]" prop="mPrtname" label="物料名称(父)" width="220" show-overflow-tooltip></el-table-column>
          <el-table-column v-if="changeCheckedCols[5]" prop="mPrtzy" label="装运类型(父)" width="120"></el-table-column>
          <el-table-column v-if="changeCheckedCols[6]" prop="mCreate" label="创建时间" width="200" :formatter="validateDateTime"></el-table-column>
          <el-table-column v-if="changeCheckedCols[7]" prop="mCman" label="创建人" width="110"></el-table-column>
          <el-table-column v-if="changeCheckedCols[8]" prop="wValid" label="删除标记" width="110" :formatter="validateN"></el-table-column>
          <el-table-column v-if="changeCheckedCols[9]" prop="mDman" width="110" label="删除人"></el-table-column>
          <el-table-column v-if="changeCheckedCols[10]" prop="mDelete" label="删除时间" width="200" :formatter="validateDateTime"></el-table-column>
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
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          :page-size="search.limit"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script src="./materiel-control.js"></script>
<style lang="scss" scoped>
@import "./materiel-control.scss"; // 引入scss类
</style>
