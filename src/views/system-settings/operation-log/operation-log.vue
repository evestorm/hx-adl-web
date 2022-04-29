<!-- 页面名：operation-log -->
<template>
  <div class="app-container">
    <div class="search">
      <el-form ref="form" :inline="true" :model="search" label-width="80px">
        <el-form-item label="操作人:">
          <el-input v-model="search.lMan" placeholder="请输入操作人姓名" clearable></el-input>
        </el-form-item>
        <el-form-item label="事件对象:">
          <el-input v-model="search.lItemid" placeholder="请输入事件对象" clearable></el-input>
        </el-form-item>
        <el-form-item label="日期筛选:">
          <DatePicker v-model="checkedDate" />
        </el-form-item>
        <el-form-item label>
          <el-button type="primary" icon="el-icon-search" @click="searchByKeys">查询</el-button>
          <el-button @click="refresh">重置</el-button>
          <Export method-url="/tms-facdel/eventLog/export" :search="search" :strs="[]" :cols-name-lists="[]" />
        </el-form-item>
      </el-form>
    </div>

    <el-table ref="moviesTable" border :data="tableData" tooltip-effect="dark" highlight-current-row style="width: 100%" :default-sort="{ prop: 'lDate' }" @row-click="clickRow">
      <el-table-column v-for="item in tableRenderArr" :key="item.prop" :label="item.label" :prop="item.prop" :min-width="item.minWidth"></el-table-column>
      <el-table-column label="操作时间" :formatter="formatter" prop="lDate" sortable min-width="280px"></el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      :current-page.sync="setPageSize"
      :page-sizes="[10, 50, 100, 200, 500, 1000]"
      :page-size="search.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script src="./operation-log.js"></script>
<style lang="scss" scoped>
@import "./operation-log.scss"; // 引入scss类
</style>
