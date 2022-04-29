<!-- 页面名：company-information -->
<template>
  <div class="app-container">
    <el-form ref="issueDeliveryNote" label-width="85px" label-position="left">
      <el-form-item label="公司名称:">
        <el-input v-model="componyInfo.Name" disabled></el-input>
      </el-form-item>
      <el-form-item label="公司电话:">
        <el-input v-model="componyInfo.Phone" disabled></el-input>
      </el-form-item>
      <el-form-item label="公司邮箱:">
        <el-input v-model="componyInfo.Mail" disabled></el-input>
      </el-form-item>
      <el-form-item label="公司网址:">
        <el-input v-model="componyInfo.Web" disabled></el-input>
      </el-form-item>
      <el-form-item label="公司地址:">
        <el-input v-model="componyInfo.Adress" disabled></el-input>
      </el-form-item>
      <el-form-item label="备注信息:">
        <el-input v-model="componyInfo.Memo" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="./company-information.js"></script>
<style lang="scss" scoped>
@import "./company-information.scss"; // 引入scss类
</style>
