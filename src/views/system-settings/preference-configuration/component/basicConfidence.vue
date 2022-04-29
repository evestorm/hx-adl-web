<template>
  <div class="content">
    <el-form ref="issueDeliveryNote" label-width="80px">
      <el-row>
        <el-col :span="6">
          <el-form-item>
            <el-checkbox v-model="forceCheckGPS">开单时验证车辆是否到厂</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-checkbox v-model="viaBillCard">开单后直接制卡</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-checkbox v-model="poundIFDai">袋装提货需要过磅</el-checkbox>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-checkbox v-model="openPurchaseQueue">采购排队</el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="装运点:" label-width="80px">
        <el-col v-for="(items, index) in pointArr" :key="items.id" :span="4">
          <el-input v-model="items.key" size="small" clearable @change="changeData"></el-input>
          <i v-if="pointArr.length > 1" class="el-icon-remove-outline" @click="deleteItem(index)"></i>
        </el-col>
        <i class="el-icon-circle-plus-outline" @click="addItem"></i>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    needSaveInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      pointArr: [],
    };
  },
  computed: {
    forceCheckGPS: {
      get: function () {
        return this.needSaveInfo.forceCheckGPS == "Y" || this.needSaveInfo.forceCheckGPS == "y";
      },
      set: function (val) {
        this.needSaveInfo.forceCheckGPS = val ? "Y" : "N";
      },
    },
    viaBillCard: {
      get: function () {
        return this.needSaveInfo.viaBillCard == "Y" || this.needSaveInfo.viaBillCard == "y";
      },
      set: function (val) {
        this.needSaveInfo.viaBillCard = val ? "Y" : "N";
      },
    },
    poundIFDai: {
      get: function () {
        return this.needSaveInfo.poundIFDai == "Y" || this.needSaveInfo.poundIFDai == "y";
      },
      set: function (val) {
        this.needSaveInfo.poundIFDai = val ? "Y" : "N";
      },
    },
    openPurchaseQueue: {
      get: function () {
        return this.needSaveInfo.openPurchaseQueue == "Y" || this.needSaveInfo.openPurchaseQueue == "y";
      },
      set: function (val) {
        this.needSaveInfo.openPurchaseQueue = val ? "Y" : "N";
      },
    },
  },
  mounted() {
    this.needSaveInfo.orderZYPoint.split(",").forEach(ele => {
      if (ele != "") {
        this.pointArr.push({ key: ele });
      } else {
        this.pointArr.push({ key: "" });
        return false;
      }
    });
  },
  methods: {
    deleteItem(index) {
      this.pointArr.splice(index, 1);
      this.changeData();
    },
    addItem() {
      this.pointArr.push({
        key: "",
      });
      this.changeData();
    },
    changeData() {
      this.needSaveInfo.orderZYPoint = "";
      this.pointArr.forEach(ele => {
        if (this.needSaveInfo.orderZYPoint == "") {
          this.needSaveInfo.orderZYPoint = ele.key;
        } else {
          this.needSaveInfo.orderZYPoint = `${this.needSaveInfo.orderZYPoint},${ele.key}`;
        }
      });
      this.$emit("input", this.needSaveInfo);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .el-form-item {
    margin-bottom: 0 !important;
  }

  .el-input {
    width: 80% !important;
  }
}

.content {
  margin: 0 20px;

  i {
    vertical-align: middle;
  }
}
</style>
