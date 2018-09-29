<template>
    <div class="wrap">
        <header class="content">
          <div class="fll point" @click="$router.push('/index')">云笔记</div>
          <el-button class="flr point" @click="hendle">写笔记</el-button>
        </header>
    </div>
</template>

<script>
    export default {
        name: "Header",
      data(){
          return {
            userinfo:{
              username:''
            }
          }
      },
      methods:{
          hendle(){
            this.userinfo = {...this.$store.state.userInfo}
            if(this.userinfo.username){
              this.$router.push('/writenote')
            }else {
              this.$message('请先登录')
            }
          }
      }
    }
</script>

<style scoped>
  .wrap{
    height: 50px;
    background: #00B7FF;
  }
  .content{
    line-height: 50px;
    width: 1170px;
    margin: 0 auto;
    vertical-align: middle;
    color: #fff;
    font-size: 26px;
  }
  .point{
    cursor: pointer;
  }

</style>
