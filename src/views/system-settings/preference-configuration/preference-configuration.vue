<template>
  <div class="app-container">
    <el-tabs v-model="activeName" stretch>
      <el-tab-pane v-for="item in tabPaneArr" :key="item.name" :label="item.label" :name="item.name">
        <component :is="item.name" v-if="loadingFlag && item.name == activeName" :need-save-info="needSaveInfo" @getData="getTableData"></component>
      </el-tab-pane>
    </el-tabs>
    <div class="el-button-container">
      <el-button class="btn cancel" round>取消</el-button>
      <el-button class="btn save" round type="primary" @click="submitForm">保存</el-button>
    </div>
  </div>
</template>

<script src="./preference-configuration.js"></script>

<style lang="scss" scoped>
@import "./preference-configuration";
</style>
