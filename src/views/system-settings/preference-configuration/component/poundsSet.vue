<template>
  <div>
    <el-form ref="issueDeliveryNote" label-width="90px" label-position="left" inline>
      <el-form-item label="工厂编号:">
        <el-input v-model="needSaveInfo.poundID" size="small" clearable></el-input>
      </el-form-item>
      <el-form-item label="磅站编号:">
        <el-input v-model="needSaveInfo.poundStationNumber" size="small" clearable></el-input>
      </el-form-item>
      <el-form-item label="超载限额:">
        <el-input v-model="needSaveInfo.overloadLimit" size="small" clearable></el-input>
      </el-form-item>
      <el-form-item label="皮重预警:">
        <el-input v-model="needSaveInfo.poundWarning" size="small" clearable>
          <template slot="append">吨</template>
        </el-input>
      </el-form-item>
      <el-form-item label="采购订单超收预警:" label-width="150px">
        <el-input v-model="needSaveInfo.orderWarning" size="small" clearable></el-input>
        <span class="smallSize">(请输入小数值,例如:误差1%就是0.01)</span>
      </el-form-item>
      <el-form-item label="空车净重误差:" label-width="150px">
        <el-input v-model="needSaveInfo.netWeightErrorLow" size="small" clearable @blur="computedNum($event, 'netWeightErrorLow', needSaveInfo)"></el-input>到
        <el-input v-model="needSaveInfo.netWeightErrorHigh" size="small" clearable @blur="computedNum($event, 'netWeightErrorHigh', needSaveInfo)"></el-input>
        <span class="smallSize">(输入正小数值，例如：0.03到0.05)</span>
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
  watch: {
    formObj(nVal) {
      this.$emit("input", nVal);
    },
  },
  methods: {
    computedNum(event, lable, item) {
      let value = event.srcElement.value;
      if ((value && String(value).length - (String(value).indexOf(".") + 1) !== 2) || String(value).indexOf(".") == -1) {
        let num = Math.round(value * Math.pow(10, 2)) / Math.pow(10, 2); // 四舍五入
        num = Number(num).toFixed(2); // 不足补位
        item[lable] = num;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  &::v-deep .el-input {
    width: 240px !important;
  }

  .smallSize {
    margin-left: 10px;
    font-size: 14px;
  }
}
</style>
