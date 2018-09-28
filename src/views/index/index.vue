<template>
<div class="wrap">
  <div class="content-up">

    <div class="content-l">
      <img src="/static/img/banner.jpg" class="image">
      <div class="desc">
        十三亿人都会用的云笔记
      </div>
    </div>

    <div class="content-r">
      <div class="content-r-wrap">
        <input type="text" placeholder="输入邮箱" class="input" v-model="formData.email">
        <input type="text" placeholder="输入密码" class="input" v-model="formData.password">
        <el-button class="login btn" type="primary">等录</el-button>
        <br>
        <el-button class="btn" @click="hendleRegister">注册</el-button>
      </div>

    </div>
  </div>
  <div class="content-down">
    <div class="article-wrap">
      <router-link to="#" class="article-item ">
        <div class="article-up clearfix">
          <div class="fll avatar">
            <img src="/static/img/banner.jpg">
          </div>
          <div class="article-desc fll">
            <div>
              <span class="author-name">作者</span>
              <span class="divide">|</span>
              <span class="article-title">题目</span>
            </div>
            <div class="row2">
              <span class="strong">浏览：1</span>
              <span class="strong">回复：1</span>
              <span class="strong">分类：1</span>
            </div>
          </div>
        </div>
        <div class="article-down">
            <span>这是内容简介</span>
        </div>
      </router-link>

    </div>

  </div>
</div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            formData:{
              email:'',
              password:''
            }
          }
      },
      methods:{
        hendleRegister(){
          this.$router.push('/register')
        }
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

      .content-l {
        position: relative;
        width: 750px;
        height: 340px;
        border-radius: 10px;
        overflow: hidden;

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
      }
      .content-r {
        width: 360px;
        height: 340px;
        background: #f1f1f1;
        border: 1px solid #f2f2f2;
        border-radius: 5px;

        .content-r-wrap {
          width: 300px;
          margin: 30px auto 10px;
          box-sizing: border-box;
          text-align: center;
        }

        .input {
          width: 260px;
          height: 40px;
          margin-top: 20px;
        }

        .btn {
          width: 264px;
          margin-top: 20px;
        }

      }
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
