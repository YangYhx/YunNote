<template>
  <div class="page">

    <div class="artical w1170">
      <div class="author-msg">
        <div class="author-img">
          <img :src="content.avatar" class="image">
        </div>
        <div class="author-info">
          <div class="row1">作者：{{content.author}}</div>
          <div class="row2">
            <span>阅读量:{{content.looknums}}</span>
            <span>更新时间：</span>
          </div>
        </div>
      </div>
      <div class="artical-title">
        <div>{{content.title}}</div>
      </div>
      <div class="artical-content">
        <div v-html="content.content"></div>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "articaldetail",
      data(){
          return {
            content:{},
          }
      },
      methods:{
          getdata(){
            this.$axios.get(`/artical/${this.$route.params.id}`).then( res => {
              if( res.code === 200){
                this.content = res.data
              }
            })
          }
      },
      created(){
          this.getdata();
          console.log(this.content)
      }
    }
</script>

<style scoped lang="scss">
  .page{
    height: 100vh;
    background: #f1f1f1;
  }
.artical{

  padding: 30px;
}

    .author-msg{
      background: #fff;
      height: 100px;
      margin-top:30px;
      display: flex;
      border-bottom: 3px solid #ffffff;



      .author-img{
        width: 100px;
        height: 100px;
        display: inline-block;
        border-radius: 50px;
        overflow: hidden;

        .image{
          width: 100px;
          height: 100px;
        }
      }


      .author-info{

        width: 200px;
        height: 100px;
        padding: 20px;


        .row1{
          font-size: 18px;
          line-height: 30px;
        }
        .row2{

          font-size: 18px;
          line-height: 30px;
          color: rgba(0,0,0,.5);
        }
      }

    }
  .artical-title{
    background: #fff;
    margin-top: 20px;
    font-size: 30px;
    font-weight: 600;
  }
  .artical-content{
    background: #fff;
    margin-top:30px;
    font-size: 18px;
    line-height: 1.5;
  }


</style>
