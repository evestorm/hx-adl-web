<!-- home -->
<template>
  <div class="app-container">
    <div class="home-container">
      <!-- 运行总览顶部 -->
      <div class="home-top-container">
        <!-- 顶部左侧信息 -->
        <div class="home-top-left">
          <span>工厂当日运行情况总览：</span>
          <span class="factory-name">{{ companyName }}</span>
          <span class="home-time">
            <i class="el-icon-time"></i>
            <span class="home-current-date">{{ currentDate }}</span>
          </span>
        </div>
        <!-- 顶部右侧按钮 -->
        <div class="home-top-right">
          <el-button icon="el-icon-refresh" type="primary" @click="handleInit">刷新</el-button>
        </div>
      </div>

      <!-- 运行总览车辆信息 -->
      <div class="car-info-container">
        <!-- 提货车辆信息 -->
        <div class="car-info">
          <HomeTitle title="提货车辆信息" unit="【单位：辆】" />
          <div class="car-info-detail">
            <div v-for="item in takeGoodsArr" :key="item.key" class="car-info-single">
              <div class="car-info-nums" :style="{ color: item.color }">{{ takeGoodsInfo[item.key] }}</div>
              <div class="car-info-c">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <!-- 物料车辆信息 -->
        <div class="car-info">
          <HomeTitle title="原料车辆信息" unit="【单位：辆】" />
          <div class="car-info-detail">
            <div v-for="item in materialArr" :key="item.key" class="car-info-single">
              <div class="car-info-nums" :style="{ color: item.color }">{{ materialInfo[item.key] }}</div>
              <div class="car-info-c">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 运行总览EChart图 -->
      <div class="home-echart-container">
        <HomeTitle title="当日发货品种小计" />
        <div id="eChart"></div>
      </div>

      <!-- 运行总览综合数据分析 -->
      <div class="home-data-analysis-container">
        <HomeTitle title="工厂综合分析数据" />
        <div class="home-data-analysis border-bottom">
          <div class="home-data-analysis-detail">
            <div class="home-data-analysis-type">
              <span>包</span>
              <span>装</span>
            </div>
            <div v-for="item in packingArr" :key="item.key" class="home-data-analysis-single">
              <div class="home-data-analysis-single-num" :style="{ color: item.color }"
                >{{ analysisInfo[item.key] }} <span class="unit">{{ item.unit || "" }}</span></div
              >
              <div class="home-data-analysis-single-des">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="home-data-analysis">
          <div class="home-data-analysis-detail">
            <div class="home-data-analysis-type">
              <span>散</span>
              <span>装</span>
            </div>
            <div v-for="item in bulkingArr" :key="item.key" class="home-data-analysis-single">
              <div class="home-data-analysis-single-num" :style="{ color: item.color }"
                >{{ analysisInfo[item.key] }} <span class="unit">{{ item.unit || "" }}</span></div
              >
              <div class="home-data-analysis-single-des">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./home.js"></script>

<style lang="scss" scoped>
@import "./home.scss"; // 引入scss类
</style>
