<template>
  <div class="car-info-title">
    <div class="title-icon"></div>
    <span>{{ title }}</span>
    <span>{{ unit }}</span>
  </div>
</template>

<script>
export default {
  name: "HomeTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
    unit: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.car-info-title {
  display: flex;
  align-items: center;
  margin: 20px 0 0 20px;

  .title-icon {
    width: 6px;
    height: 16px;
    margin-right: 9px;
    background: linear-gradient(0deg, #316ce6 0%, #eaf1ff 100%);
    border-radius: 3px;
  }

  span:nth-of-type(1) {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  span:nth-of-type(2) {
    font-size: 16px;
    color: #666;
  }
}
</style>
