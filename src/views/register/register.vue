<template>
    <div class="wrap">
      <h2 style="margin-bottom: 20px">新用户注册</h2>
      <el-form class="form" :model="formData" label-width="80px" label-position="left">
        <el-form-item label="用户名：" >
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱：">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="register-btn">注册</el-button>
          <el-button type="danger" class="reset-btn">重置</el-button>
        </el-form-item>
      </el-form>


    </div>
</template>

<script>
    export default {
        name: "register",
      data(){
          return {
            formData:{
              username:'',
              email:'',
              password:''
            }
          }
      }
    }
</script>

<style scoped>
  .wrap{
    width: 500px;
    height: 340px;
    padding: 20px;
    background: #f1f1f1;
    margin: 60px auto;
    text-align: center;
    font-size: 20px;

  }

</style>
