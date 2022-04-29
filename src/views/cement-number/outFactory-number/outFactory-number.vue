<!-- 页面名：outFactory-number -->
<template>
  <div class="app-container">
    <el-form :inline="true" :model="search" class="search-wrapper">
      <el-form-item label="物料编号:">
        <el-input v-model="search.nStock" placeholder="请输入物料编号" clearable></el-input>
      </el-form-item>
      <el-form-item label="出厂编号:">
        <el-input v-model="search.nOutnum" placeholder="请输入出厂编号" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="search.nFlag" true-label false-label="Y" @change="hanleCheckBoxChange">显示所有编号</el-checkbox>
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
      <factory-number-list
        :factory-number-list="factoryNumberList"
        :change-checked-cols="changeCheckedCols"
        @openDialog="openDialog"
        @handleDelete="handleDelete"
        @validateDateTime="validateDateTime"
      />
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
    <el-dialog :title="title" :visible.sync="dialogVisible" class="dialogStyle" width="836px" center :close-on-click-modal="false">
      <p class="tip">基本信息</p>
      <el-form ref="materielForm" :model="formObj" label-width="90px" :rules="rules">
        <el-form-item label="物料编号:">
          <el-select v-model="formObj.nStock" placeholder="请选择" :disabled="formObj.id ? true : false" @change="materielChange">
            <el-option v-for="item in materielLists" :key="item.stockNo" :label="item.stockNo" :value="item.stockNo">
              <span>{{ item.stockNo }} {{ item.stockName }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="物料名称:">
          <el-input v-model="formObj.nName" :disabled="formObj.id ? true : false"></el-input>
        </el-form-item>
        <el-form-item label="客户编号:">
          <el-select v-model="formObj.nCusid" placeholder="请选择" :disabled="formObj.id ? true : false" @change="customerChange">
            <el-option v-for="item in customerLists" :key="item.cid" :label="item.cid" :value="item.cid"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户名称:">
          <el-input v-model="formObj.nCusname" :disabled="formObj.id ? true : false"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="装运类型:">
              <el-select v-model="formObj.nZytype" placeholder="请选择" clearable :disabled="formObj.id ? true : false">
                <el-option v-for="item in shipmentTypeLists" :key="item.zyType" :label="item.zyName" :value="item.zyType">
                  <span>{{ item.zyType }} {{ item.zyName }}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="编号额度:" prop="nValue">
              <el-input v-model="formObj.nValue"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="启用编号:">
              <el-select v-model="formObj.nActive">
                <el-option label="启用" value="Y"></el-option>
                <el-option label="禁用" value="N"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./outFactory-number.js"></script>

<style lang="scss" scoped>
@import "./outFactory-number.scss"; // 引入scss类
</style>
