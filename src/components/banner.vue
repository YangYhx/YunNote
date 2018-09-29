<template>
  <div class="content-l">
    <img src="/static/img/banner.jpg" class="image">
    <div class="desc">
      十三亿人都会用的云笔记
    </div>
  </div>
</template>

<script>
    export default {
        name: "banner"
    }
</script>

<style scoped>
  .content-l {
    position: relative;
    width: 750px;
    height: 340px;
    border-radius: 10px;
    overflow: hidden;
  }

  .image {
    width: 750px;
    height: 340px;
  }

  .desc {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    line-height: 50px;
    padding-left: 30px;
    color: rgba(255, 255, 255, .8);
    background: rgba(0, 0, 0, .5);
  }

</style>
