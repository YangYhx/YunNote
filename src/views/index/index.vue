<template>
<div class="wrap">
  <div class="content-up">
    <banner></banner>
    <userbox></userbox>
  </div>
  <div class="content-down" v-if="isshow">
    <div class="article-wrap">
      <router-link :to="{name:'articaldetail',params:{id:item._id}}" class="article-item" v-for="(item,index) in content" :key="index">
        <div class="article-up clearfix">
          <div class="fll avatar">
            <img :src="item.avatar">
          </div>
          <div class="article-desc fll">
            <div>
              <span class="author-name">{{item.author}}</span>
              <span class="divide">|</span>
              <span class="article-title">{{item.title}}</span>
            </div>
            <div class="row2">
              <span class="strong">浏览：{{item.looknums}}</span>
              <span class="strong">回复：{{item.commontnums}}</span>
              <span class="strong">分类：{{item.category}}</span>
            </div>
          </div>
        </div>
        <div class="article-down">
            <span>{{item.contentText}}</span>
        </div>
      </router-link>

    </div>

  </div>
</div>
</template>

<script>
  import userbox from '../../components/userbox'
  import banner from '../../components/banner'
    export default {
        name: "index",
      components:{
        userbox,
        banner
      },
      data() {
          return {
            content:[],
            userdata:{
              username:''
            },
            isshow:false
          }
      },
      methods:{
          reload(){
            this.isshow = true;
          },
          getdata(){
            this.$axios.get('/artical').then( res => {
              if(res.code === 200){
                this.content = res.data
                this.reload()
              }
            })
          }
      },
      created(){
          this.getdata()
      }
    }
</script>

<style scoped lang="scss">
  .wrap {
    width: 1170px;
    margin: 0 auto;
    .content-up {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
      }
    }


  .article-wrap {
    width: 750px;
    background: #f1f1f1;
    margin-top: 30px;

    .article-item {
      display: block;
      width: 100%;
      padding: 20px;
      color: #333;
      text-decoration: none;

      .article-up {
        width: 100%;

        .avatar {
          width: 100px;
          height: 100px;

          img {
            display: block;
            width: 100%;
            height: 100%;
          }

        }
      }

    }
  }
  .article-desc{
    width: 600px;
    height: 100px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .author-name{
    font-size: 18px;
    color: #409eff;
    font-weight: 700;
  }
  .article-title{
    font-size: 18px;
    font-weight: 700;
  }
  .row2{
    padding: 12px;
    background: #bbbbbb;
    color: #555;
    border-radius: 4px;
  }
  .article-down{
    width: 100%;
    padding: 20px;
  }

</style>
