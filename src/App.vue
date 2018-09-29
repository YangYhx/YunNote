<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
.fll{
  float: left;
}
  .flr{
    float: right;
  }
  .clearfix:after{
    display: block;
    content: '';
    clear: both;
  }
  .w1170{
    width: 1170px;
    margin: 0 auto;
  }
</style>
