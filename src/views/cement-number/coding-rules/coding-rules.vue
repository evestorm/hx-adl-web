<!-- 页面名：coding-rules -->
<template>
  <div class="app-container">
    <el-form :inline="true" :model="search" class="search-wrapper">
      <el-form-item label="物料编号:">
        <el-input v-model="search.nStock" placeholder="请输入物料编号" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" icon="el-icon-search" @click="searchByKey">查询</el-button>
        <el-button class="el-icon-s-tools" type="primary" @click="resetBtn">重置</el-button>
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
        <el-table :data="tableData" style="width: 100%" highlight-current-row border max-height="600px">
          <el-table-column width="40">
            <template slot="header">
              <i class="el-icon-menu"></i>
            </template>
            <template>
              <i class="el-icon-caret-right"></i>
            </template>
          </el-table-column>
          <el-table-column v-if="changeCheckedCols[0]" prop="rStock" label="物料编号" width="220"></el-table-column>
          <el-table-column v-if="changeCheckedCols[1]" prop="rName" label="物料名称" width="250" show-overflow-tooltip></el-table-column>
          <el-table-column v-if="changeCheckedCols[2]" prop="rZytype" label="装运类型" width="110"></el-table-column>
          <el-table-column v-if="changeCheckedCols[3]" prop="rPrefix" label="编号前缀" width="140"></el-table-column>
          <el-table-column v-if="changeCheckedCols[4]" prop="rIdlen" label="编号长度" width="110"></el-table-column>
          <el-table-column v-if="changeCheckedCols[5]" prop="rBase" label="编号基准" width="110"></el-table-column>
          <el-table-column v-if="changeCheckedCols[6]" prop="rDate" label="参考日期" width="200" :formatter="validateDateTime"></el-table-column>
          <el-table-column v-if="changeCheckedCols[7]" prop="rCreate" label="创建时间" width="200" :formatter="validateDateTime"></el-table-column>
          <el-table-column v-if="changeCheckedCols[8]" prop="rCman" label="创建人"></el-table-column>
          <el-table-column v-if="changeCheckedCols[9]" prop="rModify" label="修改时间" width="200" :formatter="validateDateTime"></el-table-column>
          <el-table-column v-if="changeCheckedCols[10]" prop="rMman" label="修改人" width="110"></el-table-column>
          <el-table-column label="操作" width="120" fixed="right">
            <template slot-scope="scope">
              <el-button type="danger" :disabled="hasBtnPermission('outNumRuleInsertOrUpdate')" @click="openDialog(scope.row)">修改</el-button>
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

<script src="./coding-rules.js"></script>
<style lang="scss" scoped>
@import "./coding-rules.scss"; // 引入scss类
</style>
