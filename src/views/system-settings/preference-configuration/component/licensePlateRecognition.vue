<template>
  <div class>
    <el-row v-for="(item, index) in data" :key="index" :gutter="20">
      <el-form :model="item" label-width="80px">
        <el-col :span="7">
          <el-form-item label="磅站编号:">
            <el-input v-model="item.poundCode" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="磅站名称:">
            <el-input v-model="item.poundName" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label-width="0px">
            <el-switch v-model="item.lprModel" active-text="拦截模式" inactive-text="识别模式" :active-value="1" :inactive-value="0"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label-width="0px">
            <el-button type="primary" @click="addItem">添加</el-button>
            <el-button @click="deleteItem(item, index)">删除</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
import api from "@/api/system-set";
export default {
  components: {},
  props: {
    needSaveInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      formObj: {},
      data: this.needSaveInfo,
    };
  },
  methods: {
    addItem() {
      this.data.push({
        poundCode: "",
        poundName: "",
        lprModel: 0,
      });
    },
    deleteItem(row, index) {
      if (row.id) {
        api.deletePoundSet(row.id).then(res => {
          this.$message.success(res.data.data);
          this.data.splice(index, 1);
        });
      } else {
        this.data.splice(index, 1);
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
