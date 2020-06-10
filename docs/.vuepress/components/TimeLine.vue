<template>
  <div class="time-line">
    <div v-for="(log,index) in gitLogs" :key="index" class="wrap">
      <div class="circular"></div>
      <div class="line"></div>
      <div class="content">
        <div class="date">{{log.date}}</div>
        <div class="content-main">
          <div class="author">{{log.author}}</div>
          <div class="message">{{log.message}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import progress from "../../../progress.json";
export default {
  data() {
    return {
      gitLogs: []
    };
  },
  created() {
    this.gitLogs = progress;
  }
};
</script>
<style scoped>
.wrap {
  padding-bottom: 10px;
  position: relative;
}

.circular {
  width: 14px;
  height: 14px;
  background: #999;
  border-radius: 50%;
  position: absolute;
}

.line {
  width: 2px;
  height: 100%;
  background: #999;
  position: absolute;
  left: 6px;
}

.content {
  padding-left: 30px;
}

.date {
  margin-bottom: 10px;
  font-size: 14px;
}

.content-main {
  border: 1px solid #eee;
  background: #fff;
  padding: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.content-main div {
  margin: 20px;
  color: #666;
}
</style>